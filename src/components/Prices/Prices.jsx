import { Link } from "react-router-dom"
import { PRICES } from "../../const/const"
const Prices = () => {

    const colors = [
        "bg-gradient-to-b from-black via-black to-white border border-black",
        "bg-gradient-to-b from-blue-700 via-blue-700 to-white border border-blue-700",
        "bg-gradient-to-b from-gold via-gold to-white border border-gold",
    ];

    return (

        <div className="Prices grid grid-flow-col h-256 gap-6 items-center relative">
            {
                PRICES.map((elm, index) => {
                    return (
                        <div key={index}
                            className={`${colors[index % colors.length]} text-white text-center py-10 mx-16 rounded-xl h-128 w-80 flex flex-col items-center justify-center relative hover:z-10 transition-all duration-300 ease-in-out transform hover:scale-110`}>
                            <h1 className="text-2xl mb-3">{elm.name}</h1>
                            <h2 className="text-4xl my-5">{elm.price}€</h2>
                            <ul>
                                {elm.plans.map(elm => {
                                    return (
                                        <li className="mt-2">{elm}</li>
                                    )
                                })}
                            </ul>
                            <Link to="/login">
                                <div className="bg-white text-black mt-5 py-2 text-xl px-10 rounded-2xl text-center click:bg-grey-400  click:text-white">Añadir</div>
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    )

}

export default Prices