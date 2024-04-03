const contacts = [
    { type: 'Điện thoại', value: '+84 123456789', icon: 'fa fa-volume-control-phone' },
    { type: 'Email', value: 'yamifood@gmail.com', icon: 'fa fa-envelope' },
    { type: 'Địa chỉ', value: 'Yamifood, Số 27, phố hàng Vải, quận Hai Bà Trưng, Hà Nội', icon: 'fa fa-map-marker' },
]

const openingHours = [
    { label: 'Ngày thường', time: '8h sáng - 10h tối' },
    { label: 'Cuối tuần', time: '8h sáng - 12h tối' },
    { label: 'Ngày lễ, Tết', time: '9h sáng - 9h tối' },
]


function getContactInfo() {
    let contactElement = document.getElementById('contact-info-container');
    let contactStr = '';
    contacts.forEach(item => {
        contactStr += `
        <div class="col-md-4">
            <i class="${item.icon}"></i>
            <div class="overflow-hidden">
               <h4>${item.type}</h4>
               <p class="lead">
                  ${item.value}
              </p>
            </div>
        </div>`
    });
    contactElement.innerHTML = contactStr;
}

function getOpeningHours() {
    let openingHoursElement = document.getElementById('opening-hours-container');
    let openingHoursStr = '<h3>Giờ mở cửa</h3>';
    openingHours.forEach(item => {
        openingHoursStr += `<p>${item.label}: ${item.time}</p>`
    });
    openingHoursElement.innerHTML = openingHoursStr;
}

getContactInfo();
getOpeningHours();