import "./main.scss";
import { getRandomJoke } from "./fetch.js";
import { savedJoke } from "./savedJokeRender.js";

let jokeId = 0;
let jokeArray = [];

async function rendomJokeRender() {
  const rendomJoke = await getRandomJoke();
  document.getElementById("jokeText").innerHTML = rendomJoke.text;
  document
    .getElementById("saveButton")
    .classList.remove("current-joke__save-hidden");
}

function jokeSave() {
  let currentJokeText = document.getElementById("jokeText").innerHTML;
  let jokeChecker = jokeArray.some((el) => {
    return el.text === currentJokeText;
  });
  if (jokeChecker) {
    alert("Der Witz wurde bereits gespeichert");
  } else {
    jokeId += 1;
    let currentJoke = {
      text: currentJokeText,
      id: jokeId,
    };
    jokeArray.push(currentJoke);
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

  document.querySelectorAll(".saved-joke__delete").forEach((deleteButton) => {
    deleteButton.addEventListener("click", deleteJoke);
  });
}

function reloadRender() {
  jokeArray = JSON.parse(localStorage.getItem("Witz")) || [];

  savedJokeRender();

  if (jokeArray.length === 0) {
    jokeId = 0;
  } else {
    jokeId = jokeArray[jokeArray.length - 1].id;
  }
  emptyText();
}

function deleteJoke(event) {
  let currentId = event.currentTarget.id;
  jokeArray = jokeArray.filter((el) => el.id !== Number(currentId));
  savedJokeRender();
  saveInLS();
  emptyText();
}

function emptyText() {
  if (jokeArray.length === 0) {
    document.getElementById("savedJokeList").innerHTML =
      "Noch keine Witze gespeichert";
  }
}

document
  .getElementById("loadButton")
  .addEventListener("click", rendomJokeRender);
document.getElementById("saveButton").addEventListener("click", jokeSave);
document.addEventListener("DOMContentLoaded", reloadRender);
