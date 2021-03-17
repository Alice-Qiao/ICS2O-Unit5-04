document.getElementById('image').addEventListener('click', image)
document.getElementById('text').addEventListener('click', change)
document.getElementById('colour').addEventListener('click', color)
//when the hi button is pressed, the function image will activate. when the what button is pressed, the change funtion will activate.

function image () {
  document.getElementById('food').src ='Images/paimon.jpg'
}
//this will change the emergency food picture to the picture of paimon (the white haired child) when the function is activated.

function change () {
  document.getElementById('hi').style.display = 'none'
  document.getElementById('paimon').style.display = 'block'
  }
  //when this function is acitvated, the styles will be changed in css. the hello statemant will be hidden and the paimon statement will be shown.

function color () {
  document.body.style.backgroundColor = 'tomato'
}