import React, {useState, useEffect} from "react";
import "./Universities.css";
import Container from "../Container/Container";
import Locations from "../Locations/Locations";
import {faGraduationCap as cap} from "@fortawesome/free-solid-svg-icons";

function Universities(props) {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [selectedLocation, setSelectedLocation] = useState("");

    useEffect(() => {
        if (isPopupOpen) {
            document.body.classList.add("blur");
        } else {
            document.body.classList.remove("blur");
        }
    }, [isPopupOpen]);

    const handleLocationClick = (location) => {
        setSelectedLocation(location);
        setIsPopupOpen(true);
    };

    const handleClose = () => {
        setIsPopupOpen(false);
    };

    return (
        <div>
            <Container>
                <div className="square square7"></div>
                <div className="square square8"></div>
                <div className="square square9"></div>
                <div className="square square10"></div>
                <div className="square square11"></div>
                <div className="square square12"></div>

                <h1 className="page-title">Ready to explore?</h1>
                <h2 className="page-subtitle">Choose your destination</h2>
                <div className="places">
                    <Locations
                        text="Vrijhof"
                        photo={cap}
                        onClick={() => handleLocationClick("Vrijhof")}
                    />
                    <Locations
                        text="ITC"
                        photo={cap}
                        onClick={() => handleLocationClick("ITC")}
                    />
                    <Locations
                        text="Spiegel"
                        photo={cap}
                        onClick={() => handleLocationClick("Spiegel")}
                    />
                    <Locations
                        text="Horst"
                        photo={cap}
                        onClick={() => handleLocationClick("Horst")}
                    />
                </div>
            </Container>
            {isPopupOpen && (
                <div className="popup-overlay" onClick={handleClose}>
                    <div className="popup">
                        <h2>{selectedLocation}</h2>
                        <p>This is the popup content for {selectedLocation}.</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Universities;
