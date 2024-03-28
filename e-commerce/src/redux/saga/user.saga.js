import { put, takeLatest } from 'redux-saga/effects'
import { ADD_USER_START, DELETE_USER_START, GET_USER_START, UPDATE_USER_START } from '../constants/user.constant'
import { addUserError, deleteUserError, getUserError, getUserStart, getUserSuccess, updateUserError } from '../actions/use.action'
import { addUserToFirebase, deleteUserToFirebase, getUserFromFirebase, updateUserToFirebase } from '../services/user.service'


function* getUser() {
    try {
        let result = yield getUserFromFirebase()
        yield put(getUserSuccess(result))

    } catch (error) {
        yield put(getUserError(error.message))

    }
}

function* addUser({ payload }) {
    try {
        yield addUserToFirebase(payload)
        yield put(getUserStart())

    } catch (error) {
        yield put(addUserError(error.message))
    }
}

function* deleteUser({ payload }) {
    try {
        yield deleteUserToFirebase(payload)
        yield put(getUserStart())


    } catch (error) {
        yield put(deleteUserError(error.message))
    }
}


function* updateUser({ payload }) {
    try {
        yield updateUserToFirebase(payload)
        yield put(getUserStart())

    } catch (error) {
        yield put(updateUserError(error.message))
    }
}

export default function* User() {
    yield takeLatest(ADD_USER_START, addUser);
    yield takeLatest(GET_USER_START, getUser);
    yield takeLatest(DELETE_USER_START, deleteUser);
    yield takeLatest(UPDATE_USER_START, updateUser);
}