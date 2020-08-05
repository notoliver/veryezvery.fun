var posX = 1;
var posY = 1;
var accelX = 1;
var accelY = 1;

function dvd() {
	var elem = document.getElementById('dvd');
	var ok = document.getElementById('ok');
	var floater = document.getElementById('layer101');
	console.log(elem.offsetWidth);
	setInterval(frame,1);
	function frame() {
		var newColor = "hsl(" + Math.floor(Math.random()*360) + ", 100%, 50%)";
		if (posX >= window.innerWidth-elem.offsetWidth) {
			accelX*=-1;
			ok.style.fill=newColor;
			floater.style.fill=newColor;
		} 
		if (posX <= 0){
			accelX*=-1;
			ok.style.fill=newColor;
			floater.style.fill=newColor;
		}
		if (posY >= window.innerHeight-elem.offsetHeight) {
			accelY*=-1;
			ok.style.fill=newColor;
			floater.style.fill=newColor;
		} 
		if (posY <= 0){
			accelY*=-1;	
			ok.style.fill=newColor;
			floater.style.fill=newColor;
		}
		posY+=accelY; 
		elem.style.top = posY + "px"; 
		posX+=accelX; 
		elem.style.left = posX + "px"; 
		console.log(posX+', '+posY)
	}
  }

document.addEventListener('DOMContentLoaded', function() {
    dvd();
}, false);