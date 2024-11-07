import { useEffect, useState } from "react"
import trainerService from "../../services/trainer.services"
import AlertForm from "./AlertForm"
import classService from "../../services/class.services"

const ClassForm = () => {

    const [classData, setClassData] = useState({ trainerId: "", schedule: { day: "", time: "" }, numParticipants: 0 })
    const [trainers, setTrainers] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [errors, setErrors] = useState([])

    useEffect(() => {
        getTrainers()
    }, [isLoading])

    const handleInputOnChange = (event) => {
        const { value, name } = event.target
        if (name === "day" || name === "time") {
            setClassData({
                ...classData,
                schedule: {
                    ...classData.schedule,
                    [name]: value
                }
            })
        } else {
            setClassData({
                ...classData,
                [name]: value
            })
        }
    }

    const createNewClass = () => {

        setIsLoading(true)

        classService
            .addClass(classData)
            .then(() => {
                console.log("SE HA CREADO LA CLASE", classData)
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }


    const handleCreateClassOnSubmit = (e) => {
        e.preventDefault()
        createNewClass()

    }

    const getTrainers = () => {
        trainerService
            .getTrainers()
            .then(({ data }) => {
                setIsLoading(true)
                setTrainers(data)
                setIsLoading(false)
            })
            .catch(err => setErrors(err.response.data.errorMessage))
    }

    return (
        <form className="w-4/6" onSubmit={handleCreateClassOnSubmit}>
            <h1 className="my-20 font-medium text-wxl">Crea una clase nueva</h1>
            <div className="flex flex-col justify-center">
                <label>Entrenador y Actividad</label>
                <select name="trainerId" value={classData.trainerId} onChange={handleInputOnChange}>
                    {
                        trainers.map(elm => {
                            return (
                                <option key={elm._id} value={elm._id}>Clase de {elm.activity.name} con {elm.name}</option>
                            )
                        })
                    }
                </select>
            </div>
            <div className="flex flex-col justify-center my-3">
                <label>Dia de la semana</label>
                <input
                    type="text"
                    name="day"
                    value={classData.schedule.day}
                    placeholder="Dia de la semana en inglés"
                    onChange={handleInputOnChange} />
            </div>
            <div className="flex flex-col justify-center my-3">
                <label>Hora</label>
                <input
                    type="text"
                    name="time"
                    value={classData.schedule.time}
                    placeholder="De que hora a que hora (HH:MM - HH:MM)"
                    onChange={handleInputOnChange} />
            </div>
            <div className="flex flex-col justify-center my-3">
                <label>Numero de participantes</label>
                <input
                    type="number"
                    name="numParticipants"
                    value={classData.numParticipants}
                    placeholder="Introduce el numero de personas en la clase"
                    onChange={handleInputOnChange} />
            </div>
            {errors.length > 0 && errors.map(e => <AlertForm key={e} message={e} />)}
            <div className="flex justify-center my-5">
                <input className="py-2 px-4 bg-violet text-white rounded" type="submit" value="Crear" />
            </div>
        </form>
    )

}

export default ClassForm