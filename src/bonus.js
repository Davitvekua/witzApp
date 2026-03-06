export function moduschanger(event) {
  if (event.currentTarget.id === "dark") {
    document.body.classList.remove("body-red");
    localStorage.setItem("modusColor", JSON.stringify("dark"));
  } else if (event.currentTarget.id === "red") {
    document.body.classList.add("body-red");
    localStorage.setItem("modusColor", JSON.stringify("red"));
  }
}
