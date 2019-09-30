var allAlcoholicDrinksArr = [];
var allNonAlcoholicDrinksArr = [];

function refreshPage(){
  window.location.reload();
} 




function DrinkBuzz(drinkName, isAlcoholic) {
  this.drinkName = drinkName;
  this.isAlcoholic = isAlcoholic;

  allAlcoholicDrinksArr.push(this);
}

new DrinkBuzz('Beer', true);
new DrinkBuzz('Whiteclaw', true);
new DrinkBuzz('Wine', true);
new DrinkBuzz('Margarita', true);
new DrinkBuzz('Long Island Iced Tea', true);

function DrinkNoBuzz(drinkName, isAlcoholic) {
  this.drinkName = drinkName;
  this.isAlcoholic = isAlcoholic;

  allNonAlcoholicDrinksArr.push(this);
}

new DrinkNoBuzz('Orange Juice', false);
new DrinkNoBuzz('Coca-cola', false);
new DrinkNoBuzz('Iced Tea', false);
new DrinkNoBuzz('Lemonade', false);
new DrinkNoBuzz('La croix', false);


//declare function to generate random drink suggestion
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//get drink choice container element
document.getElementById('drink-choice-container');

var alcoholicChoiceEl = document.getElementById('alcoholic');
var nonAlcoholicChoiceEl = document.getElementById('non-alcoholic');
var buzzResultEl = document.getElementById('buzzresult');
var nonBuzzResultEl = document.getElementById('nonbuzzresult');


alcoholicChoiceEl.addEventListener('click', handleClick);
nonAlcoholicChoiceEl.addEventListener('click', handleClick);

// drinkChoiceContainerEl.addEventListener('click', handleClick);


function handleClick(e) {
  console.log('event target id:', e.target.id);
  if (e.target.id === 'alcoholic') {
    //render alcoholic drink from allAlcoholicDrinksArr
    for (var i = 0; i < allAlcoholicDrinksArr.length; i++) {
      var randomIndex = random(0, allAlcoholicDrinksArr.length - 1);
      alcoholicChoiceEl.alt = allAlcoholicDrinksArr[randomIndex].drinkName;

    }
    console.log('event', event);
    var h2El = document.createElement('h2');
    h2El.textContent = `Your lucky drink is ${alcoholicChoiceEl.alt}.`;
    buzzResultEl.appendChild(h2El);

  } else if (e.target.id === 'non-alcoholic') {
    //render non-alcoholic drink choice from allNonAlcoholicDrinksArr
    for (var j = 0; j < allNonAlcoholicDrinksArr.length; j++) {
      var randomIndex2 = random(0, allNonAlcoholicDrinksArr.length - 1);
      nonAlcoholicChoiceEl.alt = allNonAlcoholicDrinksArr[randomIndex2].drinkName;
    }
    var h3El = document.createElement('h2');
    h3El.textContent = `Your lucky buzz free drink is ${nonAlcoholicChoiceEl.alt}.`;
    nonBuzzResultEl.appendChild(h3El);
    //append to DOM
  }

}

