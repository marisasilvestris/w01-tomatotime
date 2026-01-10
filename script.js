console.log(`testing testing`);
// window.scrollTo(5000, 5000); /* okay i'm not even gonna try */

const html = document.querySelector(`html`);
const main = document.querySelector(`main`);
const secretMessage = document.getElementById(`secretmessage`);
const meowSound = document.getElementById(`meow`);

html.addEventListener(`keyup`, function (event) {
  console.log(event.key);
  if (event.key == `c`) {
    const section = document.createElement(`section`);
    main.appendChild(section);

    // window.scrollTo(
    //   0,
    //   document.getElementById(`section7`).getBoundingClientRect().y +
    //     window.scrollY +
    //     section.y
    // );
    console.log(
      document.getElementById(`section7`).getBoundingClientRect().y +
        window.scrollY +
        section
    );

    secretMessage.style.display = `block`;
    meowSound.load();
    meowSound.play();
    console.log(`Secret Unlocked!`);
  }
});

secretMessage.addEventListener(`click`, function (mouseEvent) {
  secretMessage.style.display = `none`;
  console.log(`beep boop, message gone`);
});
