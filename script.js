let calculate = document.getElementById('calculate');
let reset = document.getElementById('reset');
let p = document.getElementById('message');

calculate.onclick = function visibleString() {
  let yearsToGrow = document.getElementById('number-of-years').value;
  let initialInvestment = document.getElementById('initial-investment').value;
  let averageAnnualReturn = document.getElementById("average-annual-return").value;
 
  let yearsToGrow1 = parseInt(yearsToGrow, 10);
  let initialInvestment1 = parseInt(initialInvestment, 10);
  var averageAnnualReturn1 = parseInt(averageAnnualReturn, 10);

  for(let i = 0; i<yearsToGrow; i++) {
    var product = initialInvestment1 * averageAnnualReturn1/100 + initialInvestment1;
    initialInvestment1 = product;
}
var total = Math.round(product * 100) / 100;
  p.innerHTML = `Your balance after ${yearsToGrow1} years is $${total}`;
  p.style.display = 'block';
}

  reset.onclick = function resetDisplay() {
    p.style.display = 'none';
    document.getElementById('number-of-years').value = "";
    document.getElementById('initial-investment').value = '';
    document.getElementById("average-annual-return").value = '';
  }