function removeEle(elem){
    if (elem){
        var elements = document.getElementsByClassName(elem);
        for(var i = 0; i < elements.length; i++){
            if(elements[i].style.display != "none")
                elements[i].style.display = "none";
        }
    }
}

function initEI(){
    removeEle("_si7dy");
    removeEle("_rcw2i");
}

window.onscroll = function(){ initEI(); };
window.onclick = function(){ initEI(); };
window.ondblclick = function(){ 
    setTimeout(function(){
        initEI();
    }, 500)
};