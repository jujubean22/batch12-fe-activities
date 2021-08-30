function changeBg (){

    const images = [
    "url('./assets/1.jpg')",
    "url('./assets/2.jpg')",
    "url('./assets/3.jpg')",
    "url('./assets/4.jpg')",
    "url('./assets/5.jpg')",
    "url('./assets/6.jpg')",
    ];
    const bg = images[Math.floor(Math.random() * images.length)];
    const html = document.querySelector("html");
    html.style.backgroundImage = bg;
}
window.onload= changeBg;

