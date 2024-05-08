import { IRgb } from "../interfaces/IRgb";



 export function rgbToHex({r, g, b}:IRgb):string{
   return "#" +
   [r, g, b].map((n) =>{
      const hex = n.toString(16)
      return hex.length === 1 ? "0" + hex : hex;
   }).join("");

}



