function getRandomNumber() {
    let number = Math.floor(Math.random() * (255));
    return number
}

function changeColor() {
    let rows = document.querySelectorAll('tbody td');
    for (let i = 0; i < rows.length; i++) {
        let row = rows[i];
        row.addEventListener('mouseenter', function () {
            if (this.style.backgroundColor !== 'white') {
                this.style.backgroundColor = 'white';
                this.style.color = 'black';
            } else {
                let r = getRandomNumber();
                let g = getRandomNumber();
                let b = getRandomNumber();
                this.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
                let cr = getRandomNumber();
                let cg = getRandomNumber();
                let cb = getRandomNumber();
                this.style.color = 'rgb(' + cr + ',' + cg + ',' + cb + ')';
            }
        })
    }
}

getRandomNumber();
changeColor();