import React from "react";
import styled from "styled-components";
import { useState } from "react";
import {
  getUserPerGender,
  getUserPerPage,
  getUserPerStack,
} from "../../apis/lioninfo";
const FilterButton = ({ title, type, setUserData, activeButton, onClick}) => {  
  const handleClickButton = async () => {
    onClick(type, title);
    
  };

  return <Button onClick={handleClickButton} clicked={activeButton === title}
  >{title}</Button>;
};

export default FilterButton;

const Button = styled.div`
  flex-basis: 13%;
  background-color: ${(props) => (props.clicked ? "orange" : "beige")};
  height: 70px;
  color: gray;
  font-size: 20px;
  display: flex;
  
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  cursor: pointer;
  
`;
