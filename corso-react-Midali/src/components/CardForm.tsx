import { City } from "../interfaces/City"

interface CardFormProps {
  onAddCity: (city: City) => void;
}

function CardForm({ onAddCity }:CardFormProps){

  const handleClick = ()=>{
     const city : City ={
      key: Math.floor(Math.random() * 1000000000),
      title: "Palermo",
      img: "https://images.unsplash.com/photo-1618048558171-8c9edde77055?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isVisited: false,
      description:
        "lorem ipsum dolor sit amet, consect dolor sit amet, sed diam dolor sit amet",
    }
    onAddCity(city)
  }
  return (
    <div className='flex flex-col gap-3 w-80 mb-10'>
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <button onClick={handleClick} className='bg-teal-400 p-4 rounded-md'>Aggiungi Card</button>
    </div>
  )
}
export default CardForm;
