import {configureStore} from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';
import {rootSaga} from "./root-saga";
import {combineReducers} from "redux";
import {userDataReducer} from "./userDataReducer";
import {reducer as formReducer} from 'redux-form';

export const sagaMiddleware = createSagaMiddleware();

let middleware: Array<any> = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
    middleware = [...middleware];
} else {
    middleware = [...middleware];
}

export const rootReducers = combineReducers({
    userDataReducer,
    form: formReducer,
});

export type AppRootStateType = ReturnType<typeof rootReducers>;

export const store = configureStore({
    reducer: rootReducers,
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(...middleware),
});

sagaMiddleware.run(rootSaga);