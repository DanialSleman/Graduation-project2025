let page = document.querySelector(".landing");
let backgroundImage = ["01.jpg","02.jpg","03.jpg","04.jpg"];

setInterval(()=> {
    let rondomNumber = Math.floor(Math.random() * backgroundImage.length);

    page.style.backgroundImage = 'url("../image/'+ backgroundImage[rondomNumber] +'")';
},30000);

