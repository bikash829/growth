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
      // console.log(duplicatedItem);
    });
  });
}

//<-- scroll marquee animation

// service toggle --->
$(document).ready(function () {
  // $("#toggle-arrow").click(function() {
  //   var container = $("#service-container");
  //   var arrow = $("#toggle-arrow");

  //   if (container.hasClass("rounded-xl")) {
  //     // If the container is extended, minimize it
  //     container.removeClass("rounded-xl bg-gradient-to-r from-site-border_blue p-4");
  //     container.addClass("gap-3");
  //     arrow.removeClass("rotate-90");
  //     arrow.addClass("rotate-45");
  //   } else {
  //     // If the container is minimized, extend it
  //     container.addClass("rounded-xl bg-gradient-to-r from-site-border_blue p-4");
  //     container.removeClass("gap-3");
  //     arrow.addClass("rotate-90");
  //     arrow.removeClass("rotate-45");
  //   }
  // });
  // $(".toggle-arrow").click(function () {
  //   console.log($(this).closet(".service-container"));
  // });
  $(".toggle-service").click(function () {
    const parentContainer = $(this).closest(".service-container");
    const serviceArrow = parentContainer.find(".service-arrow");
    const serviceParagraph = parentContainer.find(".service-paragraph");
    const serviceBorder = parentContainer.find(".service-bottom-border");
    if (parentContainer.hasClass("rounded-xl")) {
      // If the container is extended, minimize it
      parentContainer.removeClass(
        "rounded-xl bg-gradient-to-r from-site-border_blue px-4 pt-4",
      );
      serviceArrow.removeClass("rotate-90");
      serviceArrow.addClass("rotate-45");
      // serviceParagraph.addClass("hidden");
      serviceBorder.addClass("border-b-2");
    } else {
      // If the container is minimized, extend it
      parentContainer.addClass(
        "rounded-xl bg-gradient-to-r from-site-border_blue px-4 pt-4",
      );
      serviceArrow.addClass("rotate-90");
      serviceArrow.removeClass("rotate-45");
      serviceBorder.removeClass("border-b-2");
      // serviceParagraph.removeClass("hidden");
    }
    serviceParagraph.slideToggle(200);
  });
});

// <-- Service toggle

// FAQ toggle -->
$(document).ready(function () {
  $(".faq-toggle").click(function () {
    const faqPlus = $(this).find(".faq-arrow");
    const faqParagraph = $(this).siblings(".faq-paragraph");
    $(faqParagraph).toggle(200, "linear", function () {
      faqParagraph.toggleClass("hidden");
    });
    faqPlus.toggleClass("rotate-45");
  });
});

// <-- FAQ toggle
