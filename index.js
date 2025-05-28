let currentAdmissionsPage = 0;
const admissionsPages = document.querySelectorAll('.admissions-page');
let scrollTimeout = null;

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

function showadmissions(){
    $("#admissions_container").css("display", "inherit");
    $("#admissions_container").addClass("animated slideInRight");
    setTimeout(function(){
        $("#admissions_container").removeClass("animated slideInRight");
    }, 800);

    admissionsPages.forEach((page, index) => {
        page.classList.remove('active', 'slide-in-up', 'slide-out-up');
        if(index === 0) page.classList.add('active');
    });

    currentAdmissionsPage = 0;
}

function switchPage(newIndex) {
    if (newIndex < 0 || newIndex >= admissionsPages.length || newIndex === currentAdmissionsPage) return;

    const currentPage = admissionsPages[currentAdmissionsPage];
    const nextPage = admissionsPages[newIndex];

    currentPage.classList.add('slide-out-up');
    nextPage.classList.add('active', 'slide-in-up');

    setTimeout(() => {
        currentPage.classList.remove('active', 'slide-out-up');
        nextPage.classList.remove('slide-in-up');
        currentAdmissionsPage = newIndex;
    }, 800);
}

// Throttled scroll handler
document.getElementById('admissions_container').addEventListener('wheel', function(e) {
    if (scrollTimeout) return;

    if (e.deltaY > 0) {
        switchPage(currentAdmissionsPage + 1);
    } else if (e.deltaY < 0) {
        switchPage(currentAdmissionsPage - 1);
    }

    scrollTimeout = setTimeout(() => {
        scrollTimeout = null;
    }, 900); // slightly longer than animation duration
});
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
