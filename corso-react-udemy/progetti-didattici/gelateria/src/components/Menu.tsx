import React, { useState } from "react";
import { IGelato } from "../interfaces/IGelato";

const url = "https://react--course-api.herokuapp.com/api/v1/data/gelateria";

function Menu() {
  const [prodotti, setProdotti] = useState<IGelato[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(true);
  const [selected, setSelected] = useState<number>(0);
  const [filterProduct, setFilterProducts] = useState<IGelato[]>();
  const [categorie, setCategorie] = useState([]);

  function filtraProdotti(categoria: string, index: number) {
    setSelected(index);
    if (categoria === "all") {
      setFilterProducts(prodotti);
    } else {
      const prodottiFiltrati = prodotti.filter((el: IGelato) => {
        el.categoria === categoria ? el : "";
      });
      setFilterProduct(prodottiFiltrati)
    }
  }

  return <div>Menu</div>;
}

export default Menu;
