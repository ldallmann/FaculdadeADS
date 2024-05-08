import React from 'react';
import '../styles.css';

function AvailableParkings({ availableParkingSpaces }) {
  const returnToRegistrationPage = () => {
    window.location.replace("/");
  };

  return (
    <div>
      <h1>Vagas disponíveis</h1>
      <ul className="available-info">
        {availableParkingSpaces.map((parkingSpace, index) => (
          <li key={index}>
            Vaga: {parkingSpace.number}, Status: {parkingSpace.status}
          </li>
        ))}
      </ul>
      <div className="button-container">
        <button onClick={returnToRegistrationPage} className="button">Retornar a página de registro</button>
      </div>
    </div>
  );
}

export default AvailableParkings;
