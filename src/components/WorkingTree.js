import React from "react";
import DataPersonal from "./dataPersonal/DataPersonal";
import DataEnterprise from "./dataEnterprise/DataEnterprise";
import DataVerification from "./dataVerification/DataVerification";

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
