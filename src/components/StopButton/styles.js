import styled from "styled-components";
import colors from "../../styles/colors";

export const ButtonBox = styled.div``;

export const Button = styled.button`
  font-size: 32px;
  background-color: #1a237e;
  padding: 10px 20px;
  border-radius: 4px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  color: ${colors.white};

  &:hover {
    background-color: #283593;
  }

  &:active {
    background-color: #283593;
    transform: translateY(2px);
  }

  &:disabled {
    background-color: #455a64;
    color: ${colors.grey};
    cursor: not-allowed;
  }
`;
