
direction = 0;

function start() {
  var elem = document.getElementById("shuriken");
  elem.direction = direction;
  console.log(elem.direction);
  var pos = 0;
  var id = setInterval(frame, 10);
  function frame() {
    if (pos == 300) {
      clearInterval(id);
    } else {
      if (elem.direction == 119) {
        elem.style.top = -pos + 'px';
      }else if (elem.direction == 97) {
        elem.style.left = -pos + 'px';
      }else if (elem.direction == 100) {
        elem.style.left = pos + 'px';
      }else if (elem.direction == 115) {
        elem.style.top = pos + 'px';
      }
      pos++;
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
