import React from 'react';

const Owoce = () => {
    const fruits = ["jabłko", "banan", "truskawka", "banan"];
    return (
        <ul>
            {
                fruits.map((owoc, index) => <li key={index}>{owoc}</li>)
            }
        </ul>
    );
};

export default Owoce;