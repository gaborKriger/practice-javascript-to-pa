function getRandomNumber() {
    let number = Math.floor(Math.random() * (255));
    return number
}

function changeColor() {
    let names = document.querySelectorAll('#name');
    let email = document.querySelectorAll('#email');
    for (let i = 0; i < names.length; i++) {
        let name = names[i];
        name.addEventListener('mouseenter', function () {
                let r = getRandomNumber();
                let g = getRandomNumber();
                let b = getRandomNumber();
                email[i].style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
                let cr = getRandomNumber();
                let cg = getRandomNumber();
                let cb = getRandomNumber();
                email[i].style.color = 'rgb(' + cr + ',' + cg + ',' + cb + ')';
        })
    }
}

getRandomNumber();
changeColor();