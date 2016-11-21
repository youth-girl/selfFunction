function getsetAttribute() {
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
    return{
        setAttribute:set,
        getAttribute:get
    };
}
/*
 *   IE6、7的setAttribute的html属性，支持的是dom属性，通过获取nodeList，修改nodeValue的值
 *
 *
 *   对于h5的boolean值设置，node的设置
 *   html属性对应的Dom属性
 *       propFix: {
 tabindex: "tabIndex",
 readonly: "readOnly",
 "for": "htmlFor",
 "class": "className",
 maxlength: "maxLength",
 cellspacing: "cellSpacing",
 cellpadding: "cellPadding",
 rowspan: "rowSpan",
 colspan: "colSpan",
 usemap: "useMap",
 frameborder: "frameBorder",
 contenteditable: "contentEditable"
 }

 1、检测是否getsetAttribute是否为false
 2、修正：(name、id为空时返回undefined，其他的属性值不存在的时候使用specified，每个属性nodeList
 都存在specified，设置时为true，否则为false)
 获得属性nodeLIst，如果存在返回nodeValue，否则返回undefined
 set：首先获取这个属性的nodeList，如果为false则创建属性，否则给nodeValue赋值
 * */