const Footer = () => {

    return (
        <footer className="bg-black text-white bottom-0">
            <div className="flex justify-evenly">
                <ul className="my-4">
                    <li className="my-3 font-bold text-gold">Contactos</li>
                    <li className="mb-2">número: 685761589</li>
                    <li className="mb-2">correo: fabiogcaam@gmail.com</li>
                    <li className="mb-2">Instagram: @fabitogc</li>
                    <li className="mb-2">Github: fabiogcaam</li>
                </ul>
                <ul className="my-4">
                    <li className="my-3 font-bold text-gold">Ubicación</li>
                    <li className="mb-2">Calle Melendez Valdés, Madrid</li>
                    <li className="mb-2">CP: 28015</li>
                </ul>
                <ul className="my-4">
                    <li className="my-3 font-bold text-gold">Mapa</li>
                    <li className="mt-3">666666666</li>
                    <li className="my-3">66666666</li>
                </ul>
            </div>
            <div className="text-center mx-20 py-3">
                <hr />
                <h5 className="py-8">Derechos reservados por Fabio García Caamaño</h5>
            </div>
        </footer>
    )

}

export default Footer 