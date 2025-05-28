let currentAdmissionsPage = 0;
const admissionsPages = document.querySelectorAll('.admissions-page');
let isScrolling = false;

function showmoreinfo(){
    $("#moreinfo_container").css("display","inherit");
    $("#moreinfo_container").addClass("animated slideInDown");
    setTimeout(function(){
        $("#moreinfo_container").removeClass("animated slideInDown");
    },800);
}
function closemoreinfo(){
    $("#moreinfo_container").addClass("animated slideOutUp");
    setTimeout(function(){
        $("#moreinfo_container").removeClass("animated slideOutUp");
        $("#moreinfo_container").css("display","none");
    },800);
}
function showabout(){
    $("#about_container").css("display","inherit");
    $("#about_container").addClass("animated slideInLeft");
    setTimeout(function(){
        $("#about_container").removeClass("animated slideInLeft");
    },800);
}
function closeabout(){
    $("#about_container").addClass("animated slideOutLeft");
    setTimeout(function(){
        $("#about_container").removeClass("animated slideOutLeft");
        $("#about_container").css("display","none");
    },800);
}

function showadmissions() {
  document.getElementById("admissions_container").style.display = "inherit";
  document.getElementById("admissions_container").classList.add("animated", "slideInRight");
  setTimeout(() => {
    document.getElementById("admissions_container").classList.remove("animated", "slideInRight");
  }, 800);
  currentAdmissionsPage = 0;
  admissionsPages.forEach((page, i) => {
    page.classList.remove('active', 'slide-in-up', 'slide-out-up', 'slide-in-down', 'slide-out-down');
    if (i === 0) page.classList.add('active');
  });
}

function closeadmissions() {
  document.getElementById("admissions_container").classList.add("animated", "slideOutRight");
  setTimeout(() => {
    document.getElementById("admissions_container").classList.remove("animated", "slideOutRight");
    document.getElementById("admissions_container").style.display = "none";
  }, 800);
}

function switchPage(newIndex, direction = 'down') {
  if (isScrolling || newIndex < 0 || newIndex >= admissionsPages.length || newIndex === currentAdmissionsPage) return;
  isScrolling = true;
  const currentPage = admissionsPages[currentAdmissionsPage];
  const nextPage = admissionsPages[newIndex];

  currentPage.classList.add(direction === 'down' ? 'slide-out-up' : 'slide-out-down');
  nextPage.classList.add('active', direction === 'down' ? 'slide-in-up' : 'slide-in-down');

  setTimeout(() => {
    currentPage.classList.remove('active', 'slide-out-up', 'slide-out-down');
    nextPage.classList.remove('slide-in-up', 'slide-in-down');
    currentAdmissionsPage = newIndex;
    isScrolling = false;
  }, 800);
}

document.getElementById('admissions_container').addEventListener('wheel', (e) => {
  if (e.deltaY > 0) {
    switchPage(currentAdmissionsPage + 1, 'down');
  } else if (e.deltaY < 0) {
    switchPage(currentAdmissionsPage - 1, 'up');
  }
});

document.addEventListener('keydown', (e) => {
  if (document.getElementById("admissions_container").style.display !== "none") {
    if (e.key === "ArrowDown") switchPage(currentAdmissionsPage + 1, 'down');
    else if (e.key === "ArrowUp") switchPage(currentAdmissionsPage - 1, 'up');
  }
});

let touchStartY = 0, touchEndY = 0;
document.getElementById('admissions_container').addEventListener('touchstart', e => touchStartY = e.changedTouches[0].screenY);
document.getElementById('admissions_container').addEventListener('touchend', e => {
  touchEndY = e.changedTouches[0].screenY;
  if (touchStartY - touchEndY > 50) switchPage(currentAdmissionsPage + 1, 'down');
  else if (touchEndY - touchStartY > 50) switchPage(currentAdmissionsPage - 1, 'up');
});

document.querySelectorAll('.scroll-indicator').forEach((el, i) => {
  el.addEventListener('click', () => switchPage(i + 1, 'down'));
});
document.querySelectorAll('.scroll-up-indicator').forEach((el, i) => {
  el.addEventListener('click', () => switchPage(i, 'up'));
});

function showtours(){
    $("#tours_container").css("display","inherit");
    $("#tours_container").addClass("animated slideInUp");
    setTimeout(function(){
        $("#tours_container").removeClass("animated slideInUp");
    },800);
}
function closetours(){
    $("#tours_container").addClass("animated slideOutDown");
    setTimeout(function(){
        $("#tours_container").removeClass("animated slideOutDown");
        $("#tours_container").css("display","none");
    },800);
}
setTimeout(function(){
    $("#loading").addClass("animated fadeOut");
    setTimeout(function(){
      $("#loading").removeClass("animated fadeOut");
      $("#loading").css("display","none");
      $("#box").css("display","none");
      $("#moreinfo").removeClass("animated fadeIn");
      $("#about").removeClass("animated fadeIn");
      $("#tours").removeClass("animated fadeIn");
      $("#admissions").removeClass("animated fadeIn");
    },1000);
},1500);
