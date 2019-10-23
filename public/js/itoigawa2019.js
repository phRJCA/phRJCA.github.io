const imgPath = "/public/img";
const itoigawa2019Path = "/itoigawa2019";

// Pic Urls
// These pictures are ordered accordingly
const itoigawaMapPics = [
  `${imgPath}${itoigawa2019Path}/itoigawa-map/itoigawa-map.png`
];

const itoigawaEnvPics = [
  `${imgPath}${itoigawa2019Path}/itoigawa-env/itoigawa-mae.jpg`,
  `${imgPath}${itoigawa2019Path}/itoigawa-env/snow-env1.jpg`,
  `${imgPath}${itoigawa2019Path}/itoigawa-env/snow-env2.jpg`,
  `${imgPath}${itoigawa2019Path}/itoigawa-env/snow-env3.jpg`,
  `${imgPath}${itoigawa2019Path}/itoigawa-env/itoigawa-road.jpg`,
  `${imgPath}${itoigawa2019Path}/itoigawa-env/snow-env4.jpg`,
  `${imgPath}${itoigawa2019Path}/itoigawa-env/snow-env5.jpg`,
  `${imgPath}${itoigawa2019Path}/itoigawa-env/snow-env6.jpg`,
  `${imgPath}${itoigawa2019Path}/itoigawa-env/snow-env7.jpg`,
  `${imgPath}${itoigawa2019Path}/itoigawa-env/snow-road.jpg`,
  `${imgPath}${itoigawa2019Path}/itoigawa-env/snow-torii.jpg`,
  `${imgPath}${itoigawa2019Path}/itoigawa-env/itoigawa-umi.jpg`
];

const itoigawaYukiPics = [
  `${imgPath}${itoigawa2019Path}/itoigawa-yukikaki/hut.jpg`,
  `${imgPath}${itoigawa2019Path}/itoigawa-yukikaki/hut-group.jpg`,
  `${imgPath}${itoigawa2019Path}/itoigawa-yukikaki/rjca-yukikaki-act1.jpg`,
  `${imgPath}${itoigawa2019Path}/itoigawa-yukikaki/rjca-yukikaki-act2.jpg`,
  `${imgPath}${itoigawa2019Path}/itoigawa-yukikaki/hut2-group.jpg`,
  `${imgPath}${itoigawa2019Path}/itoigawa-yukikaki/hut2-group2.jpg`,
  `${imgPath}${itoigawa2019Path}/itoigawa-yukikaki/rjca-yukikaki-act3.jpg`,
  `${imgPath}${itoigawa2019Path}/itoigawa-yukikaki/rjca-yukikaki-act4.jpg`,
  `${imgPath}${itoigawa2019Path}/itoigawa-yukikaki/rjca-yukikaki-act5.jpg`,
  `${imgPath}${itoigawa2019Path}/itoigawa-yukikaki/rjca-yukikaki-act6.jpg`,
  `${imgPath}${itoigawa2019Path}/itoigawa-yukikaki/rjca-yukikaki-act7.jpg`,
  `${imgPath}${itoigawa2019Path}/itoigawa-yukikaki/rjca-yukikaki-dojo.jpg`
];

const itoigawaHokaPics = [
  `${imgPath}${itoigawa2019Path}/itoigawa-hoka/itoigawa-np.jpg`,
  `${imgPath}${itoigawa2019Path}/itoigawa-hoka/rjca-buried1.jpg`,
  `${imgPath}${itoigawa2019Path}/itoigawa-hoka/rjca-buried2.jpg`,
  `${imgPath}${itoigawa2019Path}/itoigawa-hoka/rjca-plow.jpg`
];

const imageCount = {
  "itoigawa-map": itoigawaMapPics.length,
  "itoigawa-env": itoigawaEnvPics.length,
  "itoigawa-yukikaki": itoigawaYukiPics.length,
  "itoigawa-hoka": itoigawaHokaPics.length
};

function setPicCount() {
  const targetId = event.target.id;
  const picCount = imageCount[targetId];
  event.target.setAttribute("pic-count", picCount);

  // Show next/previous image
  if (picCount > 1) {
    document.getElementById("img-highlight").innerHTML = 
    `<div id="prev-img-con" class="img-container">
        <i id="prev-img" class="fas fa-angle-left fa-2x icon-container" onclick="getPrevPic()"></i>
      </div>
      <div id="next-img-con" class="img-container">
        <i id="next-img" class="fas fa-angle-right fa-2x icon-container" onclick="getNextPic()"></i>
      </div>
      <div id="img-counter">Image: ${(currentPicIdx + 1)}/${picCount}</div>
    `;
  } else {
    document.getElementById("img-highlight").innerHTML = "";
  };
};

function getPrevPic(e) {
  let picCount = 0;
  let picUrls = "";

  // See main.js for more details on currentPicIdx & hoveredList
  switch (hoveredList && hoveredList.id) {
    // itoigawa-map only has 1 pic
    case "itoigawa-env":
      picCount = imageCount["itoigawa-env"];
      picUrls = itoigawaEnvPics;
      break;
    case "itoigawa-yukikaki":
      picCount = imageCount["itoigawa-yukikaki"];
      picUrls = itoigawaYukiPics;
      break;
    case "itoigawa-hoka":
      picCount = imageCount["itoigawa-hoka"];
      picUrls = itoigawaHokaPics;
      break;
    default:
      return;
  };

  currentPicIdx = getImgIdx(currentPicIdx, picCount, "prev");
  // Update image counter
  document.getElementById("img-counter").innerText = "Image: " + (currentPicIdx + 1) + "/" + picCount

  const img = document.getElementById("img-highlight");
  img.style.backgroundImage = "url(" + picUrls[currentPicIdx] + ")";
};

function getNextPic() {
  let picCount = 0;
  let picUrls = "";

  // See main.js for more details on currentPicIdx & hoveredList
  switch (hoveredList && hoveredList.id) {
    // itoigawa-map only has 1 pic
    case "itoigawa-env":
      picCount = imageCount["itoigawa-env"];
      picUrls = itoigawaEnvPics;
      break;
    case "itoigawa-yukikaki":
      picCount = imageCount["itoigawa-yukikaki"];
      picUrls = itoigawaYukiPics;
      break;
    case "itoigawa-hoka":
      picCount = imageCount["itoigawa-hoka"];
      picUrls = itoigawaHokaPics;
      break;
    default:
      return;
  };

  currentPicIdx = getImgIdx(currentPicIdx, picCount, "next");
  // Update image counter
  document.getElementById("img-counter").innerText = "Image: " + (currentPicIdx + 1) + "/" + picCount

  const img = document.getElementById("img-highlight");
  img.style.backgroundImage = "url(" + picUrls[currentPicIdx] + ")";
};

function getImgIdx(currentIdx, imgCount, type) {
  switch (type) {
    case "prev":
      currentIdx -= 1;
      if (currentIdx < 0) {
        currentIdx = imgCount - 1; // Get the last image
      };
      break;
    case "next":
      currentIdx += 1;
      if (currentIdx > (imgCount - 1) ) {
        currentIdx = 0; // Get the first image
      };
      break;
    default:
      // Do nothing
  }

  return currentIdx;
};
