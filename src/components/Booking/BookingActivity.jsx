import { Button } from "@material-tailwind/react"
import { name } from "ejs"
import { useState } from "react"
import { ACTIVITIES } from "../../const/const"

const BookingActivity = () => {

    const [active, setActive] = useState(false)
    const [bookings, setBookings] = useState([])


    const addBooking = (id) => {
        activities.filter(elm => {
            if (elm.id == id) {
                setBookings.push(elm)
            }
        })
        setActive(true)
    }

    const deleteBooking = (id) => {
        setBookings(elm => {
            elm.filter(elm => {
                if (elm.id != id) {
                    setBookings(elm)
                }
            })
        })
        setActive(false)
    }

    return (

        <div className="">
            <h1 className="text-center text-2xl underline underline-offset-8">Reservas</h1>
            {
                ACTIVITIES.map(elm => {
                    return (
                        <div className="bg-grey-300 ml-auto flex">
                            <div>
                                <h2>{elm.name}</h2>
                            </div>
                            <div>
                                <h5>Entrenador: {elm.trainer}</h5>
                            </div>
                            <div>
                                <h5>Horario: {elm.hours}</h5>
                                <h5>Plazas disponibles: {elm.plazas}</h5>
                            </div>
                            <Button onClick={addBooking(elm.id)}>Reservar</Button>
                        </div>
                    )
                })
            }
        </div>

    )
}

export default BookingActivity