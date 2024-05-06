import React from "react";
import { IHoliday } from "../interfaces/IHoliday";

import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";



function SingleHoliday(
  { titolo, descrizione, durata, img, prezzo, nextHoliday, prevHoliday }: IHoliday,
) {
  return (
    
    <article className=" text-white text-center p-5 w-1/2 bg-gray-800 rounded-md">
      <img className="w-full rounded-md " src={img} alt="ImgHoliday" />

      <h3 className="font-bold my-2 text-xl">{titolo}</h3>

      <p className="my-2">{descrizione}</p>

      <div className="flex justify-between my-2">
        <p>{durata}</p>
        <p className="text-cyan-600">{prezzo}€</p>
      </div>

      <div className="flex justify-between text-black my-2">
        <button
          onClick={prevHoliday}
          className="text-base rounded bg-cyan-600 p-2"
        >
          <GrFormPreviousLink />
        </button>

        <button
          onClick={nextHoliday}
          className="text-base rounded bg-cyan-600 p-2"
        >
          <GrFormNextLink />
        </button>
      </div>
    </article>
  );
}

export default SingleHoliday;