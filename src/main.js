import "./main.scss";
import { getRandomJoke } from "./fetch.js";
import { savedJoke } from "./savedJokeRender.js";

let jokeId = 0;
let jokeArray = [];

async function rendomJokeRender() {
  const rendomJoke = await getRandomJoke();
  console.log(rendomJoke.text);
  document.getElementById("jokeText").innerHTML = rendomJoke.text;
  document
    .getElementById("saveButton")
    .classList.remove("current-joke__save-hidden");
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
    alert("Der Witz wurde bereits gespeichert");
  } else {
    jokeId += 1;
    let currentJoke = {
      text: currentJokeText,
      id: jokeId,
    };
    jokeArray.push(currentJoke);
    console.log(jokeArray);
    saveInLS();
    savedJokeRender();
  }
}

function saveInLS() {
  localStorage.setItem("Witz", JSON.stringify(jokeArray));
}

function savedJokeRender() {
  document.getElementById("savedJokeList").innerHTML = "";
  jokeArray.forEach((el) => savedJoke(el));
}

function reloadRender() {
  jokeArray = JSON.parse(localStorage.getItem("Witz"));
  if (jokeArray === null) {
    jokeArray = [];
  }
  jokeArray.forEach((el) => savedJoke(el));
  if (jokeArray.length === 0) {
    jokeId = 0;
  } else {
    jokeId = jokeArray[jokeArray.length - 1].id;
  }

  console.log(jokeArray);
}

document
  .getElementById("loadButton")
  .addEventListener("click", rendomJokeRender);
document.getElementById("saveButton").addEventListener("click", jokeSave);
document.addEventListener("DOMContentLoaded", reloadRender);
