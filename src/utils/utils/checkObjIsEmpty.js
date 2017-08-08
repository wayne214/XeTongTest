function isEmpty(object) {
    if (object === null || object === undefined) {
        return false;
    }
    for (var i in object) {
        // 存在属性或方法，则不是空对象
        return false;
    }
    return true;
};
function isEmptyString(object) {
    if (object === '') {
        return true;
    }
    return false;
}

export default {isEmpty, isEmptyString};