$("#icon1").click(function () {
  $(".carrinhoPosition").animate({ width: "toggle" }, 300);
});

$("#icon1").click(function () {
  $(".loginPosition").animate({ width: "hide" }, 300);
});

$("#exitCarrinho").click(function () {
  $(".carrinhoPosition").animate({ width: "hide" }, 300);
});

$("#icon2").click(function () {
  $(".loginPosition").animate({ height: "toggle" }, 300);
});

$("#icon2").click(function () {
  $(".carrinhoPosition").animate({ height: "hide" }, 300);
});

$(".menu").click(function () {
  $(".loginPosition").animate({ height: "toggle" }, 300);
});

$(".caixaDePesquisa").click(function () {
  var clicks = $(this).data("clicks");
  if (clicks) {
    $(".dropdownPesquisa").animate({ height: "hide" }, 300);
    $(":input").css("border-bottom-left-radius", "5px");
    $(".icon3").css("border-bottom-right-radius", "5px");
    setTimeout(function () {
      $(".caixaDePesquisaPosition").removeClass("active");
    }, 301);
  } else {
    $(".caixaDePesquisaPosition").addClass("active");
    $(".dropdownPesquisa").animate({ height: "show" }, 300);
    $(":input").css("border-bottom-left-radius", "0px");
    $(".icon3").css("border-bottom-right-radius", "0px");
  }
  $(this).data("clicks", !clicks);
});

//botão carrinho
// $('.marketButton').click(function(){
//     $('.emptyBagPosition').remove();
// });
