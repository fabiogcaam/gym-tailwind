import { Link } from "react-router-dom"

const Prices = () => {

    const tarifas = [
        {
            name: "Classic",
            price: 30,
            plans: ["Maquinaria", "Piscina", "Entrenador personal"]
        }, {
            name: "Silver",
            price: 60,
            plans: ["Maquinaria", "Piscina", "Entrenador personal", "Actividades"]
        },
        {
            name: "Gold",
            price: 90,
            plans: ["Maquinaria", "Piscina", "Entrenador personal", "Actividades", "Spa"]
        }
    ]

    return (

        <div className="Prices grid grid-flow-col gap-6 mx-10">
            {
                tarifas.map(elm => {
                    return (
                        <div className="bg-black text-white text-center py-10 mx-16 rounded-xl">
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
                                <div className="bg-white text-black mt-5 py-2 text-xl w-3/6 mx-20 rounded-2xl text-center">Añadir</div>
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    )

}

export default Prices