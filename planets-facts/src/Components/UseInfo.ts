import { useState } from "react";
import UsePlanetData from "./UsePlanetData";

const UseInfo = (planetName: string, defaultInfo: string = "overview") => {
  const planetData = UsePlanetData(planetName);
  const [changeInfo, setChangeInfo] = useState<string>(defaultInfo);

  function handleChangeInfo(info: string) {
    setChangeInfo(info);
  }

  const getDataInfo = () => {
    if (changeInfo === "overview") {
      return {
        content: planetData?.overview.content,
        source: planetData?.overview.source,
      };
    } else if (changeInfo === "structure") {
      return {
        content: planetData?.structure.content,
        source: planetData?.structure.source,
      };
    } else {
      return {
        content: planetData?.geology.content,
        source: planetData?.geology.source,
      };
    }
  };

  const infoData: any = getDataInfo();

  return {
    infoData,
    changeInfo,
    handleChangeInfo,
  };
};

export default UseInfo;
