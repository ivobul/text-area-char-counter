const textArea = document.querySelector("#text-area");
const output = document.querySelector("#output");
let counter = 60;

textArea.addEventListener("keydown", (e) => {
  displayCharCounter(e);
});

function isPrintableChar(e) {
  // Determine if e.keyCode is a printable (non-control) character
  // Original source: https://stackoverflow.com/a/12467610
  const valid = (e.keyCode > 47 && e.keyCode < 58)   || // number keys
        e.keyCode == 32 || e.keyCode == 13 || e.keyCode == 60   || // spacebar, return key(s) (if you want to allow carriage returns), and <
        (e.keyCode > 64 && e.keyCode < 91)   || // letter keys
        (e.keyCode > 95 && e.keyCode < 112)  || // numpad keys
        (e.keyCode > 185 && e.keyCode < 193) || // ;=,-./` (in order)
        (e.keyCode > 218 && e.keyCode < 223);   // [\]' (in order)
  return valid;
}

function displayCharCounter(e) {
  if (isPrintableChar(e)) {
    if (counter > 0) {
      counter--;
      output.innerText = `${counter} characters left`;
    }
    else {
      e.preventDefault();
    }
  }

  else if (e.keyCode === 8) {
    if (counter < 60) {
      counter++;
      output.innerText = `${counter} characters left`;
    }
    else if (counter === 60) {
      output.innerText = `${counter} characters left`;
    }
  }
}
