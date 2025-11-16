import "./InputPanel.css"
import { useState } from "react";

function InputPanel(props) {
    const [start, setStart] = useState("");
    const [destination, setDestination] = useState("");
    const [highwaySpeed, setHighwaySpeed] = useState("");
    const [citySpeed, setCitySpeed] = useState("");

    const handleSubmit = () => {
        props.onCalculate({
          startAddress: start,
          destinationAddress: destination,
          highwaySpeed: highwaySpeed,
          citySpeed: citySpeed,
        });
    };

    return (
        <div>
            <h1>Enter Addresses & Speeds</h1>
    
            <div className="inputPanelTop">
                <label>Start Address:</label>
                <input
                    type="text"
                    placeholder="Ex. 1234 Main Street Vancouver, BC"
                    value={start}
                    onChange={(e) => setStart(e.target.value)}
                />
    
                <label>Destination Address:</label>
                <input
                    type="text"
                    placeholder="Ex. 4321 Main Street Vancouver, BC"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                />
    
                <label>Speeding amount on Highway (80 km/h):</label>
                <input
                    type="text"
                    placeholder="km/h over limit"
                    value={highwaySpeed}
                    onChange={(e) => setHighwaySpeed(e.target.value)}
                />
    
                <label>Speeding amount on City Roads (50 km/h):</label>
                <input
                    type="text"
                    placeholder="km/h over limit"
                    value={citySpeed}
                    onChange={(e) => setCitySpeed(e.target.value)}
                />
    
                <button onClick={handleSubmit}>Calculate</button>
            </div>
        </div>
    );
    
}

export default InputPanel;