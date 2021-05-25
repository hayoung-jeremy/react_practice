import React from "react";
import data_personal from "../db/data_personal.json";
import { v4 as uuidv4 } from "uuid";

const DataPersonal = () => {
  // data 저장할 state

  //   console.log(data_personal);

  const [KJ_SB] = data_personal;
  console.log(KJ_SB.menus);

  // data 변경 함수
  const onSubmit__title_03 = () => {};
  const onSubmit__url_03 = () => {};

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
          <li key={uuidv4()}>
            <form onSubmit={onSubmit__title_03}>
              <input type="text" value={depth_03__title} />
              <button>변경</button>
            </form>
            <form onSubmit={onSubmit__url_03}>
              <input type="text" value={depth_03__url} />
              <button>변경</button>
            </form>
          </li>
        );
      });

      console.log(depth_02__title);
      console.log(depth_03);
      return (
        <li key={uuidv4()}>
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
          <li key={uuidv4()}>
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
