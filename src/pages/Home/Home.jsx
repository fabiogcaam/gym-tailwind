import About from "../../components/About/About"
import HomeImages from "../../components/HomeImages/HomeImages"
import Information from "../../components/Information/Information"
import Prices from "../../components/Prices/Prices"
import Clases from "../../components/Clases/Clases"
import Trainers from "../../components/Trainers/Trainers"
import Footer from "../../components/Footer/Footer"

const Home = () => {

    return (
        <div className="Home">
            <HomeImages />
            <About />
            <Information />
            <Prices />
            <Clases />
            <Trainers />
            <Footer />
        </div>
    )

}

export default Home