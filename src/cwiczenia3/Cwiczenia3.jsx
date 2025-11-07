import React, {useState} from 'react';

const Cwiczenia3 = () => {
    const [dane, setDane] = useState([]);
    const [user, setUser] = useState({ kroki: 0})
    const [on, setOn] = useState(false);
    const [color, setColor] = useState("white");
    const [counter, setCounter] = useState(0)
    const [czas, setCzas] = useState({ minuta: 0})
    const [likes, setLikes] = useState(0)
    const [dislikes, setDislikes] = useState(0)
    const [uzytkownik, setUzytkownik] = useState({name: " ", age: null})
    function dodajDane() {
        setDane([...dane, document.getElementById('zdanie').value]);

    }

    function dodajUzytkownika(){
        const imie2 = document.getElementById("imieUzytkownika").value;
        const wiek2 = document.getElementById("wiekUzytkownika").value;
        setUzytkownik({ name: imie2, age: wiek2 });
    }
    function zmienKroki(){
        setUser({...user, kroki: user.kroki + 1});
    }

    function zmienCzas(){
        setCzas({...czas, minuta: czas.minuta + 5});
    }


    function zmienColor(){
        const kolory = ["red", "blue", "green", "yellow", "orange", "pink", "lightgreen", "lightblue", "darkgreen", "magenta", "cyan"];
        setColor(kolory[Math.floor(Math.random() * kolory.length)]);
    }

    function zwieksz(){
        setCounter(counter + 1);
    }

    function resetuj(){
        setCounter(0)
    }

    function zmienLikes(){
        setLikes(likes + 1);
    }

    function zmienDislikes(){
        setDislikes(dislikes + 1);
    }

    return (
        <div style={{ backgroundColor: color }}>

            <button onClick={() => setOn(!on)}>
                Wyświetl/Schowaj napis
            </button>
            <p>
                {on ? "Hello React" : " "}
            </p>

            <button onClick={zmienKroki}>
                Dodaj 1 krok
            </button>
            <p>
                Masz {user.kroki} kroków
            </p>

            <button onClick={zmienColor}>
                Zmień kolor
            </button>

            <button onClick={zwieksz} onDoubleClick={resetuj}>
                Zwiększ lub resetuj podwójnym kliknięciem {counter}
            </button>

            <button onClick={zmienCzas}>
                Zmień czas
            </button>

            <p>
                Czas: {czas.minuta}
            </p>

            <button onClick={zmienLikes}>
                Lajk
            </button>

            <button onClick={zmienDislikes}>
                Dislajk
            </button>

            <p>
                Lajki: {likes} | Dislaji {dislikes}
            </p>

            <input type="text"
                   id="zdanie"


            />
            <button onClick={dodajDane}>

                Dodaj dane
            </button>
            <ul>
                {
                    dane.map((dane,index) =>
                    <li key={index}>{dane}</li>
                    )
                }
            </ul>
            Wpisz imie:
            <input type="text"
                id="imieUzytkownika"
            /> <br/>
            Wpisz wiek:
            <input type="text"
                   id="wiekUzytkownika"
            /> <br/>
            <button onClick={dodajUzytkownika}>
                Zapisz
            </button>
            <p>Imię: {uzytkownik.name} <br/>
            Wiek: {uzytkownik.age}</p>

        </div>
    );
};

export default Cwiczenia3;