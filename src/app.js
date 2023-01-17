import * as utils from "./modules/utils";
import Color from "./modules/Color";
import { Notyf } from 'notyf';

const notyf = new Notyf();

const displayColors = (palette, input) => {
    // reset
    document.querySelector("main").innerHTML = "";
    // Generate color
    palette.forEach( color => new Color(color).display(document.querySelector("main")) );
    // header
    document.querySelector("header").classList.add("minimized");
    // Background
    document.body.style.backgroundImage = `linear-gradient(-45deg,${palette.map(e => utils.hslTohex(e)).join()})`;
    document.body.style.backgroundSize = `400% 400%`;
    // shadow
    document.documentElement.style.setProperty('--shadow-color', utils.hexTohslCSS(input));
}

document.querySelector("form").addEventListener("submit", (event) => {
    const input = event.target.children[0].value;
    try {
        const arrayhsl = utils.hexToArrayhsl(input);
        displayColors(arrayhsl, input);
    } catch (error) {
        notyf.error(error.message);
    }
    event.preventDefault();
});

document.querySelector("main").addEventListener("click", (event) => {
    if (event.target.classList.contains("color")){
        navigator.clipboard.writeText(event.target.dataset.color).then(notyf.success(`copied ${event.target.dataset.color} to clipboard`));
    } else if (event.target.parentElement.classList.contains("color")) {
        navigator.clipboard.writeText(event.target.parentElement.dataset.color).then(notyf.success(`copied ${event.target.parentElement.dataset.color} to clipboard`));
    }
});
