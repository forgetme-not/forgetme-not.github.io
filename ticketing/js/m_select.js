const li=document.querySelectorAll("li")

function clickMovie(){
  var activeMovie=document.querySelector('.clicked')
  console.log(activeMovie);
  if (activeMovie){
      activeMovie.classList.remove('clicked')
  }
  this.classList.add('clicked')
}

for( var i=0 ;i < li.length ; i++){
  li[i].addEventListener('click',clickMovie)
}