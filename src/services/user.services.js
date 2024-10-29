import axios from 'axios'

class UserService {

    constructor() {
        this.api = axios.create({
            baseURL: `${import.meta.env.VITE_APP_API_URL}/users`
        })

        this.api.interceptors.request.use((config) => {
            const storedToken = localStorage.getItem('authToken')

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }

    bookingList(userId) {
        console.log("LLEGAMOS AL SERVICE")
        return this.api.get(`/${userId}/bookings`)
    }

    deleteBooking(bookingId) {
        return this.api.post('/delete', bookingId)
    }
}

const userService = new UserService()
export default userService