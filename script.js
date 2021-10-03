const textArea = document.querySelector("#text-area");
const output = document.querySelector("#output");
let counter = 60;

textArea.addEventListener("keydown", (e) => {
  textAreaCharCounter(e);
});

function textAreaCharCounter(e) {
  const keycode = e.keyCode;
  // Determine if e.keyCode is a printable (non-control) character
  // Original source: https://stackoverflow.com/a/12467610
  const valid = (keycode > 47 && keycode < 58)   || // number keys
        keycode == 32 || keycode == 13 || keycode == 60   || // spacebar, return key(s) (if you want to allow carriage returns), and <
        (keycode > 64 && keycode < 91)   || // letter keys
        (keycode > 95 && keycode < 112)  || // numpad keys
        (keycode > 185 && keycode < 193) || // ;=,-./` (in order)
        (keycode > 218 && keycode < 223);   // [\]' (in order)
  
  if (valid) {
    if (counter > 0) {
      counter--;
      output.innerText = `${counter} characters left`;
    }
    else {
      e.preventDefault();
    }
  }

  else if (keycode === 8) {
    if (counter < 60) {
      counter++;
      output.innerText = `${counter} characters left`;
    }
    else if (counter === 60) {
      output.innerText = `${counter} characters left`;
    }
  }
}