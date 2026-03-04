import "./main.scss";
import { getRandomJoke } from "./fetch.js";

let jokeId = 0;
let jokeArray = [];

async function jokeRender() {
  const rendomJoke = await getRandomJoke();
  console.log(rendomJoke.text);
  document.getElementById("jokeText").innerHTML = rendomJoke.text;
}

function jokeSave() {
  let currentJokeText = document.getElementById("jokeText").innerHTML;
  let jokeChecker = jokeArray.some((el) => {
    console.log(el.text);
    return el.text === currentJokeText;
  });
  console.log(currentJokeText);
  console.log(jokeChecker);
  if (jokeChecker) {
    alert("Der Witz bereits gespeichert");
  } else {
    jokeId += 1;
    let currentJoke = {
      text: currentJokeText,
      id: jokeId,
    };
    jokeArray.push(currentJoke);
    console.log(jokeArray);
  }
}

document.getElementById("loadButton").addEventListener("click", jokeRender);
document.getElementById("saveButton").addEventListener("click", jokeSave);
