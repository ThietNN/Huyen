const feedbacks = [
    { imgSrc: 'images/profile-1.jpg', name: 'Paul Mitchel', occupation: 'Khách hàng', content: `"Đồ ăn thực sự rất ngon! Tôi đặc biệt thích món mì Ý, ăn rất vừa miệng."` },
    { imgSrc: 'images/profile-3.jpg', name: 'Steve Fonsi', occupation: 'Nhà phê bình ẩm thực', content: `"Giá tiền quá rẻ so với chất lượng món ăn và dịch vụ tôi nhận được."` },
    { imgSrc: 'images/profile-7.jpg', name: 'Paul Mitchel', occupation: 'Food Reviewer', content: `"Cửa hàng có đa dạng các món ăn. Đồ ăn chay cũng rất tuyệt vời. Phục vụ rất chuyên nghiệp"` },
]
var feedbackElement = document.getElementById("feedback-content");
var feedbackStr = '';
feedbacks.forEach((item, index) => {
    feedbackStr += `<div class="carousel-item text-center ${index == 0? 'active' : ''}">
    <div class="img-box p-1 border rounded-circle m-auto">
        <img class="d-block w-100 rounded-circle" src="${item.imgSrc}" alt="">
    </div>
    <h5 class="mt-4 mb-0"><strong class="text-warning text-uppercase">${item.name}</strong>
    </h5>
    <h6 class="text-dark m-0">${item.occupation}</h6>
    <p class="m-0 pt-3">${item.content}</p>
</div>`
});
feedbackElement.innerHTML = feedbackStr;