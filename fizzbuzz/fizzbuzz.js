

const fizzBuzz = (number) => {
  if (number%15 === 0) {
    return 'fizzbuzz';
  } else if (number%5 === 0){
    return 'buzz';
  } else if (number%3 === 0){
    return 'fizz'
  } else
    return number;
}

const fizzBuzzUntil = (number) =>{
  for(let i=1; i<=number; i++){
    console.log(fizzBuzz(i));
  }
}

// console.log(fizzBuzz(3))
// console.log(fizzBuzz(5))
// console.log(fizzBuzz(15))
// console.log(fizzBuzz(4))

module.exports = {
  fizzBuzz, fizzBuzzUntil}