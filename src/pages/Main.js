import React from "react";
import Section from "../components/SectionTemplate";
import Button from "../components/Button";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  & > h3 {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
  & h4 {
    font-size: 0.875rem;
    margin-bottom: 0.875rem;
  }
  &:not(:first-child) {
    margin-top: 1.25rem;
  }
  & > & {
    padding: 0;
    border: none;
  }
`;

const Main = () => {
  return (
    <>
      <Section h2Title="Buttons" isContainer>
        <Container>
          <Container>
            <h3>default</h3>
            <Button color="success">success</Button>
            <Button color="complete">complete</Button>
            <Button color="warning">warning</Button>
            <Button color="error">error</Button>
            <Button color="grayScale">grayScale</Button>
          </Container>
          <Container>
            <h3>outline</h3>
            <Button color="success" outline>
              success
            </Button>
            <Button color="complete" outline>
              complete
            </Button>
            <Button color="warning" outline>
              warning
            </Button>
            <Button color="error" outline>
              error
            </Button>
            <Button color="grayScale" outline>
              grayScale
            </Button>
          </Container>
          <Container>
            <h3>rounded</h3>
            <Button color="success" rounded>
              success
            </Button>
            <Button color="complete" rounded>
              complete
            </Button>
            <Button color="warning" rounded>
              warning
            </Button>
            <Button color="error" rounded>
              error
            </Button>
            <Button color="grayScale" rounded>
              grayScale
            </Button>
          </Container>
        </Container>

        <Container>
          <h3>size variation</h3>
          <Container>
            <h4>large :</h4>
            <Button color="success" size="large">
              success
            </Button>
            <Button color="complete" size="large">
              complete
            </Button>
            <Button color="warning" size="large">
              warning
            </Button>
            <Button color="error" size="large">
              error
            </Button>
            <Button color="grayScale" size="large">
              grayScale
            </Button>
          </Container>
          <Container>
            <h4>medium :</h4>
            <Button color="success" size="medium">
              success
            </Button>
            <Button color="complete" size="medium">
              complete
            </Button>
            <Button color="warning" size="medium">
              warning
            </Button>
            <Button color="error" size="medium">
              error
            </Button>
            <Button color="grayScale" size="medium">
              grayScale
            </Button>
          </Container>
          <Container>
            <h4>small :</h4>
            <Button color="success" size="small">
              success
            </Button>
            <Button color="complete" size="small">
              complete
            </Button>
            <Button color="warning" size="small">
              warning
            </Button>
            <Button color="error" size="small">
              error
            </Button>
            <Button color="grayScale" size="small">
              grayScale
            </Button>
          </Container>
        </Container>

        <Container>
          <h3>fullWidth</h3>
          <Button color="success" fullWidth>
            success
          </Button>
          <Button color="complete" fullWidth>
            complete
          </Button>
          <Button color="warning" fullWidth>
            warning
          </Button>
          <Button color="error" fullWidth>
            error
          </Button>
          <Button color="grayScale" fullWidth>
            grayScale
          </Button>
        </Container>
      </Section>
      <Section ish2Blind h2Title="blind title">
        hahah
      </Section>
    </>
  );
};

export default Main;
