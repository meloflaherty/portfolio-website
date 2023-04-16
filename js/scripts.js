function menuToggle() {
    var x = document.getElementById('myNavtoggle');
    x.className += ' responsive';
}

/* to hide or show the menu on click */

function menuToggle() {
    var x = document.getElementById('myNavtoggle');
    if (x.className === 'navtoggle') {
        x.className += ' responsive';
    } else {
        x.className = 'navtoggle';
    }
}
