console.log(`testing testing`);

const html = document.querySelector(`html`);
const main = document.querySelector(`main`);
const secretMessage = document.getElementById(`secretmessage`);
const meowSound = document.getElementById(`meow`);
var count = 0;

html.addEventListener(`keyup`, function (event) {
  console.log(event.key);

  meowSound.load();
  meowSound.play();

  if (event.key == `c`) {
    const section = document.createElement(`section`);
    count = count + 1;
    if (count >= 5) {
      secretMessage.textContent = `I have nothing else to give!`;
    } else {
      main.appendChild(section);
    }
    // console.log(count);

    // window.scrollTo(
    //   0,
    //   document.getElementById(`section7`).getBoundingClientRect().y +
    //     window.scrollY +
    //     section.y
    // );
    /* really want to see if i could auto-scroll to the newly-opened section, alas not yet */

    secretMessage.style.display = `block`;
    console.log(`Secret Unlocked!`);
  }
});

secretMessage.addEventListener(`click`, function (mouseEvent) {
  secretMessage.style.display = `none`;
  console.log(`beep boop, message gone`);
});
