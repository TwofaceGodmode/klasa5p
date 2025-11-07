import React, {useEffect} from 'react';

const Informacje = ({wiadomość}) => {
    useEffect(() => {
        console.log("Treść wiadomości: " + wiadomość);
    }, [wiadomość]);
    return (
        <div>

        </div>
    );
};

export default Informacje;