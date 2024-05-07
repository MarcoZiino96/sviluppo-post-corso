import React, { useEffect, useState } from "react";
import data from "../data";
import { IDataArray } from "../interfaces/IDataArray";
import Slide from "./Slide";

function Sliders() {
  const [recensioni, _] = useState<IDataArray[]>(data);
  const [active, setActive] = useState(0);

  function prossimaRec() {
    setActive((oldValue) => {
      if (oldValue + 1 > recensioni.length - 1) {
        return 0;
      } else {
        return oldValue + 1;
      }
    });
  }

  function precedenteRec() {

    setActive((oldValue) => {
      if (oldValue - 1 < 0) {
        return recensioni.length - 1;
      } else {
        return oldValue - 1;
      }
    });
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setActive((oldValue) => {
        if (oldValue + 1 === recensioni.length) {
          return 0;
        } else {
          return oldValue + 1;
        }
      });
    }, 5000);

    return () => clearInterval(timer);
  }, [active, recensioni.length]);

  return (
    <div className="container">

      <div className=" slider">
        {recensioni.map((recensione, index) => {
          let positionClass = "";

          if (index === active) {
            positionClass = "active";
          } else if (
            active === index + 1 ||
            (active === 0 && index === recensioni.length - 1)
          ) {
            positionClass = "prev";
          } else {
            positionClass = "next";
          }
          return (
            <Slide
              key={recensione.id}
              {...recensione}
              classes={positionClass}
            ></Slide>
          );
        })}
      </div>

      <div className="flex justify-between text-white font-bold">
        <button
          onClick={precedenteRec}
          className=" rounded-md bg-blue-700 p-3 cursor-pointer"
        >
          Prec
        </button>

        <button
          onClick={prossimaRec}
          className=" rounded-md bg-blue-700 p-3 cursor-pointer"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Sliders;
