import React, { useEffect, useState } from "react";

function getModeFromLocalStorage() {
    const storedMode = localStorage.getItem("mode");
    return storedMode !== null ? storedMode : "light-mode";
}

function ChangeColorMode() {

  const [tema, setTema] = useState(getModeFromLocalStorage());


  function changeMode(){
    if(tema === "light-mode"){
        setTema("dark-mode")
    }else{
        setTema("light-mode")
    }
  }

  useEffect(() =>{
    document.documentElement.className = tema;
    localStorage.setItem("mode", tema);
  },[tema])

  return (

    <button className="btn rounded-2xl p-2 font-bold" onClick={changeMode}>
    Cambia
   </button>
  
);
}

export default ChangeColorMode;
