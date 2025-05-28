let currentAdmissionsPage = 0;
const admissionsPages = document.querySelectorAll('.admissions-page');
let isScrolling = false; // <-- Lock flag

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
    $("#admissions_container").css("display","inherit");
    $("#admissions_container").addClass("animated slideInRight");
    setTimeout(function(){
        $("#admissions_container").removeClass("animated slideInRight");
    },800);

    // Reset to first page when opening
    currentAdmissionsPage = 0;
    admissionsPages.forEach((page, index) => {
        page.classList.remove('active', 'slide-in-up', 'slide-out-up');
        if(index === 0) page.classList.add('active');
    });
}

document.getElementById('admissions_container').addEventListener('wheel', function(e) {
    if (isScrolling) return; // Prevent new scrolls during animation
    isScrolling = true;

    if (e.deltaY > 0) {
        // Scroll down
        if (currentAdmissionsPage < admissionsPages.length - 1) {
            const currentPage = admissionsPages[currentAdmissionsPage];
            const nextPage = admissionsPages[currentAdmissionsPage + 1];

            currentPage.classList.add('slide-out-up');
            nextPage.classList.add('active', 'slide-in-up');

            setTimeout(() => {
                currentPage.classList.remove('active', 'slide-out-up');
                nextPage.classList.remove('slide-in-up');
                isScrolling = false; // Unlock after animation
            }, 800);

            currentAdmissionsPage++;
        } else {
            isScrolling = false; // No page change, so unlock immediately
        }
    } else if (e.deltaY < 0) {
        // Scroll up
        if (currentAdmissionsPage > 0) {
            const currentPage = admissionsPages[currentAdmissionsPage];
            const prevPage = admissionsPages[currentAdmissionsPage - 1];

            currentPage.classList.remove('active');
            prevPage.classList.add('active', 'slide-in-up');

            setTimeout(() => {
                prevPage.classList.remove('slide-in-up');
                isScrolling = false; // Unlock after animation
            }, 800);

            currentAdmissionsPage--;
        } else {
            isScrolling = false;
        }
    } else {
        isScrolling = false;
    }
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
