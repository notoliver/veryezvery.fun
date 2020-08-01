function getTime(){
    var d = new Date();
    var currentHours = d.getHours();
    currentHours = ("0" + currentHours).slice(-2);
    var currentMinutes = d.getMinutes();
    currentMinutes = ("0" + currentMinutes).slice(-2);
    var currentSeconds = d.getSeconds();
    currentSeconds = ("0" + currentSeconds).slice(-2);
    var time = currentHours+':'+currentMinutes+':'+currentSeconds;
    return time;
}

var userInput = [];
function chat(){
    var input = document.getElementById('myText').value;
    if(input==''){
        return;
    }
    userInput.push(input);
    document.getElementById('myText').value='';
    document.getElementById('chat').innerHTML+='<p>'+getTime()+' me: '+input+'<\/p>';
}
function joined(){
    document.getElementById('chat').innerHTML+='<p>'+getTime()+' <i>i joined the chatroom<\/i><\/p>';
}

var lastUsedLine =''

function crowd(){
    var decision = Math.floor(Math.random() * 8);
    var input;
    if(decision==0 && userInput.length!=0){
        input = "\""+userInput[Math.floor(Math.random() * userInput.length)]+"\" ok and?";
    }
    else{
        input = lines[Math.floor(Math.random() * lines.length)];
        while(input==lastUsedLine){
            input = lines[Math.floor(Math.random() * lines.length)];
        }
    }
    lastUsedLine=input;
    var name = names[Math.floor(Math.random() * names.length)];  
    document.getElementById('chat').innerHTML+='<p>'+getTime()+' '+name+': '+input+'<\/p>';
}
function myFunction() {
    crowd();
    var time = 100*(Math.floor(Math.random() * (120 - 40 + 1)) + 40);
    setTimeout(myFunction, time);
}

$(function() {
    $('.window').draggable({ handle:'.header'});
    setTimeout(joined,120)
    setTimeout(myFunction,100*(Math.floor(Math.random() * (70 - 30 + 1)) + 30));
});

console.log(chatters.placeholder1.attributes.angry);