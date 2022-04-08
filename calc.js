function quad(a, b, c) {
  console.log("dd");
  if (a === 0) return "ошибка а=0, недопустимое значение!";
  var D = b * b - 4 * a * c;
  var x1, x2;
  if (D > 0) {
    x1 = (-b + Math.sqrt(D)) / (2 * a);
    x2 = (-b - Math.sqrt(D)) / (2 * a);
    return (
      "коэффициенты: a=" +
      a +
      ", b=" +
      b +
      ", c=" +
      c +
      "\nкорни уравнения: \nx1=" +
      x1.toFixed(4) +
      ", \nx2=" +
      x2.toFixed(4) +
      "\nдискриминант(D)=" +
      D
    );
  } else if (D === 0) {
    x1 = -b / (2 * a);
    return (
      "коэффициенты: a=" +
      a +
      ", b=" +
      b +
      ", c=" +
      c +
      "\nкорни уравнения: \nx1=" +
      x1.toFixed(4) +
      ", \nx2=" +
      x2.toFixed(4) +
      "\nдискриминант(D)=" +
      D
    );
  } else if (D < 0)
    return (
      "коэффициенты: a=" +
      a +
      ", b=" +
      b +
      ", c=" +
      c +
      "\nкорней нет:\nдискриминант(D)=" +
      D
    );
}

function prog() {
  console.log("prog");
  var a = document.getElementById("a").value;
  var b = document.getElementById("b").value;
  var c = document.getElementById("c").value;
  var result = quad(a, b, c);
  document.getElementById("result").textContent = result;
  document.getElementById("otvet").style.display = "block";
}
