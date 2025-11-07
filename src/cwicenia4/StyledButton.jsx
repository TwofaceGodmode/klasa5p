import React from 'react';
import styled from "styled-components";


const TitleButton = styled.button`
  background-color: #4f46e5;
  color: white;
  border-radius: 3px;

  &:hover {
    background-color: blue; 
    color: black;
    border-radius: 3px;
  }
`;
const StyledButton = () => {
    return (
        <div>
            <TitleButton>NAPIS</TitleButton>
        </div>
    );
};

export default StyledButton;