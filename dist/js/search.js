let navbar = document.querySelector(".nav-bar");
let searchIcon = document.querySelector("#searchIcon");
let navOpenBtn = document.querySelector(".navOpenBtn");
let navCloseBtn = document.querySelector(".navCloseBtn");

searchIcon.addEventListener("click", () => {
navbar.classList.toggle("openSearch");
navbar.classList.remove("openNav");
if (navbar.classList.contains("openSearch")) {
  return searchIcon.classList.add(`uil-search`, `uil-times`);
}
searchIcon.classList.replace("uil-times", "uil-search");
});

navOpenBtn.addEventListener("click", () => {
navbar.classList.add("openNav");
navbar.classList.remove("openSearch");
searchIcon.classList.replace("uil-times", "uil-search");
});
navCloseBtn.addEventListener("click", () => {
navbar.classList.remove("openNav");
});

$('#myInput').on('input', function() {
  const val = $(this).val().toUpperCase();
  $(".program_card").each(function() {

      if ($(this).html().toUpperCase().indexOf(val) !== -1) {
          $(this).show()
      } else {
          $(this).hide()

      }
  });
})
