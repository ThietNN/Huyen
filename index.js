const childComponents = ['main', 'menu', 'contact'];

document.addEventListener("DOMContentLoaded", function () {
  getChildComponent('header');
  getChildComponent('footer');
  getChildComponent(childComponents[0]);
});


function getChildComponent(id) {
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

function toggleContainer(id) {
  var container = document.getElementById(`${id}-container`);
  if (!container.innerHTML || container.innerHTML == '')
    getChildComponent(id);
  childComponents.forEach(item => {
    if (item != id) {
      var remove = document.getElementById(`${item}-container`);
      remove.style.display = "none";
    }
  })
  container.style.display = "block";

  let slides = document.getElementById('slides')
  if (id != childComponents[0]) {
    slides.style.display = "none"
  }
  else {
    slides.style.display = "block"
  }
}
window.toggleContainer = toggleContainer
window.getChildComponent = getChildComponent