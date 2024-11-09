import { useContext, useState } from "react"
import AuthContext from "./../../context/auth.context"

const EditProfile = () => {

    const { loggedUser } = useContext(AuthContext)
    const [user, setUser] = useState({ name: loggedUser.name, email: loggedUser.email, password: loggedUser.password })

    const handleOnChangeInput = (event) => {
        const { name, value } = event.target
        setUser({ ...user, [name]: value })
    }

    const handleOnSubmit = (event) => {

        event.preventDefault()

        //Aqui seria la función de editar el valor
    }


    return (
        <div className="mt-20">
            <form className="flex justify-center w-[500px]" onSubmit={handleOnSubmit}>
                <h1 className="font-semibold text-2xl my-16">Editar Perfil</h1>
                <div className="my-3">
                    <label>Nombre de usuario:</label>
                    <input
                        className="border border-violet rounded py"
                        type="text" name="name"
                        value={user.name}
                        onChange={handleOnChangeInput} />
                </div>
                <div className="my-3">
                    <label>Email:</label>
                    <input
                        className="border border-violet rounded py"
                        type="email"
                        name="email"
                        value={user.email}
                        onChange={handleOnChangeInput} />
                </div>
                <div className="my-3">
                    <label>Password:</label>
                    <input
                        className="border border-violet rounded py"
                        type="password"
                        name="password"
                        value={user.password}
                        onChange={handleOnChangeInput} />
                </div>
                <div className="my-3">
                    <label>Repite el Password:</label>
                    <input
                        className="border border-violet rounded py"
                        type="password"
                        name="password"
                        value={user.password}
                        onChange={handleOnChangeInput} />
                </div>
                <div className="my-8">
                    <input className="px-4 py-2 text-white bg-violet" type="submit" value="Editar" />
                </div>
            </form>
            <button>Dar de baja</button>
        </div>
    )

}

export default EditProfile