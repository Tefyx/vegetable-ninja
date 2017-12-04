function CreateMap() {
  var thisMap = getMap();
    for (var i = 0; i <thisMap.length; i++) {
    	var elem = document.createElement("img");
		elem.src="../img/Textures/" + thisMap[i]+".jpg";
		elem.style.height="6.25%";
		elem.style.width="6.25%";
	    elem.style.float="left";
		level.appendChild(elem);
    }
}