import { FormEvent, useState} from "react";
import { useDispatch, useSelector } from 'react-redux'
import { sendMessage } from "./redux/actions/chat";
import { ChatState, Message } from "./redux/types";


function App() {
    const dispatch = useDispatch()
    const msgs = useSelector<any, Message[]>(state=>state.chat.messages)

    const [msg, setMsg] = useState<string>("")
    const handleSubmit = (e: FormEvent<HTMLFormElement>)=>{
        e.preventDefault()

        dispatch(sendMessage(msg))
        setMsg("")
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={(e)=>setMsg(e.target.value)} value={msg}  type="text" required/>
                <button type="submit">Send</button>
            </form>
            {msgs && msgs.length >0 && msgs.map((m,i)=>(<p key={i} >{m.createdAt} - {m.text}</p>))}
        </div>
    );
}

export default App;
