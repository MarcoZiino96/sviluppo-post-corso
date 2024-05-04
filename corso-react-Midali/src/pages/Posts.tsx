import { useEffect, useState } from "react";
import { PostInterface } from "../interfaces/PostInterface";
import Post from "../components/post";
import { Link } from "react-router-dom";

function Posts() {
  const [data, setData] = useState<PostInterface[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        if (!response.ok) throw new Error("Errore nella chiamata API");
        const data = await response.json();
        setData(data);  
      } catch (err) {
        if (err instanceof Error) setError(err.message);
        else setError("Errore sconociuto");
      }
    }
    fetchPosts();
  }, []);

  if (error) return <div>Errore: {error} </div>;

 <div className="text-center text-blue-700">Caricamento...</div>;

  return (
    <>
     {data.length === 0 && <div className="text-center text-blue-700 text-2xl p-10">Caricamento...</div>}
     <div className="text-center font-bold bg-gray-800 text-white text-2xl p-10 mb-4">
    <Link to={"/"}>home</Link>
    </div>
      <div className="rounded grid grid-cols-4 text-center justify-items-center gap-5">
        {data.map((post) => (
          <Post {...post}
          ></Post> 
        ))}
      </div>
    </>
  );
}

export default Posts;
