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
