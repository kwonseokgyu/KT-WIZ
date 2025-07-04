const get = (target) => document.querySelector(target);
const getAll = (target) => document.querySelectorAll(target);

// 숫자 룰렛

const animateRank = (finalnum = 5, speed = 70, repeat = 20) => {
    const get = (target) => document.querySelector(target);
    const ranknum = get('.con2 .inner .scheadule .desc .ranking h2 span.rank5');

    let count = 0;

    const interval = setInterval(() => {
        ranknum.textContent = Math.floor(Math.random() * 10);
        count++;
        if (count >= repeat) {
            clearInterval(interval);
            ranknum.textContent = finalnum;
        }
    }, speed);
};

//숫자 룰렛 끝

(() => {
    animateRank();
})();
