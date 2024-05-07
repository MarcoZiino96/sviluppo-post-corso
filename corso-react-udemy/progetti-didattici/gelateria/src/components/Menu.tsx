import React, { useEffect, useState } from "react";
import { IGelato } from "../interfaces/IGelato";
import axios  from "axios";
import Gelato from "./Gelato";

const url = "https://react--course-api.herokuapp.com/api/v1/data/gelateria";

function Menu() {
  const [prodotti, setProdotti] = useState<IGelato[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(true);
  const [selected, setSelected] = useState<number>(0);
  const [filterProduct, setFilterProducts] = useState<IGelato[]>([]);
  const [categorie, setCategorie] = useState<string[]>([]);

  
  function filtraProdotti(categoria: string, index: number) {
    setSelected(index);
    if (categoria === "all") {
      setFilterProducts(prodotti);
    } else {
      const prodottiFiltrati = prodotti.filter((el: IGelato) => (
        el.categoria === categoria ? el : ""
      ));
      setFilterProducts(prodottiFiltrati)
    }
  }

  async function getData(){

    setIsLoading(true);
    setIsError(false);

    try{
        const response = await axios.get(url);  
        setProdotti(response.data.data)
        setFilterProducts(response.data.data)

       const nuoveCategorie : string[] = Array.from(
            new Set(response.data.data.map((el:IGelato) => el.categoria))
        );

            nuoveCategorie.unshift("all")
            setCategorie(nuoveCategorie)
        

        setIsLoading(false)
    }
    catch(error){
        setIsLoading(false)
        setIsError(true)
        console.log(error);   
    }
}

  useEffect(() => {
    getData();
  },[])

  return(

    <div className="container">

        <h4 className="text-center font-bold text-blue-800 text-3xl my-5">
            LE NOSTRE SCELTE
        </h4>

{
            !isLoading && !isError ? (
                <>
                <div className="grid grid-cols-4 gap-10  justify-items-center border-b-2 border-blue-800 pb-8 mb-5">
                {categorie.map((categoria, index) =>(

                    <button
                    className={`font-semibold w-20 pb-2  hover:border-b-2 hover:border-blue-800
                     ${selected === index && "active"}`
                    }
                    key={index}
                    data-categoria = {categoria}
                    onClick={() => filtraProdotti(categoria, index)}
                    >
                        {categoria}
                    </button>
                
                ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-center container m-auto">

                    {filterProduct.map((el) =>(
                        <Gelato
                        key={el.id}
                        {...el}
                        >
                        </Gelato>
                    ))}

                </div>
                </>
            ) : 
            !isLoading && isError ? (

                <h4
                className="text-red-700 text-3xl"
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)"
                }}
                >
                    Errore...
                </h4>

            ) : (
                <h4
                className="text-yellow-600 text-3xl"
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)"
                }}
                >
                    Loading...
                </h4>
            )
}
        




    </div>
  )
  
}

export default Menu;
