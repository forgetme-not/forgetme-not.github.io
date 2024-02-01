const days=document.querySelectorAll('#day1')
// console.log(days);

function clickdays(){
  var activeday=document.querySelector('.day_clicked')
  console.log(activeday);
  if (activeday){
      activeday.classList.remove('day_clicked')
  }
  this.classList.add('day_clicked')
}

for( var i=0 ;i < days.length ; i++){
  days[i].addEventListener('click',clickdays)
}


