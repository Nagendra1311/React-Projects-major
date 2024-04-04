import { all, fork } from 'redux-saga/effects'
import category from "./category.saga";
import product from "./product.saga";
import user from './user.saga';

export default function* root() {
    yield all([
        fork(product),
        fork(category),
        fork(user),

    ])
}