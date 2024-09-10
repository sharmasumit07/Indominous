// Dynamically load CSS file
const cssFile = './product1.css';
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = cssFile;
document.head.appendChild(link);

// Rest of your JavaScript code
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let interval = null;

function changeTextLetter(event) {
  let iteration = 0;

  // get initial text
  const initText = event.target.innerText;

  // clear previous interval
  clearInterval(interval);

  // set interval to change text letter by letter 
  interval = setInterval(() => {
    event.target.innerText = initText
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return event.target.dataset.textValue[index];
        }

        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");
    if (iteration >= event.target.dataset.textValue.length) {
      clearInterval(interval);
    }

    // increase iteration
    iteration += 1 / 5;
  }, 10);
}

document.addEventListener('DOMContentLoaded', () => {
  const animTexts = document.querySelectorAll(".animated-text");

  animTexts.forEach((element) => {
    changeTextLetter({ target: element }); // Call changeTextLetter directly on page load
  });
});
