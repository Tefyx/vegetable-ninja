// Initialize Components
direction = 0;
var weapon = "shuriken"
var fired = false;
var id = setInterval(frame, 10);

//Initialize hero
var hero = document.getElementById("hero");
hero.style.left ="100px";
hero.style.top="100px";

//Create and fire a projectile
function fire() {

  //check if fired = false
  if (!fired) {


       //Initialize a shuriken
       if (weapon == "shuriken") {

         fired = true;
         setTimeout(unfired, 500);

         var elem = document.createElement("IMG");
         elem.src = "../img/Weapons/shuriken.png";
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
           elem.src = "../img/Weapons/kunai_up.png";
           elem.style.height = "60px";
           elem.style.width = "20px";
         }
         if (direction =="DOWN") {
           elem.src = "../img/Weapons/kunai_down.png";
           elem.style.height = "60px";
           elem.style.width = "20px";
         }
         if (direction =="LEFT") {
           elem.src = "../img/Weapons/kunai_left.png";
         }
         if (direction =="RIGHT") {
           elem.src = "../img/Weapons/kunai_right.png";
         }
       }
       elem.direction = direction;
       elem.posx = hero.offsetTop + 35;
       elem.posy = hero.offsetLeft + 45;
       elem.startposx = hero.offsetTop + 35;
       elem.startposy = hero.offsetLeft + 45;
       mybody.appendChild(elem);
   }
}

//set fired to false
function unfired() {
  fired = false;
}

//Control movement of projectiles
function frame() {
  for (var i = 0; i < mybody.children.length; i++) {
    var elem = mybody.children[i];

    // Shuriken movement
    if (elem.className == "shuriken" || elem.className == "kunai"){
      if (elem.direction == "UP") { // UP (W)
        elem.style.top = elem.posx + 'px';
        elem.posx = elem.posx - elem.speed;
        elem.style.left = elem.posy + 'px';
      }else if (elem.direction == "LEFT") { // LEFT (A)
        elem.style.left = elem.posy + 'px';
        elem.posy = elem.posy - elem.speed;
        elem.style.top = elem.posx + 'px';
      }else if (elem.direction == "RIGHT") { // RIGHT (D)
        elem.style.left = elem.posy + 'px';
        elem.posy = elem.posy + elem.speed;
        elem.style.top = elem.posx + 'px';
      }else if (elem.direction == "DOWN") { // DOWN (S)
        elem.style.top = elem.posx + 'px';
        elem.posx = elem.posx + elem.speed;
        elem.style.left = elem.posy + 'px';
      }

      //Delete elem if max range
      if (elem.posx >= elem.startposx + 456 || elem.posx <= elem.startposx - 456) {
        mybody.removeChild(elem);
      }
      if (elem.posy >= elem.startposy + 456 || elem.posy <= elem.startposy - 456) {
        mybody.removeChild(elem);
      }
    }
  }
}

// Listen to keys pressed
window.onkeypress = function(event) {
  if (event.keyCode == 100 || event.keyCode == 39) { // RIGHT (D) or (KEY_RIGHT)
    direction = "RIGHT";
    var x = parseInt(hero.style.left);
    hero.style.left = (x+48) + "px";
  }
  if (event.keyCode == 119 || event.keyCode == 38) { // UP (W) or (KEY_UP)
    direction = "UP";
    var y = parseInt(hero.style.top);
    hero.style.top = (y-48) + "px";
  }
  if (event.keyCode == 97 || event.keyCode == 37) { // LEFT (A) or (KEY_LEFT)
    direction = "LEFT";
    var x = parseInt(hero.style.left);
    hero.style.left = (x-48) + "px";
  }
  if (event.keyCode == 115 || event.keyCode == 40) { // DOWN (S) or (KEY_DOWN)
    direction = "DOWN";
    var y = parseInt(hero.style.top);
    hero.style.top = (y+48) + "px";
  }
   if (event.keyCode == 112) { // FIRE (P)
     if (direction) {
       fire();
     }
   }
   if (event.keyCode == 107) { //CHANGE WEAPON (K)
     if (weapon == "shuriken") {
       weapon = "kunai";
     }else if (weapon == "kunai") {
       weapon = "shuriken";
     }
   }
}
