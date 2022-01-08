// how to declare a variable in JS
var name = "Hussein";
var age = 38;

//functions
function square(input) {
  if (typeof input === "number") {
    var result = input * input;
    //return result;
    console.log(result);
  } else {
    console.log("input is not a number!");
  }
}
square(2);
square(3);

//Power (puissance)
function power(value, power) {
  var errorMessage = "Input is not a number!";
  if (typeof value === "number" && typeof power === "number") {
    var result = 1;
    if (power === 0) {
      return 1;
    } else if (power < 0) {
      var limit = power * -1;
      for (var i = 0; i < limit; i++) {
        result = result * value;
      }
      return 1 / result;
    } else {
      for (var i = 0; i < power; i++) {
        result = result * value;
      }
      return result;
    }
  } else {
    return errorMessage;
  }
}

var r1 = power(2, 3);
var r2 = power(0, 0);
console.log(r1, r2);

//Ne fonction pas correctement

function puissance(valeur, puis) {
  var n1 = valeur ^ puis;
  console.log(n1);
}
puissance(5, 9);

//factoriel

function factoriel(value) {
  var result = value;
  for (var i = value; i > 1; i--) {
    result = result * (i - 1);
  }
  console.log(result);
}
factoriel(5);

// or

function factorial(val) {
  var rslt = val;
  for (var i = val; i > 1; i--) {
    rslt = rslt * (i - 1);
  }
  return rslt;
}
var res = factorial(5);
console.log(res);
