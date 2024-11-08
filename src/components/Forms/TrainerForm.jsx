import { useEffect, useState } from "react"
import activityService from "../../services/activity.services"
import trainerService from "../../services/trainer.services"
import uploadServices from "../../services/upload.services"
import AlertForm from "./AlertForm"

const TrainerForm = () => {

    const [trainerData, setTrainerData] = useState({ name: "", age: 0, description: "", imageUrl: "", activityId: "" })
    const [activities, setActivities] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [errors, setErrors] = useState([])

    useEffect(() => {
        getAllActivities()
    }, [isLoading])

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setTrainerData({ ...trainerData, [name]: value })
    }

    function handleFileUpload(e) {
        setIsLoading(true)
        const formData = new FormData()
        formData.append('imageData', e.target.files[0])

        uploadServices
            .uploadimage(formData)
            .then(({ data }) => {
                setTrainerData({ ...trainerData, imageUrl: data.cloudinary_url })
                setIsLoading(false)
            })
            .catch(err => {
                setErrors(err.response.data.errorMessages)
                setIsLoading(false)
            })
    }


    const getAllActivities = () => {

        activityService
            .getActivityList()
            .then(({ data }) => {
                setIsLoading(true)
                setActivities(data)
                console.log("DATOS DE ACTIVITIES", activities)
            })
            .then(() => setIsLoading(false))
            .catch(err => console.log(err))

    }

    const handleCreateTrainerOnSubmit = (event) => {
        event.preventDefault()

        trainerService
            .createTrainer(trainerData)
            .then(() => console.log("SE ESTA CREANDO UN ENTRENADOR"))
            .catch(err => console.log(err))

    }



    return (
        <form className="w-[500px]" onSubmit={handleCreateTrainerOnSubmit}>
            <h1 className="mt-16 mb-10 text-2xl font-semibold">Crea Un Entrenador</h1>
            <div className="flex flex-col justify-center mb-3">
                <label className="my-2">Nombre:</label>
                <input
                    className="border border-violet rounded p-2"
                    type="text"
                    placeholder="Añada el nombre del entrenador"
                    name="name"
                    value={trainerData.name}
                    onChange={handleInputChange} />
            </div>
            <div className="flex flex-col justify-center my-3">
                <label className="my-2">Edad:</label>
                <input
                    className="border border-violet rounded p-2"
                    type="number"
                    placeholder="Añada su edad"
                    name="age"
                    value={trainerData.age}
                    onChange={handleInputChange} />
            </div>
            <div className="flex flex-col justify-center my-3">
                <label className="my-2">Descripción:</label>
                <input
                    className="border border-violet rounded p-2"
                    type="text"
                    placeholder="Añada su descripción"
                    name="description"
                    value={trainerData.description}
                    onChange={handleInputChange} />
            </div>
            <div className="flex flex-col justify-center my-3">
                <label className="my-2">Foto del entrenador</label>
                <input
                    type="file"
                    placeholder="Introduce la foto del entrenador"
                    name="imageUrl"
                    onChange={handleFileUpload} />
            </div>
            <div className="my-5">
                <label>Actividad que va a enseñar:</label>
                <select
                    className="border border-violet rounded ml-2 py-1"
                    name="activityId"
                    value={trainerData.activityId}
                    onChange={handleInputChange}>
                    {activities && activities.map(elm => {
                        return (
                            <option key={elm._id} value={elm._id}>{elm.name}</option>
                        )
                    })}
                </select>
            </div>
            {errors.length > 0 && errors.map(e => <AlertForm key={e} message={e} />)}
            <div className="flex justify-center mt-8">
                <input className="px-4 py-2 bg-violet text-white rounded" type="submit" disabled={isLoading} value={isLoading ? 'Uploading' : 'Create'} />
            </div>
        </form>
    )

}

export default TrainerForm 