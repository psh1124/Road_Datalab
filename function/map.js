function setActive(button) {
  var buttons = document.querySelectorAll(".button-container button");
  buttons.forEach(function (btn) {
    btn.classList.remove("active");
  });
  button.classList.add("active");
  var buttonClass = button.classList[0];
  var mapUrls = {
    a: "https://kepler.gl/demo/map?mapUrl=https://dl.dropboxusercontent.com/scl/fi/2ovos2vdpr0fztw3mius4/keplergl_k4ovmi.json?rlkey=timympjhdy46tb4fn9hijblgr&dl=0",
    b: "https://kepler.gl/demo/map?mapUrl=https://dl.dropboxusercontent.com/scl/fi/t3w3nhz71xe93u2edm7hw/keplergl_klipf2q.json?rlkey=p29mkfm4simn0r44fhfb508rm&dl=0",
    c: "https://kepler.gl/demo/map?mapUrl=https://dl.dropboxusercontent.com/scl/fi/dv43p04l6duuvdidv2zzo/keplergl_hz623v.json?rlkey=ktk5s89vvwph0idqwxly41r0e&dl=0",
    d: "https://kepler.gl/demo/map?mapUrl=https://dl.dropboxusercontent.com/scl/fi/5ygjanmnov04z2igsrqyy/keplergl_lowq0be.json?rlkey=5qz3j24mwc3zxyhydnqvwnu1u&dl=0",
    e: "https://kepler.gl/demo/map?mapUrl=https://dl.dropboxusercontent.com/scl/fi/868ebiovsjm3oovzh7owt/keplergl_l5s2udm.json?rlkey=bn7wchmevgz5yuy33cmr5akb6&dl=0",
    f: "https://kepler.gl/demo/map?mapUrl=https://dl.dropboxusercontent.com/scl/fi/gc8klmb4sidv3vou9y4b5/keplergl_tyu3twp.json?rlkey=78gtu07dnf7ocl2v7fxxk24ww&dl=0",
  };

  // URL iframe에 ㄱㄱ
  var url = mapUrls[buttonClass];
  if (url) {
    document.getElementById("mapIframe").src = url;
  } else {
    console.error("URL not found for button class:", buttonClass);
  }
}

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
          }, 700);
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