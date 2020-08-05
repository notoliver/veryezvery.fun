var paths = ['/','/chat/','/dvd/']

function randomLink(){
    var current=paths.indexOf(window.location.pathname);
    current++;
    if(current==paths.length){
        current=0;
    }
    window.location.pathname=paths[current];
}