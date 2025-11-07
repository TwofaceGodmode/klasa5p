import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useParams,
    useNavigate,
} from "react-router-dom";

const SAMPLE_PRODUCTS = [
    { id: "1", title: "The Pragmatic Programmer", category: "books", price: 79 },
    { id: "2", title: "Wireless Mouse", category: "electronics", price: 49 },
    { id: "3", title: "Notebook", category: "stationery", price: 9 },
];

function Home() {
    return (
        <div className="p-6">
            <p className="mt-2">Wybierz jedną z tras w menu po lewej stronie.</p>
        </div>
    );
}

function UserById() {
    const { id } = useParams();
    return (
        <div className="p-6">
            <h2 className="text-xl">Profil użytkownika</h2>
            <p className="mt-2">„Profil użytkownika o ID: {id}”</p>
        </div>
    );
}

function ProductByCategoryAndId() {
    const { category, id } = useParams();
    return (
        <div className="p-6">
            <h2 className="text-xl">Szczegóły produktu</h2>
            <p className="mt-2">„Produkt {id} z kategorii {category}”</p>
        </div>
    );
}

function ProfileOptional() {
    const { username } = useParams();
    return (
        <div className="p-6">
            <h2 className="text-xl">Profil (opcjonalny)</h2>
            <p className="mt-2">
                {username ? `Profil użytkownika ${username}` : "Nie wybrano użytkownika"}
            </p>
        </div>
    );
}

function HistoryNav() {
    const navigate = useNavigate();
    return (
        <div className="p-6">
            <h2 className="text-xl">Historia przeglądarki</h2>
            <div className="mt-4 space-x-2">
                <button
                    className="px-4 py-2 rounded shadow hover:opacity-90 border"
                    onClick={() => navigate(-1)}
                >
                    Wstecz
                </button>
                <button
                    className="px-4 py-2 rounded shadow hover:opacity-90 border"
                    onClick={() => navigate(1)}
                >
                    Dalej
                </button>
            </div>
        </div>
    );
}

function Zadania() {
    return (
        <Router>
            <div className="flex">
                {/* menu po lewej */}
                <nav className="w-48 p-4 border-r">
                    <ul className="space-y-2">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/user/123">User 123</Link></li>
                        <li><Link to="/product/books/1">Product (books/1)</Link></li>
                        <li><Link to="/profile">Profile (bez nazwy)</Link></li>
                        <li><Link to="/profile/jan">Profile Jan</Link></li>
                        <li><Link to="/history">Historia</Link></li>
                    </ul>
                </nav>

                {/* prawa strona z treścią */}
                <main className="flex-1 p-4">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/user/:id" element={<UserById />} />
                        <Route path="/product/:category/:id" element={<ProductByCategoryAndId />} />
                        <Route path="/profile" element={<ProfileOptional />} />
                        <Route path="/profile/:username" element={<ProfileOptional />} />
                        <Route path="/history" element={<HistoryNav />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default Zadania;
