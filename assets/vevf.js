var paths = ['/','/chat/']
function randomLink(){
    //var rando = Math.round(Math.random()*1);
    var newPath = paths[Math.round(Math.random()*1)];
    while(newPath==window.location.pathname){
        newPath = paths[Math.round(Math.random()*1)];
    }
    window.location.pathname=newPath;
}