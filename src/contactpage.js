// contactpage.js file

function loadContact() {
    const content = document.getElementById("content");
    
    content.innerHTML = "";
    
    const h2 = document.createElement("h2");
    h2.textContent = "Book a table";
    content.appendChild(h2);

    const divInput = document.createElement("div");
    divInput.setAttribute("class", "div-input");
    content.appendChild(divInput);

    const inputName = document.createElement("input");
    inputName.setAttribute("class", "input-contact");
    inputName.setAttribute("placeholder", "Name");
    divInput.appendChild(inputName);

    const inputPhone = document.createElement("input");
    inputPhone.setAttribute("class", "input-contact");
    inputPhone.setAttribute("placeholder", "Phone number");
    inputPhone.setAttribute("type", "number");
    divInput.appendChild(inputPhone);

    const inputTime = document.createElement("input");
    inputTime.setAttribute("class", "input-time");
    inputTime.setAttribute("type", "time");
    divInput.appendChild(inputTime);

    const submitBook = document.createElement("button");
    submitBook.setAttribute("class", "submit-button");
    submitBook.textContent = "Book";
    divInput.appendChild(submitBook);

    const h3 = document.createElement("h3");
    h3.textContent = "or find us at";
    content.appendChild(h3);

    const pPhone = document.createElement("p");
    pPhone.setAttribute("class", "p-contact");
    pPhone.textContent = "+62 854 555 043";
    content.appendChild(pPhone);

    const pEmail = document.createElement("p");
    pEmail.setAttribute("class", "p-contact");
    pEmail.textContent = "guests@lombokee.id";
    content.appendChild(pEmail);

    const pStreet = document.createElement("p");
    pStreet.setAttribute("class", "p-contact");
    pStreet.textContent = "Sengkol, Lombok Central, Indonesia";
    content.appendChild(pStreet);
}

export { loadContact };