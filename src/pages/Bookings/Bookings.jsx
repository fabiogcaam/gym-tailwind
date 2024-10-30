import { useState, useEffect } from "react"
import userService from "./../../services/user.services"
import BookingElement from "../../components/BookingElements/BookingElement"
import { useParams } from "react-router-dom"



const Bookings = () => {

    const [bookings, setBookings] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const { id } = useParams()


    useEffect(() => {
        getBookingsList()
    }, [isLoading])

    function getBookingsList() {

        userService
            .bookingList(id)
            .then(({ data }) => {
                console.log(data)
                setBookings(data)
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }


    return (
        <div className="mt-24 w-auto flex flex-col items-center">
            {
                bookings ?
                    bookings.map(elm => {
                        return (
                            < BookingElement key={elm._id} clase={elm.class} status={elm.status} />
                        )
                    })
                    :
                    <h3 className="font-semibold text-2xl mt-48">No hay Reservas</h3>
            }
        </div>
    )

}

export default Bookings