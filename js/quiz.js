
var allDrinks = [];

function Drink(drinkName, isAlcoholic){
  this.drinkName = drinkName;
  this.isAlcoholic = isAlcoholic;

  allDrinks.push(this);
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



