import ReactCalendar from 'react-calendar'


const Calendar = () => {

    return (
        <div className='flex justify-center my-20 flex-col items-center'>

            <h1 className='py-10 text-2xl'>Booking</h1>

            <ReactCalendar
                minDate={new Date()}
                className="react-view"
                view='month'
                onClickDay={(value) => console.log(value)} />

        </div>
    )

}

export default Calendar