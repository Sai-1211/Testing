function display(val) {
  document.getElementById("result").value += val;
}

function AC() {
  document.getElementById("result").value = "";
}

function del() {
  x = result.value.length;
  result.value = result.value.substr(0, x - 1);
}

function per() {
  x = result.value;
  result.value = x / 100;
}

function equal() {
  let final = document.getElementById("result").value;
  let operand1 = "";
  let operand2 = "";
  let operator = "";
  let Afteroperator = false;

  for (const x of final) {
    if (!isNaN(x) && Afteroperator === false) {
      operand1 += x;
    } else if (!isNaN(x) && Afteroperator === true) {
      operand2 += x;
    } else {
      if (operand1 !== "" && operand2 !== "" && operator !== "") {
        operand1 = evaluate(operand1, operand2, operator);
        operand2 = "";
      }
      operator = x;
      Afteroperator = true;
    }
  }
  if (operand1 !== "" && operand2 !== "" && operator !== "") {
    document.getElementById("result").value = evaluate(
      operand1,
      operand2,
      operator
    );
  }
}

function evaluate(operand1, operand2, operator) {
  let tap;
  switch (operator) {
    case "+":
      tap = parseInt(operand1) + parseInt(operand2);
      return tap;
    case "-":
      tap = parseInt(operand1) - parseInt(operand2);
      return tap;
    case "*":
      tap = parseInt(operand1) * parseInt(operand2);
      return tap;
    case "/":
      tap = parseInt(operand1) / parseInt(operand2);
      return tap;
  }
}
