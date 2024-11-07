import axios from 'axios'

class ClassService {

    constructor() {
        this.api = axios.create({
            baseURL: `${import.meta.env.VITE_APP_API_URL}/classes`
        })

        this.api.interceptors.request.use((config) => {
            const storedToken = localStorage.getItem('authToken')

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }

    getClassesList() {
        return this.api.get('/')
    }

    getClass(clase) {
        return this.api.get(`/${clase}`)
    }

    getClassesByDay(day) {
        console.log("Esto es el service", day)
        return this.api.get(`/${day}/day`)
    }

    addClass({ trainerId, schedule, numParticipants }) {
        console.log("ENTRAMOS EN EL SERVICE DE CREAR CLASE", trainerId)
        return this.api.post('/add', { trainerId, schedule, numParticipants })
    }

    deleteClass(id) {
        return this.api.post(`/${id}/delete`)
    }


}

const classService = new ClassService()
export default classService