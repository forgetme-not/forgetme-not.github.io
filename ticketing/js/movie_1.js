const submenu1 = document.querySelector("#submenu1");
const submenu2 = document.querySelector("#submenu2");
const submenu3 = document.querySelector("#submenu3");
const submenu4 = document.querySelector("#submenu4");
const submenu5 = document.querySelector("#submenu5");
const submenu6 = document.querySelector("#submenu6");
const submenu7 = document.querySelector("#submenu7");
const submenu8 = document.querySelector("#submenu8");
const submenu1_1 = document.querySelector("#submenu1_1");
console.log(submenu1_1)

submenu1_1.onclick = () => {
  if(!submenu1.classList.contains("clicked")){
    submenu1.classList.add("clicked");
    console.log(submenu1)
  }
  else{
    submenu1.classList.remove("clicked");
    console.log(submenu1)
  }
}

console.log(submenu1)