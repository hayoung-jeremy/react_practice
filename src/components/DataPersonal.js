import React from "react";
import data_personal from "../db/data_personal.json";

const DataPersonal = () => {
  //   console.log(data_personal);
  //   console.log(data_personal[0].menus);
  //   console.log(data_personal[0].menus[0].app_name);
  //   console.log(data_personal[0].menus[1].app_name);
  //   console.log(data_personal[0].menus[2].app_name);
  //   console.log(data_personal[0].menus[3].app_name);
  //   console.log(data_personal[0].menus[4].app_name);

  console.log(data_personal[0].menus);

  const depth_01 = data_personal[0].menus;
  const depth_01_title = depth_01.map(function (element) {
    return element.app_name;
  });
  const depth_02 = depth_01.map(function (element) {
    return element.menus.map(function (element) {
      return element.app_name;
    });
  });
  const depth_02_url = depth_01.map(function (element) {
    return element.menus.map(function (element) {
      return element.app_url;
    });
  });
  console.log(depth_01_title);
  console.log(depth_02);
  console.log(depth_02_url);
  return (
    <>
      <ul>
        {depth_01_title.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default DataPersonal;
