// toogle navbar
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", toggleNav);
function toggleNav() {
  navToggler.classList.toggle("active");
  document.querySelector(".nav").classList.toggle("open");
}

// close nav while clicking
document.addEventListener("click", function (e) {
  if (e.target.closest(".nav-item")) {
    toggleNav();
  }
});

// sticky header
window.addEventListener("scroll", function () {
  console.log(this.pageYOffset)
    if (this.pageYOffset >60) {
        document.querySelector(".header").classList.add("sticky")
    } else {
        document.querySelector(".header").classList.remove("sticky")
 
    }
 
})

// gallery...
const search = document.querySelector(".search-box input"),
    images = document.querySelectorAll(".image-box");

search.addEventListener("keyup", e => {
    if (e.key == "Enter") {
        let searcValue = search.value,
            value = searcValue.toLowerCase();
        images.forEach(image => {
            if (value === image.dataset.name) { //check value with getting attribute of images
                return image.style.display = "block";
            }
            image.style.display = "none";
        });
    }
});
 
search.addEventListener("keyup", () => {
    if (search.value != "") return;

    images.forEach(image => {
        image.style.display = "block";
    })
})