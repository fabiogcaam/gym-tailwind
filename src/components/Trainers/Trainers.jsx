import { useState, useEffect } from "react"
import trainerService from "../../services/trainer.services"
import TrainerElement from "./TrainerElement"

const Trainers = () => {

    const [currentIndex, setCurrentIndex] = useState(0)
    const [trainers, setTrainers] = useState(null)
    const [visibleTrainers, setVisibleTrainers] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getTrainerList()
    }, [isLoading, currentIndex])

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % trainers.length)
    }

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => prevIndex === 0 ? trainers.length - 1 : prevIndex - 1)
    }


    function getTrainerList() {

        trainerService
            .getTrainers()
            .then(({ data }) => {
                console.log(data)
                setIsLoading(false)
                setTrainers(data)
            })
            .then(() => {
                setVisibleTrainers([
                    trainers[currentIndex % trainers.length],
                    trainers[(currentIndex + 1) % trainers.length],
                    trainers[(currentIndex + 2) % trainers.length],
                ])
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="Trainers my-20">
            <h1 className="text-2xl mb-10 text-center underline underline-offset-8 hover:decoration-blue-400">Entrenadores</h1>
            {
                trainers ?
                    <div className="flex justify-between mb-4 items-center">

                        <button onClick={handlePrev} className="bg-gold p-2 rounded ml-5 mr-5 h-10">Prev</button>
                        <div className="grid grid-col-3 grid-flow-col gap-6 mt-10">
                            {
                                visibleTrainers ?
                                    visibleTrainers.map((elm, index) => {
                                        return (
                                            <TrainerElement key={index} name={elm.name} activity={elm.activity.name} age={elm.age} description={elm.description} imageUrl={elm.imageUrl} />
                                        )
                                    })
                                    :
                                    <p>Esperando un poco</p>
                            }

                        </div>
                        <button onClick={handleNext} className="bg-gold p-2 rounded mr-5 h-10">Next</button>
                    </div>
                    :
                    <p>Esperando a obtener datos</p>
            }
        </div>
    )

}

export default Trainers 