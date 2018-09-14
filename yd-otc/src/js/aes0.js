import * as CryptoJS from 'crypto-js';

let AuthTokenKey = "XXX"; //AES密钥
let AuthTokenIv = 'XXX'; //AES向量

/*AES加密*/
export function Encrypt(data) {
    let dataStr = JSON.stringify(data);
    var hash = CryptoJS.SHA256("Message");
    bbb = hash.toString(CryptoJS.enc.Latin1);
    console.log(bbb)
    console.log(hash.toString(CryptoJS.enc.Hex))
    return hash.toString(CryptoJS.enc.Latin1);
}

/*AES解密*/
export function Decrypt(data) {
    var hash = CryptoJS.SHA256(data);
    return hash.toString(CryptoJS.enc.Hex);
}
