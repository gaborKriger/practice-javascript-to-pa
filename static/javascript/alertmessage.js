function sendAlert() {
    let rows = document.querySelectorAll('tbody tr');
    let name = document.querySelectorAll('#name');
    let dobs = document.querySelectorAll('#dob');
    for (let i = 0; i < rows.length; i++) {
        let row = rows[i];
        row.addEventListener('click', function () {
            let dob = parseInt(dobs[i].innerText);
            let age = 2018 - dob;
            if (age > 0) {
                alert(name[i].innerText + ' is ' + age + 'years old');
            } else {
                alert(name[i].innerText + ' is a newborn!')
            }
            this.style.color = 'blue'
        })
    }
}

sendAlert();
