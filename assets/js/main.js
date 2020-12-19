  $(window).on('load',function(){
    $('.pre-loader').css("display", "none");
  	$('.bg-svg').css("display", "block");
  });
  var typed = new Typed('.typing', {
    stringsElement: '.typing-content',
    typeSpeed: 20,
    backSpeed: 20,
    shuffle: true,
    loop: true,
  	loopCount: Infinity,
  	backDelay: 1000,
  });

  $(window).scroll(function(){
  	let hdr_height 	  = $('header').height();
  	let scroll_height = $(window).scrollTop();
  	//console.log(hdr_height+"->"+scroll_height);
  	$color = (scroll_height > hdr_height)? 'transparent' : '#351cc1';
  	$('header').css("background",$color);

  });
/*
// Particle
tsParticles
  .loadJSON("programming-language-particles", "http://localhost/portfolio/portfolio1/assets/particles.json")
  .then((container) => {
    console.log("callback - tsparticles config loaded");
  })
  .catch((error) => {
    console.error(error);
  });

const particles = tsParticles.domItem(0);
particles.play();
particles.pause();
*/