function trocaModo() {
  const html = document.documentElement;
  html.classList.toggle("light");

  const img = document.querySelector("#profile img");

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/miguis.png");
  } else {
    img.setAttribute("src", "./assets/escuro.png");
  }
}
