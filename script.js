function homepage() {
    gsap.set(".text", {
      scale: 3,
    });

    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".home",
        pin: true,
        scrub: 2,
        start: " top top",
        end: "bottom top",
      },
    });
    tl.to(
      ".video_div",
      {
        "--clip": "0%",
        ease: Power2,
      },
      "same"
    );
    tl.to(
      ".text",
      {
        scale: 1,
        ease: Power2,
      },
      "same"
    );
    tl.to(
      ".lft",
      {
        xPercent: -30,
        ease: Power4,
        stagger: 0.03,
      },
      "same1"
    );
    tl.to(
      ".rgt",
      {
        xPercent: 30,
        ease: Power4,
        stagger: 0.03,
      },
      "same1"
    );

}
homepage();
function slide(){
    gsap.to(".slide", {
      scrollTrigger: {
        trigger: ".real",
        start: "top top",
        end: "bottom bottom",
        scrub: 2,
        scroller: "body",
      },
      xPercent: -200,
      ease: Power4,
      stagger: 0.05,
    });
}
slide();
function team (){
    
document.querySelectorAll(".list_elem").forEach(function (el) {
  el.addEventListener("mousemove", function (dets) {
    gsap.to(this.querySelector(".picture"), {
      opacity: 1,

      ease: Power4,
      duration: 0.5,
    });
  });
  el.addEventListener("mouseleave", function (dets) {
    gsap.to(this.querySelector(".picture"), {
      opacity: 0,
      x: gsap.utils.mapRange(0, window.innerWidth, -200, 200, dets.clientX),
      ease: Power4,
      duration: 0.5,
    });
  });
});
}
team();
function loco(){
  (function () {
    const locomotiveScroll = new LocomotiveScroll();
  })();
}
loco();

function color(){
  
 document.querySelectorAll(".section").forEach((e) => {
   ScrollTrigger.create({
     trigger: e,
     start: "top 50%",
     end: "bottom 50%",
     onEnter: function () {
       document.body.setAttribute("theme", e.dataset.color);
     },
     onEnterBack: function () {
       document.body.setAttribute("theme", e.dataset.color);
     },
   });
 });
}
color();
