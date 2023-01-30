import React from 'react'


//router
import {Route, Routes} from 'react-router-dom'

//layoutpages
import Default from '../layouts/dashboard/default'
import WithoutLeftSidebar from '../layouts/dashboard/without-leftsidebar'
import WithoutRightSidebar from '../layouts/dashboard/without-rightsidebar'
import Layout1 from '../layouts/dashboard/layout-1'
import Simple from '../layouts/dashboard/simple'
import ChatLayout from '../layouts/dashboard/chat-layout'

const IndexRouters = () => {
    return (
        <>
            <Routes>
                <Route path="/chat" element={<ChatLayout/>}></Route>
                <Route path="/without-leftsidebar" element={<WithoutLeftSidebar/>}></Route>
                <Route path="/without-rightsidebar" element={<WithoutRightSidebar/>}></Route>
                <Route path="/auth" element={<Simple/>}></Route>
                <Route path="/errors" element={<Simple/>}></Route>
                <Route path="/extra-pages" element={<Simple/>}></Route>
                <Route path="/dashboards" element={<Layout1/>}></Route>
                <Route path="*" element={<Default/>}></Route>
            </Routes>
        </>
    )
}

export default IndexRouters
