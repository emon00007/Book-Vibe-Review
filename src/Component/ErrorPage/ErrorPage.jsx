import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center items-center">
            <h1 className="text-8xl font-bold md:mt-56">Oppps This page is not found</h1>
            <button className="mt-10 "><Link to="/" className="p-5  bg-green-500 rounded-2xl ">Go to home page </Link></button>
        </div>
    );
};

export default ErrorPage;