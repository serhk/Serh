document.getElementById('elem-id').addEventListener('click', (event) => {
    if (event.target.classList.contains('js-item-class')) {
        // здесь как-то обрабатываем
    }
});

[].forEach.call(document.querySelectorAll("a"), function(el) {
    el.addEventListener("click", function() {
        // code… 
    });
});
