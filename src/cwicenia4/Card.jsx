import React from 'react';
import styled from "styled-components";


const Duzy2 = styled.h2`
  color: blue;
  text-align: center;
  margin: 10px;
  border: black double 1px;
  border-radius: 2px;
  
`;

const Paragraph = styled.p`
  color: blue;
  text-align: center;
  margin: 5px;
  border: pink dotted 1px;
  border-radius: 5px;
`;

const ButtonStyled = styled.button`
  color: blue;
  text-align: center;
  margin: 5px;
  border: pink dotted 1px;
  border-radius: 5px;
`;


const Card = () => {
    return (
        <div>
            <Duzy2>Zadanie 2</Duzy2>
            <Paragraph>paragraf</Paragraph>
            <ButtonStyled>Przycisk</ButtonStyled>
        </div>
    );
};

export default Card;