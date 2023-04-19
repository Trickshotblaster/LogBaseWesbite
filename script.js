var last_answer = "NaN";

function calculate(natural) {
  if (natural) {
    document.getElementById("base").value = 2.7182818284590452353602874713527;
  }
  let base = document.getElementById("base").value;
  let num = document.getElementById("num").value;
  let answer = Math.log(num) / Math.log(base);
  document.getElementById("answer").innerHTML = "≈ " + answer.toFixed(10) + " ";
  last_answer = answer;
}

function copy() {
  navigator.clipboard.writeText(last_answer);
}
