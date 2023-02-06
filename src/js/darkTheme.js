import { getId, getAllClass } from './selectors.js';

const themeButton = getId('themeButton');
const DARK_THEME = 'dark-theme';
const SUN_ICON = 'ri-sun-line';
const MOON_ICON = 'ri-moon-line';

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () =>
  document.body.classList.contains(DARK_THEME) ? 'dark' : 'ligth';

const getCurrentIcon = () =>
  themeButton.classList.contains(SUN_ICON) ? MOON_ICON : SUN_ICON;

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](
    DARK_THEME
  );
  themeButton.classList[selectedIcon === MOON_ICON ? 'add' : 'remove'](
    SUN_ICON
  );
}

themeButton.addEventListener('click', () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(DARK_THEME);
  themeButton.classList.toggle(SUN_ICON);
  // We save the theme and the current icon that the user chose
  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
});
