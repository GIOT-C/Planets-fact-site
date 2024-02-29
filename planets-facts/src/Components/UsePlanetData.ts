import { DataInterface } from "./DataInterface";
import {useState, useEffect} from 'react';
import data from './data.json';

const UsePlanetData = (planetName : string) : DataInterface | null => {
   const [planetData, setPlanetData] = useState<DataInterface | null>(null);
   
   useEffect(()=>{
    const specificPlanetData = data.find(
        (planet) => planet.name === planetName
        );

     if (specificPlanetData) {
    setPlanetData(specificPlanetData);
  } else {
    console.error(`Planet data not found for ${planetName}`);
  }
   }, [planetName]);

   
   return planetData;
}

export default UsePlanetData;
