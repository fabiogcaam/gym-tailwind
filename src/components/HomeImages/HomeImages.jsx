import { useEffect, useState } from "react"
import { IMAGES } from "../../const/const"

const HomeImages = () => {

    const [currentNumber, setCurrentNumber] = useState(0)
    const [isVisible, setIsVisible] = useState(true)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIsVisible(false)
            setTimeout(() => {
                nextImage()
                setIsVisible(true)
            }, [300])
        }, [4500])

        return () => clearInterval(intervalId)
    }, [currentNumber])

    const nextImage = () => {
        currentNumber === IMAGES.length - 1 ? setCurrentNumber(0) : setCurrentNumber(currentNumber + 1)
    }

    return (
        <div className="mt-20 h-256 w-full">
            <img className={`w-full h-full object-cover transition-opacity duration-1000 ease-out ${isVisible ? 'opacity-100' : 'opacity-30'}`} src={IMAGES[currentNumber]} alt="" />
        </div>
    )

}

export default HomeImages