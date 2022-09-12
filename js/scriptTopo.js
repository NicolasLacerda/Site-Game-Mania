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
    $(".caixaDePesquisaPosition").removeClass("active");
    $(".dropdownPesquisa").css("display", "none");
    $(":input").css("border-bottom-left-radius", "5px");
    $(".icon3").css("border-bottom-right-radius", "5px");
  } else {
    $(".caixaDePesquisaPosition").addClass("active");
    $(".dropdownPesquisa").css("display", "flex");
    $(":input").css("border-bottom-left-radius", "0px");
    $(".icon3").css("border-bottom-right-radius", "0px");
  }

  $(this).data("clicks", !clicks);
});

$(document).mouseup(function (e) {
  var container = $(".dropdownPesquisa");

  if (!container.is(e.target) && container.has(e.target).length === 0) {
    $(".dropdownPesquisa").css("display", "none");
    $(".caixaDePesquisaPosition").removeClass("active");
    $(":input").css("border-bottom-left-radius", "5px");
    $(".icon3").css("border-bottom-right-radius", "5px");
  }
});

//botão carrinho
// $('.marketButton').click(function(){
//     $('.emptyBagPosition').remove();
// });
