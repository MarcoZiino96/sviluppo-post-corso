import { IHoliday } from "./IHoliday";

export interface IResponseHoliday{
    success:boolean;
    data: IHoliday[];
}