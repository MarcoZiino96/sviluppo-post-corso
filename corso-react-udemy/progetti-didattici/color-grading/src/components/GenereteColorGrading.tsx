import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Values from "values.js";
import { IColorInput } from "../interfaces/IColorInput";
import SingleColor from "./SingleColor";

function GenereteColorGrading() {
  const [isError, setIsError] = useState<boolean>(false);
  const [selectedColor, setSelectedColor] = useState<Values[]>([]);
  const [colorInput, setColorInput] = useState<IColorInput>({
    color: "",
    quantity: 10,
  });

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setColorInput({ ...colorInput, [name]: value });
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (colorInput && selectedColor) {
      const { color, quantity } = colorInput;
      try {
        setSelectedColor(
          new Values(color).all(
            Math.round((100 / parseInt(quantity.toString(), 10)) * 2)
          )
        );

        setColorInput({
          color: "",
          quantity: 10,
        });
      } catch (error) {
        setIsError(true);
      }
    }
  }

  useEffect(() => {
    setColorInput({ ...colorInput, color: "#7257F2" });

    setSelectedColor(
      new Values("#7257F2").all(
        Math.round((100 / parseInt(colorInput.quantity.toString(), 10)) * 2)
      )
    );
    console.log(selectedColor);
  }, []);

  return (
    <>
      <form className="form m-5" onSubmit={handleSubmit}>

        <div className="flex justify-start gap-16 w-1/2">
          <input
            className="input border rounded py-2 px-4 focus:outline-none mr-2"
            type="text"
            id="color"
            name="color"
            value={colorInput.color}
            maxLength={7}
            onChange={handleChange}
          />

          <input
            className="input border rounded py-2 px-4 focus:outline-none mr-2"
            type="number"
            id="quantity"
            name="quantity"
            value={colorInput.quantity}
            max={100}
            min={5}
            step={5}
            onChange={handleChange}
          />

          <button type="submit" className="btn text-white bg-orange-300 hover:bg-orange-500 p-2 font-bold rounded-lg">
            Invia
          </button>
        </div>
      </form>

      <section className="grid grid-cols-6  gap-2">
        {isError ? (
          <h4 className="text-center text-3xl text-red-700 font-bold">
            NESSUN COLORE TROVATO
          </h4>
        ) : !isError && selectedColor ? (
          selectedColor.map((el) => (
            <SingleColor
              key={Math.floor(Math.random() * 1000000000)}
              {...el}
            ></SingleColor>
          ))
        ) : (
          <h4 className="text-center text-3xl text-yellow-600 font-bold">
            Loading...
          </h4>
        )}
      </section>
    </>
  );
}

export default GenereteColorGrading;
