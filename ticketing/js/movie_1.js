// console.log(submenu1_1)

// submenu1_1.onclick = () => {
//   if(!submenu1.classList.contains("clicked")){
//     submenu1.classList.add("clicked");
//     console.log(submenu1)
//   }
//   else{
//     submenu1.classList.remove("clicked");
//     console.log(submenu1)
//   }
// }
// console.log(submenu1)

const menu_2= document.querySelectorAll("#menu_2");
console.log(menu_2);

// menu_2.onclick = () => {
//   console.log("클릭");
//   menu_2.style.backgroundColor="gray";
//   menu_2.style.color="white";
// } 
let i=0;
menu_2[0].addEventListener("click", () =>{
  if(i==1) {
    menu_2[0].style.backgroundColor="gray";
    menu_2[0].style.color="white";
    i--
  }
  else {
    menu_2[0].style.backgroundColor="#eee";
    menu_2[0].style.color="black";
    i++
  }

});
