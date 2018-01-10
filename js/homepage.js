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
    var map;
    var startpositionleft;
    var startpositiontop;

    if (level_id == 1){
      map = [
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
      'R.png','R.png','R.png','R.png','R.png','R.png','R.png','R.png','R.png','R.png','R.png','R.png','R.png','R.png','R.png','R.png']
    startpositionleft = 3;
    startpositiontop = 3;
  }else if (level_id == 2){
    map = [
    'Bush.png','Bush.png','Bush.png','Bush.png','Bush.png','Bush.png','Bush.png','Bush.png','Bush.png','Bush.png','Bush.png','Bush.png','Bush.png','Bush.png','Bush.png','Bush.png',
    'Bush.png','G.png','G.png','G.png','G.png','G.png','G.png','G.png','G.png','G.png','G.png','G.png','G.png','G.png','G.png','Bush.png',
    'Bush.png','Tree2_1.png','Tree2_2.png','Tree2_3.png','PGTL.png','PGH.png','PGH.png','PGH.png','PGH.png','PGH.png','PGH.png','PGH.png','PGH.png','PGH.png','G.png','Bush.png',
    'Bush.png','Tree2_4.png','Tree2_5.png','Tree2_6.png','PGV.png','G.png','G.png','G.png','G.png','G.png','G.png','G.png','G.png','G.png','G.png','Bush.png',
    'Bush.png','Tree2_7.png','Tree2_8.png','Tree2_9.png','PGV.png','G.png','G.png','G.png','G.png','G.png','G.png','G.png','G.png','G.png','G.png','Bush.png',
    'Bush.png','G.png','G.png','G.png','PGV.png','G.png','G.png','G.png','G.png','G.png','G.png','G.png','Lac2_3.png','Lac2_4.png','Lac2_5.png','Bush.png',
    'Bush.png','G.png','G.png','G.png','PGV.png','G.png','G.png','G.png','G.png','G.png','G.png','G.png','Lac2_8.png','W.png','Lac2_10.png','Bush.png',
    'Bush.png','G.png','G.png','G.png','PGBL.png','PGH.png','PGH.png','PGH.png','PGTR.png','G.png','G.png','G.png','Lac2_13.png','W.png','Lac2_15.png','Bush.png',
    'Bush.png','G.png','Tree1_1.png','Tree1_2.png','Tree1_3.png','G.png','G.png','G.png','PGV.png','G.png','G.png','G.png','Lac2_18.png','Lac2_19.png','Lac2_20.png','Bush.png',
    'Bush.png','G.png','Tree1_4.png','Tree1_5.png','Tree1_6.png','G.png','G.png','G.png','G.png','G.png','G.png','Lac2_22.png','Lac2_23.png','Lac2_24.png','G.png','Bush.png',
    'Bush.png','G.png','Tree1_7.png','Tree1_8.png','Tree1_9.png','G.png','G.png','G.png','G.png','G.png','G.png','Lac2_27.png','W.png','Lac2_29.png','G.png','Bush.png',
    'Bush.png','G.png','Lac1_2.png','Lac1_3.png','G.png','G.png','G.png','G.png','G.png','G.png','Lac2_31.png','Lac2_32.png','W.png','Lac2_34.png','G.png','Bush.png',
    'Bush.png','Lac1_6.png','Lac1_7.png','Lac1_8.png','Lac1_9.png','G.png','G.png','G.png','G.png','G.png','Lac2_36.png','W.png','W.png','Lac2_39.png','G.png','Bush.png',
    'Bush.png','Lac1_11.png','W.png','W.png','Lac1_14.png','Lac1_15.png','G.png','G.png','G.png','G.png','Lac2_41.png','W.png','W.png','Lac2_44.png','Lac2_45.png','Bush.png',
    'Bush.png','Lac1_16.png','Lac1_17.png','Lac1_18.png','Lac1_19.png','Lac1_20.png','G.png','G.png','G.png','G.png','Lac2_46.png','Lac2_47.png','Lac2_48.png','Lac2_49.png','Lac2_50.png','Bush.png',
    'Bush.png','Bush.png','Bush.png','Bush.png','Bush.png','Bush.png','Bush.png','Bush.png','Bush.png','Bush.png','Bush.png','Bush.png','Bush.png','Bush.png','Bush.png','Bush.png']
    startpositionleft = 8;
    startpositiontop = 2;
  }else{
    var map = ['R.png']
    startpositionleft = 8;
    startpositiontop = 2;
  }

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
    hero.style.height="6.25%";
    hero.style.float="left";
    hero.style.position="absolute";
    hero.style.left=(startpositionleft-1) * 48 + "px";
    hero.style.top=(startpositiontop-1) * 48 + "px";
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
    if(getTile(hero.posy, hero.posx-1).traversable) {
      hero.posx--;
    }
  }
  // Down
  else if(event.keyCode == 38 || event.keyCode === 87) {
    if(getTile(hero.posy-1, hero.posx).traversable) {
      hero.posy--;
    }
  }
  // Right
  else if (event.keyCode == 39 || event.keyCode === 68) {
    if(getTile(hero.posy, hero.posx+1).traversable) {
      hero.posx++;
    }
  }
  // Up
  else if (event.keyCode == 40 || event.keyCode === 83) {
    if(getTile(hero.posy+1, hero.posx).traversable) {
      hero.posy++;
    }
  }

  hero.style.top = (hero.posy*48) +"px";
  hero.style.left = (hero.posx*48) + "px";
}
