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
            <h1>Catch-up</h1>
      
            {/* ROW 1: BOTH addresses, side by side */}
            <div className="address-row">
                <div className="address-half">
                    <label>Start Address:</label>
                    <input
                        type="text"
                        value={start}
                        onChange={(e) => setStart(e.target.value)}
                        placeholder="1234 Main Street Vancouver, BC"
                    />
                </div> 
      
                <div className="address-half">
                    <label>Destination Address:</label>
                    <input
                        type="text"
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        placeholder="4321 Main Street Vancouver, BC"
                    />
                </div>
            </div>
      
            {/* ROW 2: Speeds spaced away from center */}
            <div className="speed-row">
                <div className="speed-input">
                    <div className="input-with-helper">
                        <input
                            type="text"
                            value={highwaySpeed}
                            onChange={(e) => setHighwaySpeed(e.target.value)}
                            placeholder="km/h over"
                        />
                        <label>km/h over highway speed limit (80km/hr)</label>
                    </div>
                </div>
      
                <div className="speed-input">
                    <div className="input-with-helper">
                        <input
                            type="text"
                            value={citySpeed}
                            onChange={(e) => setCitySpeed(e.target.value)}
                            placeholder="km/h over"
                        />
                        <label> km/h over city speed limit (50km/h)</label>
                    </div>
                </div>
            </div>
      
            {/* ROW 3: Button */}
            <div className="button-row">
                <button onClick={handleSubmit}>Go!</button>
            </div>
        </div>
      );
      
    
}

export default InputPanel;