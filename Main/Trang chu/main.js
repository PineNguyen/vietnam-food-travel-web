// ------------------ button return header ----------------------
// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

$("#myBtn").click(function() {
  $("html, body").animate({ scrollTop: 0 }, 1000);
});

$("#am_thuc").click(function() {
  $("html, body").animate({ scrollTop: $("#food").offset().top }, 1000);
});

$("#du_lich").click(function() {
  $("html, body").animate({ scrollTop: $("#travel").offset().top }, 1000);
});

$("#gioi_thieu").click(function() {
  $("html, body").animate({ scrollTop: $("#infor").offset().top }, 1000);
});

document.addEventListener('DOMContentLoaded', function() {
  var checkbox = document.getElementById('check');
  var menuNav = document.querySelector('.menu-nav');

  menuNav.addEventListener('click', function() {
    checkbox.checked = false;
  });
});

// ---------------- Preload Page ----------------
var loader = document.getElementById("preloader");

window.addEventListener("load", function() {
  this.setTimeout(function() {
    loader.style.display = "none";
  }, 3000);
})

// ---------------- Animation Character -----------------------
window.addEventListener('load', function() {
  var overlay = document.getElementById('overlay');
  var character = document.getElementById('character');
  
  setTimeout(function() {
    overlay.style.opacity = '1';
    character.style.opacity = '1';
  }, 3500); // Hiển thị overlay và nhân vật sau 1 giây (có thể điều chỉnh)
  
  setTimeout(function() {
    overlay.style.opacity = '0';
    character.style.opacity = '0';
  }, 6000); // Biến mất overlay và nhân vật sau 2 giây (có thể điều chỉnh)
});

// --------------- Slideshow image first page ---------------------
window.addEventListener("DOMContentLoaded", function() {
  var leftImages = document.querySelectorAll(".left img");
  var rightImages = document.querySelectorAll(".right img");
  var currentIndex = 0;

  function showNextImages() {
    var nextIndex = (currentIndex + 1) % leftImages.length;

    leftImages[currentIndex].classList.remove("active");
    leftImages[nextIndex].classList.add("active");

    rightImages[currentIndex].classList.remove("active");
    rightImages[nextIndex].classList.add("active");

    currentIndex = nextIndex;
  }

  setInterval(showNextImages, 3000); // Thay đổi hình ảnh sau mỗi 3 giây (3000ms)
});

// -----------------------------------
document.addEventListener('DOMContentLoaded', function() {
  // Gọi đoạn mã Typed.js sau khi trang web đã tải hoàn toàn
  var typed = new Typed('#travel-text', {
    strings: ['Là một quốc gia đang phát triển nằm bên bờ Thái Bình Dương, Việt Nam sở hữu rất nhiều điểm mạnh để phát triển du lịch. Thực vậy, ngoài các vùng đất mới mẻ ngoài lãnh thổ, nhiều tín đồ du ngoạn vẫn chọn khám phá, check-in ở những địa điểm du lịch Việt Nam. Không chỉ tìm ra các địa điểm “sống ảo” mới mẻ, du khách còn tự cảm nhận và khám phá lại lịch sử hào hùng của dân tộc, cũng như những cảnh sắc thiên nhiên tuyệt vời của nước Nam.'],
    typeSpeed: 36, // Tốc độ viết chữ (tính bằng milliseconds)
    showCursor: false // Ẩn con trỏ
  });
});

// --------------------------
document.addEventListener('DOMContentLoaded', function() {
  // Gọi đoạn mã Typed.js sau khi trang web đã tải hoàn toàn
  var typed = new Typed('#food-text', {
    strings: ['Mỗi khi nhắc đến đất nước Việt Nam xinh đẹp thì ẩm thực luôn là một đề tài thú vị. Ẩm thực của người Việt không chỉ là những món ăn, công thức chế biến mà đây là một nét văn hóa tự nhiên hình thành trong cuộc sống. Chúng được biết đến với những nét đặc trưng như: tính hòa đồng, đa dạng, ít mỡ; đậm đà hương vị với sự kết hợp nhuần nhuyễn nhiều loại nguyên liệu và gia vị khác nhau nhằm giúp tăng mùi vị, sức hấp dẫn trong từng món ăn.'],
    typeSpeed: 36, // Tốc độ viết chữ (tính bằng milliseconds)
    showCursor: false // Ẩn con trỏ
  });
});