import { useContext } from "react"
import { Outlet, Navigate } from "react-router-dom"
import { AuthContext } from "./../../context/auth.context"
import Loader from "./../Loader/Loader"

const PrivateRoute = () => {

    const { loggedUser, isLoading } = useContext(AuthContext)

    if (isLoading) {
        return <Loader />
    }

    if (!loggedUser) {
        return <Navigate />
    }

    return <Outlet />
}

export default PrivateRoute