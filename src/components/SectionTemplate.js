import React from "react";
import styled from "styled-components";

const StyledSection = styled.section`
  width: 100%;
  padding: 20px;
  background-color: #262626;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.12);
  box-sizing: border-box;
  & > .title {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #3a3a3a;
  }

  &:not(:first-child) {
    margin-top: 12px;
  }
`;

const Section = ({ children, ish2Blind, h2Title, isContainer, ...rest }) => {
  return (
    <StyledSection {...rest}>
      {ish2Blind ? (
        <h2 className="blind">{h2Title}</h2>
      ) : (
        <h2 className="title">{h2Title}</h2>
      )}
      {children}
    </StyledSection>
  );
};

Section.defaultProps = {
  ish2Blind: false,
};

export default Section;
