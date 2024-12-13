import activityService from "../../services/activity.services"
import bookingService from "../../services/booking.services"
import { useState, useEffect, useContext } from "react"
import { AuthContext } from "../../context/auth.context"

/* eslint-disable react/prop-types */
const ClaseDia = ({ id, trainer, schedule, numParticipants, participants, date }) => {

    const [activity, setActivity] = useState('')
    const [isReserved, setIsReserved] = useState(false)
    const { loggedUser } = useContext(AuthContext)


    useEffect(() => {
        getActivityName()
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
        bookingService
            .createBooking({ classId: id, bookingDate: date })
            .then(() => console.log("Añadido a tus reservas"))
            .then(() => {
                setIsReserved(true)
            })
            .catch(err => console.log(err))
    }

    function checkIsReserved() {
        if (participants.includes(loggedUser._id)) {
            setIsReserved(true)
        }
    }


    return (
        <div className="bg-gray-100 border-violet border rounded-xl mt-5 px-5 py-5 w-[500px]">
            <h2 className="">Clase de {activity} con {trainer.name}</h2>
            <h4>Horario: {schedule.time}</h4>
            <h5>Sitios {numParticipants - participants.length}/{numParticipants} libres</h5>
            <div className="flex justify-end">
                {
                    !isReserved ?
                        <button id={id} onClick={() => addToBookings()} className="bg-violet px-2 py-1 text-white rounded hover:bg-gold">Reservar</button>
                        :
                        <h3 className="text-green-600">Reservado</h3>
                }
                {
                    numParticipants - participants.length == 0 && !isReserved &&
                    <h3 className="text-red-700">Lleno</h3>
                }
            </div>
        </div>
    )

}

export default ClaseDia