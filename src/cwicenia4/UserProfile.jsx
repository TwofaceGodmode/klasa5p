import React from 'react';
import styles from './UserProfile.module.css';

const UserProfile = () => {
    return (
        <div className={styles.primary}>
            <a href="https://docs.google.com/document/d/1gyywQ-xnyvWGQSPk43hda61tcLF0kPRf/edit">Moje zdjęcie</a>
            <h1>Imię: Hóbert</h1>
            <h3>Opis: ma na imię hóbert</h3>
        </div>
    );
};

export default UserProfile;
