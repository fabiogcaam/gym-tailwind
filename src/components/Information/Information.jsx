import { CgGym } from "react-icons/cg"
import { MdSportsGymnastics } from "react-icons/md"
import { FaPersonSwimming } from "react-icons/fa6"
import { IoLocationSharp } from "react-icons/io5"
import { FaChalkboardTeacher } from "react-icons/fa"

const Information = () => {

    return (
        <div className="Information my-16">
            <h1 className="text-2xl text-center underline underline-offset-8 hover:decoration-violet">Información Práctica</h1>
            <div className="flex flex-wrap items-center md:ml-20 gap-x-28 mt-10">
                <div className="w-full flex flex-col text-center md:w-3/12 hover:border-solid rounded-2 my-5">
                    <h1 className="text-7xl flex justify-center items-center">
                        <CgGym />
                    </h1>
                    <h2 className="mt-3">Maquinas de última generación</h2>
                </div>
                <div className="w-full flex flex-col text-center md:w-3/12 hover:border-solid rounded-2 my-5">
                    <h1 className="text-7xl flex justify-center items-center">
                        <MdSportsGymnastics />
                    </h1>
                    <h2 className="mt-3">Un montón de actividades</h2>
                </div>
                <div className="w-full iflex flex-col text-center md:w-3/12 hover:border-solid rounded-2 my-5">
                    <h1 className="text-7xl flex justify-center items-center">
                        <FaPersonSwimming />
                    </h1>
                    <h2 className="mt-3">Piscina y spa</h2>
                </div>
                <div className="w-full flex flex-col text-center md:w-3/12 hover:border-solid rounded-2 my-5">
                    <h1 className="text-7xl flex justify-center items-center">
                        <IoLocationSharp />
                    </h1>
                    <h2 className="mt-3">Las mejores zonas de entrenamiento</h2>
                </div>
                <div className="w-full flex flex-col text-center md:w-3/12 hover:border-solid rounded-2 my-5">
                    <h1 className="text-7xl flex justify-center items-center">
                        <FaChalkboardTeacher />
                    </h1>
                    <h2 className="mt-3">Los mejores profesionales como profesores</h2>
                </div>
                <div className="w-full flex flex-col text-center md:w-3/12 hover:border-solid rounded-2 my-5">
                    <h1 className="text-7xl flex justify-center items-center">
                        <FaChalkboardTeacher />
                    </h1>
                    <h2 className="mt-3">Los mejores profesionales como profesores</h2>
                </div>
            </div>
        </div>
    )

}

export default Information