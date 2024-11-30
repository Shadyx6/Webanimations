
gsap.registerPlugin(ScrollTrigger);


gsap.from("#section1 h1", { duration: 1.5, opacity: 0, y: -100 });
gsap.from("#section1 p", { duration: 2, opacity: 0, y: 100 });
gsap.from("#section1 .cta", { duration: 2.5, opacity: 0, scale: 0.5, ease: "elastic.out(1, 0.75)" });


gsap.utils.toArray('.page').forEach((section, i) => {
  gsap.fromTo(section, 
    { opacity: 0, scale: 0.8 }, 
    { 
      opacity: 1, scale: 1, 
      duration: 1.5, 
      ease: 'power4.out',
      scrollTrigger: {
        trigger: section,
        start: 'top 75%',
        toggleActions: "restart none none none"
      }
    }
  );
});


document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('mouseenter', () => {
    gsap.to(link, { textShadow: "0px 0px 10px red", duration: 0.3 });
  });
  link.addEventListener('mouseleave', () => {
    gsap.to(link, { textShadow: "0px 0px 0px transparent", duration: 0.3 });
  });
});


gsap.utils.toArray('h2').forEach(heading => {
  gsap.fromTo(
    heading,
    { opacity: 0 },
    { 
      opacity: 1, 
      duration: 0.05, 
      repeat: -1, 
      yoyo: true, 
      paused: true, 
      onRepeat: () => heading.style.color = Math.random() > 0.5 ? 'red' : '#fff' 
    }
  ).play();
});

document.querySelectorAll('.cta').forEach(button => {
  button.addEventListener('mouseenter', () => {
    gsap.to(button, { 
      boxShadow: "0px 0px 20px 5px red", 
      scale: 1.1, 
      duration: 0.3 
    });
  });
  button.addEventListener('mouseleave', () => {
    gsap.to(button, { 
      boxShadow: "0px 0px 0px 0px transparent", 
      scale: 1, 
      duration: 0.3 
    });
  });
});


setInterval(() => {
  const randomSection = document.querySelector(`#section${Math.ceil(Math.random() * 5)}`);
  randomSection.style.filter = "brightness(50%)";
  setTimeout(() => {
    randomSection.style.filter = "brightness(100%)";
  }, 100);
}, 3000);
