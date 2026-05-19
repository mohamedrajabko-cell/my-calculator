let display = document.getElementById("display");

function add(value) {
  display.value += value;
}

function clearAll() {
  display.value = "";
}

function calc() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}
