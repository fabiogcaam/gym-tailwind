const LoginForm = () => {

    const [formInfo, setFormInfo] = useState({ email: "", password: "" })

    const handleInputOnChange = (event) => {
        const { value, name } = event.target
        setFormInfo({ ...formInfo, [name]: value })
    }

    const handleInputOnSubmit = (event) => {
        event.preventDefault()

    }

    return (

        <form
            className="mx-60 mt-60 mb-52"
            onSubmit={handleInputOnSubmit}
        >

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
            <button
                className="bg-indigo-500 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
            >
                Enviar
            </button>
        </form >
    )

}

export default LoginForm



