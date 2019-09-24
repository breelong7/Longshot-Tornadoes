
var allDrinks = [];

function Drink(drinkName, alcoholicTrueOrFalse){
  this.drinkName = drinkName;
  this.alcoholicTrueOrFalse = alcoholicTrueOrFalse;

  allDrinks.push(this);
}

new Drink('Orange Juice', false);

