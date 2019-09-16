import { all, takeLatest, put, call } from 'redux-saga/effects';
import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from '../reducers/user/userAction';
import Axios from 'axios';


function loginAPI(data) {
    return Axios.post('/user', data);
}

function* login(action) {
    try {
        const user = yield call(loginAPI)
        yield put({
            type: USER_LOGIN_SUCCESS,
            data: user
        })
    } catch (e) {
        console.error(e);

    }
}

function* watchLogin() {
    yield takeLatest(USER_LOGIN_REQUEST, login);
}

export default function* userSaga() {
    yield all([

    ]);
}