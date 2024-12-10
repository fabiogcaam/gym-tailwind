import ReactCalendar from 'react-calendar'
import { useState, useEffect } from 'react'
import classService from '../../services/class.services'
import ClaseDia from '../Clases/ClaseDia'


const Calendar = () => {

    const [date, setDate] = useState(new Date())
    const [classes, setClasses] = useState([])

    useEffect(() => {
        getClassesAtDay(date)
    }, [date])


    function handleDateChange(newDate) {
        const adjustedDate = new Date(newDate)
        console.log("ESTA ES LA FECHA DE HOY:", adjustedDate)

        adjustedDate.setHours(0, 0, 0, 0);  // Asegura que la hora sea 00:00:00.000

        if (adjustedDate.getTime() !== date.getTime()) {
            setDate(adjustedDate)
        }
        getClassesAtDay(adjustedDate)
    }

    function getClassesAtDay(adjustedDate) {

        const day = adjustedDate.toLocaleDateString('en-CA')

        console.log("eestoy aqui", day)

        classService
            .getClassesByDay(day)
            .then(({ data }) => {
                console.log("Esto deberia ser los datos de la bbdd", data)
                setClasses(data)
            })
            .catch(err => console.log(err))

        console.error('Fecha no valida')


    }

    return (
        <div className='flex justify-center my-20 flex-col items-center'>

            <h1 className='py-10 text-2xl'>Booking</h1>

            <ReactCalendar
                minDate={new Date()}
                className="react-view"
                view='month'
                onClickDay={(date) => handleDateChange(date)} />

            <div>
                {
                    classes.map(elm => {
                        return (
                            <ClaseDia key={elm._id} id={elm._id} activity={elm.activity} trainer={elm.trainer} schedule={elm.schedule} numParticipants={elm.numParticipants} participants={elm.participants} date={date} />
                        )
                    })
                }
            </div>

        </div>
    )

}

export default Calendar