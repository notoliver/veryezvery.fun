var text='';

var active = document.getElementById("navmenus").getAttribute("active");
console.log(active);

//var pages = ["home","lisbon", "uk","bio","geneva"];

/*
<div class='sidemenu'>
    <div style="padding-bottom:20px;">
        <a href="/photo" style="font-size:20px;" pp="pp">photography</a>
    </div>
    
        <a href="/photo/minsuhchung" >minsuh chung</a>
        <br>
        <a href="/photo/oliverqiu" >oliver qiu</a>
        <br>
        <a href="/photo/about" >about</a>
    
</div>

<div class='mobilemenu'>

    <div>
        <a href="/photo">photography</a>
        <span style="float:right;" onclick="openNavModal()">
            menu 
        </span>
    </div>

    <div class="navmodal" id="myNavModal">
        <span class="close cursor" onclick="closeNavModal()">&times;</span>
        <div class="navmodal-content">
            <a href="/photo" pp="pp">photography</a>
    <br>
    <a href="/photo/minsuhchung">minsuh chung</a>
    <br>
    <a href="/photo/oliverqiu">oliver qiu</a>
    <br>
    <a href="/photo/about">about</a>
        </div>
    </div>

</div>
*/


text+='<div class=\'sidemenu\'>\r\n    <div style=\"padding-bottom:20px;\">\r\n        <a href=\"\/photo\" style=\"font-size:20px;\" pp=\"pp\">photography<\/a>\r\n    <\/div>\r\n    \r\n        <a href=\"\/photo\/minsuhchung\" >minsuh chung<\/a>\r\n        <br>\r\n        <a href=\"\/photo\/oliverqiu\" >oliver qiu<\/a>\r\n        <br>\r\n        <a href=\"\/photo\/about\" >about<\/a>\r\n    \r\n<\/div>\r\n\r\n<div class=\'mobilemenu\'>\r\n\r\n    <div>\r\n        <a href=\"\/photo\">photography<\/a>\r\n        <span style=\"float:right;\" onclick=\"openNavModal()\">\r\n            menu \r\n        <\/span>\r\n    <\/div>\r\n\r\n    <div class=\"navmodal\" id=\"myNavModal\">\r\n        <span class=\"close cursor\" onclick=\"closeNavModal()\">&times;<\/span>\r\n        <div class=\"navmodal-content\">\r\n            <a href=\"\/photo\" pp=\"pp\">photography<\/a>\r\n    <br>\r\n    <a href=\"\/photo\/minsuhchung\">minsuh chung<\/a>\r\n    <br>\r\n    <a href=\"\/photo\/oliverqiu\">oliver qiu<\/a>\r\n    <br>\r\n    <a href=\"\/photo\/about\">about<\/a>\r\n        <\/div>\r\n    <\/div>\r\n\r\n<\/div>'

var text2=text;
if(active=="about"){
    var results = getIndicesOf(active, text,true);
    var firstoccurance=results[0]+active.length+1;
    var secondoccurance=results[2]+active.length+1;
    text2 = text.slice(0, firstoccurance) + " class=\"active\" " + text.slice(firstoccurance,secondoccurance)+ " class=\"active\" " +text.slice(secondoccurance);
}
else if(active!=="home"){
    var results = getIndicesOf(active, text,true);
    var firstoccurance=results[0]+active.length+1;
    var secondoccurance=results[1]+active.length+1;
    text2 = text.slice(0, firstoccurance) + " class=\"active\" " + text.slice(firstoccurance,secondoccurance)+ " class=\"active\" " +text.slice(secondoccurance);
}

document.getElementsByClassName('navmenus')[0].innerHTML = text2;