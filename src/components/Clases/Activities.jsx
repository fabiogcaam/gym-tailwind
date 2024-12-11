import activityService from "../../services/activity.services"
import { useEffect, useState, useContext } from "react"
import { AuthContext } from "../../context/auth.context"
import { Link } from "react-router-dom"

const Activities = () => {

    const [activities, setActivities] = useState([])
    const { loggedUser } = useContext(AuthContext)

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

        <div className="my-20 py-24 bg-gold">
            <div className="flex justify-center mx-auto w-1/5 border border-violet rounded-full py-2 mb-8">
                <h1 className="underline underline-offset-8 text-center text-xl hover:decoration-violet text-violet">Actividades</h1>
            </div>
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
                                        {
                                            loggedUser?.typeUser === "ADMIN" &&

                                            <Link to={`/${elm._id}/createClass`}>
                                                <button className="bg-gold text-white px-2 py-1 rounded">Crear Clase</button>
                                            </Link>
                                        }
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