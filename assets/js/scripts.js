// Открытие модального окна
document.getElementById("open-modal").addEventListener("click", function(){
    document.getElementById("modal").classList.add("open")
})

// Закрытие модального окна
document.getElementById("krest-close").addEventListener("click", function(){
    document.getElementById("modal").classList.remove("open")
})

// Закрыть модальное окно при нажатии Esc
window.addEventListener("keydown", (e) =>{
    if (e.key === "Escape") {
        document.getElementById("modal").classList.remove("open")
    }
})

// Закрыть модальное окно при клике вне окна
document.querySelector("#modal .modal-box").addEventListener("click", event => {
    event._isClickWithInModal = true;
});
document.getElementById("modal").addEventListener("click", event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove("open")
})