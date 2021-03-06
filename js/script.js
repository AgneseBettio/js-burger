//Il programma dovrà consentire di calcolare il prezzo del panino selezionando o deselezionando gli ingredienti proposti.

//quali imput ho per fare prezzo? name(nome necessario per ordinazione) ingredients (#cheese-add #tomato-add #egg-add #lettuce-add #mustard-add #ketchap-add) coupon (applico % sconto ad arrey codici inventati)

//creo var generali utilizzabili in file - DOM estrapolo elementi
//non è form! 
//cheeckbox - ha element.value e element.checked
//voglio utilizzare ciclo per non ripetere singoli elementi ingredienti
var finalPriceBtn = document.getElementById("button");
var finalPrice = document.getElementById("price");
var burgerCustomersName = document.getElementById("name");
var usersCoupon = document.getElementById("coupon");

console.log(burgerCustomersName);
var ingredientsList = document.querySelectorAll(".ingredient [type ='checkbox']");
console.log(ingredientsList);

var validCouponList = ["12354ABCDEF", "12345ABCDEF", "10354ABCDEF", "12004ABCDEF"];
finalPriceBtn.addEventListener("click", function () {
    var sommaPrezzo = 50;
    if(!burgerCustomersName.value){
        alert("per ordinare il tuo burger è necessario inventarsi un nome");
    }
    //come fare per calcolare se un elemento è inserito o meno? setto somma iniziale a 50 - ricordo che serve ParseInt per .value

    // ---> voglio fare un ciclo
    // ingredients.value - è prezzo /// ingredients.checked booleano cosa faccio? se un ingrediente c'è (true) lo sommo al prezzo Default
    for (var i = 0; i < ingredientsList.length; i++) {
        var ingredient = ingredientsList[i];
        if (ingredient.checked) {
            sommaPrezzo += parseInt(ingredient.value);
        }
    }
    console.log(sommaPrezzo);
    //per validità coupon faccio ciclo for 

    for (var j = 0; j < validCouponList.length; j++) {
        var validDiscount = validCouponList[j];
        if (usersCoupon.value === validDiscount) {
            sommaPrezzo = Discount15(sommaPrezzo);
        }
        console.log(sommaPrezzo);
    }
    finalPrice.innerHTML = sommaPrezzo;
})
// mi faccio una funzione sconto 15%
function Discount15(price) {
    return (price - ((price / 100) * 15)).toFixed(2);
}

