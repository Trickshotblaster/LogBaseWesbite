function calculate() {
  let base = document.getElementById("base").value;
  let num = document.getElementById("num").value;
  let answer = Math.log(num) / Math.log(base);
  document.getElementById("answer").innerHTML = "= " + answer.toFixed(10);
}
