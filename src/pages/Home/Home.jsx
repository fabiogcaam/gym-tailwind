import About from "../../components/About/About"
import HomeImages from "../../components/HomeImages/HomeImages"
import Information from "../../components/Information/Information"
import Prices from "../../components/Prices/Prices"
import Trainers from "../../components/Trainers/Trainers"

const Home = () => {

    return (
        <div className="Home">
            <HomeImages />
            <About />
            <Information />
            <Prices />
            <Trainers />
        </div>
    )

}

export default Home