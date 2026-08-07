gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

//slot machine//

const digits = document.querySelectorAll(".digits");

digits.forEach((digit, index) => {
  if (digit.textContent === ".") return;

  const finalNumber = digit.textContent;

  let counter = 0;

  const interval = setInterval(() => {
    digit.textContent = Math.floor(Math.random() * 10);

    counter++;

    if (counter > 20 + index * 2) {
      clearInterval(interval);
      digit.textContent = finalNumber;
    }
  }, 90);
});

//card animation//

gsap.utils.toArray(".feature-card").forEach((card) => {
  gsap.from(card, {
    y: 60,
    opacity: 0,
    scale: 0.96,
    duration: 1,
    ease: "power4.out",
    scrollTrigger: {
      trigger: card,
      start: "top 85%",
      toggleActions: "play none none none",
    },
  });
});
