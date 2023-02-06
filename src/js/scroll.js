const sections = [...document.querySelectorAll('section[id]')];
const links = [
  ...document.querySelectorAll('.nav__list>.nav__item>.nav__link'),
];

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 58;
    const sectionId = current.getAttribute('id');

    const sectionsClass = document.querySelector(
      `.nav__menu a[href*="#${sectionId}"]`
    );

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
      links.forEach((link) =>
        link.dataset.id === sectionId
          ? link.classList.add('active-link')
          : link.classList.remove('active-link')
      );
  });
};

window.addEventListener('scroll', scrollActive);
