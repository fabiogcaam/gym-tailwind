import ReactCalendar from 'react-calendar'
import { useState, useEffect } from 'react'
import classService from '../../services/class.services'
import ClaseDia from '../Clases/ClaseDia'


const Calendar = () => {

    const [date, setDate] = useState(new Date())
    const [classes, setClasses] = useState([])

    useEffect(() => {
        handleDateChange(date)
    }, [date])

    function handleDateChange(newDate) {
        setDate(newDate)
        console.log(date)
        getClassesAtDay()
    }

    function getClassesAtDay() {

        const day = date.toLocaleString('en-US', { weekday: 'long' })

        console.log("eestoy aqui", day)

        classService
            .getClassesByDay(day)
            .then(({ data }) => {
                console.log("Esto deberia ser los datos de la bbdd", data)
                setClasses(data)
            })
            .catch(err => console.log(err))

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
                            <ClaseDia key={elm._id} id={elm._id} activity={elm.activity} trainer={elm.trainer} schedule={elm.schedule} numParticipants={elm.numParticipants} participants={elm.participants} />
                        )
                    })
                }
            </div>

        </div>
    )

}

export default Calendar