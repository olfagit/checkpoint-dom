var price = document.querySelector(".total");
var plus = document.querySelectorAll(".fa-plus");
var minus = document.querySelectorAll(".fa-minus");
var quantity = document.querySelectorAll(".quantity");
var unitprice = document.querySelectorAll(".unit-price");
var heart = document.querySelectorAll(".fa-heart");


function Subtotal() {
    let sum = 0;
    for (i = 0; i < quantity.length; i++) {
        sum = sum + Number(quantity[i].innerText) * Number(unitprice[i].innerText);
    }
    price.innerText = sum
}

for (let i = 0; i < plus.length; i++) {
    plus[i].addEventListener("click", function() {
        quantity[i].innerText = Number(quantity[i].innerText) + 1;
        Subtotal()
    });
}
for (let i = 0; i < minus.length; i++) {
    minus[i].addEventListener("click", function() {
        if (quantity[i].innerText > 0) {
            quantity[i].innerText = Number(quantity[i].innerText) - 1
            Subtotal()
        };
    });

}