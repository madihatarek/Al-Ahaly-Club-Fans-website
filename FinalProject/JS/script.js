// toogle navbar
const navToggler = document.querySelector(".naav-toggler");
navToggler.addEventListener("click", toggleNav);
function toggleNav() {
  navToggler.classList.toggle("active");
  document.querySelector(".naav").classList.toggle("open");
}

// close nav while clicking
document.addEventListener("click", function (e) {
  if (e.target.closest(".naav-item")) {
    toggleNav();
  }
});

// sticky header
window.addEventListener("scroll", function () {
  console.log(this.pageYOffset);
  if (this.pageYOffset > 60) {
    document.querySelector(".headear").classList.add("sticky");
  } else {
    document.querySelector(".headear").classList.remove("sticky");
  }
});



function showTime(){
  var date = new Date();
  var h = date.getHours(); // 0 - 23
  var m = date.getMinutes(); // 0 - 59
  var s = date.getSeconds(); // 0 - 59
  var session = "AM";
  
  if(h == 0){
      h = 12;
  }
  
  if(h > 12){
      h = h - 12;
      session = "PM";
  }
  
  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;
  
  var time = h + ":" + m + ":" + s + " " + session;
  document.getElementById("MyClockDisplay").innerText = time;
  document.getElementById("MyClockDisplay").textContent = time;
  
  setTimeout(showTime, 1000);
  
}

showTime();


