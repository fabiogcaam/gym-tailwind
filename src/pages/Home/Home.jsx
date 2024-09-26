import About from "../../components/About/About"
import HomeImages from "../../components/HomeImages/HomeImages"
import Information from "../../components/Information/Information"
import Prices from "../../components/Prices/Prices"
import Clases from "../../components/Clases/Clases"
import Trainers from "../../components/Trainers/Trainers"

const Home = () => {

    return (
        <div className="Home">
            <HomeImages />
            <About />
            <Information />
            <Prices />
            <Clases />
            <Trainers />
        </div>
    )

}

export default Home