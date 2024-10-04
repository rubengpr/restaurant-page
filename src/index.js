import "./styles.css";
import { loadMain } from "./mainpage";
import { loadMenu } from "./menupage";
import { loadContact } from "./contactpage";

window.onLoad = loadMain();

document.getElementById("menu-button").addEventListener("click", loadMenu);
document.getElementById("home-tab").addEventListener("click", loadMain);
document.getElementById("menu-tab").addEventListener("click", loadMenu);
document.getElementById("contact-tab").addEventListener("click", loadContact);
