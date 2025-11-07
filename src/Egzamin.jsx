import React, { useState } from 'react';
import { dane2 as danePoczatkowe } from './dane2.js';

const Egzamin = () => {
    const [filtry, setFiltry] = useState({
        kwiaty: true,
        zwierzeta: true,
        samochody: true
    });

    const [dane, setDane] = useState(danePoczatkowe);

    const filtruj = (e) => {
        const { name, checked } = e.target;
        setFiltry(prev => ({ ...prev, [name]: checked }));
    };

    const filtrujDane = dane.filter(img => {
        if (img.category === 1 && filtry.kwiaty) return true;
        if (img.category === 2 && filtry.zwierzeta) return true;
        if (img.category === 3 && filtry.samochody) return true;
        return false;
    });

    const policzPobrania = (id) => {
        setDane(prevDane =>
            prevDane.map(img =>
                img.id === id ? { ...img, downloads: img.downloads + 1 } : img
            )
        );
    };

    return (
        <>
            <h1>Kategorie zdjęć</h1>
            <label>
                <input
                    type="checkbox"
                    name="kwiaty"
                    onChange={filtruj}
                    checked={filtry.kwiaty}
                /> Kwiaty
            </label>
            <label>
                <input
                    type="checkbox"
                    name="zwierzeta"
                    onChange={filtruj}
                    checked={filtry.zwierzeta}
                /> Zwierzęta
            </label>
            <label>
                <input
                    type="checkbox"
                    name="samochody"
                    onChange={filtruj}
                    checked={filtry.samochody}
                /> Samochody
            </label>

            <div className="galeria">
                {filtrujDane.map(item => (
                    <div key={item.id}>
                        <img className="obraz" src={item.filename} alt={item.alt} />
                        <h4>Pobrań: {item.downloads}</h4>
                        <button onClick={() => policzPobrania(item.id)}>Pobierz</button>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Egzamin;
