let body = document.querySelector('.body')
let input = document.getElementById('input')
let paragraph = document.querySelector('.first-para')
let firstPara = document.querySelector('.first-para')
let temperatureEl = document.querySelector('.temperature');

let label =document.getElementById('label')
let tempHot = 25 //if its greater its hot.
let tempCold = 15// if its lesser its cold.
 
function temperatureFunction() {
 if (tempHot< input.value ) {
   
   input.value= '';
   body.style.backgroundColor = 'rgba(171, 38, 21, 0.99)';
   temperatureEl.innerHTML = 'Its Hot!'
   temperatureEl.style=('color:cyan ; font-size : 24px ; font-weight:900') 
  paragraph.setAttribute('style','color : cyan')
   firstPara.style.color = 'cyan'
   label.style.color= 'cyan'
 }
 
else if (tempCold > input.value){
  
   input.value=''
   body.style.backgroundColor='rgba(3, 85, 255)'
   temperatureEl.innerHTML = 'Its Cold!'
   temperatureEl.style=('color:cyan; font-size:24px;font-weight:900')
   label.style.color = 'cyan'
   paragraph.setAttribute('style','color :cyan')
   firstPara.style.color ='cyan'
  
 }
 else if (tempCold < input.value && tempHot>input.value) {
   
   input.value = ''
   body.style.backgroundColor='rgba(80, 255, 202)'
   temperatureEl.innerHTML = 'Its Just Right!'
   temperatureEl.style=('font-size:24px;font-weight:900; color: purple')
   paragraph.setAttribute('style','color :purple')
   firstPara.style.color ='purple'
  label.style.color ='purple';
 }
/* else if (input.value < te){
   
 }*/
}
