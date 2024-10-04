/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { useState } from "react"
import { CLASSES } from "../../const/const"

const BookingActivity = () => {

    const [bookings, setBookings] = useState([])

    const addBooking = (id) => {
        CLASSES.filter(elm => {
            if (elm.id == id) {
                setBookings({ ...bookings, elm })
            }
        })
    }

    const deleteBooking = (id) => {
        setBookings(bookings.filter(elm => elm !== id))
    }

    return (

        <div className="mt-36">
            <h1 className="text-center text-2xl underline underline-offset-8 my-20">Reservas</h1>
            <div className="flex justify-center">
                <table>
                    <thead>
                        <tr>
                            <th className="border border-black">
                                Actividad
                            </th>
                            <th className="border border-black">
                                Entrenador
                            </th>
                            <th className="border border-black">
                                Horario
                            </th>
                            <th className="border border-black">
                                Plazas Disponibles
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            CLASSES.map(elm => {
                                return (

                                    <tr className="my-10">
                                        <td className="px-5 border border-black">
                                            {elm.name}
                                        </td>

                                        <td className="px-5 border border-black">
                                            {elm.trainer}
                                        </td>
                                        <td className="border border-black">
                                            {
                                                elm.hours.map(hour => {
                                                    return (
                                                        <h1 className="px-5 py">{hour}</h1>
                                                    )
                                                })}
                                        </td>
                                        <td className="px-5 text-center border border-black">
                                            {elm.plazas}
                                        </td>
                                        <td>
                                            {
                                                !bookings.includes(elm.id) ?
                                                    <button key={elm.id} className="bg-green-500 p-1 ml-2 rounded text-white" onClick={() => addBooking(elm.id)}>Reservar</button>
                                                    :
                                                    <button key={elm.id} className="bg-red-500 p-1 ml-2 rounded text-white" onClick={() => deleteBooking(elm.id)}>Cancelar</button>
                                            }
                                        </td>
                                    </tr>

                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default BookingActivity