$('#icon1').click(function(){
    $('.carrinhoPosition').animate({width:'toggle'},300);
});

$('#exitCarrinho').click(function(){
    $('.carrinhoPosition').animate({width:'hide'},300);
});

$('.caixaDePesquisa').on('click', function(){
    $('.dropdownPesquisa').animate({height:'toggle'},"fast");
    $(':input').css("border-bottom-left-radius", "0px");
    $('.icon3').css("border-bottom-right-radius", "0px");
});

//botão carrinho
// $('.marketButton').click(function(){
//     $('.emptyBagPosition').remove();
// });
