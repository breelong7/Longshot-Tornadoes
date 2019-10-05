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
  console.log('something\'s in LS');
  var localStorageName = localStorage.getItem('name');
  console.log('name stored in local storage', localStorageName);
  var parsedName = JSON.parse(localStorageName);
  var slicedName = parsedName.slice(0);
  legendEl.textContent = `Still thirsty, ${slicedName}? We\'ve got your back. Just take the quiz!`;
  formEl.appendChild(legendEl);
  labelEl.textContent = `...if you're not ${slicedName}, who the heck are you?!`;
  formEl.appendChild(labelEl);
}

function addFriend(event){
  event.preventDefault();
  var newName = event.target.username.value;
  var stringifyedName = JSON.stringify(newName);
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

function DrinkBuzz(drinkName) {
  this.drinkName = drinkName;
  this.src = `img/${drinkName}.jpg`;

  allAlcoholicDrinksArr.push(this);
}

new DrinkBuzz('Beer');
new DrinkBuzz('Whiteclaw');
new DrinkBuzz('Wine');
new DrinkBuzz('Margarita');
new DrinkBuzz('Long Island Iced Tea');
new DrinkBuzz('Lemon Lime and Bitters');
new DrinkBuzz('Martini');
new DrinkBuzz('Tequila Sunrise');
new DrinkBuzz('Vodka');

function DrinkNoBuzz(drinkName) {
  this.drinkName = drinkName;
  this.src = `img/${drinkName}.jpg`;

  allNonAlcoholicDrinksArr.push(this);
}

new DrinkNoBuzz('Orange Juice');
new DrinkNoBuzz('Coca-cola');
new DrinkNoBuzz('Iced Tea');
new DrinkNoBuzz('Lemonade');
new DrinkNoBuzz('La croix');
new DrinkNoBuzz('Arnold Palmer');
new DrinkNoBuzz('Coffee');
new DrinkNoBuzz('Roy Rogers');

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
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
