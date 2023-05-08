import React from "react";
import "./Locations.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Locations(props) {
    return (
        <div className="card" onClick={props.onClick}>
            <div className="card-image">
                <img
                    className="card-image"
                    src="https://source.unsplash.com/random"
                    alt="Card Image"
                />
            </div>
            <div className="card-footer">
                <div className="card-text">{props.text}</div>
                <div className="card-icon">
                    <FontAwesomeIcon icon={props.photo} />
                </div>
            </div>
        </div>
    );
}

export default Locations;
