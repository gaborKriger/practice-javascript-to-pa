function clickChangeColor() {

    let rows = document.querySelectorAll("tbody tr");

    for (let i = 0; i < rows.length; i++) {

        rows[i].style.backgroundColor = 'WHITE';
        rows[i].style.color = 'BLACK';

        rows[i].addEventListener('click', function () {
            let backgroundColor = rows[i].style.backgroundColor;

            if (backgroundColor.toUpperCase() === 'WHITE') {
                rows[i].style.backgroundColor = 'RED';
            } else if (backgroundColor.toUpperCase() === 'RED') {
                rows[i].style.backgroundColor = 'GREY';
            } else {
                rows[i].style.backgroundColor = 'WHITE';
            }

            let fontColor = rows[i].style.color;

            if (fontColor.toUpperCase() === 'BLACK') {
                rows[i].style.color = 'BLUE';
            } else if (fontColor.toUpperCase() === 'BLUE') {
                rows[i].style.color = 'ORANGE';
            } else {
                rows[i].style.color = 'BLACK';
            }


        })
    }

}

clickChangeColor();