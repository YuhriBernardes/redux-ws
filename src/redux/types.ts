export enum ActionTypes{
    SEND_MESSAGE="SEND_MESSAGE",
    RECEIVE_MESSAGE="RECEIVE_MESSAGE"
}

interface SendMessageAction {
    type: typeof ActionTypes.SEND_MESSAGE
    payload: string
}

interface ReceiveMessageAction {
    type: typeof ActionTypes.RECEIVE_MESSAGE
    payload: Message
}

export type ChatActions = SendMessageAction | ReceiveMessageAction

export interface Message{
    text: string,
    createdAt: string,
}

export interface ChatState {
    messages: Message[]
}
