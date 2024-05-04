import { IPost } from "../interfaces/IPost";


interface IPropsPost extends IPost{
    removePost: (id: number) => void; 
  }



function Post({ id, title, body, removePost }:IPropsPost) {
  return (
   
      
        <div className=" card p-3 rounded-md shadow-lg m-3">
          <div>
            <h1 className="font-bold">{title}</h1>
          </div>

          <div className="underline my-2"></div>

          <div className="my-2">
            <p >{body}</p>
          </div>

          <div className="my-2">
            <button 
            onClick={() => removePost(id)}
            className="bg-red-700 p-2 cursor-pointer rounded-full">
              X
            </button>
          </div>
        </div>
      
  );
}

export default Post;
