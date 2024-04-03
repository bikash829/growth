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

// marquee initialized
$(document).ready(function () {
  Marquee3k.init();
});

// aos initialized
AOS.init();

// AOS.init({
//   // Global settings:
//   disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
//   startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
//   initClassName: 'aos-init', // class applied after initialization
//   animatedClassName: 'aos-animate', // class applied on animation
//   useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
//   disableMutationObserver: false, // disables automatic mutations' detections (advanced)
//   debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
//   throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

//   // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
//   offset: 120, // offset (in px) from the original trigger point
//   delay: 0, // values from 0 to 3000, with step 50ms
//   duration: 400, // values from 0 to 3000, with step 50ms
//   easing: 'ease', // default easing for AOS animations
//   once: false, // whether animation should happen only once - while scrolling down
//   mirror: false, // whether elements should animate out while scrolling past them
//   anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

// });
