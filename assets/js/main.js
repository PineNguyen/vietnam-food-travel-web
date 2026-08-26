// ------------------ button return header ----------------------
let mybutton = document.getElementById("myBtn");

window.onscroll = function() { scrollFunction(); };

function scrollFunction() {
  if (mybutton) {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
}

if (mybutton) {
  mybutton.addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const am_thuc = document.getElementById("am_thuc");
  if (am_thuc) {
    am_thuc.addEventListener("click", function(e) {
      const foodSec = document.getElementById("food");
      if (foodSec) {
        e.preventDefault();
        foodSec.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  const du_lich = document.getElementById("du_lich");
  if (du_lich) {
    du_lich.addEventListener("click", function(e) {
      const travelSec = document.getElementById("travel");
      if (travelSec) {
        e.preventDefault();
        travelSec.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  const gioi_thieu = document.getElementById("gioi_thieu");
  if (gioi_thieu) {
    gioi_thieu.addEventListener("click", function(e) {
      const inforSec = document.getElementById("infor");
      if (inforSec) {
        e.preventDefault();
        inforSec.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  const checkbox = document.getElementById('check');
  const menuNav = document.querySelector('.menu-nav');
  if (menuNav && checkbox) {
    menuNav.addEventListener('click', function() {
      checkbox.checked = false;
    });
  }
});

// ---------------- Preload Page ----------------
var loader = document.getElementById("preloader");
if (loader) {
  window.addEventListener("load", function() {
    setTimeout(function() {
      loader.style.display = "none";
    }, 3000);
  });
}

// ---------------- Animation Character -----------------------
window.addEventListener('load', function() {
  var overlay = document.getElementById('overlay');
  var character = document.getElementById('character');
  if (overlay && character) {
    setTimeout(function() {
      overlay.style.opacity = '1';
      character.style.opacity = '1';
    }, 3500);
    
    setTimeout(function() {
      overlay.style.opacity = '0';
      character.style.opacity = '0';
    }, 6000);
  }
});

// --------------- Slideshow image first page ---------------------
window.addEventListener("DOMContentLoaded", function() {
  var leftImages = document.querySelectorAll(".left img");
  var rightImages = document.querySelectorAll(".right img");
  var currentIndex = 0;

  if (leftImages.length > 0 && rightImages.length > 0) {
    function showNextImages() {
      var nextIndex = (currentIndex + 1) % leftImages.length;

      leftImages[currentIndex].classList.remove("active");
      leftImages[nextIndex].classList.add("active");

      rightImages[currentIndex].classList.remove("active");
      rightImages[nextIndex].classList.add("active");

      currentIndex = nextIndex;
    }

    setInterval(showNextImages, 3000);
  }
});

// ---------------- Typed.js Effect Initialization ----------------
document.addEventListener('DOMContentLoaded', function() {
  if (typeof Typed !== 'undefined') {
    var travelEl = document.getElementById('travel-text');
    if (travelEl) {
      new Typed('#travel-text', {
        strings: ['Là một quốc gia đang phát triển nằm bên bờ Thái Bình Dương, Việt Nam sở hữu rất nhiều điểm mạnh để phát triển du lịch. Thực vậy, ngoài các vùng đất mới mẻ ngoài lãnh thổ, nhiều tín đồ du ngoạn vẫn chọn khám phá, check-in ở những địa điểm du lịch Việt Nam. Không chỉ tìm ra các địa điểm “sống ảo” mới mẻ, du khách còn tự cảm nhận và khám phá lại lịch sử hào hùng của dân tộc, cũng như những cảnh sắc thiên nhiên tuyệt vời của nước Nam.'],
        typeSpeed: 36,
        showCursor: false
      });
    }

    var foodEl = document.getElementById('food-text');
    if (foodEl) {
      new Typed('#food-text', {
        strings: ['Mỗi khi nhắc đến đất nước Việt Nam xinh đẹp thì ẩm thực luôn là một đề tài thú vị. Ẩm thực của người Việt không chỉ là những món ăn, công thức chế biến mà đây là một nét văn hóa tự nhiên hình thành trong cuộc sống. Chúng được biết đến với những nét đặc trưng như: tính hòa đồng, đa dạng, ít mỡ; đậm đà hương vị với sự kết hợp nhuần nhuyễn nhiều loại nguyên liệu và gia vị khác nhau nhằm giúp tăng mùi vị, sức hấp dẫn trong từng món ăn.'],
        typeSpeed: 36,
        showCursor: false
      });
    }
  }
});