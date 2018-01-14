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
      'R' ,'R' ,'R' ,'R' ,'R' ,'R' ,'R','R','R','R','R','R','R','R','R','R',
      'R' ,'S' ,'S' ,'S' ,'S' ,'S' ,'S','S','S','S','S','PTL','C','PTR','S','R',
      'R' ,'S' ,'S' ,'R' ,'R' ,'S' ,'PTL','PT','PT','PT','PT','P','P','PR','S','R',
      'R' ,'S' ,'S' ,'R' ,'S' ,'S' ,'PL','P','P','P','P','P','P','PR','S','R',
      'R' ,'R' ,'S' ,'S' ,'S' ,'S' ,'PL','P','P','PB','PB','PB','PB','PBR','S','R',
      'R' ,'R' ,'R' ,'S' ,'S' ,'S' ,'PL','P','PR','S','S','S','S','R','S','R',
      'R' ,'S' ,'S' ,'S' ,'S' ,'S' ,'PL','P','PR','S','S','S','S','S','S','R',
      'LT','LT','LT','LT','LT','LT','Bridge1','Bridge2','Bridge3','LT','LT','LT','LT','LT','LT','LT',
      'L' ,'L','L','L','L','L','Bridge4','Bridge5','Bridge6','L','L','L','L','L','L','L',
      'LB','LB','LB','LB','LB','LB','Bridge7','Bridge8','Bridge9','LB','LB','LB','LB','LB','LB','LB',
      'R' ,'S','S','S','S','S','PL','P','PR','S','S','S','S','S','S','R',
      'R' ,'S','S','R','S','S','PL','P','PR','S','S','R','S','S','S','R',
      'R' ,'S','S','S','R','S','PL','P','PR','S','S','S','S','S','S','R',
      'R' ,'S','R','S','R','S','PL','P','PR','S','S','S','R','S','S','R',
      'R' ,'S','S','R','S','S','PBL','PB','PBR','S','S','S','S','S','S','R',
      'R' ,'R','R','R','R','R','R','R','R','R','R','R','R','R','R','R']
    startpositionleft = 3;
    startpositiontop = 3;
  }else if (level_id == 2){
    map = [
    'Bush','Bush','Bush','Bush','Bush','Bush','Bush','Bush','Bush','Bush','Bush','Bush','Bush','Bush','Bush','Bush',
    'Bush','G','G','G','G','G','G','G','G','G','G','G','G','G','G','Bush',
    'Bush','Tree2_1','Tree2_2','Tree2_3','PGTL','PGH','PGH','PGH','PGH','PGH','PGH','PGH','PGH','PGR','G','Bush',
    'Bush','Tree2_4','Tree2_5','Tree2_6','PGV','G','G','G','G','G','G','G','G','G','G','Bush',
    'Bush','Tree2_7','Tree2_8','Tree2_9','PGV','G','G','G','G','G','G','G','G','G','G','Bush',
    'Bush','G','G','G','PGV','G','G','G','G','G','G','G','Lac2_3','Lac2_4','Lac2_5','Bush',
    'Bush','G','G','G','PGV','G','G','G','G','G','G','G','Lac2_8','W','Lac2_10','Bush',
    'Bush','G','G','G','PGBL','PGH','PGH','PGH','PGTR','G','G','G','Lac2_13','W','Lac2_15','Bush',
    'Bush','G','Tree1_1','Tree1_2','Tree1_3','G','G','G','PGV','G','G','G','Lac2_18','Lac2_19','Lac2_20','Bush',
    'Bush','G','Tree1_4','Tree1_5','Tree1_6','G','G','G','PGV','G','G','Lac2_22','Lac2_23','Lac2_24','G','Bush',
    'Bush','G','Tree1_7','Tree1_8','Tree1_9','G','G','G','PGV','G','G','Lac2_27','W','Lac2_29','G','Bush',
    'Bush','G','Lac1_2','Lac1_3','G','G','G','G','PGV','G','Lac2_31','Lac2_32','W','Lac2_34','G','Bush',
    'Bush','Lac1_6','Lac1_7','Lac1_8','Lac1_9','G','G','G','PGV','G','Lac2_36','W','W','Lac2_39','G','Bush',
    'Bush','Lac1_11','W','W','Lac1_14','Lac1_15','PGL','PGH','PGBR','G','Lac2_41','W','W','Lac2_44','Lac2_45','Bush',
    'Bush','Lac1_16','Lac1_17','Lac1_18','Lac1_19','Lac1_20','G','G','G','G','Lac2_46','Lac2_47','Lac2_48','Lac2_49','Lac2_50','Bush',
    'Bush','Bush','Bush','Bush','Bush','Bush','Bush','Bush','Bush','Bush','Bush','Bush','Bush','Bush','Bush','Bush']
    startpositionleft = 15;
    startpositiontop = 3;
    var raining = document.createElement("img");
    raining.src="img/textures/rain.png";
    raining.style.height="100%";
    raining.style.width="100%";

    raining.style.position="absolute";
    raining.style.left=0;
    level.appendChild(raining);
  }else if (level_id == 3){
    var map = [
    'SnR','SnR','SnR','SnR','SnR','SnR','SnWLR','SnR','SnR','SnR','SnR','SnWLR','SnR','SnR','SnR','SnR',
    'SnR','Sn','Sn','Sn','Sn','Sn','SnWL','Sn','Sn','Sn','Sn','SnWLR','Sn','Sn','SnMushroms1','SnR',
    'SnR','Sn','Sn','Sn','Snowman1','Sn','SnWL','Sn','Sn','Sn','Sn','SnWL','Sn','SnMushroms1','SnMushroms2','SnR',
    'SnR','Sn','Sn','Sn','Snowman2','Sn','SnWLR','Sn','Sn','Sn','Sn','SnWLR','Sn','Sn','Sn','SnR',
    'SnR','Sn','Sn','Sn','Sn','Sn','SnWL','Sn','Sn','Sn','Sn','SnWL','Sn','Sn','Sn','SnR',
    'SnR','Sn','Sn','Sn','Sn','Sn','SnWL','Sn','Sn','Sn','Sn','SnWLR','Sn','Sn','Sn','SnR',
    'SnWH','SnWH','SnWH','SnWH','SnWP','SnWH','SnWBL','Sn','Sn','Sn','Sn','SnWL','SnMushroms1','Sn','Sn','SnR',
    'SnR','Sn','Sn','Sn','Sn','Sn','Sn','Sn','Sn','Sn','Sn','SnWL','Sn','Sn','Sn','SnR',
    'SnR','Sn','Sn','Sn','Sn','Sn','Sn','Sn','Sn','Sn','Sn','SnWL','Sn','Sn','Sn','SnR',
    'SnR','Sn','Sn','Sn','Sn','Sn','Sn','SnWLT','SnWH','SnWP','SnWH','SnWBL','Sn','Sn','SnMushroms1','SnR',
    'SnR','Sn','Sn','Sn','Sn','Sn','Sn','SnWL','SnR','Sn','Sn','Sn','Sn','Sn','Sn','SnR',
    'SnR','Sn','Sn','Sn','Sn','Sn','Sn','SnWL','Sn','Sn','Sn','Sn','Sn','Sn','Sn','SnR',
    'SnWH','SnWH','SnWP','SnWH','SnWH','SnWH','SnWH','SnWBL','Sn','Sn','Sn','Sn','Sn','Sn','Sn','SnR',
    'SnR','Sn','Sn','SnMushroms2','Sn','Sn','Sn','Sn','Sn','Sn','Sn','Sn','Sn','SnMushroms2','Sn','SnR',
    'SnR','Sn','SnMushroms1','Sn','Sn','Sn','Sn','Sn','Sn','SnMushroms2','Sn','Sn','Sn','Sn','Sn','SnR',
    'SnR','SnR','SnR','SnR','SnR','SnR','SnR','SnR','SnR','SnR','SnR','SnR','SnR','SnR','SnR','SnR'
    
    ]
    startpositionleft = 8;
    startpositiontop = 2;
    var snowing = document.createElement("img");
    snowing.src="img/textures/snowing.png";
    snowing.style.height="100%";
    snowing.style.width="100%";

    snowing.style.position="absolute";
    snowing.style.left=0;
    level.appendChild(snowing);

  }else if (level_id == 4){
    var map = [
        '1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1',
        '1','1','1','1','1','0','0','0','0','1','0','1','0','0','1','1',
        '1','0','0','0','0','0','1','1','0','1','0','1','0','0','1','1',
        '1','0','0','0','1','0','1','1','0','0','0','0','0','0','1','1',
        '1','0','0','0','1','1','1','1','0','1','0','1','1','1','1','1',
        '1','0','0','1','1','1','1','0','0','1','0','0','0','0','0','1',
        '1','1','0','1','1','1','1','1','0','1','1','1','0','1','1','1',
        '1','0','0','0','1','1','1','1','0','1','0','0','0','0','1','1',
        '1','0','0','0','0','0','1','0','0','1','0','0','0','0','1','1',
        '1','0','0','0','1','0','1','0','0','1','0','0','0','0','1','1',
        '1','1','1','1','1','0','1','1','1','1','0','0','0','0','1','1',
        '1','0','0','0','0','0','0','0','0','1','0','0','0','0','1','1',
        '1','0','0','0','0','0','0','0','0','1','1','1','1','1','1','1',
        '1','0','0','0','0','0','0','0','0','0','0','0','0','0','0','1',
        '1','0','0','0','0','0','0','0','0','0','0','0','0','0','0','1',
        '1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1'
        ]

 var simsonHouse = document.createElement("img");
    simsonHouse.src="img/textures/SimsonHouse.png";
    simsonHouse.style.height="100%";
    simsonHouse.style.width="100%";
simsonHouse.style.zIndex = "-1"; 
    simsonHouse.style.position="absolute";
    simsonHouse.style.left=0;
    level.appendChild(simsonHouse);
    startpositionleft = 12;
    startpositiontop = 16;
  }

    for (var i = 0; i < map.length; i++) {
      var elem = document.createElement("img");
      elem.src="img/textures/" + map[i] + ".png";
      elem.style.height="6.25%";
      elem.style.width="6.25%";
      elem.style.float="left";
     
      var traversableList = ['C','L','LT','LB','B','R','SnR','1','Bush','Flower1','Flower2','SnMushroms1','SnMushroms2','SnWH','SnWBL','Snowman1','Snowman2','SnR',
      'Tree1_2','Tree1_4','Tree1_5','Tree1_6','Tree1_7','Tree1_8','Tree1_9','Tree2_1','Tree2_2','Tree2_4','Tree2_5','Tree2_7','Tree2_8',
      'Lac2_3','Lac2_4','Lac2_5','Lac2_8','Lac2_10','Lac2_13','Lac2_15','Lac2_18','Lac2_19','Lac2_20','Lac2_22','Lac2_23','Lac2_24','Lac2_27','Lac2_29','Lac1_3','Lac2_31','Lac2_32','Lac2_34','Lac1_6','Lac1_7','Lac1_8','Lac2_36','Lac2_39','Lac1_14','Lac1_15','Lac2_41','Lac2_44','Lac2_45','Lac1_18','Lac2_47','Lac2_48','Lac2_49','Lac2_50'];
      elem.traversable = true;
      for(var y = 0; y < traversableList.length; y++) 
      {
        if(map[i] == traversableList[y])
        {
          elem.traversable = false;
        }
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
    hero.posx = startpositionleft-1;
    hero.posy = startpositiontop-1;
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
