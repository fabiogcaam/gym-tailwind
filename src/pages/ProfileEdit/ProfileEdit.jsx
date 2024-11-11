import { useContext, useState } from "react"
import { AuthContext } from "./../../context/auth.context"

const ProfileEdit = () => {

    const { authUser } = useContext(AuthContext)
    console.log(authUser)
    const [user, setUser] = useState({ name: authUser.name, email: authUser.email, password: authUser.password })

    const handleOnChangeInput = (event) => {
        const { name, value } = event.target
        setUser({ ...user, [name]: value })
    }

    const handleOnSubmit = (event) => {

        event.preventDefault()

        //Aqui seria la función de editar el valor
    }


    return (
        <div className="mt-20 flex justify-center">
            <form className="w-[500px]" onSubmit={handleOnSubmit}>
                <h1 className="font-semibold text-2xl my-16">Editar Perfil</h1>
                <div className="my-4 flex flex-col justify-center">
                    <label>Nombre de usuario:</label>
                    <input
                        className="border border-violet rounded py-1 mt-2"
                        type="text" name="name"
                        value={user.name}
                        onChange={handleOnChangeInput} />
                </div>
                <div className="my-4 flex flex-col justify-center">
                    <label>Email:</label>
                    <input
                        className="border border-violet rounded py-1 mt-2"
                        type="email"
                        name="email"
                        value={user.email}
                        onChange={handleOnChangeInput} />
                </div>
                <div className="my-4 flex flex-col justify-center">
                    <label>Password:</label>
                    <input
                        className="border border-violet rounded py-1 mt-2"
                        type="password"
                        name="password"
                        value={user.password}
                        onChange={handleOnChangeInput} />
                </div>
                <div className="my-8 flex justify-center">
                    <input className="px-4 py-2 text-white bg-violet rounded" type="submit" value="Editar" />
                </div>
            </form>
        </div>
    )

}

export default ProfileEdit