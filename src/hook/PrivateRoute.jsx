import { useEffect, useState } from "react"
import { Navigate, Outlet } from "react-router-dom"

const useAuth = () => {
    const [authState, setAuthState] =useState({ isLoggedin: false, role: ""})
    const [loading, setloading] = useState(true)


    useEffect(() => {

        const id = localStorage.getItem("id")
        const role = localStorage.getItem("role")

        if(id)
        {
            setAuthState({ isLoggedin: true, role})
        }
        setloading(false)
    },[])

    return {...authState, loading}
}

const PrivateRoute = () => {
    const auth = useAuth()
    if(auth.loading){
        return <h1>Loading...</h1>
    }
    return auth.isLoggedin ? <Outlet/> : <Navigate to="/login" /> 
}

export default PrivateRoute