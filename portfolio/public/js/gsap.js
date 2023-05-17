

// // var textbox1 = document.querySelector('#text-box-1')
// console.log('gsap runs')

// function intro() {
//     var tl = gsap.timeline();
//     tl.to('#text-box-1',  {opacity: 0, duration: 2, delay: 0});
//     //...add animations here...
//     return tl;
// }

// function middle() {
//     var tl = gsap.timeline();
//     tl.to('#text-box-2',  {translateX: 0, duration: 2, delay: 0});
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