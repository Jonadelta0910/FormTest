document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();

    // Obtener los datos del formulario
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Enviar datos a Google Sheets
    fetch('URL_DE_TU_WEB_APP', {
        method: 'POST',
        body: JSON.stringify({ name, email, message }),
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => response.json())
    .then(data => {
        alert('¡Formulario enviado exitosamente!');
        document.getElementById('contactForm').reset();  // Limpiar formulario
    })
    .catch(error => console.error('Error:', error));
}
