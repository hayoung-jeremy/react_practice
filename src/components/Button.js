import React from "react";
import styled, { css } from "styled-components";
import { lighten, darken } from "polished";

const commonStyles = css`
  display: inline-flex;
  outline: none;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  padding: 8px 12px;
  color: #fff;
  transition: 0.2s;

  &:not(:first-child) {
    margin-left: 12px;
  }
`;

const fontStyles = css`
  ${(props) => {
    if (props.en) {
      return css`
        font-family: "Montserrat", sans-serif;
      `;
    } else {
      return css`
        font-family: "Noto Sans KR" sans-serif;
      `;
    }
  }}
  font-size: 1rem;
`;

const colorStyles = css`
  ${({ theme, color }) => {
    const buttonColor = theme.palette[color];
    return css`
      background-color: ${buttonColor};
      &:hover {
        background-color: ${color === "grayScale"
          ? lighten(0.04, buttonColor)
          : lighten(0.1, buttonColor)};
      }
      &:active {
        background-color: ${color === "grayScale"
          ? darken(0.04, buttonColor)
          : darken(0.1, buttonColor)};
      }
      // outline
      ${(props) =>
        props.outline &&
        css`
          color: ${buttonColor};
          border: 1px solid ${buttonColor};
          &:hover {
            background-color: ${buttonColor};
            color: white;
          }
        `}
    `;
  }}
`;

const StyledButton = styled.button`
  ${commonStyles}
  ${colorStyles}
  ${fontStyles}
`;

const Anchor = styled(StyledButton.withComponent("a"))`
  ${commonStyles}
  ${colorStyles}
  ${fontStyles}
  text-decoration: none;
  color: ${(props) => props.fontColor};
`;

const Button = ({ children, onClick, isAnchor, isNewTap, href, ...rest }) => {
  return isAnchor ? (
    <Anchor href={href} target={isNewTap ? `_blank` : ""} {...rest}>
      {children}
    </Anchor>
  ) : (
    <StyledButton onClick={onClick} {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;
