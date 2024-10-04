// mainpage.js file

import { loadMenu } from "./menupage";

function loadMain() {
  const content = document.getElementById("content");

  content.innerHTML = "";

  const divText = document.createElement("div");
  divText.setAttribute("id", "text");
  content.appendChild(divText);

  const h1 = document.createElement("h1");
  h1.setAttribute("class", "h1-landing");
  h1.textContent = "Authentic Lombok Flavors";
  divText.appendChild(h1);

  const p = document.createElement("p");
  p.setAttribute("class", "p-landing");
  p.textContent =
    "Savor fresh fish, vibrant vegetables, and traditional Indonesian dishes, all made with local ingredients and love";
  divText.appendChild(p);

  const menuButton = document.createElement("button");
  menuButton.setAttribute("id", "menu-button");
  menuButton.textContent = "See Menu";
  divText.appendChild(menuButton);
  menuButton.addEventListener("click", loadMenu);
}

export { loadMain };
