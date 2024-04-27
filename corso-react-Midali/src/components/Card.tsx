

import { useSelector } from "react-redux";
import { City } from "../interfaces/City";
import { CounterState } from "../interfaces/CounterState";


function Card({ title, img, isVisited, description}:City):JSX.Element{

  const count = useSelector((state : {counter: CounterState }) => state.counter.value)

  return (

    <div className="boxCard  bg-current text-center my-5">
      <img className=" imgCard  m-auto" src={img} alt="" />
        <div className="p-10">
          <h2 className="text-2xl text-white font-bold">{title} {count}</h2>
          <p className="text-white">{description}</p>
          {isVisited &&  <span className="text-green-600"> Visitata</span>}
          {!isVisited &&  <span className="text-red-600"> Non Visitata</span>}
        </div>
      </div>
  
  );
}
export default Card;
