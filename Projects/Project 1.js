function handleFormSubmit(event) {
    event.preventDefault();

    const data = new FormData(event.target);

    const formJSON = Object.fromEntries(data.entries());

    formJSON.communication = data.getAll('communication');

    const results = document.querySelector('.results pre');
    results.innerText = JSON.stringify(formJSON, null, 2);
}

const form = document.querySelector('.contact-form');
form.addEventListener('submit', handleFormSubmit);