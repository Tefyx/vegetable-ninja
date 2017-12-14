direction = 0;

function start() {
  //var elem = document.getElementById("shuriken");
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
  console.log(elem.posx);
}

var id = setInterval(frame, 10);

function frame() {
  for (var i = 0; i < mybody.children.length; i++) {
    var elem = mybody.children[i];

    if (elem.direction == 119) {
      elem.style.top = elem.posx + 'px';
      elem.posx = elem.posx - 3;
      elem.style.left = elem.posy + 'px';
    }else if (elem.direction == 97) {
      elem.style.left = elem.posy + 'px';
      elem.posy = elem.posy - 3;
      elem.style.top = elem.posx + 'px';
    }else if (elem.direction == 100) {
      elem.style.left = elem.posy + 'px';
      elem.posy = elem.posy + 3;
      elem.style.top = elem.posx + 'px';
    }else if (elem.direction == 115) {
      elem.style.top = elem.posx + 'px';
      elem.posx = elem.posx + 3;
      elem.style.left = elem.posy + 'px';
    }

    if (elem.startposx + 300 = elem.posx) {
      console.log("hiiiiiiiiiiiii");
    }

  }
}


window.onkeypress = function(event) {
  if (event.keyCode == 100) {
    direction = event.keyCode;
  }
  if (event.keyCode == 119) {
    direction = event.keyCode;
  }
  if (event.keyCode == 97) {
    direction = event.keyCode;
  }
  if (event.keyCode == 115) {
    direction = event.keyCode;
  }
   if (event.keyCode == 112) {
     start();
   }
}
