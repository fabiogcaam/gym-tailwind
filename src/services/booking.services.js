import axios from 'axios'

class BookingServices {

    constructor() {
        this.api = axios.create({
            baseURL: `${import.meta.env.VITE_APP_API_URL}/bookings`
        })

        this.api.interceptors.request.use((config) => {
            const storedToken = localStorage.getItem('authToken')

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }

    createBooking(classId) {
        this.api.post('/create', classId)
    }

    finishedBooking(bookingId) {
        this.api.post('/finished', bookingId)
    }

    deleteBooking(classId) {
        this.api.post(`/${classId}/delete`)
    }

}

const bookingServices = new BookingServices()
export default bookingServices