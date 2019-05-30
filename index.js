window.addEventListener("DOMContentLoaded", function() {
    var burger = document.getElementsByClassName('burger')[0];
    burger.onclick = function() {
        burger.classList.toggle("burger-active");
    }
});