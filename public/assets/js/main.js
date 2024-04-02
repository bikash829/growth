// function toggleMenuIcon(x) {
//   x.classList.toggle("change");
// }
$(document).ready(function () {
  $(".menu-toggle").click(function () {
    $(this).toggleClass("menu-open");
  });
});

$(document).ready(function () {
  $("#submitButton").click(function (event) {
    var emailInput = $("#emailInput").val();
    if (emailInput === "") {
      event.preventDefault();
      $("#formContainer").addClass("shake");
      setTimeout(function () {
        $("#formContainer").removeClass("shake");
      }, 820);
    }
  });
});

// navigation menu collapse
$(document).ready(function () {
  $("#hamburgerMenu").click((e) => {
    e.preventDefault();
    $("#navMenu").toggleClass("flex hidden");
  });
});

$(document).ready(function () {
  Marquee3k.init();
});

$(document).ready(function () {
  $(".testimonial-container").addClass("moveRightToLeft");
});

// scroll marquee animation
const scrollers = document.querySelectorAll(".scroller");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);

    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);
    // console.log(scrollerContent);

    scrollerContent.forEach((content) => {
      const duplicatedItem = content.cloneNode(true);
      //   scrollerInner.appendChild(clone);
      duplicatedItem.setAttribute("area-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
      console.log(duplicatedItem);
    });
  });
}
