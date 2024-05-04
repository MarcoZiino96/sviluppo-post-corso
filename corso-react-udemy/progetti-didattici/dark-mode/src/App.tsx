
import { useEffect, useState } from 'react';
import './App.css'
import axios from 'axios';
import { IPost } from './interfaces/IPost';
import RenderPosts from './components/renderPosts';
import ChangeColorMode from './components/ChangeColorMode';


const url = "https://jsonplaceholder.typicode.com/posts";


function App() {

  const removePost = (id: number) => {
    setPosts((oldValue) => oldValue.filter((value) => value.id !== id));
  };

  const [posts, setPosts] = useState<IPost[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  async function arrayPost() {
    setIsLoading(true);
    try {
      const response = await axios.get(url);
      setPosts(response.data);
    } catch (error) {
      console.log(error);

      setIsError(true);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    arrayPost();
  }, []);


  
 
 return (
    <>

<main>
<div className='p-10 text-center'>
    <ChangeColorMode></ChangeColorMode>
  </div>
<section className='flex justify-center h-full p-10'>
  <div className='container'>
  <RenderPosts data = {posts}  removePost = {removePost}>
    </RenderPosts>
  </div>
    
    </section>
</main>
    
    
    </>
  )
}

export default App
