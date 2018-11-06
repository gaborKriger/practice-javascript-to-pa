function getRandomNumber() {
    let number = Math.floor(Math.random() * (255));
    return number
}

function changeColor() {
    let names = document.querySelectorAll('#name');
    let emails = document.querySelectorAll('#email');
    for (let i = 0; i < names.length; i++) {
        let name = names[i];
        name.addEventListener('mouseover', function () {
            let r = getRandomNumber();
            let g = getRandomNumber();
            let b = getRandomNumber();
            emails[i].style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
            let cr = getRandomNumber();
            let cg = getRandomNumber();
            let cb = getRandomNumber();
            emails[i].style.color = 'rgb(' + cr + ',' + cg + ',' + cb + ')';
        })
    }
    for (let i = 0; i < emails.length; i++) {
        let email = emails[i];
        email.addEventListener('mouseover', function () {
            let r = getRandomNumber();
            let g = getRandomNumber();
            let b = getRandomNumber();
            names[i].style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
            let cr = getRandomNumber();
            let cg = getRandomNumber();
            let cb = getRandomNumber();
            names[i].style.color = 'rgb(' + cr + ',' + cg + ',' + cb + ')';
        })
    }
}

getRandomNumber();
changeColor();