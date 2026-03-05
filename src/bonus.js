export function moduschanger(event) {
  const bright = "rgb(204, 204, 204)";
  const dark = "rgb(52, 52, 52)";

  if (event.currentTarget.id === "dark") {
    document.body.style.background = dark;
    localStorage.setItem("modusColor", JSON.stringify(dark));
  } else if (event.currentTarget.id === "bright") {
    document.body.style.background = bright;
    localStorage.setItem("modusColor", JSON.stringify(bright));
  }
}
