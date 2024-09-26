import { TRAINERS } from "../../const/const"

const Trainers = () => {

    //tenemos que obtener los datos de mongodb y añadirlos al hook para mapear después la información 

    return (
        <div className="Trainers my-20">
            <h1 className="text-2xl mb-10 text-center underline underline-offset-8 hover:decoration-blue-400">Entrenadores</h1>
            <div className="grid grid-rows-2 grid-flow-col gap-6 mt-10">
                {
                    TRAINERS.map(elm => {
                        return (
                            <div className="card border-solid border-2 mx-5 rounded-md">
                                <div className="card-head">
                                    <figure>
                                        <img src={elm.image} alt={elm.name} />
                                    </figure>
                                </div>
                                <div className="card-body text-center">
                                    <h3 className="text-xl">{elm.name}, {elm.age}</h3>
                                    <h5 className="my-2">Clase de {elm.class}</h5>
                                    <p className="my-3">{elm.description}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )

}

export default Trainers 