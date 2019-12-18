import styled from "styled-components";

export const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  margin-top: 50px;
`;

export const Item = styled.li`
  display: inline-block;
  border: 1px solid ${props => props.color};
  padding: 10px;
  margin: 10px;
  border-radius: 4px;
  background-color: ${props => props.color};
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.75);
`;
