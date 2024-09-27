import { useState } from "react"

const SignUpForm = () => {

    const [infoForm, setInfoForm] = useState({ name: "", email: "", password: "", rPassword: "" })

    const handleInputOnChange = (event) => {
        const { value, name } = event.target

        setInfoForm({ ...infoForm, [name]: value })
    }

    const handleInputOnSubmit = (event) => {
        event.preventDefault()

        //Añadir a la base de datos los datos que obtuvimos del infoForm 
        //Falta crear los services para añadir los datos
    }

    return (

        <div className="SignUpForm mx-60 mt-36 mb-32">
            <form onSubmit={handleInputOnSubmit}>
                <div className="mb-5">
                    <label
                        className="block text-gray-700 font-medium mb-2">
                        Name:
                    </label>
                    <input
                        className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-indigo-500"
                        id="name"
                        type="text"
                        name="name"
                        placeholder="Introduce el nombre"
                        value={infoForm.name}
                        onChange={handleInputOnChange} />
                </div>
                <div className="mb-5">
                    <label
                        className="block text-gray-700 font-medium mb-2">
                        Email:
                    </label>
                    <input
                        className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-indigo-500"
                        id="email"
                        type="email"
                        name="email"
                        placeholder="johndoe@example.com"
                        value={infoForm.email}
                        onChange={handleInputOnChange} />
                </div>
                <div className="mb-5">
                    <label className="block text-gray-700 font-medium mb-2">
                        Contraseña:
                    </label>
                    <input
                        className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-indigo-500"
                        id="password"
                        type="password"
                        name="password"
                        value={infoForm.password}
                        onChange={handleInputOnChange}
                    />
                </div>
                <div>
                    <label
                        className="block text-gray-700 font-medium mb-2">
                        Repite la Contraseña:
                    </label>
                    <input
                        className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-indigo-500"
                        id="rpt_pswd"
                        type="password"
                        name="rpt_pswd"
                        value={infoForm.rPassword}
                        onChange={handleInputOnChange}
                    />
                </div>

                <input
                    className="mt-4 bg-indigo-500 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                    value="Sign Up" />
            </form>
        </div>
    )

}

export default SignUpForm