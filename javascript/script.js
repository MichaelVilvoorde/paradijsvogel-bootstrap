console.log("test")


// margin top fix for fixed navbar
function goTo(id) {
    let destination = document.querySelector(id);
    let yCoord = destination.offsetTop - 90;
    window.scrollTo({
        top: yCoord,
        behavior: "smooth"
    });
}

//extra functie voor het hiden van het hamburger menu na het klikken
$('.navbar-nav>li>a').on('click', function() {
    $('.navbar-collapse').collapse('hide');
});