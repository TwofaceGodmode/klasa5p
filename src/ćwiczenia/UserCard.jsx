import React from 'react';

const UserCard = (props) => {
    return (
        <div>
            <h3>{props.imie} {props.wiek} {props.miasto}</h3>
        </div>
    );
};

export default UserCard;