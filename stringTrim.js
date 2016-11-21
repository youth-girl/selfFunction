/*String.prototype.trim在IE6、7、8不支持*/
function stringTrim(){
    var trim = String.prototype.trim;
    var trimLeft = /^\s+/,
        trimRight = /\s+$/;
    return trim?function(text){
        return text?trim.call(text):""
    }:function(text){
        return text?text.toString().replace(trimLeft,"").replace(trimRight,""):"";
    }
}
