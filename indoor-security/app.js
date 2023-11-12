let features = document.getElementById('features');
features.addEventListener('click', (e) => {
    let target = e.target;
    console.log(target);
})

let arloMain = document.querySelector('#arlo-main');
let ringMain = document.querySelector('#ring-main');
let logiMain = document.querySelector('#logi-main');
let eufyMain = document.querySelector('#eufy-main');
let high = document.querySelector('#high')


arloMain.addEventListener('click', () => {
    location.href = 'arlo-main.html';
})

ringMain.addEventListener('click', () => {
    location.href = 'ring-main.html';
})

logiMain.addEventListener('click', () => {
    location.href = 'logitech-main.html';
})

eufyMain.addEventListener('click', () => {
    location.href = 'eufy-main.html';
})

let features = document.getElementById('features');
features.addEventListener('click', (e) => {
    let target = e.target;
    console.log(target);
})
