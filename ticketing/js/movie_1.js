
const menu_2=document.querySelectorAll("#menu_2");
const submenu=document.querySelectorAll("#submenu")

const sub_2=document.querySelectorAll("#sub_2")
console.log(sub_2);
console.log(sub_2.length);


// 장소선택 메인메뉴 
function clickMenuHandler(){
  var activeMenu = document.querySelector('.clicked');
  if (activeMenu){
      activeMenu.classList.remove('clicked')
  }
  this.classList.add('clicked')
  for(let i=0; i<menu_2.length;i++) {
    submenu[i].style.display ="none";
  }
  this.nextElementSibling.style.display="block"
}

for (var i =0 ;i < menu_2.length ;i++){
  menu_2[i].addEventListener('click',clickMenuHandler)
}

//장소선택 서브메뉴
function sub_clickMenuHandler(){
  var sub_activeMenu = document.querySelector('.sub_clicked');
  if (sub_activeMenu){
      sub_activeMenu.classList.remove('sub_clicked')
  }
  this.classList.add('sub_clicked')

}

for (var i =0 ;i < sub_2.length ;i++){
  sub_2[i].addEventListener('click',sub_clickMenuHandler)
}