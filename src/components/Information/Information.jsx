import { CgGym } from "react-icons/cg"
import { MdSportsGymnastics } from "react-icons/md"
import { FaPersonSwimming } from "react-icons/fa6"
import { IoLocationSharp } from "react-icons/io5"
import { FaChalkboardTeacher } from "react-icons/fa"

const Information = () => {

    return (
        <div className="Information my-16">
            <h1 className="text-2xl mx-48 text-center underline underline-offset-8 hover:decoration-blue-400">Información Práctica</h1>
            <div className="grid grid-rows-2 grid-flow-col gap-16 mt-10 mx-14">
                <div className="mx-6 hover:border-solid rounded-2 my-5">
                    <h1 className="text-7xl">
                        <CgGym className="ml-40" />
                    </h1>
                    <h2 className="mt-3">Salas muy amplias con maquinas de última generación</h2>
                </div>
                <div className="mx-28 hover:border-solid hover:rounded-2 my-5">
                    <h1 className="text-7xl">
                        <MdSportsGymnastics className="ml-16" />
                    </h1>
                    <h2 className="mt-3">Un montón de actividades</h2>
                </div>
                <div className="mx-20 hover:border-solid hover:rounded-2 my-5">
                    <h1 className="text-7xl">
                        <FaPersonSwimming className="ml-2" />
                    </h1>
                    <h2 className="mt-3">Piscina y spa</h2>
                </div>
                <div className="hover:border-solid hover:rounded-2 my-5">
                    <h1 className="text-7xl">
                        <IoLocationSharp className="ml-24" />
                    </h1>
                    <h2 className="mt-3">Las mejores zonas de entrenamiento</h2>
                </div>
                <div className="hover:border-solid rounded-2">
                    <h1 className="text-7xl">
                        <FaChalkboardTeacher className="ml-28" />
                    </h1>
                    <h2 className="mt-3">Los mejores profesionales como profesores</h2>
                </div>
            </div>
        </div>
    )

}

export default Information