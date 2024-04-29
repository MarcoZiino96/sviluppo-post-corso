import { PostInterface } from "../interfaces/PostInterface";


function Post({ userId, title, body}:PostInterface){
    return(
        <div className="bg-emerald-500 p-3">
          <p className="text-2xl">userId: {userId}</p>
          <h1 className="font-bold text-black">{title}</h1>
          <p className="text-white font-bold">{body}</p>
        </div>
    )
}
export default Post;