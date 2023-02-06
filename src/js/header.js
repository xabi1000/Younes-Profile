import { getId, getAllClass } from './selectors.js';
import './darkTheme.js';

const navMenu = getId('navMenu');
const navToggle = getId('navToggle');
const navClose = getId('navClose');

/**
 * MENU SHOW
 */

if (navToggle) {
  navToggle.addEventListener('click', () => navMenu.classList.add('show-menu'));
}

/**
 * MENU HIDDEN
 */

if (navClose) {
  navClose.addEventListener('click', () =>
    navMenu.classList.remove('show-menu')
  );
}

/**
 * REMOUVE MENU MOBILE
 */

const navLink = getAllClass('.nav__link');

const linkActions = () => navMenu.classList.remove('show-menu');

navLink.forEach((link) => link.addEventListener('click', linkActions));

/**
 * ======================CHANGE BACKGROUN-COLOR HEADER======================
 */

function scrollHeader() {
  const header = document.getElementById('header');

  scrollY >= 50
    ? header.classList.add('bg-header')
    : header.classList.remove('bg-header');
}

window.addEventListener('scroll', scrollHeader);
