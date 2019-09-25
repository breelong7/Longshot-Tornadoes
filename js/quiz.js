
var allDrinks = [];

function Drink(drinkName, isAlcoholic){
  this.drinkName = drinkName;
  this.isAlcoholic = isAlcoholic;

  allDrinks.push(this);
}

new Drink('Orange Juice', false);

