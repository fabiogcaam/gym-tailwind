import { useState } from "react"
import uploadServices from "../../services/upload.services"
import activityService from "../../services/activity.services"
import AlertForm from "./AlertForm"
import { useNavigate } from "react-router-dom"

const ActivityForm = () => {

    const [activityData, setActivityData] = useState({ name: "", description: "", imageUrl: "" })
    const [errors, setErrors] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()

    function handleInputOnChange(event) {
        const { value, name } = event.target
        setActivityData({ ...activityData, [name]: value })
    }

    function handleFileUpload(e) {
        setIsLoading(true)
        const formData = new FormData()
        formData.append('imageData', e.target.file)

        uploadServices
            .uploadimage(formData)
            .then(({ data }) => {
                setActivityData({ ...activityData, imageUrl: data.cloudinary_url })
                setIsLoading(false)
            })
            .catch(err => {
                setErrors(err.response.data.errorMessages)
                setIsLoading(false)
            })
    }

    function handleActivitySubmit(event) {
        event.preventDefault()

        activityService
            .addActivity(activityData)
            .then(() => navigate('/'))
            .catch(err => setErrors(err.response.data.errorMessages))
    }

    return (
        <form onSubmit={handleActivitySubmit}>
            <h1>Crear una actividad nueva</h1>
            <div>
                <label>Nombre de la actividad:</label>
                <input type="text" placeholder="Introduce el nombre de la nueva actividad" name="name" value={activityData.name} onChange={handleInputOnChange} />
            </div>
            <div>
                <label>Descripción de la actividad:</label>
                <input type="text" placeholder="Introduce la descripción de la nueva actividad" name="description" value={activityData.description} onChange={handleInputOnChange} />
            </div>
            <div>
                <label>Imagen de la actividad:</label>
                <input type="file" placeholder="Introduce el nombre de la nueva actividad" name="imageUrl" onChange={handleFileUpload} />
            </div>

            {
                errors.length > 0 && errors.map(e => <AlertForm key={e} message={e}></AlertForm>)
            }
            <div>
                <button type="submit" disabled={isLoading}>
                    {isLoading ? 'Uploading' : 'Create'}
                </button>
            </div>
        </form>
    )

}

export default ActivityForm