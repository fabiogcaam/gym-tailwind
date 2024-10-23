import ReactCalendar from 'react-calendar'

const Calendar = () => {

    <ReactCalendar
        minDate={new Date()}
        className="p-2"
        view='month'
        onClickDay={(date) => console.log(date)} />

}

export default Calendar