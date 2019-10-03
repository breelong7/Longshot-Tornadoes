'use strict';

var legendEl = document.getElementById('legend');
var labelEl = document.getElementById('label');
var formEl = document.getElementById('container1');
var submitEl = document.getElementById('container2');

if(localStorage.length === 0){
  legendEl.textContent = 'Welcome to BuzzedFeed, where we understand that you\'re far too indecisive to choose your own drink.';
  formEl.appendChild(legendEl);
  labelEl.textContent = 'Let\'s be friends. What\'s your name?';
  formEl.appendChild(labelEl);

} else {
  console.log("something's in LS");
  //get name
  var localStorageName = localStorage.getItem('name');
  console.log('name stored in local storage', localStorageName);
  // json Parse
  var parsedName = JSON.parse(localStorageName);
  var slicedName = parsedName.slice(0);
  //new text generation
  legendEl.textContent = `Still thirsty, ${slicedName}? We\'ve got your back. Just take the quiz!`;
  formEl.appendChild(legendEl);
  labelEl.textContent = `...if you're not ${slicedName}, who the heck are you?!`;
  formEl.appendChild(labelEl);
}

function addFriend(event){
  event.preventDefault();
  var newName = event.target.username.value
  // Stringify
  var stringifyedName = JSON.stringify(newName);
  // local storage set item
  localStorage.setItem('name', stringifyedName);
  console.log('setting a name in LS');
  refreshPage();
}

submitEl.addEventListener('submit', addFriend);

var allAlcoholicDrinksArr = [];
var allNonAlcoholicDrinksArr = [];

function refreshPage(){
  window.location.reload();
}

function DrinkBuzz(drinkName, isAlcoholic) {
  this.drinkName = drinkName;
  this.isAlcoholic = isAlcoholic;
  this.src = `img/${drinkName}.jpg`;

  allAlcoholicDrinksArr.push(this);
}

new DrinkBuzz('Beer', true);
new DrinkBuzz('Whiteclaw', true);
new DrinkBuzz('Wine', true);
new DrinkBuzz('Margarita', true);
new DrinkBuzz('Long Island Iced Tea', true);
new DrinkBuzz('Lemon Lime and Bitters', true);
new DrinkBuzz('Martini', true);
new DrinkBuzz('Tequila Sunrise', true);
new DrinkBuzz('Vodka', true);

function DrinkNoBuzz(drinkName, isAlcoholic) {
  this.drinkName = drinkName;
  this.isAlcoholic = isAlcoholic;
  this.src = `img/${drinkName}.jpg`;

  allNonAlcoholicDrinksArr.push(this);
}

new DrinkNoBuzz('Orange Juice', false);
new DrinkNoBuzz('Coca-cola', false);
new DrinkNoBuzz('Iced Tea', false);
new DrinkNoBuzz('Lemonade', false);
new DrinkNoBuzz('La croix', false);
new DrinkNoBuzz('Arnold Palmer', false);
new DrinkNoBuzz('Coffee', false);
new DrinkNoBuzz('Roy Rogers', false);


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
var alcoholicChoiceImgEl = document.getElementById('buzzresultimage');
var nonAlcoholicChoiceImgEl = document.getElementById('nonbuzzresultimage');

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
      alcoholicChoiceImgEl.src = allAlcoholicDrinksArr[randomIndex].src;
      
      console.log('alcoholic choice image', alcoholicChoiceImgEl);
    }
    console.log('event', event);
    var h2El = document.createElement('h2');
    h2El.textContent = `Your lucky drink is ${alcoholicChoiceEl.alt}`;
    buzzResultEl.appendChild(h2El);

    alcoholicChoiceImgEl.textContent = `${alcoholicChoiceImgEl.src}`;
    buzzResultEl.appendChild(alcoholicChoiceImgEl);


  } else if (e.target.id === 'non-alcoholic') {
    //render non-alcoholic drink choice from allNonAlcoholicDrinksArr
    for (var j = 0; j < allNonAlcoholicDrinksArr.length; j++) {
      var randomIndex2 = random(0, allNonAlcoholicDrinksArr.length - 1);
      nonAlcoholicChoiceEl.alt = allNonAlcoholicDrinksArr[randomIndex2].drinkName;
      nonAlcoholicChoiceImgEl.src = allNonAlcoholicDrinksArr[randomIndex2].src;
    }
    var h3El = document.createElement('h2');
    h3El.textContent = `Your lucky buzz free drink is ${nonAlcoholicChoiceEl.alt}.`;
    nonBuzzResultEl.appendChild(h3El);

    nonAlcoholicChoiceImgEl.textContent = `${nonAlcoholicChoiceImgEl.src}`;
    nonBuzzResultEl.appendChild(nonAlcoholicChoiceImgEl);

  }

}


