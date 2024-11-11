import { Link } from "react-router-dom"
import { AuthContext } from "../../context/auth.context"
import { useContext } from "react"

const Profile = () => {

    const { loggedUser } = useContext(AuthContext)
    const { _id: _id } = loggedUser
    console.log(_id)


    return (
        <div className="mt-48 flex justify-center">
            <ul className="text-center">
                <Link to={`/profileEdit`}><li className="my-3 font-medium text-xl">Editar perfil</li></Link>
                <Link to={`/${_id}/bookings`}><li className="my-3 font-medium text-xl">Mis Reservas</li></Link>
            </ul>
        </div>
    )

}

export default Profile