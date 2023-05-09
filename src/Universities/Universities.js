import React, {useState, useEffect} from "react";
import "./Universities.css";
import Container from "../Container/Container";
import Locations from "../Locations/Locations";
import {faGraduationCap as cap} from "@fortawesome/free-solid-svg-icons";
import Button from "../Buttons/Button";
import {Link} from "react-router-dom";

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
                        ico={cap}
                        photo="/vrijhof-1.jpg"
                        // onClick={() => handleLocationClick("Vrijhof")}
                        inactive={true}
                    />
                    <Locations
                        text="ITC"
                        ico={cap}
                        onClick={() => handleLocationClick("ITC")}
                        photo="/ict.jpg"

                    />
                    <Locations
                        text="Spiegel"
                        ico={cap}
                        // onClick={() => handleLocationClick("Spiegel")}
                        photo="/spiegel.jpeg"
                        inactive={true}
                    />
                    <Locations
                        text="Horst"
                        ico={cap}
                        // onClick={() => handleLocationClick("Horst")}
                        photo="/horst.jpg"
                        inactive={true}
                    />
                </div>
            </Container>
            {isPopupOpen && (
                <div className="popup-overlay" onClick={handleClose}>
                    <div className="popup">
                        <h2>{selectedLocation}</h2>
                        <p>
                            ITC, the Faculty of Geo-Information Science and Earth Observation, has moved to the campus.
                        </p>
                        <p>
                            The courtyard gardens in the new building are particularly popular. The renovated Langezijds
                            has 'green lungs': inside the building are gardens, surrounded by study and work areas. The
                            indoor gardens are not just there for decoration, but also help with natural ventilation.
                            Rainwater is also collected, which is used to water the plants in the inner gardens.

                        </p>
                        <div className="photoBox">
                            <img src="/ict.jpg" className="popup-photo" alt="ITC"></img>
                        </div>
                        <br/>
                        <div className="photoBox">
                        <Button
                            to={"/universities/" + selectedLocation}
                            active="true"
                            className="popup-photo"
                            text="Teleport there now!"/>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Universities;
