/* eslint-disable react/prop-types */
const TrainerElement = ({ name, age, description, activity, imageUrl }) => {

    console.log("ESTA ES LA IMAGEN DE LOS ENTRENADORES EN HOME", imageUrl)

    return (
        <div className="border-solid border-violet border-2 rounded-md">
            <div className="h-auto">
                <figure className="mx-auto h-[300px] w-full">
                    <img className="object-cover h-full w-full" src={`${imageUrl.replace(".heic", ".jpg")}`} alt={imageUrl} />
                </figure>
            </div>
            <div className="text-center">
                <h3 className="text-xl">{name}, {age}</h3>
                <h5 className="my-2">Clase de {activity}</h5>
                <p className="my-3">{description}</p>
            </div>
        </div>
    )

}

export default TrainerElement