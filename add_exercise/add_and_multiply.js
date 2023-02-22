

add = (a,b) => {
  return (a+b);
}
multiply = (a,b) => {
  return (a*b);
}

// console.log(add(2,2));
// console.log(multiply(2,2));
// console.log(multiply(2,add(4,4)));

module.exports = {
  multiply,
  add
}

// using module.exports to export multiple functions in JSnode?
// module.exports = {
//     method: function() {},
//     otherMethod: function() {},
// };