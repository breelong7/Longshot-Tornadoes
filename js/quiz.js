
var allDrinksArr = [];

function Drink(drinkName, isAlcoholic){
  this.drinkName = drinkName;
  this.isAlcoholic = isAlcoholic;

  allDrinksArr.push(this);
}

new Drink('Orange Juice', false);
new Drink('Coca-cola', false);
new Drink('Iced Tea', false);
new Drink('Lemonade', false);
new Drink('La croix', false);
new Drink('Beer', true);
new Drink('Whiteclaw', true);
new Drink('Wine', true);
new Drink('Margarita', true);
new Drink('Long Island Iced Tea', true);


//declare function to generate random drink suggestion
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//get drink choice container element
var drinkChoiceContainerEl = document.getElementById('drink-choice-container');
var alcoholicChoiceEl = document.getElementById('alcoholic');
var nonAlcoholicChoiceEl = document.getElementById('non-alcoholic');


drinkChoiceContainerEl.addEventListener('click', handleClick);


function handleClick(e) {
  var drinkChoice = e.target.id;
  if(drinkChoice === alcoholicChoiceEl){
    //render alcololic drink from allDrinksArr

  } else if(drinkChoice === nonAlcoholicChoiceEl) {
  //render non-alcoholic drink choice from allDrinksArr
  }
  //append to DOM
}

handleClick();


