function reply_click(clicked_id) {
    buttons(clicked_id);
}


function buttons(clicked_id) {
    let screen = document.querySelector('#screen');

    if (clicked_id != '=') {

        screen.innerText += clicked_id;

    } else {

        let result = eval(screen.innerText);
        screen.innerText = result;
    }
}

