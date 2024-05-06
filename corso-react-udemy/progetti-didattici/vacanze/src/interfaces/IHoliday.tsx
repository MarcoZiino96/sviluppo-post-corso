import { IHolidayFunction } from "./IHolidayFunction";

export interface IHoliday extends IHolidayFunction{
  titolo:string,
  descrizione:string,
  durata:number,
  img:string,
  prezzo:number,
}