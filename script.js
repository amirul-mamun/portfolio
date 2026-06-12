Shery.mouseFollower();
Shery.makeMagnet('.magnet');

gsap.to(".fleftelem", {
    scrollTrigger:{
        trigger:".fimages",
        pin: true,
        star: "top top",
        end: "bottom bottom",
        endTrigger: ".last",
        scrub:1
    },
    y:"-300%",
    ease:Power1
})

let sections = document.querySelectorAll('.fleftelem')
Shery.imageEffect(".images", {
    style:5,
    config:{onMouse : {value : 1}},
    slideStyle: (setScroll) =>{
         sections.forEach(function(section , index){
            ScrollTrigger.create({
                trigger:section,
                start: "top top",
                scrub: 1,
                onUpdate: function(prog){
                    setScroll(prog.progress+index)
                }
            })
         })
    }
})


function firstPageAnim() {
  var tl = gsap.timeline();

  tl.from(".nav", {
    y: "-10",
    opacity: 0,
    duration: 1.5,
    ease: Expo.easeInOut,
  })
    .to(".smoothElem", {
      y: 0,
      ease: Expo.easeInOut,
      duration: 2,
      delay: -1,
      stagger: 0.2,
    })
    .from(".herofoter", {
      y: -10,
      opacity: 0,
      duration: 1.5,
      delay: -1,
      ease: Expo.easeInOut,
    });
}

firstPageAnim()