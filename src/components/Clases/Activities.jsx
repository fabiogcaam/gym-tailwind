import activityService from "../../services/activity.services"
import { useEffect, useState } from "react"

const Activities = () => {

    const [activities, setActivities] = useState([])

    useEffect(() => {
        getAllActivities()
    }, [])


    const getAllActivities = () => {

        activityService
            .getActivityList()
            .then(({ data }) => {
                console.log(data)
                setActivities(data)
            })
            .catch(err => console.log(err))
    }


    return (

        <div className="my-20">
            <h1 className="underline underline-offset-8 mb-10 text-center text-2xl hover:decoration-violet">Actividades</h1>
            <div className="flex flex-col justify-center mx-36 sm:mx-0 md:grid md:grid-cols-3 md:gap-6">
                {
                    activities.map((elm, index) => {
                        console.log(index)
                        return (
                            <div key={index} className={`mx-5 my-10 md:mx-5 rounded-md perspective ${index === 6 && "col-start-2 flex justify-center items-center"}`}>
                                <div className="relative w-4/6 mx-auto md:w-full h-64 transition-transform duration-500 transform-style-3d hover:rotate-y-180">
                                    <div className="absolute backface-hidden w-full h-full">
                                        <figure className="">
                                            <img className="object-cover w-full h-72 transition-opacity duration-500 hover:opacity-0" src={`${elm.imageUrl.replace(".webp", ".jpg")}`} alt={elm.name} />
                                        </figure>
                                    </div>
                                    <div className="absolute inset-0 flex flex-col h-72 justify-center items-center bg-violet bg-opacity-80 text-white opacity-0 transition-opacity duration-500 hover:opacity-100">
                                        <h3 className="text-xl my-4">{elm.name}</h3>
                                        <p className="my-3 mx-3">{elm.description}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )

}

export default Activities