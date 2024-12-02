import { useState, useEffect } from "react"
import trainerService from "../../services/trainer.services"
import TrainerElement from "./TrainerElement"

const Trainers = () => {

    const [currentIndex, setCurrentIndex] = useState(0)
    const [trainers, setTrainers] = useState(null)
    const [visibleTrainers, setVisibleTrainers] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [isMobileView, setIsMobileView] = useState(false)

    useEffect(() => {

        const handleResize = () => {
            setIsMobileView(window.innerWidth <= 768)
        }

        handleResize()
        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    useEffect(() => {
        getTrainerList()
    }, [isLoading, currentIndex, isMobileView])

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
                if (isMobileView) {
                    setVisibleTrainers([
                        trainers[currentIndex % trainers.length]
                    ])
                } else {
                    setVisibleTrainers([
                        trainers[currentIndex % trainers.length],
                        trainers[(currentIndex + 1) % trainers.length],
                        trainers[(currentIndex + 2) % trainers.length],
                    ])
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="Trainers my-20">
            <h1 className="text-2xl mb-10 text-center underline underline-offset-8 hover:decoration-violet">Entrenadores</h1>
            {
                trainers ?
                    <div className="flex justify-between mb-4 items-center">

                        <button onClick={handlePrev} className="bg-gold text-violet p-2 rounded ml-5 mr-5 h-10">Prev</button>
                        <div className={`flex flex-col ${isMobileView ? 'w-full' : 'w-3/6 md:grid md:grid-col-3 md:grid-flow-col md:gap-6'} mt-10`}>
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
                        <button onClick={handleNext} className="bg-gold text-violet p-2 rounded mr-5 h-10">Next</button>
                    </div>
                    :
                    <p>Esperando a obtener datos</p>
            }
        </div>
    )

}

export default Trainers 