import React from "react";
import Section from "../components/SectionTemplate";
import Button from "../components/Button";

const Main = () => {
  return (
    <>
      <Section h2Title="Buttons" isContainer>
        <Button color="success">success</Button>
        <Button color="complete">complete</Button>
        <Button color="warning">warning</Button>
        <Button color="error">error</Button>
        <Button color="grayScale">grayScale</Button>
      </Section>
      <Section ish2Blind h2Title="blind title">
        hahah
      </Section>
    </>
  );
};

export default Main;
