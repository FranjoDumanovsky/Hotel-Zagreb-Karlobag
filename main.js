// ******* NAVIGATION MENU ******** 



$(document).ready(function(){

    // 1. Adds "open" class to the hamburger menu
	$('#nav-icon2').click(function(){
		$(this).toggleClass('open');
       
	});

    // 2. toggles the mobile menu animation with "is-active" class
    $(".menu-toggle").click(function(){
        $(".nav-mobile").toggleClass("mobile-nav");
        $(".logo").toggleClass("active");
        $(this).toggleClass("is-active");
        $(".lang-change").toggleClass("show-lang")
    })
});


$(".nav__link").each(function() {
 $(this).on("click", function () {
     $(".nav-mobile").removeClass("mobile-nav");
     $("#nav-icon2").removeClass("open");
 })
})
