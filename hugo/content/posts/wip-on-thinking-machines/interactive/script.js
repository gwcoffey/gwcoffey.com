// const States = Object.freeze({
//     IDLE:   Symbol("idle"),
//     ENCODING:  Symbol("encoding"),
//     TRANSFORMING: Symbol("transforming"),
//     DECODING: Symbol("decoding")
// });
//
// const simpleAdder = {
//     state: States.IDLE,
//     element: null,
//     input: {
//         a: [0,1,2],
//         b: [0,1,2]
//     },
//     memory: new Array(11).fill(false),
//     program: {
//         encode: (buf, a, b) => {
//             buf = new Array(11).fill(false);
//             buf[a] = true;
//             buf[b + 3] = true;
//         },
//         transform: [{
//             cond: (buf) => buf[0],
//             do: (buf) => buf.splice(6, 3, ...buf.slice(2, 5))
//         }, {
//             cond: (buf) => buf[1],
//             do: (buf) => buf.splice(7, 3, ...buf.slice(2, 5))
//         }, {
//             cond: (buf) => buf[2],
//             do: (buf) => buf.splice(8, 3, ...buf.slice(2, 5))
//         }
//         ],
//         decode: (buf) => {
//             return buf.slice(6).findIndex((e) => e) - 6;
//         }
//     }
// }
//
// function setupEncodingDemo() {
//     let container = document.querySelector("#encoding-demo");
//     let selectA = container.querySelector("select.a");
//     let selectB = container.querySelector("select.b");
//     let universe = container.querySelector(".universe");
//     let slots = universe.querySelectorAll("li");
//
//     let draw = () => {
//         let frag = document.createDocumentFragment();
//         let a = parseInt(selectA.value, 10);
//         let b = parseInt(selectB.value, 10);
//
//         // clear all
//         slots.forEach(el => el.dataset["full"] = "");
//
//         slots[a].dataset["full"] = "true";
//         slots[b+3].dataset["full"] = "true";
//     };
//
//     container.querySelectorAll("select")
//         .forEach(el => el.addEventListener("change", draw));
// }
//
// function buildComputer(computer, element) {
//     computer.element = element;
//     let form = element.querySelector("form");
//     let inputA = form.querySelector('[name="a"]');
//     let inputB = form.querySelector('[name="b"]');
//     let output = form.querySelector('[name="output"]');
//     let universe = element.querySelector(".universe");
//     let steps = element.querySelector(".steps");
//
//     const frag = document.createDocumentFragment();
//
//     // add slots to universe
//     computer.memory.forEach(() => {
//         let div = document.createElement("div");
//         let li = document.createElement("li");
//         li.appendChild(div);
//         frag.appendChild(li);
//     });
//     universe.appendChild(frag);
//
//     // add steps
//     let encodeLi = document.createElement("li");
//     let encodeSpan = document.createElement("span");
//
//
//     console.log(inputA, inputB, output);
// }
//
// document.addEventListener("DOMContentLoaded", () => {
//     setupEncodingDemo();
//     buildComputer(simpleAdder, document.querySelector("#simple-adder"));
// });

const TMPL_MEMORY = Object.assign(document.createElement("template"), {
    innerHTML: "<ol class=\"universe\"></ol>"});

const TMPL_BIT = Object.assign(document.createElement("template"), {
    innerHTML: "<li><div></div></li>"});

customElements.define('visual-computer', class extends HTMLElement {


    static get observedAttributes() {
        return ['size'];
    }

    constructor() {
        super();
        this.size = 8;
    }

    attributeChangedCallback(property, oldValue, newValue) {
        if (oldValue === newValue) return;
        this[ property ] = newValue;
    }

    connectedCallback() {
        const shadow = this.attachShadow({ mode: 'closed' });
        const memory = TMPL_MEMORY.content.cloneNode(true);
        for (let i = 0; i < this.size; i++) {
            memory.querySelector("ol").appendChild(TMPL_BIT.content.cloneNode(true));
        }

        shadow.appendChild(memory);
    }
});