// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
  let curr = currency;

//const halfDollars = 50, quarters = 25, dimes = 10, nickels = 5, pennies = 1;

const coins = {
  H: 50,
  Q: 25,
  D: 10,
  N: 5,
  P: 1
}

let obj = {};

if (curr > 10000) {
  obj.error = 'You are rich, my friend! We don\'t have so much coins for exchange';
  return obj;
}

for (let key in coins) {
  if ( curr >= coins[key] ) {
    obj[key] = Math.floor(curr / coins[key]);
    curr = curr % coins[key];
  }
}
/*
if (curr > 1000) {
  return obj.error = 'You are rich, my friend! We don\'t have so much coins for exchange';
}

if ( curr >= halfDollars ) {
  obj.H = Math.floor(curr / halfDollars);
  curr = curr % halfDollars;
}

if ( curr >= quarters ) {
  obj.Q = Math.floor(curr / quarters);
  curr = curr % quarters;
}

if ( curr >= dimes ) {
  obj.D = Math.floor(curr / dimes);
  curr = curr % dimes;
}

if ( curr >= nickels ) {
  obj.N = Math.floor(curr / nickels);
  curr = curr % nickels;
}

if ( curr >= pennies ) {
  obj.P = Math.floor(curr / pennies);
}
*/
//console.log(JSON.stringify(obj));
return obj;
}
