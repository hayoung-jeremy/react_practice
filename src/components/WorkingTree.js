import React from "react";
import DataPersonal from "./DataPersonal";
import DataEnterprise from "./DataEnterprise";
import DataVerification from "./DataVerification";

const WorkingTree = () => {
  return (
    <>
      Working Tree appears here
      <DataPersonal />;
      <DataEnterprise />;
      <DataVerification />;
    </>
  );
};

export default WorkingTree;
