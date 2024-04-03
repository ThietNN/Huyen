const slideTitle = `<strong>Chào mừng đến với <br>Yamifood</strong></h1>`;

function getSlideTitle() {
  for (let index = 1; index <= 3; index++) {
    var slideTitleDom = document.getElementById(`welcome-${index}`);
    slideTitleDom.innerHTML = slideTitle
  }
}
window.getChildComponent('feedback');
getSlideTitle();