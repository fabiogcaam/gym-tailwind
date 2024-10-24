import About from "../../components/About/About"
import HomeImages from "../../components/HomeImages/HomeImages"
import Information from "../../components/Information/Information"
import Prices from "../../components/Prices/Prices"
import Activities from "../../components/Clases/Activities"
import Trainers from "../../components/Trainers/Trainers"
import Footer from "../../components/Footer/Footer"

const Home = () => {

    return (
        <div className="Home">
            <HomeImages />
            <About />
            <Information />
            <Prices />
            <Activities />
            <Trainers />
            <Footer />
        </div>
    )

}

export default Home