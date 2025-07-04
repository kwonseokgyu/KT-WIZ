import imageList from './wizimg.js';
const get = (target) => document.querySelector(target);
const getAll = (target) => document.querySelectorAll(target);

const wizpic = () => {
    const leftimg = get('.con4 .inner .wizgallery .leftimg');
    const rightimg = get('.con4 .inner .wizgallery .rightimg');
    const centerimg = get('.con4 .inner .wizgallery .bigimg');
    const btnleft = get('.con4 .inner .wizgallery p .xi-angle-left');
    const btnright = get('.con4 .inner .wizgallery p .xi-angle-right');

    let currentIndex = 1;
    const update = () => {
        centerimg.querySelector('img').src = imageList[currentIndex].imgurl;
        leftimg.querySelector('img').src =
            imageList[(currentIndex - 1 + imageList.length) % imageList.length].imgurl;
        rightimg.querySelector('img').src = imageList[(currentIndex + 1) % imageList.length].imgurl;
    };

    const timer = () => {
        setInterval(() => {
            currentIndex = (currentIndex + 1) % imageList.length;
            update();
        }, 3000);
    };

    btnleft.addEventListener('click', (e) => {
        currentIndex = (currentIndex - 1 + imageList.length) % imageList.length;
        update();
    });

    btnright.addEventListener('click', (e) => {
        currentIndex = (currentIndex + 1) % imageList.length;
        update();
    });
    update();
    timer();
};

(() => {
    wizpic();
})();
