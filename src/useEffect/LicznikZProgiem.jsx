import React, {useEffect, useState} from 'react';

const LicznikZProgiem = () => {
    const [licznik, setLicznik] = useState(0);
    const [komunikat, setKomunikat] = useState("");
    useEffect(() => {
        if(licznik > 10){
            setKomunikat("Osiągnięto limit kliknięć!");
            console.log("Osiągnięto limit kliknięć!");
        }else{
            setKomunikat("");
        }
    }, [licznik]);
    return (
        <div>
            <h3>Licznik - {licznik}</h3>
            <button onClick={()=> setLicznik(prev => prev +1)}>Zwiększ licznik</button>
            {
                komunikat && <p style={{color: "red"}}>{komunikat}</p>
            }
        </div>
    );
};

export default LicznikZProgiem;