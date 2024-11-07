import axios from 'axios'

class TrainerService {

    constructor() {
        this.api = axios.create({
            baseURL: `${import.meta.env.VITE_APP_API_URL}/trainers`
        })

        this.api.interceptors.request.use((config) => {
            const storedToken = localStorage.getItem('authToken')

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }

    getTrainers() {
        return this.api.get('/')
    }

    createTrainer({ name, age, description, imageUrl, activityId }) {
        console.log("ENTRAMOS EN LOS DATOS DEL ENTRENADOR QUE ESTAMOS CREANDO", activityId)
        return this.api.post(`/create`, { name, age, description, imageUrl, activityId })
    }

}

const trainerService = new TrainerService()
export default trainerService