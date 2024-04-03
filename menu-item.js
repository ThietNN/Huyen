const menuGroups = [
    { label: 'Tất cả', filter: `*`, id: 0 },
    { label: 'Đồ uống', filter: `drinks`, id: 1 },
    { label: 'Bữa trưa', filter: `lunch`, id: 2 },
    { label: 'Bữa tối', filter: `dinner`, id: 3 },
]
const menuItems = [
    {
        type: 'drinks',
        imgSrc: 'images/img-01.jpg',
        name: 'Special Drinks 1',
        description: 'Sed id magna vitae eros sagittis euismod.',
        price: '$7.79'
    },
    {
        type: 'drinks',
        imgSrc: 'images/img-02.jpg',
        name: 'Special Drinks 2',
        description: 'Sed id magna vitae eros sagittis euismod.',
        price: '$9.79'
    },
    {
        type: 'drinks',
        imgSrc: 'images/img-03.jpg',
        name: 'Special Drinks 3',
        description: 'Sed id magna vitae eros sagittis euismod.',
        price: '$10.79'
    },
    {
        type: 'lunch',
        imgSrc: 'images/img-04.jpg',
        name: 'Special Lunch 1',
        description: 'Sed id magna vitae eros sagittis euismod.',
        price: '$15.79'
    },
    {
        type: 'lunch',
        imgSrc: 'images/img-05.jpg',
        name: 'Special Lunch 2',
        description: 'Sed id magna vitae eros sagittis euismod.',
        price: '$18.79'
    },
    {
        type: 'lunch',
        imgSrc: 'images/img-06.jpg',
        name: 'Special Lunch 3',
        description: 'Sed id magna vitae eros sagittis euismod.',
        price: '$20.79'
    },
    {
        type: 'dinner',
        imgSrc: 'images/img-07.jpg',
        name: 'Special Dinner 1',
        description: 'Sed id magna vitae eros sagittis euismod.',
        price: '$25.79'
    },
    {
        type: 'dinner',
        imgSrc: 'images/img-08.jpg',
        name: 'Special Dinner 2',
        description: 'Sed id magna vitae eros sagittis euismod.',
        price: '$22.79'
    },
    {
        type: 'dinner',
        imgSrc: 'images/img-09.jpg',
        name: 'Special Dinner 3',
        description: 'Sed id magna vitae eros sagittis euismod.',
        price: '$24.79'
    }
];


let activeButton = null;
const menuGroupIdPrefix = 'menu-group';

let menuGroupContainer = document.getElementById("menu-group-container");
menuGroupContainer.innerHTML = '';
menuGroups.forEach(item => {
    menuGroupContainer.innerHTML += `<button id="${menuGroupIdPrefix}-${item.id}" onclick="handleMenuClick(this, '${item.filter}')">${item.label}</button>`
});

let firstMenuGroup = document.getElementById(`${menuGroupIdPrefix}-${menuGroups[0].id}`)
firstMenuGroup.classList.add("active");
menuItemFilter(menuGroups[0].filter)

function menuItemFilter(type) {
    let filteredItems;
    if (type == '*') filteredItems = menuItems;
    else filteredItems = menuItems.filter(i => i.type == type);
    addMenuItems(filteredItems);
}

function handleMenuClick(clickedButton, filter) {
    if (activeButton) activeButton.classList.remove("active");
    else firstMenuGroup.classList.remove("active");
    clickedButton.classList.add("active");
    activeButton = clickedButton;
    menuItemFilter(filter);
}


function addMenuItems(items) {
    let menuContainer = document.getElementById('menu-items-container');
    menuContainer.innerHTML = '';
    items.forEach(item => {
        let menuItemHTML = `
            <div class="col-lg-4 col-md-6 special-grid ${item.type}">
              <div class="gallery-single fix">
                <img src="${item.imgSrc}" class="img-fluid" alt="Image">
                <div class="why-text">
                  <h4>${item.name}</h4>
                  <p>${item.description}</p>
                  <h5>${item.price}</h5>
                </div>
              </div>
            </div>
          `;
          menuContainer.innerHTML += menuItemHTML;
    });
}
