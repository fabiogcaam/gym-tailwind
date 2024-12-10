import { useEffect, useState } from "react"
import trainerService from "../../services/trainer.services"
import AlertForm from "./AlertForm"
import classService from "../../services/class.services"
import activityService from "../../services/activity.services"
import { useParams } from "react-router-dom"


const ClassForm = () => {

    const [activity, setActivity] = useState({})
    const [classData, setClassData] = useState({ trainerId: "", schedule: { time: "" }, numParticipants: 0, dates: "" })
    const [trainers, setTrainers] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [errors, setErrors] = useState([])
    const { id } = useParams()
    const today = new Date().toISOString().split('T')[0]

    useEffect(() => {
        getActivity()
        getTrainers()
    }, [])

    const handleInputOnChange = (event) => {
        const { value, name } = event.target
        if (name === "time") {
            setClassData({
                ...classData,
                schedule: {
                    ...classData.schedule,
                    [name]: value
                }
            })
        } else if (name === "numParticipants") {

            setClassData({
                ...classData,
                [name]: parseInt(value, 10) || 0
            })

        } else {
            setClassData({
                ...classData,
                [name]: value
            })
        }

        console.log("JIIJI", classData)
    }

    const handleDateChange = (event) => {

        const { value } = event.target

        setClassData({
            ...classData,
            dates: new Date(value).toISOString()
        })
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
        console.log("ESTOS SON LOS VALORES DE LA NUEVA CLASE:", classData)
        createNewClass()

    }

    const getTrainers = () => {
        setIsLoading(true)
        trainerService
            .getTrainersByActivity(id)
            .then(({ data }) => {
                console.log("ESTOS SON LOS DATOS", data)
                setTrainers(data)
            })
            .catch(err => setErrors(err.response.data.errorMessage))
            .finally(() => {
                setIsLoading(false)
            })
    }

    useEffect(() => {
        if (trainers.length > 0) {
            setClassData({
                ...classData,
                trainerId: trainers[0]._id
            })
        }
    }, [trainers])

    const getActivity = () => {
        activityService
            .getActivityById(id)
            .then(({ data }) => {
                console.log(data)
                setActivity(data)
            })
            .catch(err => console.log(err))
    }

    return (
        <form className="w-[500px]" onSubmit={handleCreateClassOnSubmit}>
            <h1 className="my-16 font-medium text-2xl">Crea una clase de {activity.name} nueva</h1>
            <div className="flex flex-col justify-center">
                <label className="my-2">Entrenador y Actividad</label>
                <select
                    className="border border-violet rounded py-2"
                    name="trainerId"
                    value={classData.trainerId}
                    onChange={handleInputOnChange}>
                    {
                        trainers.map(elm => {
                            return (
                                <option key={elm._id} value={elm._id}>Clase de {elm.activity.name} con {elm.name}</option>
                            )
                        })
                    }
                </select>
            </div>
            <div className="mt-5">
                <label className="mr-5">Fecha de la clase: </label>
                <input
                    className="border border-violet rounded p-2"
                    type="date"
                    value={classData.dates
                        ? classData.dates.split('T')[0]
                        : ""}
                    min={today}
                    onChange={handleDateChange}
                />
            </div>
            <div className="flex flex-col justify-center my-3">
                <label className="my-2">Hora</label>
                <input
                    className="border border-violet rounded p-2"
                    type="text"
                    name="time"
                    value={classData.schedule.time}
                    placeholder="De que hora a que hora (HH:MM - HH:MM)"
                    onChange={handleInputOnChange} />
            </div>
            <div className="flex flex-col justify-center my-3">
                <label className="my-2">Numero de participantes</label>
                <input
                    className="border border-violet rounded p-2"
                    type="number"
                    name="numParticipants"
                    value={classData.numParticipants}
                    placeholder="Introduce el numero de personas en la clase"
                    onChange={handleInputOnChange} />
            </div>
            {errors?.length > 0 && errors.map(e => <AlertForm key={e} message={e} />)}
            <div className="flex justify-center my-8">
                <input className="py-2 px-4 bg-violet text-white rounded" type="submit" value="Crear" disabled={isLoading} />
            </div>
        </form>
    )

}

export default ClassForm