document.addEventListener("DOMContentLoaded", function () {
  getHeader();
});

function getHeader () {
  var headerContainer = document.getElementById("header-container");
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      headerContainer.innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "header.html", true);
  xhttp.send();
}
