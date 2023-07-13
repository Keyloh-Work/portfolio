$(".openbtn").click(function () {
	$(this).toggleClass('active');
    $("#g-nav").toggleClass('panelactive');
});

$("#g-nav a").click(function () {
  
    $(".openbtn").removeClass('active');
    $("#g-nav").removeClass('panelactive');
});


  $('a[href*="#"]').click(function () {
	var elmHash = $(this).attr('href'); 
	var pos = $(elmHash).offset().top-50;	
	$('body,html').animate({scrollTop: pos}, 600); 
	return false;
});

function PageTopAnime() {
	var scroll = $(window).scrollTop();
	if (scroll >= 200){
		$('#page-top').removeClass('DownMove');
		$('#page-top').addClass('UpMove');
	}else{
		if($('#page-top').hasClass('UpMove')){
			$('#page-top').removeClass('UpMove');
			$('#page-top').addClass('DownMove');
		}
	}
}





  // スライドショー

  const items = document.querySelectorAll('.item'),
  controls = document.querySelectorAll('.control'),
  headerItems = document.querySelectorAll('.item-header'),
  descriptionItems = document.querySelectorAll('.item-description'),
  activeDelay = .76,
  interval = 7000;

let current = 0;

const slider = {
  init: () => {
    controls.forEach(control => control.addEventListener('click', (e) => { slider.clickedControl(e) }));
    controls[current].classList.add('active');
    items[current].classList.add('active');
  },
  nextSlide: () => { 
    slider.reset();
    if (current === items.length - 1) current = -1; 
    current++;
    controls[current].classList.add('active');
    items[current].classList.add('active');
    slider.transitionDelay(headerItems);
    slider.transitionDelay(descriptionItems);
  },
  clickedControl: (e) => { 
    slider.reset();
    clearInterval(intervalF);

    const control = e.target,
      dataIndex = Number(control.dataset.index);

    control.classList.add('active');
    items.forEach((item, index) => { 
      if (index === dataIndex) { 
        item.classList.add('active');
      }
    })
    current = dataIndex; 
    slider.transitionDelay(headerItems);
    slider.transitionDelay(descriptionItems);
    intervalF = setInterval(slider.nextSlide, interval); 
  },
  reset: () => { // Remove active classes
    items.forEach(item => item.classList.remove('active'));
    controls.forEach(control => control.classList.remove('active'));
  },
  transitionDelay: (items) => { 
    let seconds;
    
    items.forEach(item => {
      const children = item.childNodes; 
      let count = 1,
        delay;
      
      item.classList.value === 'item-header' ? seconds = .015 : seconds = .007;

      children.forEach(child => { 
        if (child.classList) {
          item.parentNode.classList.contains('active') ? delay = count * seconds + activeDelay : delay = count * seconds;
          child.firstElementChild.style.transitionDelay = `${delay}s`; 
          count++;
        }
      })
    })
  },
}

let intervalF = setInterval(slider.nextSlide, interval);
slider.init();



//ロゴアニメーション

var logoVivus1;


//SVG初期設定
function VivusInit(){
  logoVivus1 = new Vivus('logo',
    {
      start: 'autostart',
            duration: 750 , 
      type: 'delayed',
      pathTimingFunction: Vivus.EASE_OUT,
    },
    function(obj){
      $("#logo").attr("class", "done");
      
    }

  );
  logoVivus1.stop();    
}




function VivusAnime(){
  var elemPos = $("#logo").offset().top - 50;
  var scroll = $(window).scrollTop();
  var windowHeight = $(window).height();
  if (scroll >= elemPos - windowHeight) {
    logoVivus1.play(1);
  }
}



function textfadeAnime(){

  $('.heading').each(function(){ 
    var elemPos = $(this).offset().top-50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('tracking-in-expand');
    }else{
    $(this).removeClass('tracking-in-expand');
    }
    });
}

$(window).scroll(function (){
  textfadeAnime();
});

  function fadeupAnime(){
    $('.fadeUpTrigger').each(function(){ //fadeUpTriggerというクラス名が
      var elemPos = $(this).offset().top-50;//要素より、50px上の
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight){
      $(this).addClass('fadeUp');// 画面内に入ったらfadeUpというクラス名を追記
      }else{
      $(this).removeClass('fadeUp');// 画面外に出たらfadeUpというクラス名を外す
      }
      });
  }
  
    $(window).scroll(function (){
      fadeupAnime();
      PageTopAnime();
    });
  
    $(window).on('load', function(){
      fadeupAnime();
      VivusInit(); 
      VivusAnime();
    });