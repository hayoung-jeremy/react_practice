import React from "react";
import styled, { css } from "styled-components";

const CommonStyle = css`
  display: inline-flex;
  outline: none;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  padding: 8px 12px;
  background-color: #fff;
  font-size: 1rem;
`;

const StyledButton = styled.button`
  ${CommonStyle}
`;

const Anchor = styled(StyledButton.withComponent("a"))`
  ${CommonStyle}
`;

const Button = ({ children, onClick, isAnchor, isNewTap, href, ...rest }) => {
  return isAnchor ? (
    <Anchor href={href} target={isNewTap ? `_blank` : ""}>
      {children}
    </Anchor>
  ) : (
    <StyledButton onClick={onClick} {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;
