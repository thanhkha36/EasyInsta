function removeEle(elem){
    if (elem){
        var elements = document.getElementsByClassName(elem);
        for(var i = 0; i < elements.length; i++){
            if(elements[i].style.display != "none")
                elements[i].style.display = "none";
        }
    }
}

function avatarFS(e){
    if(e && e.target && e.target.className == '_rewi8'){
        var avatarURL = e.srcElement.currentSrc.replace('/vp/', '/').replace('s150x150', 's1080x1080');
        window.open(avatarURL,'_blank');
    }
}

function rClickPlease(){
    removeEle("_si7dy");
    removeEle("_rcw2i");
    removeEle("_o95x1");
    removeEle("_4c5eh");

    setTimeout(function(){
        rClickPlease();
    }, 300)
}

document.body.addEventListener("click", function(e) {
    avatarFS(e);
}, false);

window.onload = function(){ rClickPlease(); };
window.onscroll = function(){ rClickPlease(); };
window.onclick = function(){ rClickPlease(); };
window.ondblclick = function(){ 
    setTimeout(function(){
        rClickPlease();
    }, 500)
};