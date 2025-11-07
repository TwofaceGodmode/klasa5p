import React from 'react';
import {BrowserRouter, Routes, Route, Link, useNavigate, useParams} from "react-router-dom";


function Home() {
    return(
        <>
            <h2>Strona Główna</h2>
        </>
    )
}

function Login() {
    const navigate = useNavigate();

    const dashboard = () => {
        navigate("/dashboard");
    }

    return (
        <>
            <h2>Logowanie</h2>
            login: <input type="text" /> <br/>
            hasło: <input type="password" /> <br/><br/>
            <button onClick={dashboard}>Zaloguj</button>
        </>
    )
}

function Dashboard() {
    return(
        <>
            <h2>Dashboard</h2>
        </>
    )
}

function About() {

    const navigate = useNavigate();
    const kontakt = () =>{
        navigate("/contact");
    }
    return(
        <>
            <h2>O nas</h2>
            <button onClick={kontakt}>Przejdź do kontakt</button>
        </>
    )
}

function User() {
    const {id, imie} = useParams();
    return(
        <>
            <h2>Profil użytkownika o ID: {id}</h2>
        </>

    )
}

function Contact() {
    return(
        <>
            <h2>Kontakt</h2>
        </>
    )
}

function NotFound() {
    return(
        <>
            <h2>404 – Strona nie istnieje</h2>
        </>
    )
}
function OldAbout() {
    const navigate = useNavigate();
    const kontakt2 = () =>{
        navigate("/about");
    }
    return(
        <>
            <h2>Old About</h2>
            <button onClick={kontakt2}>Przejdź do about</button>
        </>
    )
}



function Product() {
    const {product, category, id} = useParams();
    return(
        <>
            <h2>{product} {id} z kategorii {category}</h2>
        </>

    )
}

const productsList = [
    { id: 1, name: "Telefon" },
    { id: 2, name: "Laptop" },
    { id: 3, name: "Tablet" },
];

function Products() {
    return (
        <>
            <h2>Lista produktów</h2>
            <ul>
                {productsList.map(product => (
                    <li key={product.id}>
                        <Link to={`/products/${product.id}`}>{product.name}</Link>
                    </li>
                ))}
            </ul>
        </>
    );
}

function ProductDetails() {
    const { id } = useParams();
    const product = productsList.find(p => p.id === Number(id));

    if (!product) {
        return <h2>Produkt nie znaleziony</h2>;
    }

    return (
        <>
            <h2>Szczegóły produktu: {product.name}</h2>
            <p>ID produktu: {product.id}</p>
            <p>Opis produktu: Super produkt o nazwie {product.name}.</p>
        </>
    );
}

function Cart() {
    return (
        <>
            <h2>Twój koszyk</h2>
            <p>Tu będzie zawartość koszyka.</p>
        </>
    );
}

function Checkout() {
    return (
        <>
            <h2>Podsumowanie zamówienia</h2>
            <p>Tu podsumowanie Twojego zamówienia.</p>
        </>
    );
}

function Profile() {
    const {profil, username} = useParams();
    return(
        <>
            <h2>
                {username ? (
                    <h2>Profil użytkownika {username}</h2>
                ) : (
                    <h2>Nie wybrano użytkownika</h2>
                )}
            </h2>
        </>

    )
}

function Navigate() {
    const navigate = useNavigate();
    const kontakt3 = () =>{
        navigate(-1);
    }
    const kontakt4 = () =>{
        navigate(1);
    }
    return(
        <>
            <h2>Nawigacja</h2>
            <button onClick={kontakt3}>Wstecz ale jak strzałka w lewo</button>
            <button onClick={kontakt4}>Wstecz ale jak strzałka w prawo</button>
        </>
    )
}

const CwiczeniaRouter = () => {
    return (
        <div>
            <BrowserRouter>
                <ul>
                    <li><Link to="/">Strona główna</Link></li>
                    <li><Link to="/about">O nas</Link></li>
                    <li><Link to="/contact">Kontakt</Link></li>
                    <li><Link to="/user/1/Andrzej">User 1</Link></li>
                    <li><Link to="/user/2/Jan">User 2</Link></li>
                    <li><Link to="/user/3/Paweł">User 3</Link></li>
                    <li><Link to="/login">Logowanie</Link></li>
                    <li><Link to="/about">OldAbout</Link></li>
                    <li><Link to="/user/10">Profil użytkownika</Link></li>
                    <li><Link to="/product/paiper/domowe/1">Produkt</Link></li>
                    <li><Link to="/profile/profil/nyga">Profil</Link></li>
                    <li><Link to="/navigate">Nawigacja</Link></li>
                    <li><Link to="/products">Produkty</Link></li>
                    <li><Link to="/cart">Koszyk</Link></li>
                    <li><Link to="/checkout">Checkout</Link></li>
                </ul>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/contact" element={<Contact />}></Route>
                    <Route path="*" element={<NotFound />}></Route>
                    <Route path="/user/:id/:imie" element={<User />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/dashboard" element={<Dashboard />}></Route>
                    <Route path="/oldabout" element={<OldAbout />}></Route>
                    <Route path="/user/:id" element={<User />}></Route>
                    <Route path="/product/:product/:category/:id" element={<Product />}></Route>
                    <Route path="/profile/:profil/:username" element={<Profile />}></Route>
                    <Route path="/navigate" element={<Navigate />}></Route>
                    <Route path="/products" element={<Products />} />
                    <Route path="/products/:id" element={<ProductDetails />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/checkout" element={<Checkout />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default CwiczeniaRouter;