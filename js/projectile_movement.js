direction = 0;
var hero = document.getElementById("hero");
hero.style.left ="100px";
hero.style.top="100px";
var fired = false;


function start() {
  //var elem = document.getElementById("shuriken");
  if (!fired) {
       fired = true;
       setTimeout(unfired, 500);
       var perso = document.getElementById("hero");
       var elem = document.createElement("IMG");
       elem.src = "../img/Weapons/shuriken.png";
       elem.className = "shuriken";
       elem.direction = direction;
       elem.posx = perso.offsetTop + 35;
       elem.posy = perso.offsetLeft + 45;
       elem.startposx = perso.offsetTop + 35;
       elem.startposy = perso.offsetLeft + 45;
       mybody.appendChild(elem);
   }
}

function unfired() {
  fired = false;
}
var id = setInterval(frame, 10);

function frame() {
  for (var i = 0; i < mybody.children.length; i++) {
    var elem = mybody.children[i];

    if (elem.direction == 119) {
      elem.style.top = elem.posx + 'px';
      elem.posx = elem.posx - 4;
      elem.style.left = elem.posy + 'px';
    }else if (elem.direction == 97) {
      elem.style.left = elem.posy + 'px';
      elem.posy = elem.posy - 4;
      elem.style.top = elem.posx + 'px';
    }else if (elem.direction == 100) {
      elem.style.left = elem.posy + 'px';
      elem.posy = elem.posy + 4;
      elem.style.top = elem.posx + 'px';
    }else if (elem.direction == 115) {
      elem.style.top = elem.posx + 'px';
      elem.posx = elem.posx + 4;
      elem.style.left = elem.posy + 'px';
    }
if (posx = 600) {
}
  }
}


window.onkeypress = function(event) {
  if (event.keyCode == 100) {
    direction = event.keyCode;
    var x = parseInt(hero.style.left);
    hero.style.left = (x+48) + "px";
  }
  if (event.keyCode == 119) {
    direction = event.keyCode;
    var y = parseInt(hero.style.top);
    hero.style.top = (y-48) + "px";
  }
  if (event.keyCode == 97) {
    direction = event.keyCode;
    var x = parseInt(hero.style.left);
    hero.style.left = (x-48) + "px";
  }
  if (event.keyCode == 115) {
    direction = event.keyCode;
    var y = parseInt(hero.style.top);
    hero.style.top = (y+48) + "px";
  }
   if (event.keyCode == 112) {
     start();
   }
}
