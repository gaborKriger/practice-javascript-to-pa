function changeH1() {
    let rows = document.querySelectorAll('tbody tr');
    let openTag = '<h1>';
    let closeTag = '</h1>';
    let name = document.querySelectorAll('#name');
    let email = document.querySelectorAll('#email');
    for (let i = 0; i < rows.length; i++) {
        rows[i].addEventListener('click', function () {
            console.log(this);
            if (!this.innerHTML.includes('h1')) {
                name[i].innerHTML = openTag + name[i].innerHTML + closeTag;
                email[i].innerHTML = openTag + email[i].innerHTML + closeTag;
            }else{
                name[i].innerHTML = name[i].innerHTML.slice(4) + name[i].innerHTML.slice(-5)
                email[i].innerHTML = email[i].innerHTML.slice(4) + email[i].innerHTML.slice(-5)
            }
        })
    }
}

changeH1();