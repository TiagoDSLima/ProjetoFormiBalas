function pesquisa() {
    var busca;
    var filtro;
    var section; 
    var cards;
    var p;
    var i, j;
    busca = document.getElementById("barraPesquisa");
    filtro = busca.value.toUpperCase();
    section = document.getElementById("cards");
    cards = section.getElementsByClassName("card");

    for (j = 0; j < cards.length; j++) {
        var card = cards[j];
        var textoDiv = card.querySelector(".texto");
        var p = textoDiv.querySelectorAll("p");
        var encontrado = false;
        for (i = 0; i < p.length; i++) {
            if (p[i].innerHTML.toUpperCase().indexOf(filtro) > -1) {
                encontrado = true;
                break;
            }
        }
        if (encontrado) {
            card.style.display = ""; 
        } else {
            card.style.display = "none"; 
        }
    }
}