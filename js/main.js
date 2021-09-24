function displayResult() {
  let result = 0
  let inputNum = document.getElementById('number').value;
  console.log(factorial(inputNum))
  result = factorial(inputNum);
  document.getElementById('output').innerHTML = result;
}


let total = 1;
function factorial(n) {
  if (n < 1) {
    return total;
  }
  else {
    total *= n;
    return factorial(n - 1);
  }
}

//console.log(factorial(7));