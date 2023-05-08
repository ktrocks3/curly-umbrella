import Container from "../Container/Container";
import React from "react";
import "./HomePage.css";
import Button from "../Buttons/Button";
import {faBook as fabook} from '@fortawesome/free-solid-svg-icons';
import {faLandmark as landmark} from '@fortawesome/free-solid-svg-icons';
import {faGamepad as games} from '@fortawesome/free-solid-svg-icons';
import {faPizzaSlice as pizza} from '@fortawesome/free-solid-svg-icons';
import {faGraduationCap as cap} from '@fortawesome/free-solid-svg-icons';

function HomePage(props) {
    return (
        <Container>
            <div className="square square1"></div>
            <div className="square square2"></div>
            <div className="square square3"></div>
            <div className="square square4"></div>
            <div className="square square5"></div>
            <div className="square square6"></div>

            <h1 className="page-title">Off we go!</h1>
            <h2 className="page-subtitle">Select a category to start</h2>
            <Button text="Education" photo={fabook}/>
            <Button text="Culture" photo={landmark}/>
            <Button text="Entertainment" photo={games}/>
            <Button text="Restaurants" photo={pizza}/>
            <Button text="Universities" photo={cap} active='true' to="/universities"/>

        </Container>
    );
}

export default HomePage;