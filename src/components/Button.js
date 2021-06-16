import React from "react";
import styled, { css } from "styled-components";
import { lighten, darken, rgba } from "polished";

const commonStyles = css`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  padding: 8px 12px;
  color: #fff;
  transition: 0.15s;
  height: 2.25rem;

  &:not(:first-of-type),
  a ~ &,
  & ~ a {
    margin-left: 12px;
  }
`;

const colorStyles = css`
  ${({ theme, color }) => {
    const buttonColor = theme.palette[color];
    return css`
      background-color: ${buttonColor};
      &:hover {
        background-color: ${color === "grayScale"
          ? lighten(0.04, buttonColor)
          : lighten(0.08, buttonColor)};
      }
      &:active {
        background-color: ${color === "grayScale"
          ? darken(0.02, buttonColor)
          : darken(0.08, buttonColor)};
      }
      // outline
      ${(props) =>
        props.outline &&
        css`
          color: ${buttonColor};
          border: 1px solid ${buttonColor};
          background-color: ${rgba(buttonColor, 0)};
          &:hover {
            background-color: ${rgba(buttonColor, 0.1)};
          }
          &:active {
            background-color: ${darken(0.2, rgba(buttonColor, 0.1))};
          }
        `}
    `;
  }}
`;

const sizes = {
  large: {
    height: "3rem",
    fontSize: "1.25rem",
  },
  medium: {
    height: "2.25rem",
    fontSize: "1rem",
  },
  small: {
    height: "1.75rem",
    fontSize: "0.875rem",
  },
};

const sizeStyles = css`
  ${({ size }) => css`
    height: ${sizes[size].height};
    font-size: ${sizes[size].fontSize};
  `}
`;

const StyledButton = styled.button`
  ${commonStyles}
  ${colorStyles}
  ${sizeStyles}
`;

const Anchor = StyledButton.withComponent("a");

const Button = ({
  children,
  onClick,
  isAnchor,
  isNewTab,
  href,
  size,
  ...rest
}) => {
  return isAnchor ? (
    <Anchor href={href} target={isNewTab ? `_blank` : ""} size={size} {...rest}>
      {children}
    </Anchor>
  ) : (
    <StyledButton onClick={onClick} size={size} {...rest}>
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  color: "main",
  size: "medium",
};

export default Button;
