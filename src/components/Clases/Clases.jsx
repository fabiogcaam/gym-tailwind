import { ACTIVITIES } from "../../const/const"

const Clases = () => {


    return (

        <div className="my-20">
            <h1 className="underline underline-offset-8 mb-10 text-center text-2xl hover:decoration-blue-400">Actividades</h1>
            <div className="grid grid-cols-3 gap-6">
                {
                    ACTIVITIES.map((elm, index) => {
                        console.log(index)
                        return (
                            <div key={index} className={`card mx-5 my-5 rounded-md perspective ${index === 6 && "col-start-2 flex justify-center items-center"}`}>
                                <div className="relative w-full h-64 transition-transform duration-500 transform-style-3d hover:rotate-y-180">
                                    <div className="absolute backface-hidden w-full h-full">
                                        <figure>
                                            <img className="object-cover w-full h-72 transition-opacity duration-500 hover:opacity-0" src={elm.imageURL} alt={elm.name} />
                                        </figure>
                                    </div>
                                    <div className="absolute inset-0 flex flex-col h-72 justify-center items-center bg-black bg-opacity-90 text-white opacity-0 transition-opacity duration-500 hover:opacity-100">
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

export default Clases