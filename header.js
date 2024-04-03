const navbarItem = [
    { href: `index.html`, label: `Trang chủ`, id: 'main' },
    { href: `menu.html`, label: `Thực đơn`, id: 'menu' },
    { href: `contact.html`, label: `Liên hệ`, id: 'contact' },
]
let activeNavbar = navbarItem[0].id;
let navbarIdPrefix = 'navbar-item';
var navbar = document.getElementById("header");
var navbarStr = '';
navbarItem.forEach((item) => {
    navbarStr += `<li class="nav-item ${item.id == activeNavbar ? 'active' : ''}" id="${navbarIdPrefix}-${item.id}" style="cursor: pointer;"><a class="nav-link" onclick="toggle('${item.id}')">${item.label}</a></li>`
});
navbar.innerHTML = navbarStr;

function toggle(id) {
  navbarItem.forEach(item => {
    var element = document.getElementById(`${navbarIdPrefix}-${item.id}`);
    if (item.id != id)
      element.classList.remove('active')
    else
      element.classList.add('active');

  })
  activeNavbar = id;
  window.toggleContainer(id);
}