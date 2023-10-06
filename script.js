//import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var tl = gsap.timeline()

tl.from("#page1",{
    y:"100vh",
    duration:0.6,
    delay:0
})

tl.to("#page1", {
    y:"20vh",
    delay:0.5,
    duration:1
})
tl.to("#page1",{
    y:"0vh",
     rotate:360,
     scale:1,
    duration:1
})