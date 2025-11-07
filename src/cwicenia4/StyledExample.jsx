import React from 'react';
import styled from "styled-components";

const StyledHeader = styled.h1`
  color: blue;
  text-align: center;

 
`;
const StyledExample = () => {
    return (
        <div>
            <StyledHeader>Witaj w styled-components</StyledHeader>
        </div>
    );
};

export default StyledExample;