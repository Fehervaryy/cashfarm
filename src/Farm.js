import React, { useState, useEffect } from 'react';
import Seal from "./images/SealLogo.jpg";
import { Link } from 'react-router-dom';
import Pig from "./images/pig.png";
import Cow from "./images/cow.png";
import Chicken from "./images/chicken.png";
import Sheep from "./images/sheep.png";
import Horse from "./images/horse.png";
import Money from "./images/money.png";
import sealicon from "./images/SealIcon.png";

const Farm = () => {
  const [animals, setAnimals] = useState([
    { id: 'pig', image: Pig, left: 65, top: 274 },
    { id: 'cow', image: Cow, left: 212, top: 274 },
    { id: 'chicken', image: Chicken, left: 358, top: 274 },
    { id: 'sheep', image: Sheep, left: 65, top: 458 },
    { id: 'horse', image: Horse, left: 212, top: 458 },
    { id: 'money', image: Money, left: 358, top: 458 },
  ]);

  useEffect(() => {
    const glideInterval = setInterval(() => {
      setAnimals(prevAnimals =>
        prevAnimals.map(animal => ({
          ...animal,
          glideDirection: Math.random() * 360, // Random direction in degrees
        }))
      );
    }, 5000); // Interval for changing glide direction

    const moveInterval = setInterval(() => {
      setAnimals(prevAnimals =>
        prevAnimals.map(animal => ({
          ...animal,
          left: animal.left + Math.cos(animal.glideDirection) * 5, // Adjust the speed
          top: animal.top + Math.sin(animal.glideDirection) * 5, // Adjust the speed
        }))
      );
    }, 100); // Interval for moving animals

    return () => {
      clearInterval(glideInterval);
      clearInterval(moveInterval);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div className="twocolours">
      <div className="greenblock">
        <h1 className="cashfarmtitle">Welcome to...</h1>
        <h1 className="cashfarmtitle">Cash Farm!</h1>
        {animals.map(animal => (
          <div key={animal.id} style={{ position: 'absolute', left: animal.left, top: animal.top }}>
            <img src={animal.image} style={{ width: 119, height: 115 }} alt={animal.id} />
          </div>
        ))}
      </div>
      <div style={{ textAlign: 'center', marginTop: '50px', padding: '20px' }}>
        <div className="homepageblock">
          <h1 className="slogancute">Keep track of your finances with the help of cute animals,</h1>
          <h1 className="sloganevil">for now... </h1>
          <Link to="/login">
            <button className="loginbutton">Login</button>
          </Link>
          <Link to="/signup">
            <button className="signupbutton">Sign Up</button>
          </Link>
          {/* <img src={sealicon} style={{ position: 'absolute', bottom: '10px', right: '10px' }} alt="Seal Logo" /> */}
        </div>
      </div>
    </div>
  );
};

export default Farm;
