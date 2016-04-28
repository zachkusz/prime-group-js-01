//The first index holds the employees name.
//The second index has their employee number.
//The third index contains their annual salary.
//The fourth index contains their review rating.

var atticus = ['Atticus', '2405', '47000', 3];
var jem = ['Jem', '62347', '63500', 4];
var boo = ['Boo', '11435', '54000', 3];
var scout = ['Scout', '6243', '74750', 5];

var employees = [atticus, jem, boo, scout];

var employees2 = [];

var bonusPer = 0;

function logic(arg) {

  var localArray = [];

  //Third Index is below //

  var bonusPSum = 1;

  if (arg[3] <= 2) {
    bonusPSum = 1;
    if (arg[1].length == 4) {
      bonusPSum += 0.05;
      if (Number(arg[2]) > 65000) {
        bonusPSum -= 0.01;
      }
    }
  } else if (arg[3] === 3) {
    bonusPSum += 0.04;
    if (arg[1].length == 4) {
      bonusPSum += 0.05;
      if (Number(arg[2]) > 65000) {
        bonusPSum -= 0.01;
      }
    }
  } else if (arg[3] === 4) {
    bonusPSum += 0.06;
    if (arg[1].length == 4) {
      bonusPSum += 0.05;
      if (Number(arg[2]) > 65000) {
        bonusPSum -= 0.01;
      }
    }
  } else if (arg[3] === 5) {
    bonusPSum += 0.10;
    if (arg[1].length == 4) {
      bonusPSum += 0.05;
      if (Number(arg[2]) > 65000) {
        bonusPSum -= 0.01;
      }
    }
  }

  if (bonusPSum > 1.13) {
    bonusPSum = 1.13;
  }

  arg[2] *= bonusPSum;

  arg[2] = Math.round(arg[2]);

  localArray[2] = arg[2];

  //Second index
  //bonusPSum = bonusPSum.toString();
  //bonusPsum = bonusPSum.substring(2);
  //bonusPsum = Number(bonusPSum);
  localArray[1] = bonusPSum - 1;

  localArray[0] = arg[0];

  localArray[3] = Math.round(Number(arg[2]) * localArray[1]);

  return localArray;
}

logic(atticus);

////  FINAL ARRAY THAT STORES ANSWERS ////

function finalArray(empArray) {
  for (var i = 0; i < employees.length; i++) {
    console.log(logic(empArray[i]));
  }

  return empArray;
}

console.log(finalArray(employees));
