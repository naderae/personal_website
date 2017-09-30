



var resume = document.getElementById('cv')
var currentWork = document.getElementById('currently')
var contactMe = document.getElementById('contact')



function init(){
  resume.style.display = 'none';
  currentWork.style.display = 'none';
  contact.style.display = 'none';

}

init();

document.querySelector('#butt1').addEventListener('click', function() {

    resume.style.display = 'block';

})

//
document.querySelector('#butt2').addEventListener('click', function() {

    currentWork.style.display = 'block';

})

document.querySelector('#butt3').addEventListener('click', function(){

  contact.style.display = 'block';
})
