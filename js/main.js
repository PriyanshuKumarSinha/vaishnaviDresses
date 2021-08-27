let hamIcon = document.getElementById("hamIcon");
let mainMenuContainer = document.getElementsByClassName('mainMenuContainer')[0];
let mobileMenu = document.getElementsByClassName('mobileMenu')[0];




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
    return true;
}


function adjustMMColor() {
    var body = document.body,
        html = document.documentElement;

    var height = Math.max(body.scrollHeight, body.offsetHeight,
        html.clientHeight, html.scrollHeight, html.offsetHeight);
    mainMenuContainer.style.height = height + 'px';
}

function showMenu() {
    mobileMenu.id = 'doAnimation'

    mainMenuContainer.style.display = 'block';
    mobileMenu.style.display = ""

}
function hideMenu() {
    // mobileMenu.style.animation = "mobileMenuAnimation 10s  linear 2s reverse"
    mainMenuContainer.style.display = 'none';
    mobileMenu.style.display = 'none';
    // crossIcon.style.display = 'none';
    // hamIcon.style.display = "contents";
}

let offerSliderImage = document.querySelector("#offerSliderImage");
let imageNumber = 0;
let offerImagesName = ['offerImage.png', 'offerimagebottom.jpg', 'download (1).jpg', 'download (2).jpg', 'download (3).jpg', 'download (4).jpg', 'download (5).jpg', 'download (6).jpg', 'download.jpg', 'images.jpg', 'images.png', 'images (1).jpg'];

// set first image


let sliderButtonsDiv = document.querySelector('.sliderButtons')

// create buttons
// sliderButtonsDiv.innerHTML += `<button>&nbsp;</button>`
for (let i = 0; i < offerImagesName.length; i++) {
    sliderButtonsDiv.innerHTML += `<button id = "${i}" onclick = "buttonClicked(this.id)">&nbsp;</button>`
}

changeImage();


function changeImage() {
    offerSliderImage.src = `./img/${offerImagesName[imageNumber]}`;
    document.getElementById(String(imageNumber)).style.backgroundColor = 'rgb(184, 184, 184)';
    if (imageNumber >= 1) {
        document.getElementById(String(imageNumber - 1)).style.backgroundColor = 'rgb(228, 228, 228)';
    }
    else {
        document.getElementById(String(offerImagesName.length - 1)).style.backgroundColor = 'rgb(228, 228, 228)';
    }

    if (imageNumber < offerImagesName.length - 1) {
        imageNumber += 1;
    }
    else {
        imageNumber = 0;
    }

    // console.log(imageNumber)
}

setInterval(changeImage, 8000);




function buttonClicked(id) {
    imageNumber = parseInt(id);
    changeImage();

    for (let i = 0; i < offerImagesName.length; i++) {
        document.getElementById(String(i)).style.backgroundColor = 'rgb(228, 228, 228)';
    }
    // console.log(id);
}