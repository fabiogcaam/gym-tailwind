import { useEffect, useState } from "react"
import classService from "../../services/class.services"
import activityService from "../../services/activity.services"

/* eslint-disable react/prop-types */
const BookingElement = ({ clase, status }) => {

    const [isLoading, setIsLoading] = useState(true)
    const [classData, setClassData] = useState(null)
    const [activity, setActivity] = useState("")

    useEffect(() => {
        getClasses()
    }, [isLoading])

    function getClasses() {

        console.log("ENTRO EN GETCLASSES")
        console.log(clase)
        classService.
            getClass(clase)
            .then(({ data }) => {
                console.log(data)
                setClassData(data)
                getActivityOfClass(data.trainer.activity)
            })
            .then(() => setIsLoading(false))
            .catch(err => console.log(err))
    }

    function getActivityOfClass(activityId) {
        activityService
            .getActivity(activityId)
            .then(({ data }) => {
                console.log("ESTO ES LA ACTIVIDAD", data)
                setActivity(data.name)
            })
            .catch(err => console.log(err))
    }

    return (
        classData ?
            <div className="bg-grey-100 border border-violet p-5 mt-5 w-3/6 rounded-xl">
                <h3>Clase de {activity} el día {classData.schedule.day} de {classData.schedule.time}</h3>
                <p>Con el profesor {classData.trainer.name}</p>
                <div className="flex justify-end">
                    <h3 className={status == "Reserved" ? 'text-green-600' : 'text-red-700'}>{status == "Reserved" ? 'En reserva' : 'Finalizada'}</h3>
                </div>
            </div>
            :
            <h2>Cargando</h2>
    )

}

export default BookingElement