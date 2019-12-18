import styled from "styled-components";
import colors from "../../styles/colors";

export const Container = styled.div`
  text-align: center;
  min-height: 100vh;

  background-color: ${props => props.color || colors.grey};
`;
