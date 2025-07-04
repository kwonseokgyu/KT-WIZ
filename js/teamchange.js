import data from './baseball.js';

const get = (target) => document.querySelector(target);
const getAll = (target) => document.querySelectorAll(target);
// 경기시작

const playplan = () => {
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
};
// 경기끝

// 하트 시작
const heart = () => {
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
};
// 하트 끝

// 하트누르면 숫자올라감
const clickcount = () => {
    const get = (target) => document.querySelector(target);
    const heartBtn1 = get('#content .con1 .nowplay .nowplaytxt > span');
    const counted = get('#content .con1 .nowplay .nowplaytxt p > span ');
    let cnt = 1653;
    heartBtn1.addEventListener('click', (e) => {
        cnt++;
        counted.innerHTML = cnt;
    });
};
// 카드 시작
const carddrow = () => {
    const get = (target) => document.querySelector(target);
    const card = get('.con3 .inner .teamcard .num1');

    card.addEventListener('click', (e) => {
        card.classList.toggle('on');
    });
};
// 카드돌려~
const cardrulet = () => {
    const get = (target) => document.querySelector(target);
    const getAll = (target) => document.querySelectorAll(target);
    const cards = getAll('.teamcard .card');
    const leftbtn = get('.con3 .inner .btn .left');
    const rightbtn = get('.con3 .inner .btn .right');
};

// 하트 숫자 시작
(() => {
    clickcount();
    playplan();
    heart();
})();
