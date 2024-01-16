"use client";

import styled from "styled-components";

interface ButtonProps {
  label: string;
  buttonStyle?: string;
  onClick?: any;
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
}

const Button = ({
  label,
  onClick,
  buttonStyle,
  type,
  disabled,
}: ButtonProps) => {
  return (
    <ButtonWrapper>
      <ButtonStyle
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={buttonStyle}
      >
        {label}
      </ButtonStyle>
    </ButtonWrapper>
  );
};

export default Button;

const ButtonStyle = styled.button`
align-items: center;
  background-clip: padding-box;
  background-color: #fa6400;
  border: 1px solid transparent;
  border-radius: .25rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  font-size: 0.85rem;
  font-weight: 500;
  justify-content: center;
  line-height: 1.25;
  margin: 0;
  padding: 0.5rem 0.8rem;
  position: relative;
  transition: all 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  width: auto;
}
`;

const ButtonWrapper = styled.div`
  &:hover ${ButtonStyle} {
    background-color: #c85000;
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
    transform: translateY(-1px);
  }

  &:active ${ButtonStyle} {
    background-color: #c85000;
    box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
    transform: translateY(0);
  }
`;
