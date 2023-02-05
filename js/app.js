window.onload = function () {
    let links = [
        "Portada", "Personajes", "Figuras", "Ficha", "Contacto"
    ]

    function handleClick(index) {
        for (var i = 0; i < links.length; i++) {
            var element = document.getElementById(links[i]);
            if (i === index) {
                element.classList.add("text-light");
            } else {
                element.classList.remove("text-light");
            }
        }
    }

    for (let i = 0; i < links.length; i++) {
        document.getElementById(links[i]).addEventListener("click", handleClick.bind(null, i));
    }
}