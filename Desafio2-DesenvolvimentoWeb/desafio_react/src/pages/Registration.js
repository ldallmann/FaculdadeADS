import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css';

function Registration() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    licensePlate: '',
    ownerName: '',
    apartmentNumber: '',
    block: '',
    model: '',
    color: '',
    parkingSpaceNumber: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const saveRegistration = (e) => {
    e.preventDefault();
    console.log('Registro feito:', formData);
    alert('Registrado com sucesso!');
    setFormData({
      licensePlate: '',
      ownerName: '',
      apartmentNumber: '',
      block: '',
      model: '',
      color: '',
      parkingSpaceNumber: ''
    });
  };

  const goToAvailableParkings = () => {
    navigate('/available-parkings');
  };

  const goToListParkingSpaces = () => {
    navigate('/list-parking-spaces');
  };


  return (
    <div>
      <h2>Registro de Reserva de Veículo</h2>
      <form onSubmit={saveRegistration}>
        <label htmlFor="licensePlate">Placa do veículo:</label>
        <input type="text" id="licensePlate" value={formData.licensePlate} onChange={handleInputChange} required />

        <label htmlFor="ownerName">Nome do proprietário:</label>
        <input type="text" id="ownerName" value={formData.ownerName} onChange={handleInputChange} required />

        <label htmlFor="apartmentNumber">Número do apartamento:</label>
        <input type="text" id="apartmentNumber" value={formData.apartmentNumber} onChange={handleInputChange} required />

        <label htmlFor="block">Bloco do apartamento:</label>
        <input type="text" id="block" value={formData.block} onChange={handleInputChange} required />

        <label htmlFor="model">Modelo do veículo:</label>
        <input type="text" id="model" value={formData.model} onChange={handleInputChange} required />

        <label htmlFor="color">Cor do veículo:</label>
        <input type="text" id="color" value={formData.color} onChange={handleInputChange} required />
        
        <label htmlFor="parkingSpaceNumber">Número da vaga de estacionamento:</label>
        <input type="text" id="parkingSpaceNumber" value={formData.parkingSpaceNumber} onChange={handleInputChange} required />
        
        <div className="button-container">
          <button type="submit" className="save">Salvar</button>
          <button type="button" onClick={goToAvailableParkings} className="button">Lista das vagas disponíveis</button>
          <button type="button" onClick={goToListParkingSpaces} className="button">Lista das vagas registradas</button>
        </div>
      </form>
    </div>
  );
}

export default Registration;
