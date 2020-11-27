import wsSaga from './socketSaga'
import { all } from 'redux-saga/effects'

export default function* rootSaga(){
    yield all([
        wsSaga()
    ])
}
