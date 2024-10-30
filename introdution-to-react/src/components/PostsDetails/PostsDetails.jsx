import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostsDetails = () => {
    const post = useLoaderData()
    const { postsId } = useParams()
    console.log(postsId)
    console.log(post)
    const { body, id, title } = post

    const navig = useNavigate()

    const handleNavig = () => {
        navig(-1)
    }

    return (
        <div>
            <h1 className="text-xl font-bold">post : {id}</h1>
            <h2>Posts Details: {title}</h2>
            <p><small>{body}</small></p>
            <button onClick={handleNavig} className="bg-red-600 py-2 px-2 rounded-md text-white">Go Back</button>
        </div>
    );
};

export default PostsDetails;