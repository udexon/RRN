const enc = new TextEncoder();
const dec = new TextDecoder();
const keyPair = window.crypto.subtle.generateKey({
    name: 'RSA-OAEP',
    modulusLength: 4096,
    publicExponent: new Uint8Array([
        1,
        0,
        1
    ]),
    hash: 'SHA-256'
}, true, [
    'encrypt',
    'decrypt'
]);
const encodedMessage = enc.encode('hello');
function ab2str(buf) {
    return String.fromCharCode.apply(null, new Uint8Array(buf));
}
async function exportCryptoKey(key) {
    const exported = await window.crypto.subtle.exportKey('pkcs8', key);
    const exportedAsString = ab2str(exported);
    const exportedAsBase64 = window.btoa(exportedAsString);
    const pemExported = `-----BEGIN PRIVATE KEY-----\n${ exportedAsBase64 }\n-----END PRIVATE KEY-----`;
    return pemExported;
}
async function exportPublicKey(key) {
    const exported = await window.crypto.subtle.exportKey('spki', key);
    const exportedAsString = ab2str(exported);
    const exportedAsBase64 = window.btoa(exportedAsString);
    const pemExported = `-----BEGIN PUBLIC KEY-----\n${ exportedAsBase64 }\n-----END PUBLIC KEY-----`;
    return pemExported;
}
async function f_rsa_oaep() {
    console.log('rsa_oaep: ', arguments[0]);
    var S = _S(arguments[0]);
    const {privateKey, publicKey} = await keyPair;
    const PEM = await exportCryptoKey(privateKey);
    const PBK = await exportPublicKey(publicKey);
    const encryptedText = await window.crypto.subtle.encrypt({ name: 'RSA-OAEP' }, publicKey, encodedMessage);
    const decryptedText = await window.crypto.subtle.decrypt({ name: 'RSA-OAEP' }, privateKey, encryptedText);
    console.log(PBK);
    S.push(PEM);  // s_pvk
    S.push(PBK);  // s_pbk; both used by savekp:
    S.push(await keyPair);
    console.log(btoa(ab2str(encryptedText)));
    console.log(dec.decode(decryptedText));
    return keyPair;
}
function f_ab2s() {
    console.log(arguments[0]);
    var S = _S(arguments[0]);
    var buf = S.pop();
    S.push(String.fromCharCode.apply(null, new Uint8Array(buf)));
}
function f_cbv() {
    M.S.push(window.S[1][1].value);
}
async function f_dcr() {
    var S = M.S;
    var encryptedText = S.pop();
    var privateKey = S.pop();
    const decryptedText = await window.crypto.subtle.decrypt({ name: 'RSA-OAEP' }, privateKey, encryptedText);
    S.push(decryptedText);
}
// awa: calls ecr: need to pass arguments[0] ??
async function f_ecr() { //  2021-02-19 must return TOS for awa: to work!!
    var S = _S(arguments[0]);
    const encodedMessage = S.pop();
    const encryptedText = await window.crypto.subtle.encrypt({ name: 'RSA-OAEP' }, S.pop(), encodedMessage);
    S.push(encryptedText);
    return encryptedText;
}
async function f_aecr() {
    console.log(arguments[0]);
    var S = _S(arguments[0]);
    const enc = new TextEncoder();
    const encodedMessage = enc.encode(S.pop());
    console.log('  aecr:', encodedMessage);
    const encryptedText = await window.crypto.subtle.encrypt({ name: 'RSA-OAEP' }, S.pop(), encodedMessage);
    S.push(encryptedText);
    console.log('  aecr:', Date.now(), S.length, S[S.length - 1]);
}
function str2ab(str) {
    const buf = new ArrayBuffer(str.length);
    const bufView = new Uint8Array(buf);
    for (let i = 0, strLen = str.length; i < strLen; i++) {
        bufView[i] = str.charCodeAt(i);
    }
    return buf;
}
function importPrivateKey(pem) {
    const pemHeader = '-----BEGIN PRIVATE KEY-----';
    const pemFooter = '-----END PRIVATE KEY-----';
    const pemContents = pem.substring(pemHeader.length, pem.length - pemFooter.length);
    const binaryDerString = window.atob(pemContents);
    const binaryDer = str2ab(binaryDerString);
    return window.crypto.subtle.importKey('pkcs8', binaryDer, {
        name: 'RSA-OAEP',
        modulusLength: 4096,
        publicExponent: new Uint8Array([
            1,
            0,
            1
        ]),
        hash: 'SHA-256'
    }, true, ['decrypt']);
}
function importPublicKey(pem) {
    const pemHeader = '-----BEGIN PUBLIC KEY-----';
    const pemFooter = '-----END PUBLIC KEY-----';
    const pemContents = pem.substring(pemHeader.length, pem.length - pemFooter.length);
    const binaryDerString = window.atob(pemContents);
    const binaryDer = str2ab(binaryDerString);
    return window.crypto.subtle.importKey('spki', binaryDer, {
        name: 'RSA-OAEP',
        hash: 'SHA-256'
    }, true, ['encrypt']);
}
function f_s2ab() {
    var S = M.S;
    var str = S.pop();
    const buf = new ArrayBuffer(str.length);
    const bufView = new Uint8Array(buf);
    for (let i = 0, strLen = str.length; i < strLen; i++) {
        bufView[i] = str.charCodeAt(i);
    }
    S.push(buf);
}
async function f_impvk() {
    // var S = window.S;
    var S = _S(arguments[0]);
    var pem = S.pop();
    const pemHeader = '-----BEGIN PRIVATE KEY-----';
    const pemFooter = '-----END PRIVATE KEY-----';
    const pemContents = pem.substring(pemHeader.length, pem.length - pemFooter.length);
    const binaryDerString = window.atob(pemContents);
    const binaryDer = str2ab(binaryDerString);
    var K = await window.crypto.subtle.importKey('pkcs8', binaryDer, {
        name: 'RSA-OAEP',
        modulusLength: 4096,
        publicExponent: new Uint8Array([
            1,
            0,
            1
        ]),
        hash: 'SHA-256'
    }, true, ['decrypt']);
    S.push(K);
}
async function f_impbk() {
    var S = M.S;
    console.log('  impbk:', S[S.length - 1]);
    var pem = S.pop();
    const pemHeader = '-----BEGIN PUBLIC KEY-----';
    const pemFooter = '-----END PUBLIC KEY-----';
    const pemContents = pem.substring(pemHeader.length, pem.length - pemFooter.length);
    const binaryDerString = window.atob(pemContents);
    const binaryDer = str2ab(binaryDerString);
    var K = await window.crypto.subtle.importKey('spki', binaryDer, {
        name: 'RSA-OAEP',
        hash: 'SHA-256'
    }, true, ['encrypt']);
    S.push(K);
    return K;
}
function f_savekp() {
    var S0 = M.S[0];
    S0.K = {};
    var L = M.S.length;
    S0.K.s_pvk = M.S[L - 3];
    S0.K.s_pbk = M.S[L - 2];
    S0.K.pair = M.S[L - 1];
}
function f_lpbk() {
    var S0 = M.S[0];
    M.S.push(S0.K.pair.publicKey);
}
function f_lpbks() // load pbk string
{
    var S = M.S;
    S.push(S[0].K.s_pbk);
}
function f_lpvk() {
    var S0 = M.S[0];
    M.S.push(S0.K.pair.privateKey);
}

const cyrb53 = function(str, seed = 0) {
    let h1 = 0xdeadbeef ^ seed, h2 = 0x41c6ce57 ^ seed;
    for (let i = 0, ch; i < str.length; i++) {
        ch = str.charCodeAt(i);
        h1 = Math.imul(h1 ^ ch, 2654435761);
        h2 = Math.imul(h2 ^ ch, 1597334677);
    }
    h1 = Math.imul(h1 ^ (h1>>>16), 2246822507) ^ Math.imul(h2 ^ (h2>>>13), 3266489909);
    h2 = Math.imul(h2 ^ (h2>>>16), 2246822507) ^ Math.imul(h1 ^ (h1>>>13), 3266489909);
    return 4294967296 * (2097151 & h2) + (h1>>>0);
};

function f_h53()
{
   var S = M.S;
   S.push(cyrb53(S.pop()));
}


function b64ToBn(b64) {
  var bin = atob(b64);
  var hex = [];

  bin.split('').forEach(function (ch) {
    var h = ch.charCodeAt(0).toString(16);
    if (h.length % 2) { h = '0' + h; }
    hex.push(h);
  });

  return BigInt('0x' + hex.join(''));
}


function bnToB64(bn) {
  var hex = BigInt(bn).toString(16);
  if (hex.length % 2) { hex = '0' + hex; }

  var bin = [];
  var i = 0;
  var d;
  var b;
  while (i < hex.length) {
    d = parseInt(hex.slice(i, i + 2), 16);
    b = String.fromCharCode(d);
    bin.push(b);
    i += 2;
  }

  return btoa(bin.join(''));
}

function f_bn2a()
{
    var S = M.S;
    S.push(bnToB64(S.pop()));
}

function f_a2bn()
{
    var S = M.S;
    S.push(b64ToBn(S.pop()));
}

export {
    f_rsa_oaep,
    f_impbk,
    f_aecr,
    f_ecr,
    f_impvk,
    f_dcr,
    f_s2ab,
    f_ab2s,
    f_savekp,
    f_lpbk,
    f_lpbks,
    f_lpvk,
    f_bn2a,
    f_a2bn,
    f_h53
};
