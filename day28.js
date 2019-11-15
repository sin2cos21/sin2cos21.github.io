let image = [
    'day24_image/photo1.jpg',
    'day24_image/photo2.jpg',
    'day24_image/photo3.jpg',
    'day24_image/photo4.jpg',
    'day24_image/photo5.jpg'
];

let img = document.getElementById('image');
let left = document.getElementById('left');
let right = document.getElementById('right');

let count = 0; //現在表示している画像の配列番号
let imageLength = image.length - 1; //4


left.addEventListener('click', imageLeftClick);
right.addEventListener('click', imageRightClick);

function imageLeftClick() {
    if (count === 0) {
        count += imageLength;
    } else {
        count--;
    }
    let src = img.getAttribute('src');
    img.setAttribute('src', image[count]);
}

function imageRightClick() {
    if (count === imageLength) {
        count = 0;
    } else {
        count++;
    }
    let src = img.getAttribute('src');
    img.setAttribute('src', image[count]);
}

let thumbnail = document.getElementById('thumbnail');

for (var i = 0; i < image.length; i++) {
    let imgElement = document.createElement('img');
    let src = image[i];
    imgElement.setAttribute('src', src);
    imgElement.setAttribute('class', "thumbnail");
    thumbnail.appendChild(imgElement);
}

let thumbnailList = document.getElementsByClassName('thumbnail');

for (var i = 0; i < thumbnailList.length; i++) {
    let thumbnail = thumbnailList[i];

    thumbnail.addEventListener('click', function displayImage(e) {
        let src = e.target.getAttribute('src');
        img.setAttribute('src', src);
    });
}