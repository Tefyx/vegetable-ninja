function scrollDown() {
  document.getElementById("play-button").classList.add("is-hidden");
  document.getElementById("home-title").classList.add("is-hidden");
  document.getElementById("background").classList.add("is-scrolled");
  setTimeout( function hiddenHome() {
    document.getElementById("play-button").classList.add("is-display-none");
    document.getElementById("home-title").classList.add("is-display-none");
    document.getElementById("level-title").classList.remove("is-display-none");
    document.getElementById("button-level-container").classList.remove("is-display-none");
    document.getElementById("back-button").classList.remove("is-display-none");
  }, 500);

  setTimeout( function showLevelSelection() {
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
  setTimeout( function hiddenLevelSelection() {
    document.getElementById("play-button").classList.remove("is-display-none");
    document.getElementById("home-title").classList.remove("is-display-none");
    document.getElementById("level-title").classList.add("is-display-none");
    document.getElementById("button-level-container").classList.add("is-display-none");
    document.getElementById("back-button").classList.add("is-display-none");
  }, 500);

  setTimeout( function showHome() {
    document.getElementById("play-button").classList.remove("is-hidden");
    document.getElementById("home-title").classList.remove("is-hidden");
    document.getElementById("level-title").classList.add("is-display-none");
    document.getElementById("button-level-container").classList.add("is-display-none");
  }, 600);
}

function showLevel() {
  document.getElementById("level-modal").classList.remove("is-display-none");
  setTimeout( function showModal() {
    document.getElementById("level-modal").classList.remove("is-hidden");
    document.getElementById("level-modal").classList.add("modal-show");
  }, 25);

  setTimeout( function createMap() {
    var thisMap =
      ['B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B',
      'B','S','S','S','S','S','S','S','S','S','S','P','C','P','S','B',
      'B','S','S','R','R','S','P','P','P','P','P','P','P','P','S','B',
      'B','S','S','R','S','S','P','P','P','P','P','P','P','P','S','B',
      'B','R','S','S','S','S','P','P','P','P','P','P','P','P','S','B',
      'B','R','R','S','S','S','P','P','P','S','S','S','S','R','S','B',
      'B','S','S','S','S','S','P','P','P','S','S','S','S','S','S','B',
      'L','L','L','L','L','L','P','P','P','L','L','L','L','L','L','L',
      'L','L','L','L','L','L','P','P','P','L','L','L','L','L','L','L',
      'L','L','L','L','L','L','P','P','P','L','L','L','L','L','L','L',
      'B','S','S','S','S','S','P','P','P','S','S','S','S','S','S','B',
      'B','S','S','R','S','S','P','P','P','S','S','R','S','S','S','B',
      'B','S','S','S','R','S','P','P','P','S','S','S','S','S','S','B',
      'B','S','R','S','R','S','P','P','P','S','S','S','R','S','S','B',
      'B','S','S','R','S','S','P','P','P','S','S','S','S','S','S','B',
      'B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B'];
    for (var i = 0; i < thisMap.length; i++) {
    var elem = document.createElement("img");
    elem.src="img/textures/" + thisMap[i]+".png";
    elem.style.height="6.25%";
    elem.style.width="6.25%";
    elem.style.float="left";
    document.getElementById("level").appendChild(elem);
    }
  }, 100);

  setTimeout( function showMap() {
    document.getElementById("level").classList.remove("is-hidden");
  }, 500);

  setTimeout( function showExitButton() {
    document.getElementById("exit-button").classList.remove("is-hidden");
  }, 1000);
}

function exitLevel() {
  document.getElementById("level-modal").classList.add("is-hidden");
  document.getElementById("level-modal").classList.remove("modal-show");
  setTimeout( function closeModal() {
    document.getElementById("level-modal").classList.add("is-display-none");
    document.getElementById("exit-button").classList.add("is-hidden");
    document.getElementById("level").classList.add("is-hidden");
    document.getElementById("level").innerHTML = "";
  }, 500);
}
