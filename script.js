console.log(`testing testing`);

const html = document.querySelector(`html`);
const main = document.querySelector(`main`);
const secretMessage = document.getElementById(`secretmessage`);
const meowSound = document.getElementById(`meow`);
let count = 0;

html.addEventListener(`keydown`, function (event) {
  // console.log(event.key);

  meowSound.load();
  meowSound.play();

  if (event.key == `c`) {
    count = count + 1;

    if (count >= 5) {
      secretMessage.textContent = `I have nothing else to give!`;
    } else {
      const section =
        document.createElement(
          `section`
        ); /* tbh i'm not sure how this works. is the const destroyed after each event is run, so it can be remade anew each subsequent event? is this the right place to declare it, or should it be in a lower or higher function for best practice? */
      section.id = `section` + (count + 7);
      main.lastElementChild.after(section);
      section.scrollIntoView(); /* I had so much trouble with this, considering how simple the solution was. */
    }
    // console.log(count);

    secretMessage.style.display = `block`; /* Unhide */
    console.log(`Secret Unlocked!`);
  }
});

secretMessage.addEventListener(`click`, function (mouseEvent) {
  secretMessage.style.display = `none`;
  console.log(`beep boop, message gone`);
});
