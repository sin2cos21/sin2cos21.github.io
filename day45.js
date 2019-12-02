let test = document.getElementById('test');
let test2 = document.getElementById('test2');
let test3 = document.getElementById('test3');
let test4 = document.getElementById('test4');
let test5 = document.getElementById('test5');
let test6 = document.getElementById('test6');
let geolocation = window.navigator.geolocation;
console.log(geolocation);

let option = {
    enableHighAccuracy: true
};

function error() {
    alert('エラーです。');
}

function success(position) {
    test.innerHTML += position.coords.latitude;
    test2.innerHTML += position.coords.longitude;
    test3.innerHTML += position.coords.accuracy;
    test4.innerHTML += position.coords.altitude;
    test5.innerHTML += position.coords.heading;
    test6.innerHTML += position.coords.speed;
}

if (geolocation) {
    geolocation.getCurrentPosition(success, error, option);
}

