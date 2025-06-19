import data from './baseball.js';

const get = (target) => document.querySelector(target);
const getAll = (target) => document.querySelectorAll(target);

const leftbtn = get('.con2 .inner .scheadule .pointbox .xi-angle-left');
const rightbtn = get('.con2 .inner .scheadule .pointbox .xi-angle-right');
const homeimg = get('.con2 .inner .scheadule .pointbox .teambox .left img');
const awayimg = get('.con2 .inner .scheadule .pointbox .teambox .right img');
const date1 = get('.con2 .inner .scheadule .pointbox .txt h2 span');
const location = get('.con2 .inner .scheadule .pointbox .txt p');
const homept = get('.con2 .inner .scheadule .pointbox .teambox h2 strong:nth-of-type(1)');
const awaypt = get('.con2 .inner .scheadule .pointbox .teambox h2 strong:nth-of-type(2)');
const homename = get('.con2 .inner .scheadule .pointbox .teambox .left h2 > span');
const awayname = get('.con2 .inner .scheadule .pointbox .teambox .right h2 > span');

let idx = 0;
function udpate() {
    homeimg.src = data[idx].homeimg;
    awayimg.src = data[idx].awayimg;
    date1.innerHTML = data[idx].date;
    location.innerHTML = data[idx].location;
    homept.innerHTML = data[idx].homescore;
    awaypt.innerHTML = data[idx].awayscore;
    homename.innerHTML = data[idx].homename;
    awayname.innerHTML = data[idx].awayname;
}
leftbtn.addEventListener('click', (e) => {
    idx++;
    if (idx >= data.length) idx = 0;
    udpate();
});
rightbtn.addEventListener('click', (e) => {
    idx--;
    if (idx < 0) idx = data.length - 1;
    udpate();
});

const heartBtn = document.getElementById('heartBtn');
heartBtn.addEventListener('click', (e) => {
    const heart = document.createElement('span');
    heart.classList.add('heart-float');
    heart.innerHTML = '<i class="xi-heart"></i>';

    const rect = heartBtn.getBoundingClientRect();
    const parentRect = heartBtn.parentElement.getBoundingClientRect();

    const left = rect.left - parentRect.left + rect.width / 2;
    const top = rect.top - parentRect.top;

    heart.style.left = `${left}px`;
    heart.style.top = `${top}px`;

    heartBtn.parentElement.appendChild(heart);

    heart.addEventListener('animationend', () => {
        heart.remove();
    });
});
