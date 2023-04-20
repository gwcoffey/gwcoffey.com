document.addEventListener("DOMContentLoaded", () => {
    let container = document.querySelector("#encoding-demo");
    let selectA = container.querySelector("select.a");
    let selectB = container.querySelector("select.b");
    let universe = container.querySelector(".universe");
    let slots = universe.querySelectorAll("li");

    let draw = () => {
        let frag = document.createDocumentFragment();
        let a = parseInt(selectA.value, 10);
        let b = parseInt(selectB.value, 10);

        // clear all
        slots.forEach(el => el.dataset["full"] = "");

        if (a > 0) slots[a-1].dataset["full"] = "true";
        if (b > 0) slots[b+2].dataset["full"] = "true";
    };

    container.querySelectorAll("select")
        .forEach(el => el.addEventListener("change", draw));
});