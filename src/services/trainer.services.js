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

    createTrainer(idActivity, { name, age, description, imageUrl }) {
        return this.api.post(`/${idActivity}/create`, name, age, description, imageUrl)
    }

}

const trainerService = new TrainerService()
export default trainerService