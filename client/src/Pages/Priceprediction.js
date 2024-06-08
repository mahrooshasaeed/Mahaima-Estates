import React, { useState } from "react";
import "../styles/priceprediction.scss"; // Assuming similar styles to login.scss
import axios from "axios";

const PricePrediction = () => {
  const [bedrooms, setBedrooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [size, setSize] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [prediction, setPrediction] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const inputData = {
      beds: bedrooms,
      baths: bathrooms,
      size: size,
      zip_code: zipCode,
    };

    try {
      const response = await axios.post("http://localhost:5001/prediction", inputData);
      setPrediction(response.data.prediction);
    } catch (error) {
      console.error("There was an error making the prediction!", error);
    }
  };

  return (
    <div className="prediction">
      <div className="prediction_content">
        <form className="prediction_content_form" onSubmit={handleSubmit}>
          <input
            type="number"
            placeholder="Bedrooms"
            value={bedrooms}
            onChange={(e) => setBedrooms(e.target.value)}
            required
          />
          <input
            type="number"
            step="0.1"
            placeholder="Bathrooms"
            value={bathrooms}
            onChange={(e) => setBathrooms(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Size (sq ft)"
            value={size}
            onChange={(e) => setSize(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Zip Code"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            required
          />
          <button type="submit">Predict</button>
        </form>
        {prediction && <h2>Predicted Price: ${prediction}</h2>}
      </div>
    </div>
  );
};

export default PricePrediction;
