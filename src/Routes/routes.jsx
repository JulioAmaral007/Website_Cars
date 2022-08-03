import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import SignUp from '../Pages/Sign-Up'
import Home from '../Pages/Home'
import PrivateRoutes from './private'

function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>

            <Route path='/' element={<SignUp />} />
            <Route path='/Home' element={<PrivateRoutes />}>
            <Route path='/Home' element={<Home />} />
            </Route>

            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes