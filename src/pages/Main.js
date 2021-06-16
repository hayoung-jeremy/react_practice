import React from "react";
import Section from "../components/SectionTemplate";
import Button from "../components/Button";

const Main = () => {
  return (
    <>
      <Section h2Title="Buttons">
        <Button color="warning" outline>
          warning
        </Button>
        <Button color="error">error</Button>
        <Button color="warning">경고</Button>
      </Section>
      <Section ish2Blind h2Title="blind title">
        hahah
      </Section>
    </>
  );
};

export default Main;
