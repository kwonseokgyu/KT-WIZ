const get = (target) => document.querySelector(target);
const getAll = (target) => document.querySelectorAll(target);

const btn = get('#content .bgvideo .play');
const video = get('#content .bgvideo video');
const vidtext = get('#content .con1 > h2');

btn.addEventListener('click', (e) => {
    if (video.paused) {
        video.play();
        btn.classList.add('on');
        btn.innerHTML = '<i class="xi-stop"></i>';
        vidtext.style.display = 'none';
    } else {
        video.pause();
        btn.classList.remove('on');
        btn.innerHTML = '<i class="xi-play"></i>';
        vidtext.style.display = 'block';
    }
});
// 동영상 버튼

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
