import React, { useState } from 'react';
import '../styles.css';

function ListParkingSpaces({ initialParkingSpaces }) {
  const [parkingSpaces, setParkingSpaces] = useState(initialParkingSpaces);

  const returnToRegistrationPage = () => {
    window.location.replace("/");
  };

  const handleDelete = (index) => {
    const updatedParkingSpaces = [...parkingSpaces];
    updatedParkingSpaces.splice(index, 1);
    setParkingSpaces(updatedParkingSpaces);
  };

  return (
    <div>
      <h1>Vagas registradas</h1>
      <ul>
        {parkingSpaces.map((parkingSpace, index) => (
          <li key={index}>
            Placa do veículo: {parkingSpace.plate}, Número da vaga: {parkingSpace.parkingNumber}, Nome do proprietário: {parkingSpace.name}
            <button onClick={() => handleDelete(index)} className='buttonDelete'>Excluir</button>
          </li>
        ))}
      </ul>
      <div className="button-container">
        <button onClick={returnToRegistrationPage} className="button">Retornar a página de registro</button>
      </div>
    </div>
  );
}

// Iniciando com dados fictícios
ListParkingSpaces.defaultProps = {
  initialParkingSpaces: [
    { plate: 'AAA-1234', parkingNumber: 1, name: 'Carlos' },
    { plate: 'BBB-5678', parkingNumber: 2, name: 'Roberto' }
  ]
};

export default ListParkingSpaces;
