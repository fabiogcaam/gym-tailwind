const BookingElement = (clase, date, status) => {

    return (
        <div>
            <h3>Clase de {clase}</h3>
            <p>A las {date}</p>
            <h3 className={status == "Reserved" ? 'text-green-600' : 'text-red-700'}>{status == "Reserved" ? 'En reserva' : 'Finalizada'}</h3>
        </div>
    )

}

export default BookingElement