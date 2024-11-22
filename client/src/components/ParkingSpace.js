import React, { useState } from 'react';
import '../styles/ParkingSpace.css'; // Import the CSS file

const ParkingSpace = () => {
  const [twoWheelerSpaces, setTwoWheelerSpaces] = useState(10);
  const [bookedTwoWheelerSpaces, setBookedTwoWheelerSpaces] = useState(0);
  const [threeWheelerSpaces, setThreeWheelerSpaces] = useState(5);
  const [bookedThreeWheelerSpaces, setBookedThreeWheelerSpaces] = useState(0);
  const [fourWheelerSpaces, setFourWheelerSpaces] = useState(8);
  const [bookedFourWheelerSpaces, setBookedFourWheelerSpaces] = useState(0);

  const bookSpace = (type) => {
    if (type === 'two-wheeler' && twoWheelerSpaces > 0) {
      setTwoWheelerSpaces(twoWheelerSpaces - 1);
      setBookedTwoWheelerSpaces(bookedTwoWheelerSpaces + 1);
    } else if (type === 'three-wheeler' && threeWheelerSpaces > 0) {
      setThreeWheelerSpaces(threeWheelerSpaces - 1);
      setBookedThreeWheelerSpaces(bookedThreeWheelerSpaces + 1);
    } else if (type === 'four-wheeler' && fourWheelerSpaces > 0) {
      setFourWheelerSpaces(fourWheelerSpaces - 1);
      setBookedFourWheelerSpaces(bookedFourWheelerSpaces + 1);
    } else {
      alert('No available spaces for this type of vehicle.');
    }
  };

  return (
    <div id="parking-space">
      <h2 id="title">Parking Spaces</h2>
      <div id="parking-types">
        <div id="two-wheeler">
          <h3 id="two-wheeler-title">2-Wheeler Parking</h3>
          <p id="two-wheeler-available">Available Spaces: {twoWheelerSpaces}</p>
          <p id="two-wheeler-booked">Booked Spaces: {bookedTwoWheelerSpaces}</p>
          <button id="two-wheeler-book" onClick={() => bookSpace('two-wheeler')}>Book Space</button>
        </div>
        <div id="three-wheeler">
          <h3 id="three-wheeler-title">3-Wheeler Parking</h3>
          <p id="three-wheeler-available">Available Spaces: {threeWheelerSpaces}</p>
          <p id="three-wheeler-booked">Booked Spaces: {bookedThreeWheelerSpaces}</p>
          <button id="three-wheeler-book" onClick={() => bookSpace('three-wheeler')}>Book Space</button>
        </div>
        <div id="four-wheeler">
          <h3 id="four-wheeler-title">4-Wheeler Parking</h3>
          <p id="four-wheeler-available">Available Spaces: {fourWheelerSpaces}</p>
          <p id="four-wheeler-booked">Booked Spaces: {bookedFourWheelerSpaces}</p>
          <button id="four-wheeler-book" onClick={() => bookSpace('four-wheeler')}>Book Space</button>
        </div>
      </div>
    </div>
  );
};

export default ParkingSpace;
