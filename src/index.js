// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
  let curr = currency;

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

  return obj;
}
