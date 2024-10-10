import axios from 'axios'

class ActivityService {

    constructor() {
        this.api = axios.create({
            baseURL: `${import.meta.env.VITE_APP_API_URL}/trips`
        })
    }

    getActivityList() {
        return this.api.get('/')
    }

}

const activityService = new ActivityService()
export default activityService
