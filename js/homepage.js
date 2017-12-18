let hero;

function init() {
console.log("coucou");
}

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

function showLevel(level_id) {
  document.getElementById("level-modal").classList.remove("is-display-none");
  document.getElementById("level-modal").niveau = level_id;
  if (level_id == 1) {
    document.getElementById("level-modal-title").classList.add("level-modal-title-1");
  }
  if (level_id == 2) {
    document.getElementById("level-modal-title").classList.add("level-modal-title-2");
  }
  if (level_id == 3) {
    document.getElementById("level-modal-title").classList.add("level-modal-title-3");
  }
  if (level_id == 4) {
    document.getElementById("level-modal-title").classList.add("level-modal-title-4");
  }

  setTimeout( function showModal() {
    document.getElementById("level-modal").classList.remove("is-hidden");
    document.getElementById("level-modal").classList.add("modal-show");
  }, 25);

  setTimeout( function createMap() {
    var map = [
      'B.png','B.png','B.png','B.png','B.png','B.png','B.png','B.png','B.png','B.png','B.png','B.png','B.png','B.png','B.png','B.png',
      'B.png','S.png','S.png','S.png','S.png','S.png','S.png','S.png','S.png','S.png','S.png','PL.png','C.png','PR.png','S.png','B.png',
      'B.png','S.png','S.png','R.png','R.png','S.png','PTL.png','PT.png','PT.png','PT.png','PT.png','P.png','P.png','PR.png','S.png','B.png',
      'B.png','S.png','S.png','R.png','S.png','S.png','PL.png','P.png','P.png','P.png','P.png','P.png','P.png','PR.png','S.png','B.png',
      'B.png','R.png','S.png','S.png','S.png','S.png','PL.png','P.png','P.png','PB.png','PB.png','PB.png','PB.png','PB.png','S.png','B.png',
      'B.png','R.png','R.png','S.png','S.png','S.png','PL.png','P.png','PR.png','S.png','S.png','S.png','S.png','R.png','S.png','B.png',
      'B.png','S.png','S.png','S.png','S.png','S.png','PL.png','P.png','PR.png','S.png','S.png','S.png','S.png','S.png','S.png','B.png',
      'B.png','LT.gif','LT.gif','LT.gif','LT.gif','LT.gif','PL.png','P.png','PR.png','LT.gif','LT.gif','LT.gif','LT.gif','LT.gif','LT.gif','B.png',
      'B.png','L.gif','L.gif','L.gif','L.gif','L.gif','PL.png','P.png','PR.png','L.gif','L.gif','L.gif','L.gif','L.gif','L.gif','B.png',
      'B.png','LB.gif','LB.gif','LB.gif','LB.gif','LB.gif','PL.png','P.png','PR.png','LB.gif','LB.gif','LB.gif','LB.gif','LB.gif','LB.gif','B.png',
      'B.png','S.png','S.png','S.png','S.png','S.png','PL.png','P.png','PR.png','S.png','S.png','S.png','S.png','S.png','S.png','B.png',
      'B.png','S.png','S.png','R.png','S.png','S.png','PL.png','P.png','PR.png','S.png','S.png','R.png','S.png','S.png','S.png','B.png',
      'B.png','S.png','S.png','S.png','R.png','S.png','PL.png','P.png','PR.png','S.png','S.png','S.png','S.png','S.png','S.png','B.png',
      'B.png','S.png','R.png','S.png','R.png','S.png','PL.png','P.png','PR.png','S.png','S.png','S.png','R.png','S.png','S.png','B.png',
      'B.png','S.png','S.png','R.png','S.png','S.png','PL.png','P.png','PR.png','S.png','S.png','S.png','S.png','S.png','S.png','B.png',
      'B.png','B.png','B.png','B.png','B.png','B.png','B.png','B.png','B.png','B.png','B.png','B.png','B.png','B.png','B.png','B.png'
    ];
    for (var i = 0; i < map.length; i++) {
      var elem = document.createElement("img");
      elem.src="img/textures/" + map[i];
      elem.style.height="6.25%";
      elem.style.width="6.25%";
      elem.style.float="left";
      document.getElementById("level").appendChild(elem);
    }
    hero = document.createElement("img");
    hero.src="img/characters/ninja.png"
    hero.style.height="6.25%";
    hero.style.height="6.25%";
    hero.style.float="left";
    hero.style.position="absolute";
    hero.style.left ="100px";
    hero.style.top="100px";
    document.getElementById("div-hero").appendChild(hero);
  }, 100);

  setTimeout( function showMap() {
    document.getElementById("level").classList.remove("is-hidden");
  }, 350);

  setTimeout( function showLevelTitle() {
    document.getElementById("level-modal-title").classList.add("is-scaled");
  }, 1000);

  setTimeout(function showExitButton() {
    document.getElementById("exit-button").classList.remove("is-hidden");
    document.getElementById("level-modal-score").classList.remove("is-hidden");
  }, 2000);
}

function exitLevel() {
  document.getElementById("level-modal").classList.add("is-hidden");
  document.getElementById("level-modal").classList.remove("modal-show");
  setTimeout( function closeModal() {
    document.getElementById("level-modal").classList.add("is-display-none");
    document.getElementById("exit-button").classList.add("is-hidden");
    document.getElementById("level-modal-score").classList.add("is-hidden");
    document.getElementById("level").classList.add("is-hidden");
    document.getElementById("level").innerHTML = '<div id="div-hero"></div>';
    document.getElementById("level-modal-title").classList.remove("is-scaled");
    level_id = document.getElementById("level-modal").niveau;
    if (level_id == 1) {
      document.getElementById("level-modal-title").classList.remove("level-modal-title-1");
    }
    if (level_id == 2) {
      document.getElementById("level-modal-title").classList.remove("level-modal-title-2");
    }
    if (level_id == 3) {
      document.getElementById("level-modal-title").classList.remove("level-modal-title-3");
    }
    if (level_id == 4) {
      document.getElementById("level-modal-title").classList.remove("level-modal-title-4");
    }
  }, 500);
}

// Hero moves
function move(event){
  if(event.keyCode == 37){
    var x = parseInt(hero.style.left);
    hero.style.left = (x-48) + "px";
  }
  else if(event.keyCode == 38){
    var y = parseInt(hero.style.top);
    hero.style.top = (y-48) + "px";
  }
  else if (event.keyCode == 39) {
    var x = parseInt(hero.style.left);
    hero.style.left = (x+48) + "px";
  }
  else if (event.keyCode == 40) {
    var y = parseInt(hero.style.top);
    hero.style.top = (y+48) + "px";
  }
}

document.onkeydown = move;
