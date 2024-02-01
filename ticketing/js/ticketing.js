

//캐러셀부분
// const month_carousel=document.querySelector(".month_carousel")
// const carousel_html=["years_12.png","years_15.png"]
// month_carousel.style.backgroundImage=`url(images/${carousel_html[0]})`
// const arrows =document.querySelectorAll(".arrow")
// let i=0;
// arrows.forEach(arrow => {
//   arrow.addEventListener("click",(e) => {
//     if(e.target.id === "left") {
//       i--
//       if(i<0){
//         i= carousel_html.length -1;
//       }
//     }
//     else if(e.target.id === "right") {
//       i++;
//       if(i>=carousel_html.length){
//         i=0;
//       }
//     }
//     month_carousel.style.backgroundImage=`url(images/${carousel_html[i]})`;
//   });
// });


//전체, 스페셜관 버튼 활성화----------------------
const menu=document.querySelector(".menu")
const menus =document.querySelectorAll(".menu_1")
let j=1;
menus.forEach(arrow => {
  menu.addEventListener("click",(e) => {
    if(e.target.id === "left") {
      j--
      if(j<1){
        j=1;
      }
    }
    else if(e.target.id === "right") {
      j++;
      if(j>2){
        j=2;
      }
    }
    document.getElementById('menu_click').setAttribute('src',`movie_${j}.html`);
  });
});

//캐러셀 동작 부분
const arrows =document.querySelectorAll(".arrow")
let i=1;
arrows.forEach(arrow => {
  arrow.addEventListener("click",(e) => {
    if(e.target.id === "left") {
      i--
      if(i<1){
        i=1;
      }
    }
    else if(e.target.id === "right") {
      i++;
      if(i>2){
        i=2;
      }
    }
    document.getElementById('day_select').setAttribute('src',`m.carousel_${i}.html`);
  });
});
//영화선택 옵션바 동작
const select=document.querySelector(".priority_all")
const selects =document.querySelectorAll(".priority")
select.addEventListener("change",(e) => {
    if(e.target.value === "예매순") {
      document.getElementById('m_select').setAttribute('src',`m_select_1.html`);
    }
    else if(e.target.value === "관객순") {
      document.getElementById('m_select').setAttribute('src',`m_select_2.html`);
    }
    else if(e.target.value === "예정작") {
      document.getElementById('m_select').setAttribute('src',`m_select_3.html`);
    }
  });
