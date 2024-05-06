import React, { useEffect, useState } from "react";
import axios from "axios";
import { IResponseHoliday } from "../interfaces/IResponseHoliday";
import SingleHoliday from "./SingleHoliday";

const url = "https://react--course-api.herokuapp.com/api/v1/data/vacanze";

function Holiday() {
  const [data, setData] = useState<IResponseHoliday>({
    success: false,
    data: [],
  });
  const [selected, setSelected] = useState<number>(1);

  function nextHoliday() {
    setSelected((oldValue) => {
      if (oldValue + 1 === data.data.length) {
        return 0;
      } else {
        return oldValue + 1;
      }
    });
  }

  function prevHoliday() {
    setSelected((oldValue) => {
      if (oldValue - 1 < 0) {
        return data.data.length - 1;
      } else {
        return oldValue - 1;
      }
    });
  }

  async function getData() {
    try {
      const response = await axios.get(url);
      setData(response.data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  if (data.success) {

    return (
      <>
      {
        data.data.length > 0 ? (
          <SingleHoliday
          {...data.data[selected]}
          nextHoliday = {nextHoliday}
          prevHoliday = {prevHoliday}
          ></SingleHoliday>
        ) : (
          <h4 className="text-2xl mt-32 text-center font-bold text-cyan-600">Non ci sono Vacanze da visualizzare</h4>
        )
      }
     
      </> 
  )}
  else{
    return (
      <h1 className="text-2xl mt-32 text-center font-bold text-cyan-600">Loading.....</h1>
    )
  }
}

export default Holiday;
