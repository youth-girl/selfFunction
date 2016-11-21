//用于数组和对象的遍历，第一个参数为对象s，第二个参数是回掉函数
//对于数组回掉函数的参数是i，value，[传入的值]
//问题：对象没有name，value值，即没有进行对对象进行合并

function each(obj, callback, args) {
    var name, i = 0,
        length = obj.length,
        isobj = length === undefined || (obj instanceof Function),
        paramer = [];
    if (args) {
        if (isobj) {
            for (name in obj) {
                if (callback.apply(obj[name], args) === false) {
                    break;
                }
            }
        } else {  //如果obj是数组时
            for (; i < length; i++) {
                paramer = connact(true, [], args, [i, obj[i]]);
                if (callback.apply(obj[i], paramer) === false) { //使用全等符号的作用是为了防止返回0时跳出循环，只能返回fals时跳出循环
                    break;
                }
            }
        }
    } else {
        if (isobj) {
            for (name in obj) {
                if (callback.call(obj[name], name, obj[name]) === false) {
                    break;
                }
            }
        } else {
            for (; i < length; i++) {
                paramer = connact([], [i, obj[i]]);
                if (callback.apply(obj[i], paramer) === false) {
                    break;
                }
            }
        }
    }
}

//第一个参数是，是否将目标数组合并到原数组的开头，第二个参数是源数组，之后都是目标数组
//对象的合并
function connact() {
    var firstFlag = typeof arguments[0] === "boolean" || false,
        slice = Array.prototype.slice,
        push = Array.prototype.push,
        unshift = Array.prototype.unshift,
        targets, src, index = 0, i = 0, j, length, itemLength;
    if (firstFlag) {
        index++;
    }

    src = arguments[index++];
    targets = slice.call(arguments, index);
    length = targets.length;

    if (!isarray(src) || !isarray(targets)) {           //判断src和targets[i]是否为数组
        return false;
    }

    if (firstFlag) {
        while (i < length && targets[i]) {
            if (!isarray(targets[i])) {
                continue;
            }
            itemLength = targets[i].length;
            for (j = itemLength - 1; j >= 0; j--) {
                src.unshift(targets[i][j]);
            }
            i++;
        }
    } else {
        while (i < length && targets[i]) {
            if (!isarray(targets[i])) {
                continue;
            }
            itemLength = targets[i].length;
            for (j = itemLength - 1; j >= 0; j++) {
                src.push(targets[i][j]);
            }
            i++;
        }
    }
    return src;
}

//判断一个数组的类型
function isarray(array) {
    return array.constructor === Array;
}