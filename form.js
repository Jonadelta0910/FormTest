fetch('https://script.google.com/macros/s/AKfycbzPmSlQE5rJUvkkY0c6hSo8GLIhl5oXl-B4hcZMlDlGIjAlpWqnZ4nHdGPpE8a-CWTC/exec', {
    method: 'POST',
    body: JSON.stringify({ Name, email, message }),
    headers: {
        'Content-Type': 'application/json',
    },
})
.then(response => response.json())
.then(data => {
    console.log(data);  // Imprimir la respuesta en la consola
    alert('¡Formulario enviado exitosamente!');
    document.getElementById('contactForm').reset();  // Limpiar formulario
})
.catch(error => {
    console.error('Error:', error);
});
