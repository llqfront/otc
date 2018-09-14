import * as CryptoJS from 'crypto-js';


var key = CryptoJS.enc.Utf8.parse("1234567890000000");
var iv = CryptoJS.enc.Utf8.parse("1234567890000000");
// /*AES加密*/
export function Encrypt(word) {
    var encrypted = '';
    if (typeof(word) == 'string') {
        var srcs = CryptoJS.enc.Utf8.parse(word);
        encrypted = CryptoJS.AES.encrypt(srcs, key, {
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });
    } else if (typeof(word) == 'object') {//对象格式的转成json字符串
        var data = JSON.stringify(word);
        var srcs = CryptoJS.enc.Utf8.parse(data);
        encrypted = CryptoJS.AES.encrypt(srcs, key, {
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        })
    }
    return encrypted.ciphertext.toString();
}
//
// /*AES解密*/
export function Decrypt(word) {
    var encryptedHexStr = CryptoJS.enc.Hex.parse(word);
    var srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr);
    var decrypt = CryptoJS.AES.decrypt(srcs, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });
    var decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
    return decryptedStr.toString();
}
