import React from "react";
//import "./Person.css";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 60%;
  margin: auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;
  margin-top: 16px;
  background-color: #eee;
  border: 1px solid grey;
  border-radius: 8px;
  display: relative;

  input {
    font-family: inherit;
    text-align: center;
  }

  @media (min-width: 800px) {
    width: 500px;
  }
`;

const Person = ({ name, age, changed, deleteHandler }) => {
  return (
    <StyledDiv>
      <h1 onClick={deleteHandler}>Nome: {name}</h1>
      <h2>Idade: {age} anos</h2>

      <p>Digite seu nome: </p>
      <input type="text" onChange={changed} value={name} />
    </StyledDiv>
  );
};

export default Person;
