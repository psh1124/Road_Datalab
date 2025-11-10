document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");
    const footer = document.querySelector("footer");
  
    function addExitAnimation() {
      header.style.animation = "slideUpOut 1s ease-in-out forwards";
      footer.style.animation = "slideDownOut 1s ease-in-out forwards";
    }
  
    window.addEventListener("beforeunload", addExitAnimation);
  
    document.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function (event) {
        event.preventDefault();
        addExitAnimation();
  
        setTimeout(() => {
          window.location.href = link.href;
        }, 300);
      });
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
            }, 700);
        });
    });
  });