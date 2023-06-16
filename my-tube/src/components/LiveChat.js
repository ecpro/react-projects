import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import ChatMessage from "./ChatMessage";
import { addMessage, clearMessages } from "../utils/chatSlice";

function LiveChat() {

    const dispatch = useDispatch(),
        chatMessages = useSelector(store => store.chat.messages);

    useEffect(() => {
        const timer = setInterval(() => {
            console.log('API Polling');
            dispatch(addMessage({
                    name: 'John',
                    message: 'This is a test message 🚀'
                }));
        }, 1000);

        return () => {
            clearInterval(timer);
            dispatch(clearMessages());
        }
    },[]);

    return (
        <div className='ml-2 w-full h-[450px] border border-b-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
            {
                chatMessages.map((message, index) => {
                    return <ChatMessage key={index} {...message}/>
                })
            }
        </div>
    );
}

export default LiveChat;
