document.addEventListener("DOMContentLoaded", function () {
  getChildComponents('header');
  getChildComponents('menu-item');
  getChildComponents('feedback');
  getChildComponents('footer');


  getSlideTitle();
});

function getChildComponents(id) {
  var element = document.getElementById(`${id}-container`);
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      element.innerHTML = this.responseText;
      var script = document.createElement('script');
      script.src = `${id}.js`;
      element.appendChild(script);
    }
  };
  xhttp.open("GET", `${id}.html`, true);
  xhttp.send();
}

const slideTitle = `<strong>Chào mừng quý khách đến với <br>Yamifood</strong></h1>`;

function getSlideTitle() {
  for (let index = 1; index <= 3; index++) {
    var slideTitleDom = document.getElementById(`welcome-${index}`);
    slideTitleDom.innerHTML = slideTitle
  }
}
