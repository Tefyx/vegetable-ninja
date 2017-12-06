var button    = document.getElementsByClassName("button");
var homeTitle = document.getElementsByClassName("home-title");

function scrollDown() {
  console.log(button);
  console.log(homeTitle);
  document.getElementById("button").classList.add("is-hidden");
  document.getElementById("home-title").classList.add("is-hidden");
  document.getElementById("background").classList.add("is-scrolled");
  setTimeout( function hiddenHome() {
    document.getElementById("button").classList.add("is-display-none");
    document.getElementById("home-title").classList.add("is-display-none");
    document.getElementById("level-title").classList.remove("is-display-none");
    document.getElementById("button-level-container").classList.remove("is-display-none");
    document.getElementById("back-button").classList.remove("is-display-none");
  }, 500);

  setTimeout( function showLevel() {
    document.getElementById("level-title").classList.remove("is-hidden");
    document.getElementById("button-level-container").classList.remove("is-hidden");
    document.getElementById("back-button").classList.remove("is-hidden");
  }, 600);
}

function scrollUp() {
  document.getElementById("background").classList.remove("is-scrolled");
  document.getElementById("level-title").classList.add("is-hidden");
  document.getElementById("button-level-container").classList.add("is-hidden");
  document.getElementById("back-button").classList.add("is-hidden");
  setTimeout( function hiddenLevel() {
    document.getElementById("button").classList.remove("is-display-none");
    document.getElementById("home-title").classList.remove("is-display-none");
    document.getElementById("level-title").classList.add("is-display-none");
    document.getElementById("button-level-container").classList.add("is-display-none");
    document.getElementById("back-button").classList.add("is-display-none");
  }, 500);

  setTimeout( function showHome() {
    document.getElementById("button").classList.remove("is-hidden");
    document.getElementById("home-title").classList.remove("is-hidden");
    document.getElementById("level-title").classList.add("is-display-none");
    document.getElementById("button-level-container").classList.add("is-display-none");
  }, 600);
}
