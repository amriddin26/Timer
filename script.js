autoplay();

function khaitTime() {
    const khaitDate = new Date('1 aprel, 2023, 00:00:00').getTime();
    const now = new Date().getTime();
    const distance = khaitDate - now;

    const sec = 1000;
    const min = sec * 60;
    const hour = min * 60;
    const day = hour * 24;

    const d = Math.floor(distance / day);
    const h = Math.floor((distance % day) / hour);
    const m = Math.floor((distance % hour) / min);
    const s = Math.floor((distance % min) / sec);

    document.querySelector('.day').innerHTML = d;
    document.querySelector('.hour').innerHTML = h;
    document.querySelector('.min').innerHTML = m;
    document.querySelector('.sec').innerHTML = s;

    autoplay();
}

let timer;

function autoplay() {
    timer = setTimeout(khaitTime, 1000);
}