function clone() { //第一个参数是[deep],target,srcs
    var option, name, src, copy, copyIsArray, clone,
        target = arguments[0] || {},
        i = 1,
        length = arguments.length,
        deep = false;
    if (typeof target === "boolean") {
        deep = true;
        target = arguments[i++] || {};//设置成i的值是为了递归用，而不能简单的设置为1
    }
    if (!isClone(target)) {
        target = {};
    }
    if (i === length) {//当只有target时没有src防止下标越界
        target = this;//this是jquery，当只有target时，把jquery当作target，target为src
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
                        clone = src && isArray(src) ? src : [];//修正target已从在的属性，如果属性不是数组或着对象，进行修改
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