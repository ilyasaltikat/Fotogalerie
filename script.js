
let images = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg', 'img6.jpg', 'img7.jpg', 'img8.jpg', 'img9.jpg', 'img10.jpg', 'img11.jpg', 'img12.jpg', 'img13.jpg', 'img14.jpg',];
let currentindex = 0;

function changeImageRight(i) {
    currentindex++;     // hier wird der nächste array aufgerufen

    if (currentindex >= images.length) {        // wenn currentindex gösser oder gleichlang wie images ist, dann von vorne anfangen
        currentindex = 0;
    }
    document.getElementById('detailImage').src = images[currentindex];
}

function changeImageLeft(i) {
    currentindex--;     // hier wird der vorherige array aufgerufen

    if (currentindex < 0) {     // wenn der erst array erreicht ist, beim nächsten Klick zum letzten array springen
        currentindex = images.length-1;
    }
    document.getElementById('detailImage').src = images[currentindex];
}

function closeOverlay() {
    document.getElementById('show').innerHTML = '';
}

function openOverlay(i) {
    let showImage = document.getElementById('show');

    showImage.innerHTML = html `<div class="open-img">
                            <img src="left.svg" onclick="changeImageLeft(${i})" class="button-arrow-left">
                            </button><img id="detailImage" class="openImage" src="${images[i]}">
                            <img src="right.svg" onclick="changeImageRight(${i})" class="button-arrow-right">
                            <button onclick="closeOverlay()">X</button></div>`;
}

function loadImage() {
    let imageContainer = document.getElementById('image-container');

    for (let i = 0; i < images.length; i++) {
        imageContainer.innerHTML += `<img class="image" onclick="openOverlay(${i})" src="${images[i]}">`;
    }
}


