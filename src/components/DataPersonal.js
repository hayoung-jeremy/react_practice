import React from "react";
import data_personal from "../db/data_personal.json";

const DataPersonal = () => {
  console.log(data_personal);
  console.log(data_personal[0].menus);
  console.log(data_personal[0].menus[0].app_name);
  console.log(data_personal[0].menus[1].app_name);
  console.log(data_personal[0].menus[2].app_name);
  console.log(data_personal[0].menus[3].app_name);
  console.log(data_personal[0].menus[4].app_name);

  console.log(data_personal[0].menus);

  return <></>;
};

export default DataPersonal;
