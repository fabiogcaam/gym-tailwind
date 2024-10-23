import { useState, useContext } from "react"
import { AuthContext } from "./../../context/auth.context"
import authService from "../../services/auth.services"
import AlertForm from "../../components/Forms/AlertForm"
import { useNavigate } from "react-router-dom"

const LoginForm = () => {

    const [formInfo, setFormInfo] = useState({ email: "", password: "" })
    const [errors, setErrors] = useState([])

    const { authUser } = useContext(AuthContext)

    const navigate = useNavigate()

    const handleInputOnChange = (event) => {
        const { value, name } = event.target
        setFormInfo({ ...formInfo, [name]: value })
    }

    const handleLoginOnSubmit = (event) => {
        event.preventDefault()

        authService
            .login(formInfo)
            .then(({ data }) => {
                localStorage.setItem('authToken', data.authToken)
                console.log("Holaaaa", data)
                authUser()
                navigate('/main')
            })
            .catch(err => setErrors(err.response.data.errorMessage))
    }

    return (

        <form
            className="mx-60 my-44"
            onSubmit={handleLoginOnSubmit}
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
                    placeholder="minombre@example.com"
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

            {
                errors && errors.map(e => <AlertForm key={e} message={e} />)
            }

            <div className="flex justify-center items-center mt-4">
                <button
                    className="bg-indigo-500 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                >
                    Iniciar Sesión
                </button>
            </div>
        </form >
    )

}

export default LoginForm



