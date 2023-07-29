'use strict';

const model = document.querySelector('.model');
const overlay = document.querySelector('.overlay');
const btnclosemodel = document.querySelector('.class-model');
const btnsopenmodel = document.querySelectorAll('.show-model');

const openmodel = function () {
    model.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const closemodel = function () {
    model.classList.add('hidden');
    overlay.classList.add('hidden');
};

for (let i = 0; i < btnsopenmodel.length; i++)
    btnsopenmodel[i].addEventListener('click', openmodel);

btnclosemodel.addEventListener('click', closemodel);
overlay.addEventListener('click', closemodel);

document.addEventListener('keydown', function (e) {
    console.log(e.key);
    if (e.key === 'Escape' && !model.classList.contains('hidden')) {
        closemodel();
    }
});