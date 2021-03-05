// Variables
const navBtn = document.querySelector('.navigation__button');
const nav = document.querySelector('.navigation__nav');
const navIcon = document.querySelector('.navigation__icon');
const body = document.querySelector('body');
navBtn.addEventListener('click', function () {
	nav.classList.toggle('navigation__open');
	navIcon.classList.toggle('navigation__rotate');
	if (nav.classList.contains('navigation__open')) {
		body.classList.add('is-fixed');
	} else {
		body.classList.remove('is-fixed');
	}
});
