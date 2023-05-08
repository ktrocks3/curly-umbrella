import React from "react";
import "./Locations.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Locations(props) {
    const cardClass = props.inactive ? "card inactive" : "card";
    return (
        <div className={cardClass} onClick={props.onClick}>
            <div className="card-image">
                <img
                    className="card-image"
                    src={props.photo}
                    alt="Location"
                />
            </div>
            <div className="card-footer">
                <div className="card-text">{props.text}</div>
                <div className="card-icon">
                    <FontAwesomeIcon icon={props.ico} />
                </div>
            </div>
        </div>
    );
}

export default Locations;
