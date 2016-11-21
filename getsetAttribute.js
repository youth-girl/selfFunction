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
 *   IE6��7��setAttribute��html���ԣ�֧�ֵ���dom���ԣ�ͨ����ȡnodeList���޸�nodeValue��ֵ
 *
 *
 *   ����h5��booleanֵ���ã�node������
 *   html���Զ�Ӧ��Dom����
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

 1������Ƿ�getsetAttribute�Ƿ�Ϊfalse
 2��������(name��idΪ��ʱ����undefined������������ֵ�����ڵ�ʱ��ʹ��specified��ÿ������nodeList
 ������specified������ʱΪtrue������Ϊfalse)
 �������nodeLIst��������ڷ���nodeValue�����򷵻�undefined
 set�����Ȼ�ȡ������Ե�nodeList�����Ϊfalse�򴴽����ԣ������nodeValue��ֵ
 * */