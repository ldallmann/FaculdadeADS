import React from 'react';
import '../styles.css';

function ListParkingSpaces({ registeredParkingSpaces = [] }) {
  const returnToRegistrationPage = () => {
    window.location.replace("/");
  };

  registeredParkingSpaces = [
    { plate: 'AAA-1234', parkingNumber: 1, name: 'Carlos' },
    { plate: 'BBB-5678', parkingNumber: 2, name: 'Roberto' },
  ];

  return (
    <div>
      <h1>Vagas registradas</h1>
      <ul>
        {registeredParkingSpaces.map((parkingSpace, index) => (
          <li key={index}>
            Placa do veículo: {parkingSpace.plate}, Número da vaga: {parkingSpace.parkingNumber}, Nome do proprietário: {parkingSpace.name}
          </li>
        ))}
      </ul>
      <div className="button-container">
        <button onClick={returnToRegistrationPage} className="button">Retornar a página de registro</button>
      </div>
    </div>
  );
}

export default ListParkingSpaces;
