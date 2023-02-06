import ScrollReveal from 'scrollreveal';

const sr = ScrollReveal({
  origin: 'top',
  distance: '61px',
  duration: 2500,
  delay: 400,
  reset: true,
});

sr.reveal(
  `.home__data, .projects__container, .testimonial__container, .footer__container`
);
sr.reveal(`.home__info div`, { delay: 601, origin: 'bottom', interval: 100 });
sr.reveal(`.skills__content:nth-child(1), .contact__content:nth-child(1)`, {
  origin: 'left',
});
sr.reveal(`.skills__content:nth-child(2), .contact__content:nth-child(2)`, {
  origin: 'right',
});
sr.reveal(`.qualification__content, .services__card, .skills__card`, {
  interval: 100,
});
