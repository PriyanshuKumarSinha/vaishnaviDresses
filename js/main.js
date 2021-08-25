let hamIcon = document.getElementById("hamIcon");
let mainMenuContainer = document.getElementsByClassName('mainMenuContainer')[0];
let mobileMenu = document.getElementsByClassName('mobileMenu')[0];


var body = document.body,
    html = document.documentElement;

var height = Math.max(body.scrollHeight, body.offsetHeight,
    html.clientHeight, html.scrollHeight, html.offsetHeight);

hamIcon.onclick = showMenu;
window.onscroll = adjustMMColor;

mainMenuContainer.onclick = checkPosition;
function checkPosition() {

    if (mobileMenu.addEventListener('click', temp)) {
        //do nothing
    }
    else {
        hideMenu();
    }
}


function temp() {
    console.log('temp')
    return true;
}


function adjustMMColor() {
    mainMenuContainer.style.height = height + 'px';
}

function showMenu() {
    mainMenuContainer.style.display = 'block';
    mobileMenu.style.display = ""
}
function hideMenu() {
    mainMenuContainer.style.display = 'none';
    mobileMenu.style.display = 'none';
    // crossIcon.style.display = 'none';
    // hamIcon.style.display = "contents";
    console.log('n')
}