import { hslTohex } from "./utils.js";

class Color{

    #hsl;
    #hex;
    #element;

    constructor (hsl) {
        this.#hsl = hsl;
        this.#hex = hslTohex(hsl);
        this.#element = this.#generateElement();
    }

    #generateElement () {
        const element = document.createElement("div");
        element.classList.add("color");
        element.dataset.color = this.#hex;
        element.style.backgroundColor = this.#hex;

        const interior = document.createElement("p");
        interior.style.color = this.#hsl[2] < 60 ? "#fff" : "#000";
        interior.innerHTML = this.#hex;
        element.appendChild(interior);

        return element;
    }
    
    display () {
        document.querySelector("main").appendChild(this.#element);
    }
}

export default Color;