import React from 'react';
import styled from 'styled-components';


const StyledAlert = styled.div`
  background-color: ${({ type }) =>
    type === 'success' ? 'green' :
        type === 'error' ? 'red' :
            type === 'info' ? 'blue' : 'gray'};
  
  color: white;
  padding: 15px 20px;
  border-radius: 6px;
  margin: 10px 0;
  font-weight: bold;
  text-align: center;
`;

const AlertBox = ({ type, children }) => {
    return (
        <StyledAlert type={type}>
            {children || (type === 'success' ? 'Operacja zakończona sukcesem ✅' :
                type === 'error' ? 'Wystąpił błąd ❌' :
                    type === 'info' ? 'Informacja ℹ️' :
                        'Nieznany typ alertu')}
        </StyledAlert>
    );
};

export default AlertBox;
