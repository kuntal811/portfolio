$(function() {
    AOS.init();
  });

(function() {
  emailjs.init("user_s4WUI4oCJ1m8PkCE1W08f");
  })();
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
    //hide menu
    $('#navbar-container').removeClass('show');
    $('.mask').hide();

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

tsParticles.load("programming-language-particles",{
        "particles": {
            "number": {
                "value": 40,
                "density": {
                    "enable": !0,
                    "value_area": 4000
                }
            },
            "color": {
                "value": ["#FFFFFF", "#FFFFFF", "#FFFFFF"]
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#fff"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 33,
                    "height": 33
                }
            },
            "opacity": {
                "value": 0.15,
                "random": !0,
                "anim": {
                    "enable": !0,
                    "speed": 0.2,
                    "opacity_min": 0.15,
                    "sync": !1
                }
            },
            "size": {
                "value": 50,
                "random": !0,
                "anim": {
                    "enable": !0,
                    "speed": 2,
                    "size_min": 5,
                    "sync": !1
                }
            },
            "line_linked": {
                "enable": !1,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": !0,
                "speed": 1,
                "direction": "top",
                "random": !0,
                "straight": !1,
                "out_mode": "out",
                "bounce": !1,
                "attract": {
                    "enable": !1,
                    "rotateX": 600,
                    "rotateY": 600
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": !1,
                    "mode": "bubble"
                },
                "onclick": {
                    "enable": !1,
                    "mode": "repulse"
                },
                "resize": !0
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1,
                    }
                },
                "bubble": {
                    "distance": 250,
                    "size": 0,
                    "duration": 2,
                    "opacity": 0,
                    "speed": 3
                },
                "repulse": {
                    "distance": 400,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": !0
    });





/*tsParticles
  .loadJSON("programming-language-particles", "http://kuntal/portfolio/portfolio1/assets/logo.json")
  .then((container) => {
    //console.log("callback - tsparticles config loaded");
  })
  .catch((error) => {
    console.error(error);
  });*/

const particles = tsParticles.domItem(0);
try{
  particles.play();
  particles.pause();
}catch(e){
  //console.log(e);
}

});
