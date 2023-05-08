import React, {useState} from "react";
import "./ITC.css";
import Tour from "../../Tour/Tour";

function ITC(props) {
    const locations = ["enter", "upstair", "right", "righter", "left", "lefter"];
    const nextLocation = [[1], [0, 2, 4], [1, 3], [2], [1, 5], [4]];

    const [currentLocation, setCurrentLocation] = useState(0);

    const moveToNextLocation = (nextLocationIndex) => {
        setCurrentLocation(nextLocationIndex);
    };

    return (
        <div className="ITC">
            <Tour imageUrl={"/" + locations[currentLocation] + ".jpg"}/>


            <div className="button-container">
                {nextLocation[currentLocation].map((nextLocIndex) => (
                    <button
                        key={nextLocIndex}
                        className="location-button"
                        onClick={() => moveToNextLocation(nextLocIndex)}
                    >
                        {locations[nextLocIndex]}
                    </button>
                ))}
            </div>
            <h1></h1>
        </div>
    );
}

export default ITC;

