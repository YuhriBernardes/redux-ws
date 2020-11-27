import { ChatState, ChatActions, ActionTypes } from "../types"

const initialState: ChatState ={
    messages: []
}

export default function chat(state = initialState, action: ChatActions): ChatState{
    switch (action.type){
        case ActionTypes.RECEIVE_MESSAGE:
            return {...state, messages: [...state.messages, action.payload]}
        case ActionTypes.SEND_MESSAGE:
            return state
        default:
            return state
    }
}
