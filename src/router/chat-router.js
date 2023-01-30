import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Chat from '../views/dashboard/app/chat';

const ChatRouter = () => {
  return (
      <>
        <Switch>
            <Route path="/chat/index"          component={Chat} />
        </Switch>
      </>
  )
}

export default ChatRouter