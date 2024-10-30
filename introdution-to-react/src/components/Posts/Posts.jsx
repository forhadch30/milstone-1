import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";

const Posts = () => {
    const postsLoad = useLoaderData()
    return (
        <div>
            <h2>Posts: {postsLoad.length}</h2>
            <div className="grid grid-cols-3 gap-5 text-center">
                {
                    postsLoad.map(post => <Post key={post.id} post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;