document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementsByClassName('login-form')[0];

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('박성훈 님 반갑습니다!');

        setTimeout(function() {
            window.location.href = '../function/map.html';
        }, 500);
    });
});

var current = null;
document.querySelector("#email").addEventListener("focus", function (e) {
  if (current) current.pause();
  current = anime({
    targets: "path",
    strokeDashoffset: {
      value: 0,
      duration: 700,
      easing: "easeOutQuart"
    },
    strokeDasharray: {
      value: "240 1386",
      duration: 700,
      easing: "easeOutQuart"
    }
  });
});
document.querySelector("#password").addEventListener("focus", function (e) {
  if (current) current.pause();
  current = anime({
    targets: "path",
    strokeDashoffset: {
      value: -336,
      duration: 700,
      easing: "easeOutQuart"
    },
    strokeDasharray: {
      value: "240 1386",
      duration: 700,
      easing: "easeOutQuart"
    }
  });
});
document.querySelector("#submit").addEventListener("focus", function (e) {
  if (current) current.pause();
  current = anime({
    targets: "path",
    strokeDashoffset: {
      value: -730,
      duration: 700,
      easing: "easeOutQuart"
    },
    strokeDasharray: {
      value: "530 1386",
      duration: 700,
      easing: "easeOutQuart"
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var form = document.querySelector(".login-form");

  form.addEventListener("click", function (event) {
    event.preventDefault();

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (email === "qwer" && password === "1234") {
      alert("박성훈 님 반갑습니다!");

      setTimeout(function () {
        window.location.href = "../function/map.html";
      }, 500);
    } else {
      alert("아이디 또는 비밀번호가 잘못되었습니다.");
    }
  });
});

var current = null;
document.querySelector("#email").addEventListener("focus", function (e) {
  if (current) current.pause();
  current = anime({
    targets: "path",
    strokeDashoffset: {
      value: 0,
      duration: 700,
      easing: "easeOutQuart",
    },
    strokeDasharray: {
      value: "240 1386",
      duration: 700,
      easing: "easeOutQuart",
    },
  });
});
document.querySelector("#password").addEventListener("focus", function (e) {
  if (current) current.pause();
  current = anime({
    targets: "path",
    strokeDashoffset: {
      value: -336,
      duration: 700,
      easing: "easeOutQuart",
    },
    strokeDasharray: {
      value: "240 1386",
      duration: 700,
      easing: "easeOutQuart",
    },
  });
});
document.querySelector("#submit").addEventListener("focus", function (e) {
  if (current) current.pause();
  current = anime({
    targets: "path",
    strokeDashoffset: {
      value: -730,
      duration: 700,
      easing: "easeOutQuart",
    },
    strokeDasharray: {
      value: "530 1386",
      duration: 700,
      easing: "easeOutQuart",
    },
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('header');
  const footer = document.querySelector('footer');
  const pageWrapper = document.querySelector('.page-wrapper');

  function fadeOutElements() {
      header.classList.add('slide-up-out');
      footer.classList.add('slide-down-out');
      pageWrapper.classList.add('fade-out');
  }

  document.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', function(e) {
          e.preventDefault();
          fadeOutElements();
          setTimeout(() => {
              window.location.href = link.href;
          }, 1000);
      });
  });
});