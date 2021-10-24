const tl = gsap.timeline({defaults:{ease:'power1.out'}});

tl.to('.text',{y:'0%', duration: 1});
tl.to('.slider',{y:'-100%',duration:1.5});
tl.to('.intro',{y:'-100%',duration: 1}, '-=1')
tl.fromTo('header',{opacity: 0},{opacity: 1,duration: 0.3});




































window.addEventListener('scroll',function(){
    var header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY>0);

})
