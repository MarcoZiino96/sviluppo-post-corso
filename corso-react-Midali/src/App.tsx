import { useEffect, useReducer, useState } from "react";
import "./App.scss";
import Card from "./components/Card";
import CardForm from "./components/CardForm";
import { City } from "./interfaces/City";
import { Post } from "./interfaces/Post";
import { FormState } from "./interfaces/formState";
import { FormAction } from "./interfaces/formAction";
import Conteggio from "./components/Conteggio";

function App() {
  const [showCity, setShowCity] = useState<boolean>(false);
  const [showVisited, setShowVisite] = useState<boolean>(false);
  const [showNotVisited, setShowNotVisite] = useState<boolean>(false);
  const [showPost, setShowPost] = useState<boolean>(false);
  const [data, setData] = useState<Post[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [formState, dispatchFormState] = useReducer(formReducer, {
    name: "",
    email: "",
  });

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        if (!response.ok) throw new Error("Errore nella chiamata API");
        const data = await response.json();
        setData(data);
        setLoading(false);
      } catch (err) {
        if (err instanceof Error) setError(err.message);
        else setError("Errore sconociuto");
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  function NotVisited() {
    return cities
      .filter((city) => !city.isVisited)
      .map((city) => (
        <Card
          key={city.key}
          title={city.title}
          img={city.img}
          isVisited={city.isVisited}
          description={city.description}
        ></Card>
      ));
  }

  function visited() {
    return cities
      .filter((city) => city.isVisited)
      .map((city) => (
        <Card
          key={city.key}
          title={city.title}
          img={city.img}
          isVisited={city.isVisited}
          description={city.description}
        ></Card>
      ));
  }

  function allCity() {
    return cities.map((city) => (
      <Card
        key={city.key}
        title={city.title}
        img={city.img}
        isVisited={city.isVisited}
        description={city.description}
      ></Card>
    ));
  }

  function addCity(city: City) {
    setCities([...cities, city]);
  }

  const [cities, setCities] = useState([
    {
      key: 0,
      title: "Tokyo",
      img: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isVisited: false,
      description:
        "lorem ipsum dolor sit amet, consect dolor sit amet, sed diam dolor sit amet",
    },
    {
      key: 1,
      title: "Roma",
      img: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1396&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isVisited: true,
      description:
        "lorem ipsum dolor sit amet, consect dolor sit amet, sed diam dolor sit amet",
    },
    {
      key: 2,
      title: "Berlino",
      img: "https://images.unsplash.com/photo-1599946347371-68eb71b16afc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isVisited: false,
      description:
        "lorem ipsum dolor sit amet, consect dolor sit amet, sed diam dolor sit amet",
    },
    {
      key: 3,
      title: "Londra",
      img: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isVisited: true,
      description:
        "lorem ipsum dolor sit amet, consect dolor sit amet, sed diam dolor sit amet",
    },
  ]);

  function renderPosts() {
    if (loading)
      return <div className="text-center text-blue-700">Caricamento...</div>;

    if (error) return <div>Errore: {error} </div>;

    return data.map((post) => (
      <div className="bg-emerald-500 p-3" key={post.id}>
        <p className="text-2xl">userId: {post.userId}</p>
        <h1 className="font-bold text-black">{post.title}</h1>
        <p className="text-white font-bold">{post.body}</p>
      </div>
    ));
  }

  function formReducer(state: FormState, action: FormAction): FormState {
    switch (action.type) {
      case "CHANGE_FIELD":
        if (action.field && action.field in state) {
          return { ...state, [action.field]: action.value };
        } else {
          return state;
        }
      case "RESET_FORM":
        return { name: "", email: "" };
      default:
        return state;
    }
  }

  const handleFieldChange = (field: string, value: string) => {
    dispatchFormState({ type: "CHANGE_FIELD", field, value });
  };

  const resetForm = (e?: React.MouseEvent<HTMLButtonElement>) => {
    if (e) {
      e.preventDefault();
    }
    dispatchFormState({ type: "RESET_FORM" });
  };

  const sendForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(formState);
  };

  return (
    <>
    <Conteggio></Conteggio>
      <div className=" container m-auto my-10">
        <div className="grid grid-cols-4 justify-items-center">
          <button
            className="bg-teal-400 p-4 text-white font-bold"
            onClick={() => setShowVisite(!showVisited)}
          >
            {showVisited ? "Nascondi Città visitate" : "Mostra Città visitate"}
          </button>
          <button
            className="bg-teal-400 p-4 text-white font-bold"
            onClick={() => setShowNotVisite(!showNotVisited)}
          >
            {showNotVisited
              ? "Nascondi Città da visitate"
              : "Mostra Città da visitate"}
          </button>
          <button
            className="bg-teal-400 p-4 text-white font-bold"
            onClick={() => setShowCity(!showCity)}
          >
            {showCity ? "Nascondi tutte le città" : "Mostra tutte le Città"}
          </button>
          <button
            className="bg-teal-400 p-4 text-white font-bold"
            onClick={() => setShowPost(!showPost)}
          >
            {showPost ? "Nascondi tutti i posts" : "Mostra tutti i posts"}
          </button>
        </div>
        <CardForm addCity={addCity}></CardForm>

        <form className="bg-slate-200 p-10 mt-3">
        <div className="text-center pt-10 text-white">
          <div  className="flex flex-col">
            <label className="text-black" htmlFor="name">Nome:</label>
            <input
              type="text"
              id="name"
              name="name"
              className="bg-slate-800 mb-2"
              value={formState.name}
              onChange={(e) => handleFieldChange("name", e.target.value)}
            />
          </div>

          <div  className="flex flex-col">
            <label className="text-black" htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              className="bg-slate-800 mb-2"
              value={formState.email}
              onChange={(e) => handleFieldChange("email", e.target.value)}
            />
          </div>
          <button className="bg-teal-400 p-2 m-3  text-white font-bold" onClick={resetForm}>Reset</button>
          <button className="bg-teal-400 p-2 m-3 text-white font-bold" onClick={sendForm}>Invia</button>
        </div>
      </form>

        <div className="grid grid-cols-2 justify-items-center">
          {showVisited && visited()}
          {showNotVisited && NotVisited()}
          {showCity && allCity()}
        </div>
      </div>

      <div className="rounded grid grid-cols-4 text-center justify-items-center gap-5">
        {showPost && renderPosts()}
      </div>

     
    </>
  );
}

export default App;
