import { useState } from "react"
import authService from "../../services/auth.services"
import AlertForm from "./../Forms/AlertForm"
import { useNavigate } from "react-router-dom"

const SignUpForm = () => {

    const [infoForm, setInfoForm] = useState({ name: "", email: "", password: "" })
    const [errors, setErrors] = useState([])

    const navigate = useNavigate()

    const handleInputOnChange = (event) => {
        const { value, name } = event.target

        setInfoForm({ ...infoForm, [name]: value })
    }

    const handleInputOnSubmit = (event) => {
        event.preventDefault()

        authService
            .signup(infoForm)
            .then(() => navigate('/main'))
            .catch(err => setErrors(err.response.data.errorMessage))
    }

    return (

        <div className="mx-60 mt-36 mb-32">
            <form onSubmit={handleInputOnSubmit}>
                <h1 className="font-bold text-2xl my-16">Sign Up</h1>
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

                {errors.length > 0 && errors.map(e => <AlertForm key={e} message={e} />)}

                <div className="flex justify-center my-5">
                    <input
                        className="mt-4 bg-indigo-500 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                        value="Sign Up" />
                </div>
            </form>
        </div>
    )

}

export default SignUpForm