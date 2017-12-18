function scrollDown() {
  document.getElementById("play-button").classList.add("is-hidden");
  document.getElementById("home-title").classList.add("is-hidden");
  document.getElementById("background").classList.add("is-scrolled");
  setTimeout( function hiddenHome() {
    document.getElementById("play-button").classList.add("is-display-none");
    document.getElementById("home-title").classList.add("is-display-none");
    document.getElementById("level-title").classList.remove("is-display-none");
    document.getElementById("button-level-container").classList.remove("is-display-none");
    document.getElementById("back-button").classList.remove("is-display-none");
  }, 500);

  setTimeout( function showLevelSelection() {
    document.getElementById("level-title").classList.remove("is-hidden");
    document.getElementById("button-level-container").classList.remove("is-hidden");
    document.getElementById("back-button").classList.remove("is-hidden");
  }, 600);
}

function scrollUp() {
  document.getElementById("background").classList.remove("is-scrolled");
  document.getElementById("level-title").classList.add("is-hidden");
  document.getElementById("button-level-container").classList.add("is-hidden");
  document.getElementById("back-button").classList.add("is-hidden");
  setTimeout( function hiddenLevelSelection() {
    document.getElementById("play-button").classList.remove("is-display-none");
    document.getElementById("home-title").classList.remove("is-display-none");
    document.getElementById("level-title").classList.add("is-display-none");
    document.getElementById("button-level-container").classList.add("is-display-none");
    document.getElementById("back-button").classList.add("is-display-none");
  }, 500);

  setTimeout( function showHome() {
    document.getElementById("play-button").classList.remove("is-hidden");
    document.getElementById("home-title").classList.remove("is-hidden");
    document.getElementById("level-title").classList.add("is-display-none");
    document.getElementById("button-level-container").classList.add("is-display-none");
  }, 600);
}

function showLevel(level_id) {
  document.getElementById("level-modal").classList.remove("is-display-none");
  if (level_id == 1) {
    document.getElementById("level-modal-title").classList.add("level-modal-title-1");
  }
  if (level_id == 2) {
    document.getElementById("level-modal-title").classList.add("level-modal-title-2");
  }
  if (level_id == 3) {
    document.getElementById("level-modal-title").classList.add("level-modal-title-3");
  }
  if (level_id == 4) {
    document.getElementById("level-modal-title").classList.add("level-modal-title-4");
  }

  setTimeout( function showModal() {
    document.getElementById("level-modal").classList.remove("is-hidden");
    document.getElementById("level-modal").classList.add("modal-show");
  }, 25);

  setTimeout( function createMap() {
    var map = [
      'BTL.png','BT.png','BT.png','BT.png','BT.png','BT.png','BT.png','BT.png','BT.png','BT.png','BT.png','BT.png','BT.png','BT.png','BT.png','BTR.png',
      'BL.png','S.png','S.png','S.png','S.png','S.png','S.png','S.png','S.png','S.png','S.png','PTL.png','C.png','PTR.png','S.png','BR.png',
      'BL.png','S.png','S.png','R.png','R.png','S.png','PTL.png','PT.png','PT.png','PT.png','PT.png','P.png','P.png','PR.png','S.png','BR.png',
      'BL.png','S.png','S.png','R.png','S.png','S.png','PL.png','P.png','P.png','P.png','P.png','P.png','P.png','PR.png','S.png','BR.png',
      'BL.png','R.png','S.png','S.png','S.png','S.png','PL.png','P.png','P.png','PB.png','PB.png','PB.png','PB.png','PBR.png','S.png','BR.png',
      'BL.png','R.png','R.png','S.png','S.png','S.png','PL.png','P.png','PR.png','S.png','S.png','S.png','S.png','R.png','S.png','BR.png',
      'BL.png','S.png','S.png','S.png','S.png','S.png','PL.png','P.png','PR.png','S.png','S.png','S.png','S.png','S.png','S.png','BR.png',
      'BL.png','LT.gif','LT.gif','LT.gif','LT.gif','LT.gif','PL.png','P.png','PR.png','LT.gif','LT.gif','LT.gif','LT.gif','LT.gif','LT.gif','BR.png',
      'BL.png','L.gif','L.gif','L.gif','L.gif','L.gif','PL.png','P.png','PR.png','L.gif','L.gif','L.gif','L.gif','L.gif','L.gif','BR.png',
      'BL.png','LB.gif','LB.gif','LB.gif','LB.gif','LB.gif','PL.png','P.png','PR.png','LB.gif','LB.gif','LB.gif','LB.gif','LB.gif','LB.gif','BR.png',
      'BL.png','S.png','S.png','S.png','S.png','S.png','PL.png','P.png','PR.png','S.png','S.png','S.png','S.png','S.png','S.png','BR.png',
      'BL.png','S.png','S.png','R.png','S.png','S.png','PL.png','P.png','PR.png','S.png','S.png','R.png','S.png','S.png','S.png','BR.png',
      'BL.png','S.png','S.png','S.png','R.png','S.png','PL.png','P.png','PR.png','S.png','S.png','S.png','S.png','S.png','S.png','BR.png',
      'BL.png','S.png','R.png','S.png','R.png','S.png','PL.png','P.png','PR.png','S.png','S.png','S.png','R.png','S.png','S.png','BR.png',
      'BL.png','S.png','S.png','R.png','S.png','S.png','PBL.png','PB.png','PBR.png','S.png','S.png','S.png','S.png','S.png','S.png','BR.png',
      'BBL.png','BB.png','BB.png','BB.png','BB.png','BB.png','BB.png','BB.png','BB.png','BB.png','BB.png','BB.png','BB.png','BB.png','BB.png','BBR.png'
    ];
    for (var i = 0; i < map.length; i++) {
      var elem = document.createElement("img");
      elem.src="img/textures/" + map[i];
      elem.style.height="6.25%";
      elem.style.width="6.25%";
      elem.style.float="left";
      document.getElementById("level").appendChild(elem);
    }
  }, 100);

  setTimeout( function showMap() {
    document.getElementById("level").classList.remove("is-hidden");
  }, 350);

  setTimeout( function showLevelTitle() {
    document.getElementById("level-modal-title").classList.add("is-scaled");
  }, 1000);

  setTimeout(function showExitButton() {
    document.getElementById("exit-button").classList.remove("is-hidden");
    document.getElementById("level-modal-score").classList.remove("is-hidden");
  }, 2000);
}

function exitLevel() {
  document.getElementById("level-modal").classList.add("is-hidden");
  document.getElementById("level-modal").classList.remove("modal-show");
  setTimeout( function closeModal(level_id) {
    document.getElementById("level-modal").classList.add("is-display-none");
    document.getElementById("exit-button").classList.add("is-hidden");
    document.getElementById("level-modal-score").classList.add("is-hidden");
    document.getElementById("level").classList.add("is-hidden");
    document.getElementById("level").innerHTML = "";
    document.getElementById("level-modal-title").classList.remove("is-scaled");
    // showLevel.apply(this, arguments);
    if (level_id == 1) {
      document.getElementById("level-modal-title").classList.remove("level-modal-title-1");
    }
    if (level_id == 2) {
      document.getElementById("level-modal-title").classList.remove("level-modal-title-2");
    }
    if (level_id == 3) {
      document.getElementById("level-modal-title").classList.remove("level-modal-title-3");
    }
    if (level_id == 4) {
      document.getElementById("level-modal-title").classList.remove("level-modal-title-4");
    }
  }, 500);
}
