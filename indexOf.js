//indexOf的兼容(IE6、7、8不支持indexOf)
function indexOf(array,elem,i){
    var indexOf = Array.prototype.indexOf,
        length = array.length;
    if(indexOf){
        return indexOf.call(array,elem,i);
    }
    i = i?i<0?Math.max(0,length+i):i:0;
    for(;i<length;i++){
        if(i in array && array[i] === elem)
            return i;
    }
    return -1;
}
