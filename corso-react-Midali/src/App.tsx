import { useState } from "react";
import "./App.scss";
import Card from "./components/Card";
import CardForm from "./components/CardForm";
import { City } from "./interfaces/City";




function App() {
  
  const [showCity, setShowCity] = useState(false);
  const [showVisited, setShowVisite] = useState(false);
  const [showNotVisited, setShowNotVisite] = useState(false);

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

  function NotVisited(){

    return cities.filter((city) => !city.isVisited).map((city) => (
      <Card
        key={city.key}
        title={city.title}
        img={city.img}
        isVisited={city.isVisited}
        description={city.description}
      >
        
      </Card>
    ))
   
  }

  function visited(){

    return cities.filter((city) => city.isVisited).map((city) => (
      <Card
        key={city.key}
        title={city.title}
        img={city.img}
        isVisited={city.isVisited}
        description = {city.description}
      >
        
      </Card>
    ))
   
  }

  function allCity(){

    return cities.map((city) => (
      <Card
        key={city.key}
        title={city.title}
        img={city.img}
        isVisited={city.isVisited}
        description = {city.description}
      >
        
      </Card>
    ))
  }

 const addCity = (city: City) =>{
  return setCities([...cities, city])
 }
  return (
    <>
    <CardForm onAddCity={addCity}></CardForm>
      <div className=" container m-auto my-10">
        <div className="grid grid-cols-3 justify-items-center">
          
          <button className="bg-blue-500 p-4" onClick={()=> setShowVisite(!showVisited)}>
          {showVisited ? 'Nascondi Città visitate' : 'Mostra Città visitate'}
          </button>
          <button className="bg-blue-500 p-4" onClick={()=> setShowNotVisite(!showNotVisited)}>
          {showNotVisited ? 'Nascondi Città da visitate' : 'Mostra Città da visitate'}
          </button>
          <button className="bg-blue-500 p-4" onClick={()=> setShowCity(!showCity)}>
          {showCity ? 'Nascondi tutte le città' : 'Mostra tutte le Città'}
          </button>
        </div>
        <div className="grid grid-cols-4 justify-items-center">
          {showVisited && visited()}
          {showNotVisited && NotVisited()}
          {showCity && allCity()}
        </div>
        
      </div>
    </>
  );
}

export default App;
