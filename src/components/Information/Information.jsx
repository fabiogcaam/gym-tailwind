import { CgGym } from "react-icons/cg"
import { MdSportsGymnastics } from "react-icons/md"
import { FaPersonSwimming } from "react-icons/fa6"
import { IoLocationSharp } from "react-icons/io5"
import { FaChalkboardTeacher } from "react-icons/fa"

const Information = () => {

    return (
        <div className="my-24 pt-16 pb-24 bg-violet">
            <div className="border-white border flex justify-center mx-auto w-1/5 py-2 rounded-full">
                <h1 className="text-xl text-center underline underline-offset-8 hover:decoration-gold text-white">Información Práctica</h1>
            </div>
            <div className="flex flex-wrap justify-around items-center mt-10">
                <div className="w-full flex flex-col text-center lg:w-4/12 hover:border-solid rounded-2 my-5">
                    <h1 className="text-7xl flex justify-center items-center text-white">
                        <CgGym />
                    </h1>
                    <h2 className="mt-3 text-white">Maquinas de última generación</h2>
                </div>
                <div className="w-full flex flex-col text-center lg:w-4/12 hover:border-solid rounded-2 my-5">
                    <h1 className="text-7xl flex justify-center items-center text-white">
                        <MdSportsGymnastics />
                    </h1>
                    <h2 className="mt-3 text-white">Un montón de actividades</h2>
                </div>
                <div className="w-full iflex flex-col text-center lg:w-4/12 hover:border-solid rounded-2 my-5">
                    <h1 className="text-7xl flex justify-center items-center text-white">
                        <FaPersonSwimming />
                    </h1>
                    <h2 className="mt-3 text-white">Piscina y spa</h2>
                </div>
                <div className="w-full flex flex-col text-center lg:w-4/12 hover:border-solid rounded-2 my-5">
                    <h1 className="text-7xl flex justify-center items-center text-white">
                        <IoLocationSharp />
                    </h1>
                    <h2 className="mt-3 text-white">Las mejores zonas de entrenamiento</h2>
                </div>
                <div className="w-full flex flex-col text-center lg:w-4/12 hover:border-solid rounded-2 my-5">
                    <h1 className="text-7xl flex justify-center items-center text-white">
                        <FaChalkboardTeacher />
                    </h1>
                    <h2 className="mt-3 text-white">Los mejores profesionales como profesores</h2>
                </div>
                <div className="w-full flex flex-col text-center lg:w-4/12 hover:border-solid rounded-2 my-5">
                    <h1 className="text-7xl flex justify-center items-center text-white">
                        <FaChalkboardTeacher />
                    </h1>
                    <h2 className="mt-3 text-white">Los mejores profesionales como profesores</h2>
                </div>
            </div>
        </div>
    )

}

export default Information