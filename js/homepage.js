let play_button;
let home_title;
let background;
let level_title;
let level;
let button_level_container;
let back_button;
let exit_button;
let level_modal;
let level_modal_title;
let level_modal_score;
let hero;
let direction;
var weapon = "shuriken";
var fired = false;
var id = setInterval(frame, 10);

// Init variables
function init() {
  play_button = document.getElementById("play-button");
  home_title = document.getElementById("home-title");
  background = document.getElementById("background");
  level_title = document.getElementById("level-title");
  button_level_container = document.getElementById("button-level-container");
  back_button = document.getElementById("back-button");
  level = document.getElementById("level");
  level_modal = document.getElementById("level-modal");
  level_modal_title = document.getElementById("level-modal-title");
  level_modal_score = document.getElementById("level-modal-score");
  exit_button = document.getElementById("exit-button");
}

// On play click
function scrollDown() {
  play_button.classList.add("is-hidden");
  home_title.classList.add("is-hidden");
  background.classList.add("is-scrolled");
  setTimeout( function hiddenHome() {
    play_button.classList.add("is-display-none");
    home_title.classList.add("is-display-none");
    level_title.classList.remove("is-display-none");
    button_level_container.classList.remove("is-display-none");
    back_button.classList.remove("is-display-none");
  }, 500);

  setTimeout( function showLevelSelection() {
    level_title.classList.remove("is-hidden");
    button_level_container.classList.remove("is-hidden");
    back_button.classList.remove("is-hidden");
  }, 600);
}

// On return to home
function scrollUp() {
  background.classList.remove("is-scrolled");
  level_title.classList.add("is-hidden");
  button_level_container.classList.add("is-hidden");
  back_button.classList.add("is-hidden");
  setTimeout( function hiddenLevelSelection() {
    play_button.classList.remove("is-display-none");
    home_title.classList.remove("is-display-none");
    level_title.classList.add("is-display-none");
    button_level_container.classList.add("is-display-none");
    back_button.classList.add("is-display-none");
  }, 500);

  setTimeout( function showHome() {
    play_button.classList.remove("is-hidden");
    home_title.classList.remove("is-hidden");
    level_title.classList.add("is-display-none");
    button_level_container.classList.add("is-display-none");
  }, 600);
}

// On level opening
function showLevel(level_id) {
  level_modal.classList.remove("is-display-none");
  level_modal.niveau = level_id;
  if (level_id == 1) {
    level_modal_title.classList.add("level-modal-title-1");
  }
  if (level_id == 2) {
    level_modal_title.classList.add("level-modal-title-2");
  }
  if (level_id == 3) {
    level_modal_title.classList.add("level-modal-title-3");
  }
  if (level_id == 4) {
    level_modal_title.classList.add("level-modal-title-4");
  }

  setTimeout( function showModal() {
    level_modal.classList.remove("is-hidden");
    level_modal.classList.add("modal-show");
  }, 25);

  setTimeout( function createMap() {
    var map = [
      'R.png','R.png','R.png','R.png','R.png','R.png','R.png','R.png','R.png','R.png','R.png','R.png','R.png','R.png','R.png','R.png',
      'R.png','S.png','S.png','S.png','S.png','S.png','S.png','S.png','S.png','S.png','S.png','PTL.png','C.png','PTR.png','S.png','R.png',
      'R.png','S.png','S.png','R.png','R.png','S.png','PTL.png','PT.png','PT.png','PT.png','PT.png','P.png','P.png','PR.png','S.png','R.png',
      'R.png','S.png','S.png','R.png','S.png','S.png','PL.png','P.png','P.png','P.png','P.png','P.png','P.png','PR.png','S.png','R.png',
      'R.png','R.png','S.png','S.png','S.png','S.png','PL.png','P.png','P.png','PB.png','PB.png','PB.png','PB.png','PBR.png','S.png','R.png',
      'R.png','R.png','R.png','S.png','S.png','S.png','PL.png','P.png','PR.png','S.png','S.png','S.png','S.png','R.png','S.png','R.png',
      'R.png','S.png','S.png','S.png','S.png','S.png','PL.png','P.png','PR.png','S.png','S.png','S.png','S.png','S.png','S.png','R.png',
      'LT.gif','LT.gif','LT.gif','LT.gif','LT.gif','LT.gif','Bridge1.gif','Bridge2.png','Bridge3.gif','LT.gif','LT.gif','LT.gif','LT.gif','LT.gif','LT.gif','LT.gif',
      'L.gif','L.gif','L.gif','L.gif','L.gif','L.gif','Bridge4.png','Bridge5.png','Bridge6.gif','L.gif','L.gif','L.gif','L.gif','L.gif','L.gif','L.gif',
      'LB.gif','LB.gif','LB.gif','LB.gif','LB.gif','LB.gif','Bridge7.gif','Bridge8.png','Bridge9.gif','LB.gif','LB.gif','LB.gif','LB.gif','LB.gif','LB.gif','LB.gif',
      'R.png','S.png','S.png','S.png','S.png','S.png','PL.png','P.png','PR.png','S.png','S.png','S.png','S.png','S.png','S.png','R.png',
      'R.png','S.png','S.png','R.png','S.png','S.png','PL.png','P.png','PR.png','S.png','S.png','R.png','S.png','S.png','S.png','R.png',
      'R.png','S.png','S.png','S.png','R.png','S.png','PL.png','P.png','PR.png','S.png','S.png','S.png','S.png','S.png','S.png','R.png',
      'R.png','S.png','R.png','S.png','R.png','S.png','PL.png','P.png','PR.png','S.png','S.png','S.png','R.png','S.png','S.png','R.png',
      'R.png','S.png','S.png','R.png','S.png','S.png','PBL.png','PB.png','PBR.png','S.png','S.png','S.png','S.png','S.png','S.png','R.png',
      'R.png','R.png','R.png','R.png','R.png','R.png','R.png','R.png','R.png','R.png','R.png','R.png','R.png','R.png','R.png','R.png'
    ];
    for (var i = 0; i < map.length; i++) {
      var elem = document.createElement("img");
      elem.src="img/textures/" + map[i];
      elem.style.height="6.25%";
      elem.style.width="6.25%";
      elem.style.float="left";
      if(map[i] == "L.gif" || map[i] == "LT.gif" || map[i] == "LB.gif" || map[i] == "B.png" || map[i] == "R.png"){
         elem.traversable = false;
       }
       else{
         elem.traversable = true;
       }
      elem.id = "t"+i;
      level.appendChild(elem);
    }
    hero = document.createElement("img");
    hero.src="img/characters/ninja.png"
    hero.style.height="6.25%";
    hero.style.float="left";
    hero.style.position="absolute";
    hero.style.left ="96px";
    hero.style.top="96px";
    hero.posx = 2;
    hero.posy = 2;
    document.getElementById("div-hero").appendChild(hero);
  }, 100);

  setTimeout( function showMap() {
    level.classList.remove("is-hidden");
  }, 350);

  setTimeout( function showLevelTitle() {
    level_modal_title.classList.add("is-scaled");
  }, 1000);

  setTimeout(function showExitButton() {
    exit_button.classList.remove("is-hidden");
    level_modal_score.classList.remove("is-hidden");
  }, 2000);

  document.onkeydown = move;
}

//Create and fire a projectile
function fire() {

  //check if fired = false
  if (!fired) {

       //Initialize a shuriken
       if (weapon == "shuriken") {

         fired = true;
         setTimeout(unfired, 500);

         var elem = document.createElement("IMG");
         elem.src = "./img/Weapons/shuriken.png";
         elem.className = "shuriken";
         elem.speed = 5;
       }
       if (weapon == "kunai") {

         fired = true;
         setTimeout(unfired, 1000);

         var elem = document.createElement("IMG");
         elem.className = "kunai"
         elem.speed = 7;

         if (direction =="UP") {
           elem.src = "./img/Weapons/kunai_up.png";
           elem.style.height = "60px";
           elem.style.width = "20px";
         }
         if (direction =="DOWN") {
           elem.src = "./img/Weapons/kunai_down.png";
           elem.style.height = "60px";
           elem.style.width = "20px";
         }
         if (direction =="LEFT") {
           elem.src = "./img/Weapons/kunai_left.png";
         }
         if (direction =="RIGHT") {
           elem.src = "./img/Weapons/kunai_right.png";
         }
       }
       elem.direction = direction;
       elem.posy = hero.offsetTop + 24;
       elem.posx = hero.offsetLeft + 20;
       elem.startposy = hero.offsetTop + 24;
       elem.startposx = hero.offsetLeft + 20;
       level.appendChild(elem);
   }
}

//set fired to false
function unfired() {
  fired = false;
}

//Control movement of projectiles
function frame() {
  for (var i = 0; i < level.children.length; i++) {
    var elem = level.children[i];

    // Shuriken movement
    if (elem.className == "shuriken" || elem.className == "kunai"){
        if (elem.direction == "UP") { // UP (W)
          elem.style.top = elem.posy + 'px';
          elem.posy = elem.posy - elem.speed;
          elem.style.left = elem.posx + 'px';
        }else if (elem.direction == "LEFT") { // LEFT (A)
          elem.style.left = elem.posx + 'px';
          elem.posx = elem.posx - elem.speed;
          elem.style.top = elem.posy + 'px';
        }else if (elem.direction == "RIGHT") { // RIGHT (D)
          elem.style.left = elem.posx + 'px';
          elem.posx = elem.posx + elem.speed;
          elem.style.top = elem.posy + 'px';
        }else if (elem.direction == "DOWN") { // DOWN (S)
          elem.style.top = elem.posy + 'px';
          elem.posy = elem.posy + elem.speed;
          elem.style.left = elem.posx + 'px';
        }
        if(getTile(Math.floor(elem.posy/48), Math.floor(elem.posx/48)).traversable) {
        }else {
          disappear(elem.offsetLeft, elem.offsetTop);
          level.removeChild(elem);
        }

        //Delete elem if max range
        if (elem.posx >= elem.startposx + 235 || elem.posx <= elem.startposx - 235) {
          disappear(elem.offsetLeft, elem.offsetTop);
          level.removeChild(elem);
        }
        if (elem.posy >= elem.startposy + 235 || elem.posy <= elem.startposy - 235) {
          disappear(elem.offsetLeft, elem.offsetTop);
          level.removeChild(elem);
        }
    }
  }
}

function disappear(x, y) {
  var disappear = document.createElement("IMG")
  disappear.src = "./img/Weapons/disappear.gif";
  disappear.style.height = "30px";
  disappear.style.widht = "30px";
  disappear.style.position = "absolute";
  disappear.style.top = y + 'px';
  disappear.style.left = x + 'px';
  level.appendChild(disappear);
  setTimeout(function() {
    level.removeChild(disappear);
  },300)
}

// On level closing
function exitLevel() {
  level_modal.classList.add("is-hidden");
  level_modal.classList.remove("modal-show");
  setTimeout( function closeModal() {
    level_modal.classList.add("is-display-none");
    exit_button.classList.add("is-hidden");
    level_modal_score.classList.add("is-hidden");
    level.classList.add("is-hidden");
    level.innerHTML = '<div id="div-hero"></div>';
    level_modal_title.classList.remove("is-scaled");
    level_id = level_modal.niveau;
    if (level_id == 1) {
      level_modal_title.classList.remove("level-modal-title-1");
    }
    if (level_id == 2) {
      level_modal_title.classList.remove("level-modal-title-2");
    }
    if (level_id == 3) {
      level_modal_title.classList.remove("level-modal-title-3");
    }
    if (level_id == 4) {
      level_modal_title.classList.remove("level-modal-title-4");
    }
  }, 500);
}

// Get the tiles
function getTile(y,x){
   return document.getElementById("t"+(y*16+x));
}

// Hero moves
function move(event){
  // Left
  if(event.keyCode == 37 || event.keyCode === 65) {
    direction = "LEFT";
    if(getTile(hero.posy, hero.posx-1).traversable) {
      hero.posx--;
    }
  }
  // Down
  else if(event.keyCode == 38 || event.keyCode === 87) {
    direction = "UP";
    if(getTile(hero.posy-1, hero.posx).traversable) {
      hero.posy--;
    }
  }
  // Right
  else if (event.keyCode == 39 || event.keyCode === 68) {
    direction = "RIGHT";
    if(getTile(hero.posy, hero.posx+1).traversable) {
      hero.posx++;
    }
  }
  // Up
  else if (event.keyCode == 40 || event.keyCode === 83) {
    direction = "DOWN";
    if(getTile(hero.posy+1, hero.posx).traversable) {
      hero.posy++;
    }
  }
  // FIRE (P)
  if (event.keyCode == 112 | event.keyCode == 80) {
    if (direction) {
      fire();
    }
  }
  //CHANGE WEAPON (K)
  if (event.keyCode == 107 | event.keyCode == 75) {
    if (weapon == "shuriken") {
      weapon = "kunai";
    }else if (weapon == "kunai") {
      weapon = "shuriken";
    }
  }

  hero.style.top = (hero.posy*48) +"px";
  hero.style.left = (hero.posx*48) + "px";
}
