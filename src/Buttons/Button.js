import React from "react";
import "./Button.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";

function Button(props) {
    const buttonClass = props.active ? 'button' : 'button inactive';
    return (
        <Link to={props.to} className={buttonClass}>
            <div className="buttontext">{props.text}</div>
            <div className="icon">
                <FontAwesomeIcon icon={props.photo} />
            </div>
        </Link>
    );
}

export default Button;