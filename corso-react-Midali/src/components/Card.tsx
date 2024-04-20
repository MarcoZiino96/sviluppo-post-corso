import { ReactNode } from "react";

interface CardProps{
  key:number;
  title: string;
  img: string;
  isVisited: boolean;
  children:ReactNode
}

function Card({ title, img, isVisited, children}: CardProps) {

  return (
    <div className="boxCard bg-current text-center my-5">
      <img className=" imgCard  m-auto" src={img} alt="" />
        <div className="p-10">
          <h2 className="text-2xl text-white font-bold">{title}</h2>
          <p className="text-white">{children}</p>
          {isVisited &&  <span className="text-green-600"> Visitata</span>}
          {!isVisited &&  <span className="text-red-600"> Non Visitata</span>}
        </div>
      </div>
  
  );
}
export default Card;
