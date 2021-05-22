import React from "react";
import data_personal from "../db/data_personal.json";

const DataPersonal = () => {
  //   console.log(data_personal);

  const [KJ_SB] = data_personal;
  console.log(KJ_SB.menus);

  // 전체 메뉴 트리 :
  const menu_tree = KJ_SB.menus.map((item, index) => {
    // depth 01 메뉴 :
    const depth_01__title = item.app_name;
    const depth_01__url = item.app_url;
    // depth 02 메뉴 :
    const depth_02 = item.menus.map((item, index) => {
      const depth_02__title = item.app_name;
      const depth_02__url = item.app_url;
      // depth 03 메뉴 :
      const depth_03 = item.menus.map((item, index) => {
        const depth_03__title = item.app_name;
        const depth_03__url = item.app_url;
        return (
          <li key={index}>
            <p>
              {depth_03__title} <span>{depth_03__url}</span>
            </p>
          </li>
        );
      });

      console.log(depth_02__title);
      console.log(depth_03);
      return (
        <li key={index}>
          <p>
            {depth_02__title} <span>{depth_02__url}</span>
          </p>
          <ul>{depth_03}</ul>
        </li>
      );
    });

    return (
      <div>
        <ul>
          <li key={index}>
            <p>
              {depth_01__title} <span>{depth_01__url}</span>{" "}
            </p>
            <ul>{depth_02}</ul>
          </li>
        </ul>
      </div>
    );
  });

  return (
    <>
      <div>{menu_tree}</div>
    </>
  );
};

export default DataPersonal;
