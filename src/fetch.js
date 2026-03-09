const API_ENDPOINT = "https://witzapi.de/api/joke/";

export async function getRandomJoke() {
  let randomJokeEl = await fetch(API_ENDPOINT);
  let currentJokeArray = await randomJokeEl.json();
  return currentJokeArray[0];
}

// Witze nach kategorien

export async function categoryChanger() {
  let chosenCategory = document.getElementById("selectCategory").value;
  let chosenCategoryresponse = await fetch(
    `https://witzapi.de/api/joke/?limit=1&category=${chosenCategory}&language=de`,
  );
  let currentCategoryJoke = await chosenCategoryresponse.json();
  return currentCategoryJoke[0];
}
