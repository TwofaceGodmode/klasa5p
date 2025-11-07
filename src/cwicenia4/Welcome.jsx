import React from 'react';
import styled from "styled-components";

const Title = styled.h1`
  color: blue;
  text-align: center;

  &:hover {
    color: green; 
  }
`;
const Welcome = () => {
    return (
        <>
            <Title>Witamy w aplikacji!</Title>
        </>
    );
};

export default Welcome;