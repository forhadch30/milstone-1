// import error from '../assets/error-404-concept-landing-page_52683-9561.avif'
import error from '../assets/oops-404-error-with-broken-robot-concept-illustration_114360-5529.avif'
const ErrorPage = () => {
    return (
        <div className='my-10'>
            <h2 className="text-3xl font-semibold text-center">Page Not Found 404</h2>
            <img className='mx-auto rounded-2xl lg:h-[500px]' src={error} alt="" />
        </div>
    );
};

export default ErrorPage;