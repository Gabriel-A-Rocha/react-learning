import React from "react";
//import "./Person.css";
import styled from "styled-components";

const StyledDiv = styled.div`
    {
      width: 60%;
  margin: auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;
  margin-top: 16px;

  @media(min-width: 800px)": {
      width: 500px,
    }
    }`;

const Person = ({ name, age, changed, deleteHandler }) => {
  /*   const style = {
    "@media(min-width: 800px)": {
      width: "500px",
    },
  }; */

  return (
    //<div className="Person" style={style}>

    <StyledDiv>
      <p onClick={deleteHandler}>Nome: {name}</p>
      <p>Idade: {age} anos</p>

      <label htmlFor="">Digite seu nome: </label>
      <input type="text" onChange={changed} value={name} />
    </StyledDiv>
  );
};

export default Person;
