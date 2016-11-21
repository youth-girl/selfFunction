function clone() { //��һ��������[deep],target,srcs
    var option, name, src, copy, copyIsArray, clone,
        target = arguments[0] || {},
        i = 1,
        length = arguments.length,
        deep = false;
    if (typeof target === "boolean") {
        deep = true;
        target = arguments[i++] || {};//���ó�i��ֵ��Ϊ�˵ݹ��ã������ܼ򵥵�����Ϊ1
    }
    if (!isClone(target)) {
        target = {};
    }
    if (i === length) {//��ֻ��targetʱû��src��ֹ�±�Խ��
        target = this;//this��jquery����ֻ��targetʱ����jquery����target��targetΪsrc
        i--;
    }
    for (; i < length; i++) {
        if ((option = arguments[i]) != null) {
            for (name in option) {
                src = target[name];
                copy = option[name];
                if (target === copy) {
                    continue;
                }
                if (deep && copy && (isArray(copy) || isObject(copy))) {
                    copyIsArray = isArray(copy);
                    if (copyIsArray) {
                        copyIsArray = false;
                        clone = src && isArray(src) ? src : [];//����target�Ѵ��ڵ����ԣ�������Բ���������Ŷ��󣬽����޸�
                    } else {
                        clone = src && isObject(src) ? src : {};
                    }
                    target[name] = arguments.callee(deep, clone, copy)
                } else if (copy != undefined) {
                    target[name] = copy;
                }
            }
        }
        return target;
    }
}
function isClone(obj) {
    if (obj == null) {
        return false;
    }
    return typeof obj === "object" || typeof obj === "function" ? true : false;
}
function isArray(obj) {
    return Array.isArray(obj);
}
function isObject(obj) {
    return typeof obj === "object";
}