import {Navbar} from "./navbar.js";
import {Data} from "../data/data.js";

const body = document.querySelector("body");
const section = document.querySelector("#main-content");
const data = new Data();
const navbar = new Navbar(body, "Smoes Place", data);


section.insertAdjacentHTML("beforeend", data.home.welcome);

body.insertAdjacentHTML("beforeend", `<footer></footer>`);
console.log(data);

