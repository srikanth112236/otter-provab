
function myFunction() {
var voice= document.getElementById("myDIV");
if (voice.style.display === "none") {
voice.style.display = "block";
} else {
voice.style.display = "none";
}
}


const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  

  });