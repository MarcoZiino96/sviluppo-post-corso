import { useState } from "react";
import "./App.css";
import data from "./data";
import { IPerson } from "./interface/person-interface";
import List from "./components/List";

function App(): JSX.Element {
  const [people, setPeople] = useState<IPerson[]>(data);

  const removePerson = (id: number) => {
    setPeople((oldValue) => oldValue.filter((value) => value.id !== id));
  };

  const reloadAll = () => {
    setPeople(data);
  };

  return (
    <>
      <section className="flex justify-center h-full p-10">
       
          <div className="container w-1/2">
            <h2 className="font-bold text-5xl text-center text-emerald-600 p-5">
              Prossimi incontri
            </h2>

            <div className="w-auto">
              <List data={people} removePerson={removePerson}></List>
            </div>

            <div className="flex justify-items-center justify-between mt-5">
              <button
                onClick={reloadAll}
                className="rounded-2xl p-2 text-white font-bold ms-10  hover:bg-yellow-600"
              >
                {" "}
                Reload
              </button>
              <button
                onClick={() => setPeople([])}
                className="rounded-2xl p-2 text-white font-bold me-10 hover:bg-purple-800"
              >
                {" "}
                DeleteAll
              </button>
            </div>
          </div>
    
      </section>
    </>
  );
}

export default App;
