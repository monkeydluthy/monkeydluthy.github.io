let arloMain = document.querySelector('#arlo-main');
let ringMain = document.querySelector('#ring-main');
let logiMain = document.querySelector('#logi-main');
let eufyMain = document.querySelector('#eufy-main');

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

let selected = document.querySelector('.nav-list');
selected.addEventListener('click', (e) => {
    
    let target = e.target;
    // console.log(target.classList)
    if (target.tagName == 'A') {
        target.classList.toggle('selected') 
    }

})