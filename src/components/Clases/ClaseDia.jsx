/* eslint-disable react/prop-types */
const ClaseDia = ({ activity, trainer, schedule, numParticipants, participants }) => {

    return (
        <div>
            <h2>Clase de {activity.name}</h2>
            <h3>Entrenador {trainer.name}</h3>
            <h4>Esta clase es de {schedule.time}</h4>
            <h5>Numero máximo de participantes es de {numParticipants} y quedan {numParticipants - participants.length} plazas libres</h5>
        </div>
    )

}

export default ClaseDia