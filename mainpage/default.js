const container = document.querySelector(".container");
const pics = ["cinema1.png", "cinema2.png", "cinema3.png"];
const img = document.querySelector(".carousel-img");
let i = 0;

function changeImage(direction) {
  if (direction === "prev") {
    i--;
    if (i < 0) {
      i = pics.length - 1;
    }
  } else if (direction === "next") {
    i++;
    if (i >= pics.length) {
      i = 0;
    }
  }
  img.src = `image/${pics[i]}`;
}

function autoChangeImage() {
  setInterval(() => {
    changeImage("next");
  }, 2000); // 3초마다 이미지 변경
}

autoChangeImage();
