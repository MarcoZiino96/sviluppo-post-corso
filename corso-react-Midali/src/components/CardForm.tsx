import { useState } from "react";
import { City } from "../interfaces/City";

interface CardFormProps {
  addCity: (city: City) => void;
}

function CardForm({ addCity }: CardFormProps): JSX.Element {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    img: "",
    isVisited: false,
  });

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const city: City = {
      key: Math.floor(Math.random() * 1000000000),
      title: formData.title,
      img: formData.img,
      isVisited: formData.isVisited,
      description: formData.description,
    };
    addCity(city);
    
    setFormData({
      title: "",
      description: "",
      img: "",
      isVisited: false,
    });
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, type, value } = e.target;
    const inputValue = type == "checkbox" ? (e.target as HTMLInputElement).checked: value;
    setFormData({
      ...formData,
      [name]: inputValue,
    });
  };
  return (
    <>
      <h2 className=" text-center font-bold text-emerald-500 text-5xl my-5">
        Aggiungi una città da visitare
      </h2>

      <form className="bg-slate-200 p-10" onSubmit={handleSubmit}>
        <div className="text-center pt-10 text-white">

          <div className="flex flex-col">
          <label className="text-black">Nome Città</label>
            <input
              className="bg-slate-800 mb-2"
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
            />
            
          </div>

          <div className="flex flex-col">
          <label className="text-black">Inserisci descrizione</label>
            <textarea
              className="bg-slate-800 mb-2"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
            />
          </div>

          <div className="flex flex-col">
          <label className="text-black">Inserisci immagine</label>
            <input
              className="bg-slate-800 mb-2"
              type="text"
              name="img"
              value={formData.img}
              onChange={handleInputChange}
            />
          </div>

          <div className="flex flex-col">
          <label className="text-black">Visitata?</label>
            <input
              className="bg-slate-800 mb-2"
              type="checkbox"
              name="isVisited"
              checked={formData.isVisited}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <button type="submit" className="bg-teal-400 p-2 rounded-md">
              Aggiungi Card
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
export default CardForm;
