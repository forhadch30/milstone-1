import { Link } from "react-router-dom";

const User = ({ user }) => {
    const { id, name, phone, email } = user;
    return (
        <div className="border-2 py-4 px-3 space-y-2 border-green-800 rounded">
            <h2 className="text-2xl font-semibold">{name}</h2>
            <p>Email: {email}</p>
            <p>phone: {phone}</p>
            <Link className="bg-green-700 py-2 px-3 rounded mr-2 text-white" to={`/user/${id}`}>Show Details</Link>
            <Link to={`/user/${id}`}>
            <button className="bg-yellow-600 py-2 px-3 rounded text-white">Click Me</button>
            </Link>
        </div>
    );
};

export default User;