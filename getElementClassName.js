/**/
function getElementsByClassName(className){
    var all = document.getElementsByTagName("*"),
        l = all.length,
        getElementClassName = document.getElementsByClassName,
        target;

    if(getElementClassName){
        return document.getElementsByClassName(className);
    }
    for(var i= 0;i<l;i++){
        target = all[i];
        if(selfgetAttribute(target,"class") == className){
            return target;
        }
    }
    return false;
}
(function(global) {
    var div = document.createElement("div");
    var getSetAttributeFlag = true;
    var fixSpecified = {
        name: true,
        id: true
    };
    div.setAttribute("className", "t");
    getSetAttributeFlag = div.className !== "t";
    function get(ele, name) {
        var ret = ele.getAttributeNode(name);
        return ret && (fixSpecified[name] ? ret.nodeValue = "" : ret.specified) ? ret.nodeValue : undefined;
    }

    function set(ele, name, value) {
        var ret = ele.getAttributeNode(name);
        if (!ret) {
            ret = document.createAttribute(name);
            ele.setAttributeNode(ret);
        }
        return (ele.nodeValue = value + "");
    }
    window.selfsetAttribute = set;
    window.selfgetAttribute = get;
})(window);
/*
 * getElementsByClassName,IE6、7、8不支持，此函数是兼容个浏览器的
 *
 * */
