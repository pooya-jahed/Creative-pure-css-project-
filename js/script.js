function myFunc() {
  let x = document.getElementById("mynav");
  x.className === "nav"
    ? (x.className += " responsive")
    : (x.className = "nav");
}
