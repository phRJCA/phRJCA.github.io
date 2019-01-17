function showImage(imgPath) {
  document.getElementById('img-highlight').style.backgroundImage = "url(" + imgPath + ")";
  document.getElementById('img-highlight').style.color = "black";
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
