import React from 'react';
import styled from "styled-components";
import styles from './Button.module.css';

const Button = () => {
    return (
        <div>
            <button className={styles.primary}>Przycisk 1</button>
            <button className={styles.secondary}>Przycisk 2</button>
        </div>
    );
};

export default Button;