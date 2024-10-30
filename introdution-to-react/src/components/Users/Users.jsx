import { useLoaderData } from "react-router-dom";
import User from "../User/User";
const Users = () => {
    const users = useLoaderData()
    return (
        <div className="m-5">
            <h2 className="text-xl font-bold">Our Users: {users.length}</h2>
            <div className="grid grid-cols-3 gap-4 items-center text-center">
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;