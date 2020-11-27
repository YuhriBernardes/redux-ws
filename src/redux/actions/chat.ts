import {ChatActions, ActionTypes} from '../types'

export function receiveMessage(message: string): ChatActions {
    return {
        type: ActionTypes.RECEIVE_MESSAGE,
        payload: {
            createdAt: new Date().toLocaleTimeString("pt-br"),
            text: message
        }
    }
}

export function sendMessage(message: string): ChatActions{
    return {
        type: ActionTypes.SEND_MESSAGE,
        payload: message
    }
}
