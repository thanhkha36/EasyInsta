function removeEle(elem){
    if (elem){
        var elements = document.getElementsByClassName(elem);
        while (elements.length > 0) elements[0].parentNode.removeChild(elements[0]);
    }
}

function initEI(){
    removeEle("_si7dy");
    removeEle("_rcw2i");
}

window.onscroll = function(){ initEI(); };