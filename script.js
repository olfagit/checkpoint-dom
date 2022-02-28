var price = document.querySelector(".float-right text-right");
var plus = document.querySelectorAll(".fas fa-plus");
var minus = document.querySelectorAll(".fas fa-minus");
var quantity = document.querySelectorAll("quantity");
var unitprice = document.querySelectorAll(".unit-price");
var heart = document.querySelectorAll(".fas fa-heart");



for (let i = 0; i < plus.length; i++) {
    plus[i].addEventListener("click", function() {
        quantity[i].innerTEXT = Number(quantity[i].innerTEXT) + 1;
    });
}
for (let i = 0; i < minus.length; i++) {
    minus[i].addEventListener("click", function() {
        quantity[i].innerTEXT = Number(quantity[i].innerTEXT) - 1;
    });

}

function Subtotal() {
    sum = 0;
    for (i = 0; i < quantity.length; i++) {
        sum = Number(quantity[i].innerTEXT) * Number(unitprice[i].innerTEXT);
    }
}