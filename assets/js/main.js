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



var skillWrapper = document.querySelectorAll(".skill-wrapper");

for(var i=0;i<skillWrapper.length;i++){
    skillWrapper[i].innerHTML ='<div class="skill-name"></div><div class="skill-label"></div><div class="skill-percent"></div>';
    let percent = skillWrapper[i].getAttribute("skill-percent");
    skillWrapper[i].childNodes[2].style.width =  percent+"%";
    skillWrapper[i].childNodes[1].innerHTML   =  percent+"%";
    skillWrapper[i].childNodes[0].innerHTML   =  skillWrapper[i].getAttribute("skill-name");;
}

$(document).on('submit','form',function(event){
  event.preventDefault();
  $('#send-msg').val("Sending...");

  emailjs.send("service_fg3wnq1","template_gdnmz3n",{
    name :    $('#name').val(),
    email:    $('#email').val(),
    subject:  $('#subject').val(),
    message:  $('#message').val(),
  }).then(()=>{
    $('#send-msg').val("Send");
    $('#msg').html("Send Successfully");
    this.reset();
  },(err)=>{
    $('#send-msg').val("Send");
    $('#msg').html("Send Failed!Try again");
  });
});

$(document).ready(function(){
  $('.nav-item').click(function(){
    $('#navbar-container').removeClass('show');
    $('.mask').hide();
  });

  $('.navbar-toggler').click(function(){
    $('.mask').show();
  });
  $('#close-menu').click(function(){
    $('#navbar-container').removeClass('show');
    $('.mask').hide();
  });

// Particle
tsParticles
  .loadJSON("programming-language-particles", "http://kuntal/portfolio/portfolio1/assets/particles.json")
  .then((container) => {
    //console.log("callback - tsparticles config loaded");
  })
  .catch((error) => {
    console.error(error);
  });

const particles = tsParticles.domItem(0);
try{
  particles.play();
  particles.pause();
}catch(e){
  //console.log(e);
}

});
