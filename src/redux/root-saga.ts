import {all, call} from 'redux-saga/effects';
import { watchSetUserData } from './userDataReducer';

export function* rootSaga() {
    yield all([
        call(watchSetUserData),
    ]);
}
