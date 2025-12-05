function toggleMenu() {
    const menu = document.querySelector(".menu");
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}

function showAlert() {
    alert("Кнопка працює! JavaScript виконано успішно.");
}

function submitForm(event) {
    event.preventDefault();
    alert("Форма успішно відправлена!");
}
