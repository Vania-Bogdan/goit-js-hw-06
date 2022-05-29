let counterValue = 0
const valueSpan = document.querySelector("#value");
const buttonDown = document.querySelector('button[data-action="decrement"]')
const buttonUp = document.querySelector('button[data-action="increment"]')


buttonUp.addEventListener("click", () => {
    counterValue = counterValue + 1;
    valueSpan.textContent = counterValue
});
buttonDown.addEventListener("click", () => {
    counterValue = counterValue - 1;
    valueSpan.textContent = counterValue
});


