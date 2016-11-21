function insertAfter(targetELe,srcEle){
    var parent = targetELe.parentNode;
    console.log(parent.lastChild == targetELe);
    if(parent.lastChild == targetELe){
        parent.appendChild(srcEle);
    }else{
        parent.insertBefore(srcEle,targetELe.nextSibling);
    }
}