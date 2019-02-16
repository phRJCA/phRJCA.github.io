let currentPicIdx = 0;

let hoveredList = '';
let hoveredListOldColor = '';
let isShown = '';

document.onkeydown = checkKey;

function showImage(imgPath) {
  // Resets pic index for parts with toggleable pics
  currentPicIdx = 0;

  // This runs only the first highlight
  const img = document.getElementById('img-highlight');
  if (!img.style.display) {
    img.style.display = 'block';
  };

  // Return old hovered list back to its original color
  if (hoveredList) {
    hoveredList.style['background-color'] = hoveredListOldColor;
  };

  // Get new hovered list to tweak
  hoveredList = event.target;
  hoveredListOldColor = hoveredList.style['background-color'];
  hoveredList.style['background-color'] = 'grey';

  img.style.backgroundImage = "url(" + imgPath + ")";
  img.style.color = "black";
};

function hoverComingSoon() {
  const targetText = event.target.innerText;
  event.target.prevVal = targetText;
  event.target.innerText = 'Coming Soon';
  event.target.onmouseleave = mouseLeaveComingSoon;
};

const mouseLeaveComingSoon = function() {
  event.target.innerText = event.target.prevVal;
};

function checkKey(e) {
  if (hoveredList && hoveredList !== '') {
    // itoigawa2019
    const hoveredListId = hoveredList.id;
    if (imageCount[hoveredListId] && imageCount[hoveredListId] > 1) {
      e = e || window.event;
      if (e.keyCode == '37') { // left arrow
        getPrevPic();
      } else if (e.keyCode == '39') { // right arrow
        getNextPic();
      };
    };
  }
};
