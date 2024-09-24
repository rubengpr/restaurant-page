//menupage.js file

function loadMenu() {
    const content = document.getElementById("content");
    
    content.innerHTML = "";
    
    const divText = document.createElement("div");
    divText.setAttribute("id", "text");
    content.appendChild(divText);

    
    const h1 = document.createElement("h1");
    h1.textContent = "This is the Menu Page";
    divText.appendChild(h1);

    const p = document.createElement("p");
    p.textContent = "Savor fresh fish, vibrant vegetables, and traditional dishes like Chicken Rendang, all made with local ingredients and love. Join us for a true taste of Lombok’s rich culinary heritage"
    divText.appendChild(p);
}

export { loadMenu }