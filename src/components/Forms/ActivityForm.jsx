import { useState } from "react"

const ActivityForm = () => {

    const [activityData, setActivityData] = useState({ name: "", description: "", imageUrl: "" })

    return (
        <form>
            <h1>Crear una actividad nueva</h1>
            <div>
                <label>Nombre de la actividad:</label>
                <input type="text" placeholder="Introduce el nombre de la nueva actividad" />
            </div>
        </form>
    )

}

export default ActivityForm