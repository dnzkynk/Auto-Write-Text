const text = "Selamlar ben Deniz.";

let index = 0;
let complete = false;

function writeText() {
  if (complete) {
    setTimeout(() => {
      complete = false;
      index = 0;
    }, 500);
    return;
  }

  document.body.innerText = text.slice(0, index);

  if (index > text.length) {
    complete = true;
  }
  index++;
}

setInterval(writeText, 50);
