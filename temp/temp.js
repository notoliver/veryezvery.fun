function chat(){
    var input = document.getElementById('myText').value;
    document.getElementById('myText').value='';
    var d = new Date();
    var currentHours = d.getHours();
    currentHours = ("0" + currentHours).slice(-2);
    var currentMinutes = d.getMinutes();
    currentMinutes = ("0" + currentMinutes).slice(-2);
    var currentSeconds = d.getSeconds();
    currentSeconds = ("0" + currentSeconds).slice(-2);
    var time = currentHours+':'+currentMinutes+':'+currentSeconds;
    document.getElementById('chat').innerHTML+='<p>'+time+' '+input+'<\/p>';
}

$(function() {
    $('.window').draggable({ handle:'.header'});
});