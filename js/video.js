import data from './videodata.js';
const get = (target) => document.querySelector(target);
const getAll = (target) => document.querySelectorAll(target);

const videobtn = () => {
    const leftbtn = get('.con3 .inner .wizbox .leftwiz .videoleft');
    const rightbtn = get('.con3 .inner .wizbox .leftwiz .videoright');
    const iframe = get('.videobox .wizvideo');
    const titlelist = get('.con3 .inner .wizbox .leftwiz .videobox h2 > span');

    let idx = 0;
    function udpate() {
        iframe.src = data[idx].vidurl;
        titlelist.innerHTML = data[idx].title;
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

const more = () => {
    const morebtn = get('.con3 .inner .wizbox .leftwiz .videobox i');
    const tooltip = document.createElement('div');
    tooltip.className = 'more-tooltip';
    tooltip.innerText = '더보기';
    document.body.appendChild(tooltip);

    morebtn.addEventListener('mouseenter', (e) => {
        tooltip.style.top = `${e.clientY + 10}px`;
        tooltip.style.left = `${e.clientX + 10}px`;
        tooltip.style.opacity = '1';

        setTimeout(() => {
            tooltip.style.opacity = '0';
        }, 1000);
    });
};

(() => {
    videobtn();
    more();
})();
