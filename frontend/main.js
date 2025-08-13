// main.js
const createForm = document.getElementById('createForm');
const clientTable = document.getElementById('clientTable').getElementsByTagName('tbody') [0];

// function to get clients list
function fetchClients() {
  fetch('http://localhost:3306/clients')
    .then(response => response.json())
    .then(data => {
      displayClients(data);
    })
    .catch(error => {
      console.error('Error fetching clients:', error);
    });
}

// Función para mostrar la lista de clientes
function displayClients(clients) {
  clientTable.innerHTML = '';

  clients.forEach(client => {
    const row = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.textContent = client.name_client;
    row.appendChild(nameCell);

    const identifyCell = document.createElement('td');
    identifyCell.textContent = client.identify_client;
    row.appendChild(identifyCell);

    const addressCell = document.createElement('td');
    addressCell.textContent = client.address;
    row.appendChild(addressCell);

    const phoneCell = document.createElement('td');
    phoneCell.textContent = client.phone_number;
    row.appendChild(phoneCell);

    const emailCell = document.createElement('td');
    emailCell.textContent = client.email;
    row.appendChild(emailCell);

    const actionsCell = document.createElement('td');
    const updateButton = document.createElement('button');
    updateButton.textContent = 'Update';
    updateButton.addEventListener('click', () => updateClient(client.id_client));
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => deleteClient(client.id_client));
    actionsCell.appendChild(updateButton);
    actionsCell.appendChild(deleteButton);
    row.appendChild(actionsCell);

    clientTable.appendChild(row);
  });
}

// Función para crear un nuevo cliente
createForm.addEventListener('submit', e => {
  e.preventDefault();

  const name_client = document.getElementById('name_client').value;
  const identify_client = document.getElementById('identify_client').value;
  const address = document.getElementById('address').value;
  const phone_number = document.getElementById('phone_number').value;
  const email = document.getElementById('email').value;

  fetch('/api/clients', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name_client, identify_client, address, phone_number, email })
  })
    .then(response => response.json())
    .then(data => {
      console.log('Client created:', data);
      createForm.reset();
      fetchClients();
    })
    .catch(error => {
      console.error('Error creating client:', error);
    });
});

// Función para actualizar un cliente
function updateClient(id) {
  // Implementar la lógica de actualización del cliente
  console.log('Updating client:', id);
}

// Función para eliminar un cliente
function deleteClient(id) {
  fetch(`/api/clients/${id}`, {
    method: 'DELETE'
  })
    .then(response => response.json())
    .then(data => {
      console.log('Client deleted:', data);
      fetchClients();
    })
    .catch(error => {
      console.error('Error deleting client:', error);
    });
}

// Cargar la lista de clientes al cargar la página
fetchClients();