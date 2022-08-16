let buttonCarrinho = document.getElementById("icon1");

buttonCarrinho.addEventListener("click", function() {

    let carrinho = document.getElementById("carrinho");

    if(carrinho.style.display === "none") {
        carrinho.style.display = "flex";
    }

    else {
        carrinho.style.display = "none";
    }

});

let buttonInteriorCarrinho = document.getElementById("exitCarrinho");

buttonInteriorCarrinho.addEventListener("click", function() {

    let carrinho = document.getElementById("carrinho");

    if(carrinho.style.display === "none") {
        carrinho.style.display = "flex";
    }

    else {
        carrinho.style.display = "none";
    }

});