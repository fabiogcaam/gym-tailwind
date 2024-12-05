import axios from 'axios'

class ActivityService {

    constructor() {
        this.api = axios.create({
            baseURL: `${import.meta.env.VITE_APP_API_URL}/activities`
        })

        this.api.interceptors.request.use((config) => {
            const storedToken = localStorage.getItem('authToken')

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }

    getActivityList() {
        return this.api.get('/')
    }

    addActivity({ name, description, imageUrl }) {
        console.log("ENTRAMOS EN EL ACTIVITY SERVICE", name, description, imageUrl)
        return this.api.post('/add', { name, description, imageUrl })
    }

    deleteActivity(idActivity) {
        return this.api.post(`${idActivity}/delete`)
    }

    getActivity(activity) {
        return this.api.get(`/getById/${activity}`)
    }

    getActivityById(id) {
        console.log("ENTRAMOS EN EL SERVICE DE ACTIVITY", id)
        return this.api.get(`/${id}`)
    }

}

const activityService = new ActivityService()
export default activityService
