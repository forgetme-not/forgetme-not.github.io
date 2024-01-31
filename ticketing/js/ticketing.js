const month_carousel=document.querySelector(".month_carousel")

const carousel_html=["m.carousel_1.html","years_15.png", "years_18.png"]

month_carousel.style.backgroundImage=`url(images/${carousel_html[0]})`

const arrows =document.querySelectorAll(".arrow")

let i=0;

arrows.forEach(arrow => {
  arrow.addEventListener("click",(e) => {
    if(e.target.id === "left") {
      i--
      if(i<0){
        i= carousel_html.length -1;
      }
    }
    else if(e.target.id === "right") {
      i++;
      if(i>=carousel_html.length){
        i=0;
      }
    }
    month_carousel.style.backgroundImage=`url(images/${carousel_html[i]})`;
  });
});
