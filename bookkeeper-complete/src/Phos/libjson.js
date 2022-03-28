import {
    f_sign_kp,
    f_saveks,
    f_sign,
    f_verify_sig,
    f_imsbk // 2021-02-21 needed by awa: !!
} from './libsign.js';
import {
    f_rsa_oaep,
    f_impbk,
    f_ecr,
    f_aecr,
    f_impvk,
    f_dcr,
    f_s2ab,
    f_ab2s,
    f_savekp,
    f_lpbk,
    f_lpvk
} from './librsa.js';
function preg_replace(p, r, a) {
    return a.replace(p, r);
}
function array_pop(s) {
    return s.pop();
}
function explode(c, a) {
    var s;
    s = a.split(c);
    return s;
}
function trim(a) {
    return a.trim();
}
function count(a) {
    return a.length;
}
function end(a) {
    return a[a.length - 1];
}
function ord(n) {
    return n.charCodeAt(0);
}
function strlen(s) {
    return s.length;
}
function in_array(e, a) {
    return a.indexOf(e) != -1;
}
function array_keys(a) {
    return Object.keys(a);
}
function f_js() {
    var S = M.S;
    var r = /{(?:[^{}])*}/;
    S.push(r.exec(S.pop())[0]);
}
function func_num_args() {
}
// 2021-02-19 2100 change sbk latest version
async function f_scj_d() {
var s=window.M.S;
var n=s.length
console.log( '  scj: ', s, '   n ', n, '   sbk ', s[n-5].publicKey );
var scj = {}
scj = { sig: s[n-1] }
// scj.sbk = await exportPublicKey(s[n-5].publicKey)
// scj.sbk = await exportPublicKey(s[0].KS.pair.publicKey);
var publicKey = s[0].KS.pair.publicKey
var sbk_ab = await window.crypto.subtle.exportKey(
    "spki", //can be "jwk" (public or private), "spki" (public only), or "pkcs8" (private only)
    publicKey //can be a publicKey or privateKey, as long as extractable was true
)
scj.sbk =   btoa(String.fromCharCode.apply(null, new Uint8Array(sbk_ab)));
scj.pbk = s[0].K.s_pbk
scj.msg=document.getElementById('dsc_sign').value
scj.etc=document.getElementById('dsc_aor').value
p(JSON.stringify(scj))
return (JSON.stringify(scj))
}

async function f_scj() {
    var s = window.M.S;
    var n = s.length;
    console.log('  scj: ', s, '   n ', n, '   sbk ', s[n - 5].publicKey);
    var scj = {};
    scj = { sig: s[n - 1] };
    scj.sbk = await exportPublicKey(s[0].KS.pair.publicKey);
    scj.pbk = S0.K.s_pbk;
    scj.msg = '123';
    scj.etc = 'any other messages';
    p(JSON.stringify(scj));
}
async function f_awa() {
    var S = window.M.S;
    var $a = ' ';
    var S0 = S[0];
    var f0 = S0.$CDW[S0.cda[0]][S0.cda[1] + 1];
    var f2 = S0.$CDW[S0.cda[0]][S0.cda[1] + 2];
    var L = f0.length;
    var f1;
    var M = _VM(arguments[0]);
    
    // 2021-02-21 need to pass this to child function; VM is defined in libphos.js, but not in component libs
    var VM = arguments[0]; 
    
    console.log('    awa: arguments[0]', arguments[0], '    M ', M);
    let ctxScript;
    if (f0[L - 1] == ':') {
        f1 = f0.substring(0, L - 1);
        ctxScript = '(async () => { return await f_' + f1 + '("' + VM + '");  })().then((value) => {         console.log( "   awa: 111  ' + f1 + ' ",value);         (async () => { K = await F_async("' + f2 + '") })(); } )';
    } else {
        f1 = f0;
        ctxScript = '(async () => { return await F_async("' + f1 + '"); })().then((value) => {         console.log( "   awa: 114  ' + f1 + ' ",value);         (async () => { K = await F_async("' + f2 + '") })(); } )';
    }
    console.log('  awa:', S[S.length - 1], S0.$CDW[S0.cda[0]], '    arguments[0]', arguments[0]);
    var K;
    eval(ctxScript);
    S0.skip = 2;
    return K;
}
var _appendBuffer = function (buffer1, buffer2) {
    var tmp = new Uint8Array(buffer1.byteLength + buffer2.byteLength);
    tmp.set(new Uint8Array(buffer1), 0);
    tmp.set(new Uint8Array(buffer2), buffer1.byteLength);
    return tmp.buffer;
};
function f_catab() {
    var S = M.S;
    var buffer2 = S.pop();
    var buffer1 = S.pop();
    var tmp = new Uint8Array(buffer1.byteLength + buffer2.byteLength);
    tmp.set(new Uint8Array(buffer1), 0);
    tmp.set(new Uint8Array(buffer2), buffer1.byteLength);
    S.push(tmp.buffer);
}
async function F_async() {
    console.log('  2021-02-15  ', VM);
    var S = window.M.S;
    var K;
    var e;
    var $count = 0;
    if (func_num_args() == 0) {
        return false;
    } else {
        for (var $i = 0; $i < arguments.length - 1; $i++) {
            e = arguments[$i];
            S.push(e);
        }
        K = await window.M.aFGL(arguments[$i]);
        S0.CDW.pop();
    }
    return K;
}
var aFGL = async function ($a) {
    var S = window.M.S;
    var K;
    var s0 = preg_replace('/s+/', ' ', $a);
    var $a = explode(' ', trim(s0));
    var $SS = [], $xl = 0;
    var $xk = 0;
    var $xs = $a;
    var $xl = count($a);
    var $vk = $xk;
    var $Z = $xl;
    S.push($vk);
    var $t = array_pop(S);
    var $CC = $t[0];
    var $v;
    S0.skip = 0;
    S0.CDL = S0.CDW.length;
    console.log('CDL', S0.CDL, 'CDW', S0.CDW);
    if (S0.CDL == 0) {
        $CDW.phos = $a;
        S0.CDW[0] = [
            'phos',
            0,
            {}
        ];
        console.log('CDL', S0.CDL, 'CDW', S0.CDW);
        S0.cda = S0.CDW[S0.CDL];
        console.log('CDL', S0.CDL, 'CDW', S0.CDW, 'cda', S0.cda);
    } else {
        S0.CDN = S0.CDL - 1;
        S0.cda = S0.CDW[S0.CDN];
    }
    var $SL = end(end(S0.CDW));
    do {
        $vk = $xk;
        S[0].xk = $xk;
        S0.tn = $vk;
        S0.cda[1] = $vk;
        $v = trim($xs[$xk]);
        if (in_array($v, array_keys($CDW))) {
            var $WA = $CDW[$v];
            if (end($WA) == ';')
                array_pop($WA);
            S0.CDW.push([
                $v,
                $vk,
                {}
            ]);
            console.log(1176, 'before FGLA', JSON.stringify(S0.CDW));
            K = await aFGLA($WA);
            S0.CDW.pop();
            console.log(1183, 'after FGLA', JSON.stringify(S0.CDW));
            S0.cda = end(S0.CDW);
        } else if ($v == '>:' || $v == '<:') {
            S.push($v);
        } else {
            var $l = strlen($v);
            if ($v[0] == ':' && $l == 1) {
                console.log('colon definition');
                $xk++;
                $vk = $xk;
                $v = trim($xs[$xk]);
                console.log('  v ', $v);
                $CDW[$v] = [];
                var $w0 = $v;
                $xk++;
                do {
                    $vk = $xk;
                    $v = trim($xs[$xk]);
                    $CDW[$w0].push($v);
                    $l = strlen($v);
                    if ($v[0] == ';' && $l == 1) {
                        break;
                    }
                    $xk++;
                } while (1);
            } else if ($v[$l - 1] == ':') {
                $l = strlen($v);
                var $fn = substr($v, 0, $l - 1);
                if ($.function_exists('fgl_' + $fn)) {
                    eval('fgl_' + $fn + '()');
                } else if ($.function_exists('f_' + $fn)) {
                    console.log('  1504 f_' + $fn + ' function exists ' + VM);
                    eval('f_' + $fn + '(\'' + VM + '\')');
                } else if (eval('typeof this.fgl_' + $fn) === 'function') {
                    eval('this.fgl_' + $fn + '()');
                } else if (eval('typeof this.f_' + $fn) === 'function') {
                    console.log('this.f_' + $fn + ' function exists ');
                    eval('this.f_' + $fn + '()');
                    if (is_array(end(S))) {
                        var $va = end(S);
                        if (isset($va[0]))
                            if ($va[0] == 'prg_ctr') {
                                $va = array_pop(S);
                                $vk = $va[1];
                                $xk = $vk;
                            }
                    }
                } else if (in_array($fn + ':', array_keys($CDW))) {
                    $WA = $CDW[$fn + ':'];
                    array_pop($WA);
                    FGLA($WA);
                } else if ($fn == 'r') {
                    $s = array_pop(S);
                    S.push(implode(' ', array_slice($xs, $xk + 1)));
                    S.push('$S[]=$' + $s + '; ');
                    S.push(':r:');
                    fgl_s();
                } else if ($fn == 'v') {
                    $sa = array_pop(S);
                    $sb = array_pop(S);
                    S.push(implode(' ', array_slice($xs, $xk + 1)));
                    S.push('$' + $sa + '=' + $sb + '; ');
                    S.push(':v:');
                    fgl_s();
                } else if ($fn == 'a') {
                    $sa = array_pop(S);
                    $sc = count(S);
                    $se = S[$sc - $sa];
                    for ($si = 0; $si < $sa; $si++) {
                    }
                    $sb = array_pop(S);
                    S.push(implode(' ', array_slice($xs, $xk + 1)));
                    S.push('$' + $sa + '=' + $sb + '; ');
                    S.push(':v:');
                    fgl_s();
                } else if ($fn == 'count') {
                    fgl_s();
                    S.push('$S[]=count(' + array_pop(S) + '); ');
                } else if ($fn == 'bz') {
                    fgl_s();
                    var $bx = array_pop(S);
                    if (array_pop(S) == 0)
                        $xk = $bx;
                    continue;
                } else if ($fn == 'bnz') {
                    fgl_s();
                    var $bx = $SL[array_pop(S)];
                    if (array_pop(S) != 0) {
                        fgl_s();
                        $xk = $bx + 1;
                        continue;
                    }
                } else {
                }
            } else {
                if (ord($v) == 0);
                else if ($v[0] == '_') {
                    if ($v == '_')
                        S.push($v);
                } else {
                    if ($v == '.s') {
                        fgl_s();
                    } else {
                        if ($v == '-') {
                            $sa = array_pop(S);
                            $sb = array_pop(S);
                            S.push($sb - $sa);
                        } else if ($v == '+') {
                            console.log(' < in + >');
                            var $sa = array_pop(S);
                            var $sb = array_pop(S);
                            console.log(' < in + > ' + $sa + ' ' + $sb + ' ' + ($sa + $sb));
                            S.push(parseInt($sb) + parseInt($sa));
                        } else if ($v == '.') {
                            array_pop(S);
                        } else {
                            if ($v == '===') {
                                S.push(array_pop(S) === array_pop(S));
                            } else {
                                S.push($v);
                            }
                        }
                    }
                }
            }
        }
        $xk++;
        if (S0.skip > 0) {
            $xk += S0.skip;
            S0.skip = 0;
        }
        if ($xk >= $xl)
            break;
    } while ($vk < $xl);
    return K;
};
async function aFGLA($a) {
    console.log('  aFGLA ', $a);
    var S = window.M.S;
    var K;
    var $SS = [], $xk = 0, $xl = 0;
    var $xs = $a;
    $xl = count($a);
    var $vk = $xk;
    var $Z = $xl;
    S.push($vk);
    var $t = array_pop(S);
    var $CC = $t[0];
    S0.skip = 0;
    S0.CDL = S0.CDW.length;
    if (S0.CDL == 0) {
        S0.CDW[0] = [
            'phos',
            0
        ];
        S0.cda = S0.CDW[S0.CDL];
    } else {
        S0.CDN = S0.CDL - 1;
        S0.cda = S0.CDW[S0.CDN];
    }
    var $SL = end(end(S0.CDW));
    do {
        $vk = $xk;
        S[0].xk = $xk;
        S[0].xk = $xk;
        S0.tn = $vk;
        S0.cda[1] = $vk;
        $v = trim($xs[$xk]);
        if (in_array($v, array_keys($CDW))) {
            var $WA = $CDW[$v];
            if (end($WA) == ';')
                array_pop($WA);
            S0.CDW.push([
                $v,
                $vk,
                {}
            ]);
            K = await aFGLA($WA);
            S0.CDW.pop();
            S0.cda = end(S0.CDW);
        } else if ($v == '>:' || $v == '<:') {
            S.push($v);
        } else {
            var $l = strlen($v);
            if ($v[0] == ':' && $l == 1) {
                $xk++;
                $vk = $xk;
                $v = trim($xs[$xk]);
                $CDW[$v] = [];
                $w0 = $v;
                $xk++;
                do {
                    $vk = $xk;
                    $v = trim($xs[$xk]);
                    $CDW[$w0].push($v);
                    $l = strlen($v);
                    if ($v[0] == ';' && $l == 1) {
                        break;
                    }
                    $xk++;
                } while (1);
            } else if ($v[$l - 1] == ':') {
                $l = strlen($v);
                var $fn = substr($v, 0, $l - 1);
                if (eval('typeof f_' + $fn) === 'function') {
                    console.log('  VM ' + VM);
                    eval('f_' + $fn + '(\'' + VM + '\')');
                } else if ($.function_exists('fgl_' + $fn)) {
                    eval('fgl_' + $fn + '()');
                    if (is_array(end(S))) {
                        var $va = end(S);
                        if (isset($va[0]))
                            if ($va[0] == 'prg_ctr') {
                                $va = array_pop(S);
                                $vk = $va[1];
                                $xk = $vk;
                            }
                    }
                } else if (in_array($fn + ':', array_keys($CDW))) {
                    $WA = $CDW[$fn + ':'];
                    array_pop($WA);
                    FGLA($WA);
                } else if ($fn == 'r') {
                    $s = array_pop(S);
                    S.push(implode(' ', array_slice($xs, $xk + 1)));
                    S.push('$S[]=$' + $s + '; ');
                    S.push(':r:');
                    fgl_s();
                } else if ($fn == 'v') {
                    $sa = array_pop(S);
                    $sb = array_pop(S);
                    S.push(implode(' ', array_slice($xs, $xk + 1)));
                    S.push('$' + $sa + '=' + $sb + '; ');
                    S.push(':v:');
                    fgl_s();
                } else if ($fn == 'a') {
                    $sa = array_pop(S);
                    $sc = count(S);
                    $se = S[$sc - $sa];
                    for ($si = 0; $si < $sa; $si++) {
                    }
                    $sb = array_pop(S);
                    S.push(implode(' ', array_slice($xs, $xk + 1)));
                    S.push('$' + $sa + '=' + $sb + '; ');
                    S.push(':v:');
                    fgl_s();
                } else if ($fn == 'count') {
                    fgl_s();
                    S.push('$S[]=count(' + array_pop(S) + '); ');
                } else if ($fn == 'bz') {
                    fgl_s();
                    $bx = array_pop(S);
                    if (array_pop(S) == 0)
                        $xk = $bx;
                    continue;
                } else if ($fn == 'bnz') {
                    var $bx = $SL[array_pop(S)];
                    if (array_pop(S) != 0) {
                        $xk = $bx + 1;
                        continue;
                    }
                } else {
                }
            } else {
                if (ord($v) == 0);
                else if ($v[0] == '_') {
                    if ($v == '_')
                        S.push($v);
                } else {
                    if ($v == '.s') {
                        fgl_s();
                    } else {
                        if ($v == '-') {
                            $sa = array_pop(S);
                            $sb = array_pop(S);
                            S.push($sb - $sa);
                        } else if ($v == '+') {
                            var $sa = array_pop(S);
                            var $sb = array_pop(S);
                            S.push(parseInt($sb) + parseInt($sa));
                        } else if ($v == '.') {
                            array_pop(S);
                        } else {
                            if ($v == '===') {
                                S.push(array_pop(S) === array_pop(S));
                            } else {
                                S.push($v);
                            }
                        }
                    }
                }
            }
        }
        $xk++;
        if (S0.skip > 0) {
            $xk += S0.skip;
            S0.skip = 0;
        }
        if ($xk >= $xl)
            break;
    } while ($vk < $xl);
    return K;
}
function extractJSON(str) {
    var firstOpen, firstClose, candidate;
    firstOpen = str.indexOf('{', firstOpen + 1);
    do {
        firstClose = str.lastIndexOf('}');
        console.log('firstOpen: ' + firstOpen, 'firstClose: ' + firstClose);
        if (firstClose <= firstOpen) {
            return null;
        }
        do {
            candidate = str.substring(firstOpen, firstClose + 1);
            console.log('candidate: ' + candidate);
            try {
                var res = JSON.parse(candidate);
                console.log('...found');
                return [
                    res,
                    firstOpen,
                    firstClose + 1
                ];
            } catch (e) {
                console.log('...failed');
            }
            firstClose = str.substr(0, firstClose).lastIndexOf('}');
        } while (firstClose > firstOpen);
        firstOpen = str.indexOf('{', firstOpen + 1);
    } while (firstOpen != -1);
}
async function exportPublicKey(key) {
    const exported = await window.crypto.subtle.exportKey('spki', key);
    const exportedAsString = ab2str(exported);
    const exportedAsBase64 = window.btoa(exportedAsString);
    const pemExported = `-----BEGIN PUBLIC KEY-----\n${ exportedAsBase64 }\n-----END PUBLIC KEY-----`;
    return pemExported;
}
function ab2str(buf) {
    return String.fromCharCode.apply(null, new Uint8Array(buf));
}
export {
    F_async,
    f_awa,
    f_scj,
    f_scj_d,
    f_js,
    f_catab
};
