

// // var textbox1 = document.querySelector('#text-box-1')
console.log('gsap runs')

// function intro() {
//     var tl = gsap.timeline();
//     tl.to('#text-box-1', { opacity: 0, duration: 2, delay: 0 });
//     //...add animations here...
//     return tl;
// }

// function middle() {
//     var tl = gsap.timeline();
//     tl.to('#text-box-2', { translateX: 0, duration: 2, delay: 0 });
//     return tl;
// }

// function conclusion() {
//     var tl = gsap.timeline();
//     //...add animations here...
//     return tl;
// }

// // stitch them together in a master timeline...
// var master = gsap.timeline();
// master.add(intro())
//     .add(middle(), "-=1")     //with a gap of 2 seconds
//     .add(conclusion(), "-=1") //overlap by 1 second













// number-2 timeline
const tl_nr2 = gsap.timeline({
    scrollTrigger: {
        trigger: "#svg-1",
        start: "top 30%"
    },
    paused: true,
    delay: 0.8,
    defaults: { duration: 0.7, ease: Back.easeOut.config(2), opacity: 0 }
});
tl_nr2.from("#svg-2", { scale: 0.2, transformOrigin: "center" }, "=.2");

// 2-elements timeline
const tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: "#svg-1",
        start: "top 30%"
    },
    paused: true,
    delay: 0.3,
    defaults: {
        duration: 1.3,
        ease: Power4.easeOut,
        opacity: 0,
        transformOrigin: "center"
    }
});
tl2.from("#svg-certificate", { x: 150, y: 50, scale: 0 }, "=0.3");
tl2.from("#svg-lamp", { x: 150, y: 100, scale: 0 }, "=-1.1");
tl2.from("#svg-paper", { x: 100, y: 150, scale: 0 }, "=-.7");
tl2.from("#svg-building", { x: 150, y: 150, scale: 0 }, "=-1.5");
tl2.from(
    ".timeline-step-text2",
    { duration: 1.6, ease: Power4.easeOut, x: 100 },
    "=-2"
);
