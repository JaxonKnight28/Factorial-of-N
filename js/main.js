let total = 1;
let result = 0
function displayResult() {
  result = 0
  let inputNum = document.getElementById('number').value;
  result = factorial(inputNum);
  document.getElementById('output').innerHTML = result;
}



function factorial(n) {
  if (n < 1) {
    return total;
  }
  else {
    total *= n;
    return factorial(n - 1);
  }
}

