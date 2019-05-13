$(document).ready(function() {
console.log("let's get it");
 
// !program will calculate a dollar amount of the number of coins that make up the amount.
//*program will use American coins (quarters, dimes, nickels, and pennies)
// ?program will soon convert other world currencies

coinsImg = ['images/quarter_png.png', 'images/dime.png', 'images/nickel_png.png', 'images/penny_png.png'];
// start coin counter function
var coinCounter = function (int) {

// will contain coins/ammount 
let bank = [];

const quarter = .25;
const dime = .10;
const nickel = .5;
const penny = .1;

$('#coinPng').append(coinsImg);
$('#coinPng').append(coinsImg);
$('#coinPng').append(coinsImg);
$('#coinPng').append(coinsImg);


for (i = 0; i < bank.length; i++) {
    var imageCoin = $('<img>');
    imageCoin.attr('data-num', bank[i]);
    imageCoin.attr('src', bank[i]);
    imageCoin.attr('alt', 'bank');
    imageCoin.addClass('coinbank')
    $('#coinPng').append(imageCoin);
}



}



































});