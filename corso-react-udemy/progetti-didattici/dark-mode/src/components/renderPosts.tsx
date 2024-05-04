
import { IPost } from "../interfaces/IPost";
import Post from "./Post";


interface RendProps{
    data: IPost[];
    removePost: (id: number) => void; 
}


function RenderPosts({data, removePost}:RendProps) {
 
  return (
    <>
      <div className="grid grid-cols-1 justify-center md:grid-cols-2">
        
        {data.filter((post) => post.userId === 1)
          .map((post) => (
            <article 
            key={post.id}
            className="text-center"
            >
              <Post {...post}  removePost = {removePost}></Post>
            </article>
          ))}

      </div>
    </>
  );
}

export default RenderPosts;
