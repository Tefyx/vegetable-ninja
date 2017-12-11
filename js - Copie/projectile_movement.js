direction = 0;

function start() {
  //var elem = document.getElementById("shuriken");
  var elem = document.createElement("IMG");
  elem.src = "../img/Weapons/shuriken.png";
  elem.className = "shuriken";
  elem.direction = direction;
  elem.pos = 0;
  container.appendChild(elem);
}

var id = setInterval(frame, 10);

function frame() {
  for (var i = 0; i < container.children.length; i++) {
    var elem = container.children[i];
    if (elem.direction == 119) {
      elem.style.top = -elem.pos + 'px';
    }else if (elem.direction == 97) {
      elem.style.left = -elem.pos + 'px';
    }else if (elem.direction == 100) {
      elem.style.left = elem.pos + 'px';
    }else if (elem.direction == 115) {
      elem.style.top = elem.pos + 'px';
    }
    elem.pos = elem.pos + 5;
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
