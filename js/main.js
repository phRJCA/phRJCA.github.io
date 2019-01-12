function showImage(imgPath) {
  document.getElementById('div-content-right').style.backgroundImage = "url(" + imgPath + ")";
  document.getElementById('div-content-right').style.color = "black";
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
