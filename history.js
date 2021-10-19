let frame_count  = 2,offset_value = 150;
let timeHeight=document.getElementById('time').style.height;
let myvalue=['.timesub','.timecontent'];
let showtime=['.timecontent','.timesub','.clock'];
let breadtext=['.breadtl','.breadsub'];
let drinkingtext=['.drinkingtl','.drinkingct'];
gsap.registerPlugin(ScrollTrigger);
gsap.to(".drinking1",{repeat:-1,yoyo:true,y:'+=20',skewY:1,duration:2});
gsap.to(".drinking2",{repeat:-1,yoyo:true,y:'-=15',skewY:1,duration:1.5});
gsap.to(".drinking3",{repeat:-1,yoyo:true,y:'+=10',duration:3});
gsap.to('.maintl',{duration:2,opacity:1,ease:Power3.easeOut,y:"-=10%"});
gsap.to('.mainobj',{duration:2,opacity:1,ease:Power2.easeOut});


gsap.to(".hour", {
  rotation:152,
  scrollTrigger: {
    trigger: ".time",
    pin: true,
    start: "top top",
     end: timeHeight,
    snap:true,
    scrub: true,
  }
});
gsap.to('.time', {
  backgroundColor:'#2B2B2B',
  scrollTrigger: {
    trigger: ".time",
    pin: true,
    start: "top top",
    snap:true,
    scrub: true,
  }
});
gsap.to(myvalue, {
  color:'#fff',
  scrollTrigger: {
    trigger: ".time",
    pin: true,
    start: "top top",
    end:timeHeight,
    snap:true,
    scrub: 1,
  }
});
gsap.to(".down", {
    backgroundPosition: (-offset_value * frame_count * 2) + "px 0%",
    ease: "steps(" + frame_count + ")", 
    scrollTrigger: {
      trigger: ".down",
      pin: true,
      start: "top center",
      pinspacing:true,
      end: "+=" + (0.8* offset_value),
      scrub: true,
      snap:true,
    }
  });
  /*show*/
gsap.from(showtime,
  {
    ease:Power2.easeOut,
    opacity:0,
    y:"60%",
    duration:2,
    scrollTrigger:
    {
      trigger:".tiemcontent",
      toggleActions:"play none restart restart"
    }
  });
gsap.from(breadtext,
    {
      ease:Power1.easeOut,
      opacity:0,
      y:"80%",
      duration:1.5,
      scrollTrigger:
      {
        trigger:".bread",
        toggleActions:"play none restart reset",
      }
    });

gsap.from('.rich',
      {
        ease:Power2.easeOut,
        opacity:0,
        y:"30%",
        duration:2,
        scrollTrigger:
        {
          trigger:".bread",
          toggleActions:"play none restart reset",
        }
      });
gsap.from('.poor',
      {
        ease:Power2.easeOut,
        opacity:0,
        y:"30%",
        duration:2,
        scrollTrigger:
        {
          trigger:".bread",
          toggleActions:"play none restart reset",
        }
      });
  
 gsap.from(drinkingtext,
      {
        ease:Power0.easeOut,
        opacity:0,
        y:"30%",
    
        duration:1.2,
        scrollTrigger:
        {
          trigger:".drinking",
          toggleActions:"play none restart reset",
          end:'250px top',
          delay:0.5,
        }
      });
gsap.from('.drinkingt1',
        {
          ease:Power0.easeOut,
          opacity:0,
          y:"50%",
          duration:1.2,
          scrollTrigger:
          {
            trigger:".drinkingt1",
            toggleActions:"play none restart reset",
            // start:'center center',
            delay:0.5,
          }
        });
gsap.from('.drinkingt2',
        {
          ease:Power0.easeOut,
          opacity:0,
          y:"40%",
          duration:1.2,
          scrollTrigger:
          {
            trigger:".drinkingt2",
            toggleActions:"play none restart reset",
            delay:0.5,
          }
        });