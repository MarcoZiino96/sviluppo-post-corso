import { IRgb } from "../interfaces/IRgb";



 export function rgbToHex(rgb:number[]):string{
   return "#" +
   rgb.map((n) =>{
      const hex = n.toString(16)
      return hex.length === 1 ? "0" + hex : hex;
   }).join("");

}



