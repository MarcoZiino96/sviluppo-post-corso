import "./App.scss";
import Card from "./components/Card";

function App() {

  const cities = [
    {
      id:0,
      title:"Tokyo",
      img:"https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isVisited : false,
      description : "lorem ipsum dolor sit amet, consect dolor sit amet, sed diam dolor sit amet"
    },
    {
      id:1,
      title:"Roma",
      img:"https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1396&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isVisited : true,
      description : "lorem ipsum dolor sit amet, consect dolor sit amet, sed diam dolor sit amet"

    },
    {
      id:2,
      title:"Berlino",
      img:"https://images.unsplash.com/photo-1599946347371-68eb71b16afc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isVisited : false,
      description : "lorem ipsum dolor sit amet, consect dolor sit amet, sed diam dolor sit amet"

    },
    {
      id:3,
      title:"Londra",
      img:"https://images.unsplash.com/photo-1533929736458-ca588d08c8be?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isVisited : true,
      description : "lorem ipsum dolor sit amet, consect dolor sit amet, sed diam dolor sit amet"

    },
  ]
  return (
    <>
      <div className=" container m-auto">
        <div className="flex gap-5">
          {/* <Card
            title="Tokyo"
            img="https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            isVisited ={false}
            description="lorem ipsum dolor sit amet dolor sit amet dolor sit"
          ></Card> 

          <Card
            title="Rome"
            img="https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1396&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            isVisited ={false}
          ></Card>

          <Card
            title="Berlino"
            img="https://images.unsplash.com/photo-1599946347371-68eb71b16afc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            isVisited ={false}
          ></Card> */}
          {/* {cities.map((city)=>(
            <Card
            id={city.id}
            title={city.title}
            img={city.img}
            isVisited={city.isVisited}>
            {city.description}  
            </Card>
          ))} */}
          {cities.filter((city)=> !city.isVisited)
              .map((city)=>(
                <Card
                id={city.id}
                title={city.title}
                img={city.img}
                isVisited={city.isVisited}>
                  {city.description} 
                </Card>
              ))
            }
        </div>
      </div>
    </>
  );
}

export default App;
