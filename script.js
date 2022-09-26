'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btncloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');
const OpenModel = function () {
  modal.classList.remove('hidden');
};
for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener('click', OpenModel);
}
const CloseModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
btncloseModal.addEventListener('click', CloseModal);
overlay.addEventListener('click', CloseModal);
document.addEventListener('keydown', CloseModal);
