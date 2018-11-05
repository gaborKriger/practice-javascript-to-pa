function changeH1() {
    let rows = document.querySelectorAll('tbody tr');
    let openTag = '<h1>';
    let closeTag = '</h1>';
    for (row of rows) {
        row.addEventListener('click', function () {
            this.innerHTML = openTag + this.innerHTML + closeTag;
            console.log(this.innerHTML);
        })
    }
}

changeH1();