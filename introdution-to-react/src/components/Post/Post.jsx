/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import { Link, useNavigate } from "react-router-dom";

const Post = ({ post }) => {
    const {id, title } = post

    const useNavig = useNavigate()

    const handleUseNavig = () => {
        useNavig(`/posts/${id}`)
    }

    return (
        <div className="border-2 border-yellow-400 rounded-md py-4 px-3">
            <h2>{id}</h2>
            <h2>{title}</h2>
            <Link to={`/posts/${id}`}>
                <button className="btn bg-green-800 py-2 px-3 rounded text-white">Show Details</button>
            </Link>
            <button onClick={handleUseNavig} className="py-2 px-3 border rounded">Click to see Details</button>
        </div>
    );
};

export default Post;