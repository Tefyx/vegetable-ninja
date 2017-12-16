function CreateMap() {
	console.log(level);	
  var thisMap = getMap();
    for (var i = 0; i <thisMap.length; i++) {
    	var elem = document.createElement("img");
		elem.src="../img/Textures/" + thisMap[i];
		elem.style.height="6.25%";
		elem.style.width="6.25%";
	    elem.style.float="left";
		document.getElementById("level").appendChild(elem);
    }
}