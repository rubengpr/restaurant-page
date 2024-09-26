//menupage.js file

import { foodMenu, drinksMenu } from "./menucontent"

function loadMenu() {
    const content = document.getElementById("content");
    
    content.innerHTML = "";

    content.style.display = "flex";
    content.style.flexDirection = "column";
    content.style.justifyContent = "center";
    content.style.alignItems = "center";

    const menuCanvas = document.createElement("div");
    menuCanvas.setAttribute("class", "menu-canvas");
    content.appendChild(menuCanvas)

    const menuHeader = document.createElement("h2");
    menuHeader.setAttribute("class", "menu-header");
    menuHeader.textContent = "Food";
    menuCanvas.appendChild(menuHeader);

    const foodContent = document.createElement("div");
    foodContent.setAttribute("class", "food-content");
    menuCanvas.appendChild(foodContent);

    for (let i=0; i < 6; i++) {
    const divDish = document.createElement("div");
    divDish.setAttribute("class", "dish-div");
    foodContent.appendChild(divDish);

    const dishTitle = document.createElement("h3");
    dishTitle.setAttribute("class", "dish-title");
    dishTitle.textContent = foodMenu[i].title;
    divDish.appendChild(dishTitle);

    const dishDescription = document.createElement("p");
    dishDescription.setAttribute("class", "dish-description");
    dishDescription.textContent = foodMenu[i].description;
    divDish.appendChild(dishDescription);

    const dishPrice = document.createElement("p");
    dishPrice.setAttribute("class", "dish-price");
    dishPrice.textContent = foodMenu[i].price;
    divDish.appendChild(dishPrice);
    }

    const drinksHeader = document.createElement("h2");
    drinksHeader.setAttribute("class", "menu-header");
    drinksHeader.textContent = "Drinks";
    menuCanvas.appendChild(drinksHeader);


    const drinksContent = document.createElement("div");
    drinksContent.setAttribute("class", "drinks-content");
    menuCanvas.appendChild(drinksContent);

    for (let i=0; i < 5; i++) {
    const divDish = document.createElement("div");
    divDish.setAttribute("class", "dish-div");
    drinksContent.appendChild(divDish);
    
    const drinkTitle = document.createElement("h3");
    drinkTitle.setAttribute("class", "dish-title");
    drinkTitle.textContent = drinksMenu[i].title;
    divDish.appendChild(drinkTitle);
    
    const drinkDescription = document.createElement("p");
    drinkDescription.setAttribute("class", "dish-description");
    drinkDescription.textContent = drinksMenu[i].description;
    divDish.appendChild(drinkDescription);
    
    const drinkPrice = document.createElement("p");
    drinkPrice.setAttribute("class", "dish-price");
    drinkPrice.textContent = drinksMenu[i].price;
    divDish.appendChild(drinkPrice);
    }

}

export { loadMenu }