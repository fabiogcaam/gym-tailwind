import { Link } from "react-router-dom"
import { AuthContext } from "../../context/auth.context"
import { createContext } from "react"

const Profile = () => {

    const { loggedUser } = createContext(AuthContext)
    const _id = loggedUser._id

    return (
        <div className="mt-48 flex justify-center">
            <ul className="text-center">
                <Link to={`/${_id}/editProfile`}><li className="my-3 font-medium text-xl">Editar perfil</li></Link>
                <Link to={`/${_id}/bookings`}><li className="my-3 font-medium text-xl">Ver mis Reservas</li></Link>
            </ul>
        </div>
    )

}

export default Profile