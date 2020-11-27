import {receiveMessage, sendMessage} from '../actions/chat'
import { ActionTypes } from '../types'
import { eventChannel, EventChannel } from 'redux-saga'
import { put, all, call, take } from 'redux-saga/effects'

function createSocketConnection (){
    return new WebSocket("wss://echo.websocket.org")
}

function createSocketChannel(socket: WebSocket){
    return eventChannel(emit=>{

        socket.onmessage = (message: MessageEvent<string>) => {
            emit(message.data)
        }
        return ()=>{
            socket.close()
        }
    })
}

function* watchWsSaga(socketChan: EventChannel<unknown>){

    while(true){
        try{
            const payload = yield take(socketChan)
            yield put(receiveMessage(payload))
        }catch(e){
        }
    }
}

function* sendWsSaga (socket: WebSocket){
    while (true) {
        const action = yield take(ActionTypes.SEND_MESSAGE)
        socket.send(action.payload)
    }
}

export default function* wsSaga(){
    const ws = yield call(createSocketConnection)
    const wsChan = yield call(createSocketChannel, ws)

    return yield all([
        call(watchWsSaga, wsChan),
        call(sendWsSaga, ws)
    ])
}
