import React from 'react';
import {users} from '../data.js';

const Cwiczenia2 = () => {

    const totalSalary = users.filter(user => user.age < 25 ).map(user => user.salary)
        .reduce((acc, salary) => acc + salary, 0)

    const totalSalary2 = users.map(user => user.salary)
        .reduce((acc, salary) => acc + salary, 0)

    const search = "an";
    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(search.toLowerCase())
    );


    return (
        <div>
            <ul>
                {
                users.filter(user => user.name.startsWith("A") )
                    .map((user) =>
                    <li key={user.id} style={{color: user.salary>4500?"green":"red", border: "1px black solid", margin: "5px", padding: "2px" }}>
                        {user.name} {user.age} {user.city} {user.salary}
                    </li>
                )
                }
                {
                    <h3>Koszty zarobków: {totalSalary}</h3>
                }

            </ul>

            <h2>Zadanie 1</h2>
            <ul>
            {

                users.filter(user => user.name.startsWith("M") )
                    .map((user) =>
                        <li key={user.id} style={{color: "black", border: "1px black solid", margin: "5px", padding: "2px" }}>
                            {user.name} {user.age} {user.city} {user.salary}
                        </li>
                    )
            }
                <h2>Zadanie 2</h2>
                {
                    users.filter(user => user.age < 28 )
                        .map((user) =>
                            <li key={user.id} style={{color: "black", border: "1px black solid", margin: "5px", padding: "2px" }}>
                                {user.name} {user.age}
                            </li>
                        )
                }
                <h2>Zadanie 3</h2>
                    <h4>Średnia płaca:</h4>
                {
                    totalSalary2 / users.length
                }

                <h2>Zadanie 4</h2>
                {
                    users.filter(user => user.salary > 6000 )
                        .map((user) =>
                            <li key={user.id} style={{color: "black", border: "1px black solid", margin: "5px", padding: "2px" }}>
                                {user.name}
                            </li>
                        )
                }

                <h2>Zadanie 5</h2>
                {
                    users
                        .map((user) =>
                            <li key={user.id}>
                                console.log({user.name} {user.age})
                            </li>
                        )
                }
                <h2>Zadanie 6</h2>
                {
                    users.filter(user => user.name.startsWith("M") )
                        .map((user) =>
                            <li key={user.id} style={{color: "black", border: "1px black solid", margin: "5px", padding: "2px" }}>
                                {user.name} {user.age} {user.city} {user.salary}
                            </li>
                        )
                }



            <h2>Zadanie 7 </h2>

            {
                users.filter(user =>users.sort((a, b) => a.age - b.age) )
                    .map((user) =>
                        <li key={user.id} style={{border: "1px black solid", margin: "5px", padding: "2px" }}>
                            {user.name} {user.age}
                        </li>
                    )
            }


            <h2>Zadanie 8 </h2>

            {
                users.filter(user => user.salary >= 5000 && user.salary <= 6000 )
                    .map((user) =>
                        <li key={user.id} style={{color: "black", border: "1px black solid", margin: "5px", padding: "2px" }}>
                            {user.name} {user.age} {user.city} {user.salary}
                        </li>
                    )
            }
            <h2>Zadanie 9</h2>
                {

                }

            <h2>Zadanie 10</h2>
                {
                    users.filter(user => user.name && user.city === "Warszawa" && user.salary > 5000 )
                        .map((user) =>
                            <li key={user.id} style={{color: "black", border: "1px black solid", margin: "5px", padding: "2px" }}>
                                <strong>{user.name}</strong>
                            </li>
                        )
                }


            </ul>
        </div>
    );
};

export default Cwiczenia2;