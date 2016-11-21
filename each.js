//��������Ͷ���ı�������һ������Ϊ����s���ڶ��������ǻص�����
//��������ص������Ĳ�����i��value��[�����ֵ]
//���⣺����û��name��valueֵ����û�н��жԶ�����кϲ�

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
        } else {  //���obj������ʱ
            for (; i < length; i++) {
                paramer = connact(true, [], args, [i, obj[i]]);
                if (callback.apply(obj[i], paramer) === false) { //ʹ��ȫ�ȷ��ŵ�������Ϊ�˷�ֹ����0ʱ����ѭ����ֻ�ܷ���falsʱ����ѭ��
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

//��һ�������ǣ��Ƿ�Ŀ������ϲ���ԭ����Ŀ�ͷ���ڶ���������Դ���飬֮����Ŀ������
//����ĺϲ�
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

    if (!isarray(src) || !isarray(targets)) {           //�ж�src��targets[i]�Ƿ�Ϊ����
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

//�ж�һ�����������
function isarray(array) {
    return array.constructor === Array;
}