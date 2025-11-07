import React, {useEffect, useState} from 'react';

const HookEffect = () => {
    const [tekst, setTekst] = useState("Klasa 5P");

    useEffect(() => {
            console.log("Komponent został wyrederowany!");
    }, []);
    return (
        <div>
            <h3>Powitanie - {tekst}</h3>
            <button onClick={()=> setTekst("Grupa I")}>Zmień tekst</button>
        </div>
    );
};

export default HookEffect;