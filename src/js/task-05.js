const userName = document.querySelector("#name-input")
const namePlace = document.querySelector("#name-output")
userName.addEventListener("input", (event) => {
    namePlace.textContent = event.currentTarget.value
    if (event.currentTarget.value === "") {
        namePlace.textContent = "Anonymous"
    }
});