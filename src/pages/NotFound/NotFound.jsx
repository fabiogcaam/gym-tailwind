import Animation from "../../assets/Animation - 1734626267045.webm"

const NotFound = () => {

    return (
        <div className="mt-48 flex items-center ml-96">
            <div className="flex jusitfy-center mx-auto w-1/8">
                <video autoPlay loop muted className="h-60 w-60" src={Animation} type="video/webm" />
            </div>
            <div className="w-5/6">
                <h1 className="text-3xl font-bold text-gray-600">Error 404</h1>
                <h3 className="text-xl mt-3 text-gray-400">This page not exists</h3>
            </div>
        </div>
    )

}

export default NotFound 