import { useState } from "react"

const Trainers = () => {

    const trainerss = [{
        name: "David",
        age: 23,
        class: "yoga",
        description: "Llevo muchos años de experiencia entrenando a yoga, a personas de todas las edades",
        image: ""
    }, {
        name: "Julio",
        age: 34,
        class: "boxeo",
        description: "Llevo muchos años de experiencia entrenando boxeo, he sido campeón de Madrid amateur",
        image: ""
    }, {
        name: "Alberto",
        age: 26,
        class: "bbj",
        description: "Cinturón azul de brazilian jujitsu, llevo desde los doce años prácticando este apasionante deporte y me encanta compartirlo y disfrutarlo cada día con más gente",
        image: ""
    },
    {
        name: "Mónica",
        age: 31,
        class: "Taekwondo",
        description: "Subcampeona de España y cinturón negro, aprendamos a patadas ;)",
        image: ""
    },
    {
        name: "Juan",
        age: 25,
        class: "spinning",
        description: "Dando clases de spinning desde hace 1 año, pero me he enamorado del deporte y del ambiente",
        image: ""
    }]

    const [trainers, setTrainers] = useState([])

    //tenemos que obtener los datos de mongodb y añadirlos al hook para mapear después la información 

    return (
        <div className="Trainers my-10 mb-6">
            <h1 className="text-2xl mx-48 text-center underline hover:decoration-blue-400">Entrenadores</h1>
            <div className="grid grid-rows-2 grid-flow-col gap-6 mt-10">
                {
                    trainerss.map(elm => {
                        return (
                            <div className="card border-solid border-2 mx-5 rounded-md">
                                <div className="card-head">
                                    <figure>
                                        <img src={elm.image} alt={elm.name} />
                                    </figure>
                                </div>
                                <div className="card-body text-center">
                                    <h3 className="text-xl">{elm.name}</h3>
                                    <h5 className="text-lg">{elm.age}</h5>
                                    <h5>Clase de {elm.class}</h5>
                                    <p>{elm.description}</p>
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