/*document.addEventListener('DOMContentLoaded', function (){
  const anchors = document.querySelectorAll('a[href^="#"]')
  
  // Цикл по всем ссылкам
  for(let anchor of anchors) {
      anchor.addEventListener("click", function(e) {
          e.preventDefault();
          const blockID = anchor.getAttribute('href');
          document.querySelector('' + blockID).scrollIntoView({
              behavior: "smooth",
              block:'start'
          })
      })
  }
});*/

$(document).ready(function(){
  $('.slider-1').slick({
    autoplay: true,
    autoplaySpeed:100,
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    adaptiveHeight: true
  })
})

document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("1_fil");
  const rect = document.getElementById("block_content");
  const button2 = document.getElementById("hidden1");
  const button3 = document.getElementById("hid1");
  const rect2 = document.getElementById("body_pr");

  const butt1 = document.getElementById("2_fil");
  const butt11 = document.getElementById("2_f")
  const butt2 = document.getElementById("hidden2");
  const butt3 = document.getElementById("hid2");

  const bu1 = document.getElementById("3_fil");
  const bu2 = document.getElementById("hidden3");
  const bu3 = document.getElementById("hid3");

  button.addEventListener("click", () => {
    toggleDisplayBlock(rect, "is-visible", "is-hidden", 500);
    blockScroll(rect2, "stop","active");
  });
  button2.addEventListener("click", () => {
    toggleDisplayBlock(rect, "is-visible", "is-hidden", 500);
    blockScroll(rect2, "stop","active");
  });
  button3.addEventListener("click", () => {
    toggleDisplayBlock(rect, "is-visible", "is-hidden", 500);
    blockScroll(rect2, "stop","active");
  });

  butt1.addEventListener("click", () => {
    toggleDisplayBlock(rect, "is-visible", "is-hidden", 500);
    blockScroll(rect2, "stop","active");
  });
  butt11.addEventListener("click", () => {
    toggleDisplayBlock(rect, "is-visible", "is-hidden", 500);
    blockScroll(rect2, "stop","active");
  });
  butt2.addEventListener("click", () => {
    toggleDisplayBlock(rect, "is-visible", "is-hidden", 500);
    blockScroll(rect2, "stop","active");
  });
  butt3.addEventListener("click", () => {
    toggleDisplayBlock(rect, "is-visible", "is-hidden", 500);
    blockScroll(rect2, "stop","active");
  });

  bu1.addEventListener("click", () => {
    toggleDisplayBlock(rect, "is-visible", "is-hidden", 500);
    blockScroll(rect2, "stop","active");
  });
  bu2.addEventListener("click", () => {
    toggleDisplayBlock(rect, "is-visible", "is-hidden", 500);
    blockScroll(rect2, "stop","active");
  });
  bu3.addEventListener("click", () => {
    toggleDisplayBlock(rect, "is-visible", "is-hidden", 500);
    blockScroll(rect2, "stop","active");
  });
});

function toggleDisplayBlock(element, first, second, timeOfAnimation) {
  if (!element.classList.contains(first)) {
    element.classList.add(first);
    element.classList.remove(second);
  } else {
    element.classList.add(second);
    window.setTimeout(function() {
      element.classList.remove(first);
    }, timeOfAnimation);
  }
}

function blockScroll(element, first, second) {
  if (!element.classList.contains(first)) {
    element.classList.add(first);
    element.classList.remove(second);
  } else {
    element.classList.add(second);
    window.setTimeout(function() {
      element.classList.remove(first);
    },);
  }
}

$(document).on('click', '#popup_video', function(){
  jQuery("iframe").each(function() {
     jQuery(this)[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')});
});

$(document).on('click', '#project_all', function(){
  jQuery("iframe").each(function() {
     jQuery(this)[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')});
});

