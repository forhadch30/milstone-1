import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError()
    console.log(error)
    return (
        <div className="text-center">
            <h2 >404 Not found Oops!!?</h2>
            {
                error.statusText || error.message
            }
            {
                error.status === 404 && <div>
                    <h2>Page Not Found</h2>
                    <p>Go back where you from</p>
                    <Link to={'/'}>
                        <button className="bg-slate-700 py-2 px-2 rounded text-white">Home Page</button>
                    </Link>
                </div>
            }
        </div>
    );
};

export default ErrorPage;