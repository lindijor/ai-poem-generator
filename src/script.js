function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "This is your finished poem! Hope you like it",
    autoStart: true,
    delay: 30,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
