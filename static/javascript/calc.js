function reply_click(clicked_id) {
    buttons(clicked_id);
}


function buttons(clicked_id) {
    let screen = document.querySelector('h1');
    if (clicked_id != '=') {
        if (screen.innerText == '0') {
            screen.innerText = ''
        }
        screen.innerText += clicked_id;
        if (clicked_id == 'C') {
            screen.innerText = '0';
        }
    } else {

        let result = eval(screen.innerText);
        screen.innerText = result;
    }
}

