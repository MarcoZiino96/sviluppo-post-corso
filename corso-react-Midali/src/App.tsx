import { useReducer, useState } from "react";
import "./App.scss";
import Card from "./components/Card";
import CardForm from "./components/CardForm";
import { City } from "./interfaces/City";
import { FormState } from "./interfaces/formState";
import { FormAction } from "./interfaces/formAction";
import Conteggio from "./components/Conteggio";
import { Link } from "react-router-dom";

function App() {
  const [showCity, setShowCity] = useState<boolean>(false);
  const [showVisited, setShowVisite] = useState<boolean>(false);
  const [showNotVisited, setShowNotVisite] = useState<boolean>(false);

  const [formState, dispatchFormState] = useReducer(formReducer, {
    name: "",
    email: "",
  });

  
  const NotVisited = () => {
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
    <div className="text-center font-bold bg-gray-800 text-white text-2xl p-10 mb-4">
    <Link to={"/posts"}> Vai a i Post</Link>
    </div>
   
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

     

     
    </>
  );
}



export default App;
