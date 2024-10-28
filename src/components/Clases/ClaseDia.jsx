import activityService from "../../services/activity.services"
import bookingService from "../../services/booking.services"
import { useState, useEffect } from "react"

/* eslint-disable react/prop-types */
const ClaseDia = ({ id, trainer, schedule, numParticipants, participants, date }) => {

    const [activity, setActivity] = useState('')

    useEffect(() => {
        getActivityName()
    }, [trainer, participants])

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
            .catch(err => console.log(err))
    }

    function cancelBooking() {
        bookingService
            .deleteBooking()
            .then(() => console.log("Reserva eleminada"))
            .catch(err => console.log(err))
    }

    return (
        <div className="bg-gray-100 border-violet border rounded-xl mt-5 px-5 py-5 w-[500px]">
            <h2 className="">Clase de {activity} con {trainer.name}</h2>
            <h4>Horario: {schedule.time}</h4>
            <h5>Sitios {numParticipants - participants.length}/{numParticipants} libres</h5>
            <div className="flex justify-end">
                <button id={id} onClick={numParticipants - participants.length ? () => addToBookings() : () => cancelBooking()} className={numParticipants - participants.length ? "bg-violet px-2 py-1 text-white rounded" : "invisible"}>{numParticipants - participants.length ? "Reservar" : "Lleno"}</button>
            </div>
        </div>
    )

}

export default ClaseDia