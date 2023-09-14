const card = document.getElementById("card");
const dialog = document.getElementById("dialog");
const closeDialogButton = document.getElementById("close-dialog");

card.addEventListener("click",  () => {
    dialog.style.display = "block";
});

closeDialogButton.addEventListener("click", () => {
    dialog.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === dialog) {
        dialog.style.display = "none";
    }
});

