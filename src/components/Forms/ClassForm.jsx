import { useEffect, useState } from "react"
import trainerService from "../../services/trainer.services"
import AlertForm from "./AlertForm"
import classService from "../../services/class.services"

const ClassForm = () => {

    const [classData, setClassData] = useState({ activity: "", schedule: { time: "", hour: "" }, numParticipants: 0 })
    const [trainers, setTrainers] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [errors, setErrors] = useState([])

    useEffect(() => {
        getTrainers()
    }, [isLoading])

    const handleInputOnChange = (event) => {
        const { value, name } = event.target
        setClassData({ ...classData, [name]: value })
    }

    const handleCreateClassOnSubmit = (e) => {
        e.preventDefault()

        classService
            .addClass(classData)
            .then(() => console.log("SE HA CREADO LA CLASE", classData))
            .catch(err => console(err))
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
        <form onSubmit={handleCreateClassOnSubmit}>
            <h1>Crea una clase nueva</h1>
            <div>
                <label>Entrenador y Actividad</label>
                <select name="activity" value={classData.activity} onChange={handleInputOnChange}>
                    {
                        trainers.map(elm => {
                            return (
                                <option key={elm._id} value={elm._id}>Clase de {elm.activity.name} con {elm.name}</option>
                            )
                        })
                    }
                </select>
            </div>
            <div>
                <label>Fecha</label>
                <input
                    type="text"
                    name="day"
                    value={classData.schedule.day}
                    placeholder="Dia de la semana en inglés"
                    onChange={handleInputOnChange} />
            </div>
            <div>
                <label>Hora</label>
                <input
                    type="text"
                    name="hour"
                    value={classData.schedule.hour}
                    placeholder="De que hora a que hora (HH:MM - HH:MM)"
                    onChange={handleInputOnChange} />
            </div>
            <div>
                <label>Numero de participantes</label>
                <input
                    type="number"
                    name="numParticipants"
                    value={classData.numParticipants}
                    placeholder="Introduce el numero de personas en la clase" />
            </div>
            {errors.length > 0 && errors.map(e => <AlertForm key={e} message={e} />)}
            <div>
                <input type="submit" value="Crear" />
            </div>
        </form>
    )

}

export default ClassForm