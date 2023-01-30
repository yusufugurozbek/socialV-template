import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Index from '../views/dashboard/index'

const WithoutRightSidebarRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/without-rightsidebar" element={<Index/>}/>
            </Routes>
        </>
    )
}

export default WithoutRightSidebarRouter;