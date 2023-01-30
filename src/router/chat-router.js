import React from 'react'
import {Route, Routes} from 'react-router-dom'

import Chat from '../views/dashboard/app/chat';

const ChatRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/chat/index" element={<Chat/>}/>
            </Routes>
        </>
    )
}

export default ChatRouter