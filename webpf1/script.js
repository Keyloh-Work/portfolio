const nav = document.querySelector(".main-nav")

window.addEventListener("scroll",() => {
    if (window.pageYOffset > 60){
        nav.classList.add("scrolled");
        
    }else{
        nav.classList.remove("scrolled");
    }
});

function fadeAnimeon(){
    $('.fadeleftTriggeron').each(function(){ 
        　　var elemPos = $(this).offset().top-50; 
        　　var scroll = $(window).scrollTop();
        　　var windowHeight = $(window).height();
        　　if (scroll >= elemPos - windowHeight){
        　　$(this).addClass('fadeleft');
        　　
        　　}else{
        　　　$(this).removeClass('fadeleft');
        　　
        　　}
        　　});
}


function fadeAnime(){

    $('.fadeleftTrigger').each(function(){ 
        　　var elemPos = $(this).offset().top-50; 
        　　var scroll = $(window).scrollTop();
        　　var windowHeight = $(window).height();
        　　if (scroll >= elemPos - windowHeight){
        　　$(this).addClass('fadeleft');
        　　
        　　}else{
        　　　$(this).removeClass('fadeleft');
        　　
        　　}
        　　});

$('.faderightTrigger').each(function(){ 
    var elemPos = $(this).offset().top-0;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('faderight');
    }else{
    $(this).removeClass('faderight');
    }
    });

    $('.fadeupTrigger').each(function(){ 
        var elemPos = $(this).offset().top-0;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight){
        $(this).addClass('fadeup');
        }else{
        $(this).removeClass('fadeup');
        }
        });

}

$(window).on('load', function(){
    fadeAnimeon();/* アニメーション用の関数を呼ぶ*/
  });

$(window).scroll(function (){
    fadeAnime();
  });

  $('a[href*="#"]').click(function () {
	var elmHash = $(this).attr('href'); 
	var pos = $(elmHash).offset().top;	
	$('body,html').animate({scrollTop: pos}, 500); 
	return false;
});

$(".openbtn").click(function () {
	$(this).toggleClass('active');
    $("#g-nav").toggleClass('panelactive');
});

$("#g-nav a").click(function () {
    $(".openbtn").removeClass('active');
    $("#g-nav").removeClass('panelactive');
});