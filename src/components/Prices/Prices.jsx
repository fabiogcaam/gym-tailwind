import { Link } from "react-router-dom"
import { PRICES, COLORS } from "../../const/const"

const Prices = () => {

    return (
        <div className="mt-24">
            <h1 className="text-2xl mb-16 text-center underline underline-offset-8 hover:decoration-violet">Precios</h1>
            <div className="flex flex-col h-auto justify-center items-center md:h-256 md:flex-row md:justify-around">
                {
                    PRICES.map((elm, index) => {
                        return (
                            <div key={index}
                                className={`${COLORS[index % COLORS.length]} text-white text-center py-10 rounded-xl h-128 w-80 flex flex-col items-center justify-center sm:my-8 relative hover:z-10 transition-all duration-300 ease-in-out transform hover:scale-110`}>
                                <h1 className="text-3xl font-semibold mb-3">{elm.name}</h1>
                                <h2 className="text-4xl my-5">{elm.price} €</h2>
                                <ul>
                                    {elm.plans.map((elm, index) => {
                                        return (
                                            <li key={index} className="mt-2">{elm}</li>
                                        )
                                    })}
                                </ul>
                                <Link to="/login">
                                    <div className="bg-white text-black mt-5 py-2 text-xl px-10 rounded-2xl text-center hover:bg-violet hover:text-white">Añadir</div>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )

}

export default Prices