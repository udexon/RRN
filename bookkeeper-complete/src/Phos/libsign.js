(() => {
    let signature;
    function getMessageEncoding() {
        let message = 'hello';
        let enc = new TextEncoder();
        return enc.encode(message);
    }
    async function signMessage(privateKey) {
        let encoded = getMessageEncoding();
        signature = await window.crypto.subtle.sign({
            name: 'RSA-PSS',
            saltLength: 32
        }, privateKey, encoded);
        let buffer = new Uint8Array(signature, 0, 5);
        return buffer;
    }
    async function verifyMessage(publicKey, message) {
        let encoded = getMessageEncoding();
        let result = await window.crypto.subtle.verify({
            name: 'RSA-PSS',
            saltLength: 32
        }, publicKey, signature, encoded);
        console.log(result ? 'valid' : 'invalid');
    }
    window.crypto.subtle.generateKey({
        name: 'RSA-PSS',
        modulusLength: 2048,
        publicExponent: new Uint8Array([
            1,
            0,
            1
        ]),
        hash: 'SHA-256'
    }, true, [
        'sign',
        'verify'
    ]).then(keyPair => {
        signMessage(keyPair.privateKey).then(message => {
            verifyMessage(keyPair.publicKey, message);
        });
    });
})();
async function f_sign_kp() {
    var K = await window.crypto.subtle.generateKey({
        name: 'RSA-PSS',
        modulusLength: 2048,
        publicExponent: new Uint8Array([
            1,
            0,
            1
        ]),
        hash: 'SHA-256'
    }, true, [
        'sign',
        'verify'
    ]);
    M.S.push(K);
    return K;
}
async function signMessage(privateKey) {
    let encoded = getMessageEncoding();
    let signature = await window.crypto.subtle.sign({
        name: 'RSA-PSS',
        saltLength: 32
    }, privateKey, encoded);
    let buffer = new Uint8Array(signature, 0, 5);
    return buffer;
}
function f_saveks() {
    var S0 = M.S[0];
    S0.KS = {};
    var L = M.S.length;
    S0.KS.pair = M.S[L - 1];
}
function f_l_sign_kp() { // load sign kp from S0.KS to stack
    var S = M.S;
    var S0 = M.S[0];
    S.push(S0.KS.pair);
}
async function f_sign() {
    var S = M.S;
    const enc = new TextEncoder();
    const encoded = enc.encode(S.pop());
    var privateKey = S.pop();
    let signature = await window.crypto.subtle.sign({
        name: 'RSA-PSS',
        saltLength: 32
    }, privateKey, encoded);
    S.push(signature);
    return signature;
}
async function f_verify() {
    var S = M.S;
    const enc = new TextEncoder();
    const encoded = enc.encode(S.pop());
    var publicKey = S.pop();
    var signature = S.pop();
    let result = await window.crypto.subtle.verify({
        name: 'RSA-PSS',
        saltLength: 32
    }, publicKey, signature, encoded);
    console.log(result ? 'valid' : 'invalid');
    S.push(result ? 'valid' : 'invalid');
    return (result ? 'valid' : 'invalid');
}
function f_imsbk_d() // import singing public key ArrayBuffer
{    
    var S=M.S;
    window.crypto.subtle.importKey(
    "spki", //can be "jwk" (public or private), "spki" (public only), or "pkcs8" (private only)
    S.pop(),
    {   //these are the algorithm options
        name: "RSA-PSS",
        hash: {name: "SHA-256"}, //can be "SHA-1", "SHA-256", "SHA-384", or "SHA-512"
    },
    false, //whether the key is extractable (i.e. can be used in exportKey)
    ["verify"] //"verify" for public key import, "sign" for private key imports
)
.then(function(publicKey){
    //returns a publicKey (or privateKey if you are importing a private key)
    console.log(publicKey);
    S.push(publicKey);
})
.catch(function(err){
    console.error(err);
});
}
async function f_imsbk() // import singing public key ArrayBuffer
{    
    var S=M.S;
    var publicKey = await window.crypto.subtle.importKey(
    "spki", //can be "jwk" (public or private), "spki" (public only), or "pkcs8" (private only)
    S.pop(),
    {   //these are the algorithm options
        name: "RSA-PSS",
        hash: {name: "SHA-256"}, //can be "SHA-1", "SHA-256", "SHA-384", or "SHA-512"
    },
    false, //whether the key is extractable (i.e. can be used in exportKey)
    ["verify"] //"verify" for public key import, "sign" for private key imports
);

// .then(function(publicKey){
    //returns a publicKey (or privateKey if you are importing a private key)
    console.log(publicKey);
    S.push(publicKey);
    return publicKey;
// })

}
// 2021-02-20 0023 success screenshot; verify_sig: executed in DSC box
async function f_verify_sig()
{
var n=s.length-1 // 51 s.length
p(s[n-1]); n=s.length-1
    // var r = /{(?:[^{}])*}/;
    // var jstr = (r.exec(s[n])[0]);
    var n_js = s[n].indexOf('{\"to\":');
// p(JSON.parse(s[n].substr(22))); n=s.length-1
p(JSON.parse(s[n].substr(n_js))); n=s.length-1
p(JSON.parse(s[n].msg)); n=s.length-1
p(s[n].sbk); n=s.length-1 // 54
f('atob: s2ab:')
// f('imsbk:')
f(': d_sig 1 pick: sig i: lpvk: 1 pick: atob: s2ab: awa: dcr: sig_verify ;')
f(': sig_verify dup: 0 256 slice: 1 pick: cx: 256 swap: slice: 4 pick: 2 pick: swap: 123 verify: ;')
f('awa: imsbk: d_sig')
}

export {
    f_sign_kp,
    f_saveks,
    f_sign,
    f_verify,
    f_verify_sig,
    f_imsbk,
    f_l_sign_kp
};
