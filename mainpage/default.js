const container = document.querySelector("#container"); // 캐러셀 영역
const pics = ["c-1.jpg", "c-2.jpg"];  // 이미지 배열

container.style.backgroundImage = `url(image/${pics[0]})`;  // 첫번째 이미지 기본으로 표시

const arrows = document.querySelectorAll(".arrow");  // 화살표
let i = 0;  // 배열 인덱스

function changeImage(direction) {
  if (direction === "left") {
    i--; // 이전 이미지로 이동
    if (i < 0) {
      i = pics.length - 1;  // 맨 마지막 이미지로 이동
    }      
  } else if (direction === "right") {
    i++;  // 다음 이미지로 이동
    if (i >= pics.length) {
      i = 0;  // 첫번째 이미지로 이동
    }
  }
  container.style.backgroundImage = `url(image/${pics[i]})`;  // 현재 이미지 표시
}

arrows.forEach(arrow => {
  arrow.addEventListener("click", (e) => {
    const direction = e.target.id;
    changeImage(direction);
  });
});

// 1초마다 자동으로 이미지 변경
setInterval(() => {
  changeImage("right");
}, 100000);