import activityService from "../../services/activity.services"
import bookingService from "../../services/booking.services"
import { useState, useEffect, useContext } from "react"
import { AuthContext } from "../../context/auth.context"

/* eslint-disable react/prop-types */
const ClaseDia = ({ id, trainer, schedule, numParticipants, participants, date, getClasses }) => {

    const [activity, setActivity] = useState('')
    const [isReserved, setIsReserved] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const { loggedUser } = useContext(AuthContext)

    useEffect(() => {
        getActivityName()
        if (isLoading) {
            getClasses()
        }
    }, [trainer, participants, isLoading])

    useEffect(() => {
        checkIsReserved()
    }, [])

    function getActivityName() {
        console.log(trainer.activity)
        activityService
            .getActivity(trainer.activity)
            .then(({ data }) => {
                console.log("ESTOOOOO", data)
                setActivity(data.name)
            })
            .catch(err => console.log(err))
    }

    function addToBookings() {
        console.log("A ver que valor es este", id, "Y fecha", date)
        setIsLoading(true)
        bookingService
            .createBooking({ classId: id, bookingDate: date })
            .then(() => console.log("Añadido a tus reservas"))
            .then(() => {
                setIsReserved(true)
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }

    function checkIsReserved() {
        if (participants.includes(loggedUser._id)) {
            setIsReserved(true)
        }
    }

    function cancelBooking() {
        bookingService
            .deleteBooking()
            .then(() => console.log("Reserva eleminada"))
            .then(() => setIsReserved(false))
            .catch(err => console.log(err))
    }

    return (
        <div className="bg-gray-100 border-violet border rounded-xl mt-5 px-5 py-5 w-[500px]">
            <h2 className="">Clase de {activity} con {trainer.name}</h2>
            <h4>Horario: {schedule.time}</h4>
            <h5>Sitios {numParticipants - participants.length}/{numParticipants} libres</h5>
            <div className="flex justify-end">
                <button id={id} onClick={!isReserved ? () => addToBookings() : () => cancelBooking()} className={!isReserved ? "bg-violet px-2 py-1 text-white rounded" : "bg-red-400 px-2 py-1 text-white rounded"}>{!isReserved ? "Reservar" : "Cancelar"}</button>
            </div>
        </div>
    )

}

export default ClaseDia