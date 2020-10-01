import {takeLatest} from "@redux-saga/core/effects";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { put } from "redux-saga/effects";

export type UserDataFormType = {
    firstName: string
    lastName: string
    patronymic: string
    email: string
    phone: string
};
export type UserDataStateType = UserDataFormType & {
    imageUrl_small: string
    imageUrl_large: string
    error: string | null
};
const initialState = {
    firstName: 'Анна',
    lastName: 'Иванова',
    patronymic: 'Михайловна',
    email: 'ivanova@mail.ru',
    phone: '',
    imageUrl_small: '',
    imageUrl_large: '',
    error: null,
};

const slice = createSlice({
    name: 'userDataReducer',
    initialState: initialState,
    reducers: {
        // saga init actions
        initSagaSetUserDataAC(state, action: PayloadAction<UserDataFormType>) {
            return state;
        },

        // actions
        setUserDataAC(state, action: PayloadAction<UserDataFormType>) {
            return {
                ...state,
                email: action.payload.email,
                phone: action.payload.phone,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                patronymic: action.payload.patronymic
            }
        },
        setErrorAC(state, action: PayloadAction<{ error: string | null }>) {
            state.error = action.payload.error;
        },
    }
});

export const userDataReducer = slice.reducer;
export const {setErrorAC, initSagaSetUserDataAC, setUserDataAC} = slice.actions;

function* workerSetUserData({payload: payload}) {
    try {
        yield put(setUserDataAC(payload));

    } catch (error) {
        yield put(setErrorAC(error.message));
    }
}

export function* watchSetUserData() {
    yield takeLatest(initSagaSetUserDataAC, workerSetUserData);
}
