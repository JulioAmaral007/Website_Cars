import React, { useContext } from "react"
import { Navigate, Outlet } from "react-router"
import { AuthGoogleContext } from "../Contexts/authGoogle"

function PrivateRoutes(){
    const {signed} = useContext(AuthGoogleContext)

    return signed ? <Outlet /> : <Navigate to="/" />

    }

export default PrivateRoutes