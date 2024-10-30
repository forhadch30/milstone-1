import { useLoaderData } from "react-router-dom";

const UsersDatails = () => {
    const user = useLoaderData()
    const { name, website } = user
    return (
        <div>
            <h2 className="text-2xl font-bold">User Details</h2>
            <h2>name: {name}</h2>
            <h2>website: {website}</h2>
        </div>
    );
};

export default UsersDatails;