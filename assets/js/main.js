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

tsParticles.load("programming-language-particles", {
  fpsLimit: 60,
  particles: {
    number: {
      value: 160,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#ffffff",
      animation: {
        enable: true,
        speed: 1000,
        sync: true
      }
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0
      },
      polygon: {
        nb_sides: 5
      },
      image: {
        src: "https://cdn.matteobruni.it/images/particles/github.svg",
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 3,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 20,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 100,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    },
    life: {
      duration: {
        sync: false,
        value: 3
      },
      count: 0,
      delay: {
        random: {
          enable: true,
          minimumValue: 0.5
        },
        value: 1
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse"
      },
      onclick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 0.8
      },
      repulse: {
        distance: 200
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true,
  background: {
    color: "",
    image: "",
    position: "50% 50%",
    repeat: "no-repeat",
    size: "cover"
  }
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
