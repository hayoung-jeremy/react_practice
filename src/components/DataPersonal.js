import React, { useState } from "react";
import data_personal from "../db/data_personal.json";

const DataPersonal = () => {
  //   console.log(data_personal);
  //   console.log(data_personal[0].menus);
  //   console.log(data_personal[0].menus[0].app_name);
  //   console.log(data_personal[0].menus[1].app_name);
  //   console.log(data_personal[0].menus[2].app_name);
  //   console.log(data_personal[0].menus[3].app_name);
  //   console.log(data_personal[0].menus[4].app_name);

  const [depth_01__title, setDepth_01__title] = useState("");

  const title_01 = data_personal[0].menus.map(function (title) {
    return <p>title.app_name</p>;
  });

  const onChange__title = () => {
    setDepth_01__title();
  };
  return (
    <>
      <div>
        <form>
          <input
            type="text"
            onChange={onChange__title}
            placeholder="메뉴 리스트 변경"
          />
          {title_01}
        </form>
      </div>
    </>
  );
};

export default DataPersonal;
