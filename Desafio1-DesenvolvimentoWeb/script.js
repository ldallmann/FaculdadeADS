let registeredParkingSpaces = [];

const registration1 = {
    plate: 'ABC1234',
    name: 'João Silva',
    apartmentNumber: 401,
    block: 'D',
    model: 'Toyota Corolla',
    color: 'Branco',
    parkingNumber: 1
};

const registration2 = {
    plate: 'JKL5678',
    name: 'Maria Santos',
    apartmentNumber: 203,
    block: 'B',
    model: 'Chevrolet Onix',
    color: 'Prata',
    parkingNumber: 4
};

const registration3 = {
    plate: 'MNO9012',
    name: 'Pedro Souza',
    apartmentNumber: 102,
    block: 'A',
    model: 'Fiat Uno',
    color: 'Preto',
    parkingNumber: 6
};

registeredParkingSpaces.push(registration1, registration2, registration3);

window.onload = function () {
        let url = window.location.href;
        let fileName = url.substring(url.lastIndexOf('/') + 1);
    
        if (fileName === 'Registration.html') {
            document.getElementById('registration').style.display = 'block';
        }
    
        if (fileName === 'ListParkingSpaces.html') {
            displayRegisteredParkingSpaces();
        }
    
        if (fileName === 'AvailableParkings.html') {
            displayAvailableParkingSpaces();
        }
    }

function displayRegisteredParkingSpaces() {
    const listRegisteredParkingSpaces = document.getElementById('registeredParkingSpaces');
    listRegisteredParkingSpaces.innerHTML = '';

    registeredParkingSpaces.forEach((parkingSpace, index) => {
        const item = document.createElement('li');
        item.textContent = `Placa do veículo: ${parkingSpace.plate}, Número da vaga: ${parkingSpace.parkingNumber}, Nome do proprietário: ${parkingSpace.name}`;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Excluir';
        deleteButton.className = 'delete-button';
        deleteButton.onclick = () => deleteParkingSpace(index);

        item.appendChild(deleteButton);
        listRegisteredParkingSpaces.appendChild(item);
    });
}

function deleteParkingSpace(index) {
    registeredParkingSpaces.splice(index, 1);
    displayRegisteredParkingSpaces();
}
    

function saveRegistration() {
    const plate = document.getElementById('licensePlate').value;
    const name = document.getElementById('ownerName').value;
    const apartmentNumber = document.getElementById('apartmentNumber').value;
    const block = document.getElementById('block').value;
    const model = document.getElementById('model').value;
    const color = document.getElementById('color').value;
    const parkingNumber = document.getElementById('parkingSpaceNumber').value;

    if (plate === '' || name === '' || apartmentNumber === '' || block === '' || model === '' || color === '' || parkingNumber === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    const registration = {
        plate,
        name,
        apartmentNumber,
        block,
        model,
        color,
        parkingNumber
    };

    registeredParkingSpaces.push(registration);

    console.log('Registro feito:', registration);
    alert('Registrado com sucesso!');

    document.getElementById('registrationForm').reset();
}

function displayAvailableParkingSpaces() {
    const listAvailableParkings = document.getElementById('availableParkingSpaces');
    listAvailableParkings.innerHTML = '';

    const totalParkingSpaces = 20;
    const occupiedParkings = registeredParkingSpaces.length;
    const freeParkings = totalParkingSpaces - occupiedParkings;

    const item = document.createElement('li');
    item.textContent = `Vagas disponíveis: ${freeParkings}, Vagas ocupadas: ${occupiedParkings}`;
    listAvailableParkings.appendChild(item);
}

function returnToRegistrationPage() {
    window.location.replace("Registration.html");
}

function listParkingSpacesPage() {
    window.location.replace('ListParkingSpaces.html');
}

function availableParkingSpacesPage() {
    window.location.replace('AvailableParkings.html');
}