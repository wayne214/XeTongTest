const isPhoneNumber = (phoneNumber) => {
    const reg = /^0?(13[0-9]|15[012356789]|17[013678]|18[0-9]|14[57])[0-9]{8}$/;
    return reg.test(phoneNumber);
};

// 数字、字母两者组合6-12位
const isPassword = (password) => {
    const reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$/;
    return reg.test(password);
};

const isNewPassword = (password) => {
    const reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,14}$/;
    return reg.test(password);
};
// 是否包含特殊字符
const isConSpecialchar = (char) => {
    const reg = /^.*[~!@#\$%\^&\*\(\)_+\-=\[\]\{\}\\\|\'\";:,\<\.\>\/\?\s+].*$/;
    return reg.test(char);
};
// 是否全是数字
const isInteger = (char) => {
    const reg = /^\+?[1-9][0-9]*$/;
    return reg.test(char);
};

// 是否含有数字和小数点
const isFloat = (char) => {
    const reg = /^\d+(\.\d+)?$/;
    return reg.test(char);
};

export default {
    isPhoneNumber,
    isPassword,
    isNewPassword,
    isConSpecialchar,
    isInteger,
    isFloat,
};
