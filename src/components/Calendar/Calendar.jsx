import ReactCalendar from 'react-calendar'
import { useState } from 'react'
import classService from '../../services/class.services'


const Calendar = () => {

    const [date, setDate] = useState(new Date())
    const [classes, setClasses] = useState([])

    function handleDateChange(newDate) {
        setDate(newDate)
        getClassesAtDay(newDate)
    }

    function getClassesAtDay(selectedDate) {

        const dayOfWeek = selectedDate.toLocaleString('en-US', { weekday: 'long' })

        classService
            .getClassesByDay(dayOfWeek)
            .then(({ data }) => setClasses(data))
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

        </div>
    )

}

export default Calendar