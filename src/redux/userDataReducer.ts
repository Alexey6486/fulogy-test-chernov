
const GET_USER_DATA = 'GET_USER_DATA';

export const getUserDataAC = (payload: UserDataStateType) => ({type: GET_USER_DATA, payload} as const);

type ActionTypes =
    ReturnType<typeof getUserDataAC>;

export type UserDataStateType = {
    firstName: string
    lastName: string
    patronymic: string
    email: string
    phone: string
    imageUrl_small: string
    imageUrl_large: string
}
const initialState = {
    firstName: 'Анна',
    lastName: 'Иванова',
    patronymic: 'Михайловна',
    email: 'ivanova@mail.ru',
    phone: '',
    imageUrl_small: '',
    imageUrl_large: '',
}
export const userDataReducer = (state: UserDataStateType = initialState, action: ActionTypes) => {
    switch (action.type) {
        case GET_USER_DATA:
            return state;
        default:
            return state;
    }
}