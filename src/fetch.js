const API_ENDPOINT = "https://witzapi.de/api/joke/";

export async function getRandomJoke() {
  let randomJokeEl = await fetch(API_ENDPOINT);
  let currentJokeArray = await randomJokeEl.json();
  return currentJokeArray[0];
}
