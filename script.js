document.getElementById('image').addEventListener('click', image)
// the hi button will change activate the image finction
document.getElementById('text').addEventListener('click', change)
// when the text button is clicked, the change function will be activated
document.getElementById('colour').addEventListener('click', color)
// when the click me button is clicked, it will activate the color function

function image () {
  document.getElementById('food').src = 'Images/paimon.jpg'
}
// this will change the emergency food picture to the picture of paimon (the white haired child) when the function is activated.

function change () {
  document.getElementById('hi').style.display = 'none'
  document.getElementById('paimon').style.display = 'block'
}
// when this function is acitvated, the styles will be changed in css. the hello statement will be hidden and the paimon statement will be shown.

function color () {
  document.body.style.backgroundColor = 'tomato'
}
// the function will change the background color when activated by changing the style in css
