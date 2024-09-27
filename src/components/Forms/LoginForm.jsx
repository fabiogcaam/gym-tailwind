import { useState } from "react"

const LoginForm = () => {

    const [formInfo, setFormInfo] = useState({ email: "", password: "" })

    const handleInputOnChange = (event) => {
        const { value, name } = event.target
        setFormInfo({ ...formInfo, [name]: value })
    }

    const handleInputOnSubmit = (event) => {
        event.preventDefault()

        //Añadir a la base de datos los valores del form
        //Tengo que crear los Services para comunicar con la bbddd
    }

    return (

        <form
            className="mx-60 my-44"
            onSubmit={handleInputOnSubmit}
        >
            <h1 className="text-2xl font-bold mb-16">Login</h1>
            <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                    Correo Electrónico
                </label>
                <input
                    className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-indigo-500"
                    id="email"
                    type="email"
                    name="email"
                    placeholder="johndoe@example.com"
                    value={formInfo.email}
                    onChange={handleInputOnChange}
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                    Contraseña
                </label>
                <input
                    className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-indigo-500"
                    id="password"
                    type="password"
                    name="password"
                    value={formInfo.password}
                    onChange={handleInputOnChange}
                />
            </div>
            <div className="flex justify-center items-center mt-4">
                <button
                    className="bg-indigo-500 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                >
                    Enviar
                </button>
            </div>
        </form >
    )

}

export default LoginForm



