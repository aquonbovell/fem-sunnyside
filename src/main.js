$("document").ready(() => {
  $(".mobile-primary-navigation-toggle").on("click", function (event) {
    $(".header nav").toggleClass("open");
    if ($(this).attr("aria-expanded") === "false") {
      $(this).attr("aria-expanded", "true");
    } else {
      $(this).attr("aria-expanded", "false");
    }
    if ($("nav .primary-navigation").attr("data-visible") === "false") {
      $("nav .primary-navigation").attr("data-visible", "true");
    } else {
      $("nav .primary-navigation").attr("data-visible", "false");
    }
  });
});
