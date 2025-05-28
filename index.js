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
    $("#admissions_container").css("display", "inherit");
    $("#admissions_container").addClass("animated slideInRight");

    setTimeout(() => {
        $("#admissions_container").removeClass("animated slideInRight");
    }, 800);

    currentAdmissionsPage = 0;
    admissionsPages.forEach((page, index) => {
        page.classList.remove('active', 'slide-in-up', 'slide-out-up');
        if (index === 0) page.classList.add('active');
    });
}

// Close admissions modal
function closeadmissions() {
    $("#admissions_container").addClass("animated slideOutRight");

    setTimeout(() => {
        $("#admissions_container").removeClass("animated slideOutRight");
        $("#admissions_container").css("display", "none");
    }, 800);
}

// Unified page switching logic
function switchPage(newIndex) {
    if (isScrolling || newIndex < 0 || newIndex >= admissionsPages.length || newIndex === currentAdmissionsPage) return;

    isScrolling = true;

    const currentPage = admissionsPages[currentAdmissionsPage];
    const nextPage = admissionsPages[newIndex];

    currentPage.classList.add('slide-out-up');
    nextPage.classList.add('active', 'slide-in-up');

    setTimeout(() => {
        currentPage.classList.remove('active', 'slide-out-up');
        nextPage.classList.remove('slide-in-up');
        currentAdmissionsPage = newIndex;
        isScrolling = false;
    }, 800); // Match the animation duration
}

// Mouse scroll support
document.getElementById('admissions_container').addEventListener('wheel', (e) => {
    if (e.deltaY > 0) {
        switchPage(currentAdmissionsPage + 1); // scroll down
    } else if (e.deltaY < 0) {
        switchPage(currentAdmissionsPage - 1); // scroll up
    }
});

// Keyboard arrow navigation
document.addEventListener('keydown', (e) => {
    if ($("#admissions_container").css("display") !== "none") {
        if (e.key === "ArrowDown") {
            switchPage(currentAdmissionsPage + 1);
        } else if (e.key === "ArrowUp") {
            switchPage(currentAdmissionsPage - 1);
        }
    }
});

// Touch swipe navigation
let touchStartY = 0;
let touchEndY = 0;

document.getElementById('admissions_container').addEventListener('touchstart', (e) => {
    touchStartY = e.changedTouches[0].screenY;
});

document.getElementById('admissions_container').addEventListener('touchend', (e) => {
    touchEndY = e.changedTouches[0].screenY;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50; // px
    const deltaY = touchStartY - touchEndY;

    if (deltaY > swipeThreshold) {
        switchPage(currentAdmissionsPage + 1); // swipe up (scroll down)
    } else if (deltaY < -swipeThreshold) {
        switchPage(currentAdmissionsPage - 1); // swipe down (scroll up)
    }
}
function closeadmissions(){
    $("#admissions_container").addClass("animated slideOutRight");
    setTimeout(function(){
        $("#admissions_container").removeClass("animated slideOutRight");
        $("#admissions_container").css("display","none");
    },800);
}
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
