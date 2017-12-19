
var hero = document.getElementById("hero");

hero.style.left ="100px";
hero.style.top="100px";
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
