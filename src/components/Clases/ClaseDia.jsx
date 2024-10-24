import activityService from "../../services/activity.services"
import { useState, useEffect } from "react"

/* eslint-disable react/prop-types */
const ClaseDia = ({ trainer, schedule, numParticipants, participants }) => {

    const [activity, setActivity] = useState('')

    useEffect(() => {
        getActivityName()
    }, [trainer.activity])

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

    return (
        <div>
            <h2>Clase de {activity}</h2>
            <h3>Entrenador {trainer.name}</h3>
            <h4>Esta clase es de {schedule.time}</h4>
            <h5>Numero máximo de participantes es de {numParticipants} y quedan {numParticipants - participants.length} plazas libres</h5>
        </div>
    )

}

export default ClaseDia