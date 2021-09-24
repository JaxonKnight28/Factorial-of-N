let total = 1;
let result = 0;
function displayResult() {
  
  let inputNum = document.getElementById('number').value;
  total = 1;
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

