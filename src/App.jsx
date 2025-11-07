import Zadania from "./Zadania";
import Cwiczenia3 from "./cwiczenia3/Cwiczenia3.jsx";
import CwiczeniaRouter from "./cwiczenia3/CwiczeniaRouter.jsx";
import HookEffect from "./useEffect/HookEffect.jsx";
import PierwszeRysowanie from "./useEffect/PierwszeRysowanie.jsx";
import Klikacz from "./useEffect/Klikacz.jsx";
import Zegar from "./useEffect/Zegar.jsx";
import LicznikZProgiem from "./useEffect/LicznikZProgiem.jsx";
import StatusSieci from "./useEffect/StatusSieci.jsx";
import Informacje from "./useEffect/Informacje.jsx";
import {useState} from "react";
import styled from 'styled-components'
import Welcome from "./cwicenia4/Welcome.jsx";
import Card from "./cwicenia4/Card.jsx";
import Button from "./cwicenia4/Button.jsx";
import UserCard from "./ćwiczenia/UserCard.jsx";
import UserProfile from "./cwicenia4/UserProfile.jsx";
import StyledExample from "./cwicenia4/StyledExample.jsx";
import StyledButton from "./cwicenia4/StyledButton.jsx";
import AlertBox from "./cwicenia4/AlertBox.jsx";


const Alert = styled.div`
  background-color: ${(props) => props.bg || "lightgray"};
  color: ${(props) => (props.bg === "red" ? "white" : "black")};
  padding: 10px;
  border-radius: 5px;
`;


function App() {



    return(
        <>
        {/*<Alert>Neutral</Alert>*/}
        {/*<Alert bg="red">Czerwony</Alert>*/}
        {/*<Alert bg="green">Zielony</Alert>*/}

           <Welcome/>
            <Card></Card>
            <Button></Button>
            <UserProfile></UserProfile>
            <StyledExample/>
            <StyledButton></StyledButton>

            <div>
                <AlertBox type="success" />
                <AlertBox type="error" />
                <AlertBox type="info" />
                <AlertBox>Bez typu (domyślny)</AlertBox>
            </div>
        </>

        )

}

export default App;
