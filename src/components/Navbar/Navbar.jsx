import { Link } from "react-router-dom"

const Navbar = () => {

    return (
        <div className="Navbar flex justify-between inset-0 absolute bg-blue-500 text-center h-20">
            <ul className="flex space-x-8 text-white ml-8">
                <Link to="/"><li className="mt-7">Home</li></Link>
            </ul>
            <ul className='flex space-x-8 text-white mr-8'>
                <Link to="/login"><li className='mt-7'>Login</li></Link>
                <Link to="/signup"><li className='mt-7'>Sign Up</li></Link>
            </ul>
        </div>
    )

}

export default Navbar