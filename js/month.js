import data from './monthdata.js';

const get = (target) => document.querySelector(target);
const getAll = (target) => document.querySelectorAll(target);

const years = getAll('.con1 .inner .month .year li');
const month = get('.con1 .inner .monthday .month ');
const list = getAll('.con1 .inner .alibum .allpic');
const lists = getAll('.con1 .inner .alibum');
const left = get('.con1 .inner .monthday .month > .xi-angle-left');
const right = get('.con1 .inner .monthday .month > .xi-angle-right');

let cnt = 1;
years.forEach((item, idx) => {
    item.addEventListener('click', (e) => {
        years.forEach((el) => el.classList.remove('on'));
        item.classList.add('on');
        month.innerHTML = data[idx].eng.map((e) => `<li>${e}</li>`).join('');
        list.style.display = 'flex';
    });
});
const yearon = getAll('.con1 .inner .month > .year li');
const monthon = getAll('.con1 .inner .monthday > ul> li');

yearon.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        yearon.forEach((item) => item.classList.remove('on'));

        btn.classList.add('on');
        lists.forEach((pic, i) => {
            pic.style.display = i === idx ? 'block' : 'none';
        });
    });
});

monthon.forEach((btn, idx) => {
    btn.addEventListener('click', (e) => {
        monthon.forEach((item) => item.classList.remove('on'));
        btn.classList.add('on');
        lists.forEach((pic, i) => {
            pic.style.display = i === idx ? 'block' : 'none';
        });
    });
});
