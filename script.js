const form = document.querySelector('#signup-form form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form input values
    const firstName = form.querySelector('input[name="firstname"]').value;
    const lastName = form.querySelector('input[name="lastname"]').value;
    const email = form.querySelector('input[name="email"]').value;

    // Perform actions with the form data (e.g., validation, sending to a server, etc.)
    // For example, you can display an alert with the submitted data:
    alert(`First Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}`);
});
