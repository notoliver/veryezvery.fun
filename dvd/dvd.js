var posX = 1;
var posY = 1;
var accelX = 1;
var accelY = 1;

function dvd() {
	var elem = document.getElementById('dvd');
	var ok = document.getElementById('ok');
	var floater = document.getElementById('layer101');
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
	}
}

function changeAccel(ok){
	var bud;
	if(ok=='up'){
		if(Math.abs(accelX*2)>100){
			return;
		}
		bud=1.2;
	}
	if(ok=='down'){
		if(Math.abs(accelX*0.8)<0.1){
			return;
		}
		bud=0.8;
	}
	accelX*=bud;
	accelY*=bud;
}
function reset(){
	posX = 1;
	posY = 1;
	accelX = 1;
	accelY = 1;
}
function hide(){
	var floater = document.getElementById('floater');
	var controls = document.getElementById('controls');
	if (floater.style.display === "none") {
		floater.style.display = "block";
	} else {
		floater.style.display = "none";
	}
	if (controls.style.display === "none") {
		controls.style.display = "block";
	} else {
		controls.style.display = "none";
	}
}

document.addEventListener('DOMContentLoaded', function() {
    dvd();
}, false);

document.addEventListener('keydown', function(event) {
	const key = event.key;
	//console.log(key);
    if (key === "ArrowUp") {
		changeAccel('up');
    }
    if (key === "ArrowDown") {
		changeAccel('down');
	}
	if (key === "Enter"){
		reset();
	}
	if (key === "Backspace"){
		hide();	
	}
});