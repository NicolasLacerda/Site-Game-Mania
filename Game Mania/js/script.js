$('#icon1').click(function(){
    $('.carrinhoPosition').animate({width:'toggle'},300);;
});

$('#exitCarrinho').click(function(){
    $('.carrinhoPosition').animate({width:'hide'},300);;
});

//botão carrinho
// $('.marketButton').click(function(){
//     $('.emptyBagPosition').remove();
// });

let radio = document.getElementsByClassName("btnSlider")
let numberRadio = radio.length

let i = 0
console.log(i)

$(document).ready(function(){

$('#next').click(function(){

    if(i<=1){
        i++;
    }

    else if (i=2){
        i=0;
    }

    $(radio[i]).prop('checked', true);
});

$('#prev').click(function(){

    if(i>=1){
        i--;
    }
    
    else if (i=1){
        i=2;
    }

    $(radio[i]).prop('checked', true);
});

});
