import React from "react";
import { IDataArray } from "../interfaces/IDataArray";
import starCreator from "../utils/starCreator";

interface ISlide extends IDataArray {
  classes: string;
}

function Slide({ autore, recensione, voto, classes }: ISlide) {
  return (
    <div
      className={`slide ${classes} text-center text-white rounded-lg  shadow-lg shadow-blue-700`}
    >
      <div className="bg-slate-500 p-5 rounded-md">
        <h3 className="font-bold">{autore}</h3>
        <p>{recensione}</p>
        <div className="flex justify-center gap-1">{starCreator(voto)}</div>
      </div>
    </div>
  );
}

export default Slide;
