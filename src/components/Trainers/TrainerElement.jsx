/* eslint-disable react/prop-types */
const TrainerElement = ({ name, age, description, activity, imageUrl }) => {

    return (
        <div className="card border-solid border-violet border-2 mx-5 rounded-md">
            <div className="card-head">
                <figure>
                    <img src={imageUrl} alt={name} />
                </figure>
            </div>
            <div className="card-body text-center">
                <h3 className="text-xl">{name}, {age}</h3>
                <h5 className="my-2">Clase de {activity}</h5>
                <p className="my-3">{description}</p>
            </div>
        </div>
    )

}

export default TrainerElement