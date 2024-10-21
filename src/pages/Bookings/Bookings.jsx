import { AuthContext } from "../../context/auth.context"
import { createContext, useState, useEffect } from "react"
import userService from "./../../services/user.services"
import BookingElement from "../../components/BookingElements/BookingElement"

const Bookings = () => {

    const [bookings, setBookings] = useState(null)
    const { loggedUser } = createContext(AuthContext)

    useEffect(() => {
        getBookingsList
    }, [])

    function getBookingsList() {

        const { _id } = loggedUser

        userService
            .getBookingsList(_id)
            .then(({ data }) => setBookings(data))
            .catch(err => console.log(err))
    }


    return (
        <>
            {
                bookings ?
                    bookings.map(elm => {
                        <BookingElement clase={elm.class} date={elm.date} status={elm.status} />
                    })
                    :
                    <h3 className="font-semibold text-2xl">No hay Reservas</h3>
            }
        </>
    )

}

export default Bookings