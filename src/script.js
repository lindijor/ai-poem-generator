function showPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 30,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let poemInstructions = document.querySelector("#poem-instructions");
  let apiKey = "025000aa1bof6148etc27f34c35bd48a";
  let prompt = `Write a poem about ${poemInstructions.value}`;
  let context =
    "You are a poet that loves to write poems about anyting. Your assignment is to write a short four line poem based on the users instructions. Display the poem as four separate lines in HTML with a <br /> between each line. At the end of the poem, sign it with `<strong>SheCodes AI</strong>`";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let showHiddenElement = document.querySelector("#poem");
  showHiddenElement.classList.remove("hidden");
  showHiddenElement.innerHTML = `<div class="blink">⏳ Writing a poem for you about ${poemInstructions.value}</div>`;

  axios.get(apiUrl).then(showPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
