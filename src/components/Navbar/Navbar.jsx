import { Link, useNavigate } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "./../../context/auth.context"

const Navbar = () => {

    const { loggedUser, logout } = useContext(AuthContext)
    const navigate = useNavigate()

    function closeSession() {
        logout()
        navigate('/')
    }

    return (
        <div className="Navbar flex justify-between inset-0 absolute bg-violet text-center h-20">
            <ul className="flex space-x-8 text-white ml-8">
                <Link to="/"><li className="mt-7">Home</li></Link>
                {
                    loggedUser &&
                    <>
                        <Link to="/main"><li className="mt-7">Main</li></Link>
                    </>
                }
            </ul>
            <ul className='flex space-x-8 text-white mr-8'>
                {
                    loggedUser ?
                        <>
                            <Link to={`/profile`}><li className='mt-7'>Profile</li></Link>
                            <Link to={'/'} onClick={closeSession}><li className='mt-7'>Logout</li></Link>
                            {
                                loggedUser.typeUser === "ADMIN" &&
                                <>
                                    <Link to={'/createActivity'}><li className="mt-7">New Activity</li></Link>
                                    <Link to={'/createClass'}><li className="mt-7">New Class</li></Link>
                                    <Link to={'/createTrainer'}><li className="mt-7">New Trainer</li></Link>
                                </>
                            }
                        </>

                        :
                        <>
                            <Link to="/login"><li className='mt-7'>Login</li></Link>
                            <Link to="/signup"><li className='mt-7'>Sign Up</li></Link>
                        </>
                }
            </ul>
        </div>
    )

}

export default Navbar