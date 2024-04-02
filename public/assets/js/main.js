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

// scroll marquee animation -->
const scrollers = $(".scroller");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.each(function () {
    $(this).attr("data-animated", true);

    const scrollerInner = $(this).find(".scroller__inner");
    const scrollerContent = scrollerInner.children().toArray();

    scrollerContent.forEach(function (content) {
      const duplicatedItem = $(content).clone(true);
      duplicatedItem.attr("area-hidden", true);
      scrollerInner.append(duplicatedItem);
      console.log(duplicatedItem);
    });
  });
}

//<-- scroll marquee animation
