const navbarItem = [
    { href: `index.html`, label: `Trang chủ` },
    { href: `menu.html`, label: `Thực đơn` },
    { href: `contact.html`, label: `Liên hệ` },
]
var navbar = document.getElementById("header");
var navbarStr = '';
navbarItem.forEach(item => {
    navbarStr += `<li class="nav-item ${navbarItem[0].href == item.href ? 'active' : ''}"><a class="nav-link" href="${item.href}">${item.label}</a></li>`
});
navbar.innerHTML = navbarStr;