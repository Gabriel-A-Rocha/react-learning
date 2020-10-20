import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${(props) => (props.showContent ? "red" : "green")};
  color: white;
  font-family: inherit;
  border: 1px solid blue;
  border-radius: 6px;
  padding: 12px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.showContent ? "#7f1114" : "#074918")};
  }
`;

export { StyledButton };
