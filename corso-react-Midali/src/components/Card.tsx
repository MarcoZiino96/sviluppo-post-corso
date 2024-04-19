import { ReactNode } from "react";

interface CardProps{
  id:number;
  title: string;
  img: string;
  isVisited: boolean;
  children?:ReactNode
}

function Card({ title, img, isVisited, children}: CardProps) {

  return (
    <div className=" text-center my-5">
      <img className=" w-auto m-auto" src={img} alt="" />
      <div className="w-auto">
        <div className="bg-blue-50 p-5">
          <h2 className="text-2xl text-black font-bold">{title}</h2>
          <p className="text-gray-500">{children}</p>
          {isVisited &&  <span> Visitata</span>}
          {!isVisited &&  <span> Non Visitata</span>}
        </div>
      </div>
    </div>
  );
}
export default Card;
