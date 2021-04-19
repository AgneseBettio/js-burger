//Il programma dovrà consentire di calcolare il prezzo del panino selezionando o deselezionando gli ingredienti proposti.

//quali imput ho per fare prezzo? name(nome necessario per ordinazione) ingredients (#cheese-add #tomato-add #egg-add #lettuce-add #mustard-add #ketchap-add) coupon (applico % sconto ad arrey codici inventati)

//creo var generali utilizzabili in file - DOM estrapolo elementi
//non è form! 
//cheeckbox - ha element.value e element.checked
//voglio utilizzare ciclo per non ripetere singoli elementi ingredienti
var finalPriceBtn = document.getElementById("button");
var finalPrice = document.getElementById("price");
var burgerCustomersName = document.getElementById("name");
// if(!burgerCustomersName.value){
//     alert("per ordinare il tuo burger è necessario inventarsi un nome");
// } LO LEVO PER NON AVERE SEMPRE BLOCCAT LA PAGINA - RICORDARSI DI INSERIRLO NUOVAMENTE.
console.log(burgerCustomersName);
var ingredientsList = document.querySelectorAll(".ingredient [type ='checkbox']");
console.log(ingredientsList);
var sommaPrezzo = 50;
finalPriceBtn.addEventListener("click", function () {
    //come fare per calcolare se un elemento è inserito o meno? setto somma iniziale a 50 - ricordo che serve ParseInt per .value

    // ---> voglio fare un ciclo
    // ingredients.value - è prezzo /// ingredients.checked booleano cosa faccio? se un ingrediente c'è (true) lo sommo al prezzo Default
    for (var i = 0; i < ingredientsList.length; i++) {
        var ingredient = ingredientsList[i];
        if (ingredient.checked){
            sommaPrezzo += parseInt(ingredient.value);
        }
    }
    console.log(sommaPrezzo);
    finalPrice.innerHTML = sommaPrezzo;
})