import {
    f_p, f_h_p, f_select, f_h_h, f_r_main, f_Route,
    f_Route_props, f_merge, f_swap, f_sm, f_path,
    f_dlb, f_dlburl, f_dlb_url, f_duet, f_element,
    f_dlbx, f_Invoices, f_path_ch, f_index,
    f_bottom, f_Route_ch,
    f_right, f_dlb_right, f_dlb_bottom,
    f_val,
    f_app,
    f_dom,
    f_file, f_load, f_blob, f_download
} from './libdom.jsx';
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
    f_lpbks,
    f_lpvk,
    f_bn2a,
    f_a2bn,
    f_h53
} from './librsa.js';
import {
    f_sign_kp,
    f_saveks,
    f_sign,
    f_verify,
    f_imsbk,
    f_verify_sig,
    f_l_sign_kp
} from './libsign.js';
import {
    F_async,
    f_awa,
    f_scj,
    f_scj_d,
    f_js,
    f_catab
} from './libjson.js';
import { v4 as uuidv4 } from 'https://jspm.dev/uuid';
import { parse as uuidParse } from 'https://jspm.dev/uuid'; // 'uuid';
import { stringify as uuidStringify } from 'https://jspm.dev/uuid'; // 'uuid';
window.uuparse = uuidParse;
window.uustr = uuidStringify;
window.W = window;
window._ = window; // hack javascript window with _
window.E = eval;
window.uuid = uuidv4;
function Phos() {
    this.VM = window.S.pop();
    var $ = this;
    var S = [];
    $.S = S;
    S[0] = {};
    var S0 = S[0];
    S0.skip = 0;
    S0.CDW = [];
    S0.dlb = {};
    console.log('S[0] ' + JSON.stringify(S[0]));
    console.log('S0 ' + JSON.stringify(S0));
    var $SL = {};
    var $xk;
    async function f_aw() {
        var $a = S[0].dlb.PHOS[1].value;
        var S0 = S[0];
        var f0 = S0.$CDW[S0.cda[0]][S0.cda[1] + 1];
        var L = f0.length;
        var f1 = f0.substring(0, L - 1);
        alert('  aw: ' + $a + '  xk ' + S0.xk + '  cda ' + S0.cda.toString() + '  CDW ' + S0.$CDW[S0.cda[0]][S0.cda[1] + 1] + '  ' + f1);
        console.log('  aw:', S[S.length - 1]);
        var K;
        let ctxScript = '(async () => { K = await f_' + f1 + '(); })();';
        eval(ctxScript);
        S0.skip = 1;
    }
    async function f_awt() {
        var $a = ' ';
        var S0 = S[0];
        var f0 = S0.$CDW[S0.cda[0]][S0.cda[1] + 1];
        var f2 = S0.$CDW[S0.cda[0]][S0.cda[1] + 2];
        var L = f0.length;
        var f1;
        var M = _VM(arguments[0]);
        if (f0[L - 1] == ':')
            f1 = f0.substring(0, L - 1);
        else
            f1 = f0;
        alert('  aw: ' + $a + '  xk ' + S0.xk + '  cda ' + S0.cda.toString() + '  CDW ' + S0.$CDW[S0.cda[0]][S0.cda[1] + 1] + '  ' + f1);
        console.log('  aw:', S[S.length - 1], S0.$CDW[S0.cda[0]], '    arguments[0]', arguments[0]);
        var K;
        let ctxScript = '(async () => { K = await f_' + f1 + '("' + VM + '"); return S[S.length-1]; })().then((value) => { console.log(value); M.F("' + f2 + '")  ; } )';
        eval(ctxScript);
        S0.skip = 2;
    }
    function f_uuid() {
        var ubuff = []; // ab0 = new Uint8Array(s[1])
        S.push( new Uint8Array( uuidv4( {}, ubuff ) ) ); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
    }
    function f_a_uuid() { // append uuid to S[0].UUB uuid buffer
        var S = M.S;
        var ubuff = []; // ab0 = new Uint8Array(s[1])
        if (typeof S[0].UUB !== "undefined") S.push( S[0].UUB );
        S.push( new Uint8Array( uuidv4( {}, ubuff ) ) ); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
        if (typeof S[0].UUB !== "undefined") f_catab();
    }
    function f_catab() {
        var S = M.S;
        var buffer2 = S.pop();
        var buffer1 = S.pop();
        var tmp = new Uint8Array(buffer1.byteLength + buffer2.byteLength);
        tmp.set(new Uint8Array(buffer1), 0);
        tmp.set(new Uint8Array(buffer2), buffer1.byteLength);
        S.push(tmp.buffer);
    }
    function f_btoa() {
        S.push(btoa(S.pop()));
    }
    function f_atob() {
        S.push(atob(S.pop()));
    }
    function f_to() {
        S.push(typeof S.pop());
    }
    function f_scene() {
        S.push(window.scene);
    }
    function f_gv() {
        S.push(S[0][S.pop()]);
    }
    function f_sv() {
        S[0][S.pop()] = S.pop();
    }
    function f_iza() {
        var z = S.pop();
        if (z == 0)
            S.push(true);
        else
            S.push(false);
    }
    function f_typeof() {
        S.push(typeof S.pop());
    }
    function f_cmp() {
        S.push(S.pop() == S.pop());
    }
    function f_iz() {
        S.push(S.pop() == 0);
    }
    function f_not() {
        S.push(!S.pop());
    }
    function f_false() {
        window.S.push(false);
    }
    function f_true() {
        window.S.push(true);
    }
    this.fgl_ifen = function () {
        var S0 = window.S[0];
        var $S = window.S;
        var $CDW = this.$CDW;
        console.log(' CDW ' + JSON.stringify($CDW));
        console.log('S0 ' + JSON.stringify(S0));
        var $cda = end(S0.CDW);
        var $tn = $cda[1];
        var $cdw = $cda[0];
        console.log('cda ' + JSON.stringify($cda));
        console.log(' $CDW[$cdw] ' + $CDW[$cdw]);
        if (array_pop($S)) {
            console.log(' if true ' + $CDW[$cdw][$tn + 1]);
            this.FGL($CDW[$cdw][$tn + 1]);
        } else {
            var C = $CDW[$cdw][$tn + 2];
            var A = $CDW[$cdw][$tn + 3];
            this.FGL(C);
            if (S.pop())
                this.FGL(A);
        }
        S0.skip = 4;
    };
    function fgl_ife() {
        var S0 = window.S[0];
        var $S = window.S;
        var $CDW = S0.$CDW;
        var $cda = end(S0.CDW);
        var $tn = $cda[1];
        var $cdw = $cda[0];
        if (array_pop($S)) {
            FGL($CDW[$cdw][$tn + 1]);
        } else {
            FGL($CDW[$cdw][$tn + 2]);
        }
        S0.skip = 2;
    }
    function f_cx() {
        S.push(S[S.length - 1].length);
    }
    function f_drop() {
        S.pop();
    }
    function f_c() {
        S.push(S.pop().length);
    }
    function f_a() {
        window.S.push([]);
    }
    function f_ap() {
        var S = window.S;
        var e = S.pop();
        var A = S.pop();
        A.push(e);
        S.push(A);
    }
    function f_apS() {
        var S = window.S;
        var A = S.pop();
        var e = S.pop();
        S[0][A].push(e);
    }
    function f_apn() {
        console.log('  in f_apn ');
        var S = window.S;
        var N = S.pop();
        var L = S.length;
        var A = S.splice(L - N, N);
        S.push(A);
    }
    function f_pbot() {
        S.push(S[S.pop()]);
    }
    function f_pick() {
        var n = S.pop();
        S.push(S[S.length - 1 - n]);
    }
    function f_an() {
        console.log('  in f_an ');
        var S = window.S;
        var N = S.pop();
        var L = S.length;
        var A = S.splice(L - N, N);
        S.push(A);
    }
    function f_splice() {
        var L = S.pop();
        var n = S.pop();
        S.splice(n, L);
    }
    function f_ax() {
        var S = window.S;
        var A = S.pop();
        A.pop();
        S.push(A);
    }
    function f_pos() {
        var x = S.pop();
        if (typeof x !== 'undefined') {
            if (typeof x.position !== 'undefined')
                S.push(x.position);
        } else
            S.push('position_undefined');
    }
    function f_rot() {
        var x = S.pop();
        if (typeof x !== 'undefined') {
            if (typeof x.rotation !== 'undefined')
                S.push(x.rotation);
        } else
            S.push('rotation_undefined');
    }
    function f_get_pos() {
        S[0].get_pos = true;
        S[0].pos_start = true;
    }
    function f_get_children() {
        S[0].children = S.pop();
        S[0].get_children = true;
        S[0].pos_start = true;
    }
    function f_chld() {
        S.push(S.pop().children);
    }
    function f_ch() {
        var n = S.pop();
        var P = S.pop();
        S.push(P.children[n]);
    }
    function f_init_ws() {
        if ('WebSocket' in window) {
            alert('WebSocket is supported by your Browser!');
            var ws = new WebSocket('ws://localhost:8080');
            window.ws = ws;
            ws.onopen = function () {
                ws.send('Message to send');
                alert('Message is sent...');
            };
            ws.onmessage = function (evt) {
                var received_msg = evt.data;
                S.push(received_msg);
                S[0].ws_msg = true;
            };
            ws.onclose = function () {
                alert('Connection is closed...');
            };
        } else {
            alert('WebSocket NOT supported by your Browser!');
        }
    }
    function f_rec() {
        var S = $.S;
        console.log(S);
        var t = S.pop();
        if (t == 1) {
            console.log('Start recording');
            startRecording();
        } else if (t == 0) {
            console.log('Stop recording');
            stopRecording();
        } else if (t == 2) {
            console.log('download webm. S.length ' + S.length);
            if (S.length > 0)
                download(S.pop());
            else
                download('test.webm');
        }
    }
    function fgl_cl() {
        var RC = S.pop();
        S.push(document.getElementById('c_' + RC).innerHTML);
    }
    function f_ih() {
        var a = S.pop();
        var b = S.pop();
        b.innerHTML = a;
        S.push(b);
    }
    function f_oe() {
        S.push(Object.entries(S.pop()));
    }
    function f_cells() {
        S.push(S.pop().cells);
    }
    function f_slice() {
        var j = S.pop();
        var i = S.pop();
        var A = S.pop();
        S.push(A.slice(i, j));
    }
    function getElementByXpath(path) {
        return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    }
    function fgl_gex() {
        S.push(getElementByXpath(S.pop()));
    }
    function fgl_it() {
        var E = S.pop();
        S.push(E.innerText);
    }
    function ROW(T, R) {
        return T.rows[R];
    }
    function f_row() {
        var R = S.pop();
        var T = S.pop();
        S.push(T.rows[R]);
    }
    function fgl_sa() {
        var a = S.pop();
        var v = S.pop();
        var t = S.pop();
        t.setAttribute(a, v);
        S.push(t);
    }
    function f_tn() {
        var t = S.pop();
        var C = S.pop();
        S.push('<' + t + '>' + C + '</' + t + '>');
    }
    function f_ms() {
        var i;
        var N = S.pop();
        var s = '';
        var c;
        for (i = 0; i < N; i++)
            s = S.pop() + s;
        S.push(s);
    }
    function fgl_ce() {
        S.push(document.createElement(S.pop()));
    }
    function fgl_ctn() {
        S.push(document.createTextNode(S.pop()));
    }
    function fgl_getn() {
        S.push(document.getElementsByTagName(S.pop()));
    }
    function fgl_geid() {
        S.push(document.getElementById(S.pop()));
    }
    function f_value() {
        S.push(S.pop().value);
    }
    this.fgl_geid = function () {
        console.log('  in this.fgl_geid ');
        S.push(document.getElementById(S.pop()));
    };
    $.f_geid = function () {
        console.log('  in this.fgl_geid ');
        S.push(document.getElementById(S.pop()));
    };
    $.f_gex = function () {
        S.push(getElementByXpath(S.pop()));
    };
    function fgl_i() {
        var a = S.pop();
        var b = S.pop();
        S.push(b[a]);
    }
    function fgl_ix() {
        var a = S.pop();
        var b = S[S.length - 1];
        S.push(b[a]);
    }
    function f_input() {
        S.push('<input type="text" id="' + S.pop() + '" name="' + S.pop() + '">');
    }
    function fgl_ac() {
        var child = S.pop();
        var parent = S.pop();
        parent.appendChild(child);
        S.push(parent);
    }
    function count(a) {
        return a.length;
    }
    function fgl_explode() {
        S.push(explode(S.pop(), S.pop()));
    }
    function fgl_now() {
        var d = new Date();
        S.push(d.toISOString());
    }
    function fgl_colon() {
        S.push(':');
    }
    function fgl_timeout() {
        setTimeout(eval('fgl_now'), S.pop());
        console.log('2019 1217 1421');
    }
    function func_num_args() {
    }
    function B() {
        console.log(arguments);
        $.F('nxhr: auth/phos.php xo: xsrqh:');
        $.F(arguments[0], 'je: xsend:');
    }
    function f_B() {
        var bex = '3 4 + Graph rn: s:';
        var F = M.F;
        var S0 = window.M.S[0];
        console.log('  in f_B S0.CDW', JSON.stringify(S0.CDW));
        var $a;
        var BEA;
        // if (typeof M.S[0].dlb.PHOS !== 'undefined')
        if (typeof window.S[0].dlb.PHOS !== 'undefined') // PHOS in pushed to window.S !!
            $a = window.S[0].dlb.PHOS[1].value;
        if (S0.CDW.length > 1) {
            var n_a = S0.CDW[S0.CDW.length - 1][0];
            $a = S[0].$CDW[n_a];
        } else if (Object.keys(S[0].$CDW).indexOf($a) >= 0) {
            console.log(Object.keys(S[0].$CDW).indexOf($a));
            $a = S[0].$CDW[$a];
        } else {
            var s0 = preg_replace('/s+/', ' ', $a);
            $a = explode(' ', trim(s0));
        }
        BEA = $a[$a.indexOf('B:') + 1];
        var BEA_a = S[0].$CDW[BEA];
        var BEA_o = {};
        BEA_o[BEA] = S[0].$CDW[BEA];
        var BEA_j = JSON.stringify(BEA_o);
        alert('  BEA_j  ' + BEA_j + '   BEA_a  ' + BEA_a);
        F('nxhr: auth/phos.php xo: xsrqh:');
        var t = S.length - 1;
        var ajax = S[t];
        S[t].onreadystatechange = function () {
            if (ajax.readyState == 4 && ajax.status == 200) {
                alert('  post ajax: ' + ajax.responseText);
                S.push(ajax.responseText);
                var FEA = $a[$a.indexOf('B:') + 2];
                F(FEA);
            }
        };
        F(BEA_j + ' jd: cdw: am: lcdw: ' + BEA, 'je: xsend:');
        S0.skip = 2;
    }
    function f_B_CDW() {
        var bex = '3 4 + Graph rn: s:';
        var F = M.F;
        var S = M.S;
        alert('  in f_B_CDW() ' + S[0].dlb.PHOS[1].value);
        console.log('  in f_B_CDW S0.CDW', JSON.stringify(S0.CDW));
        var $a = S[0].dlb.PHOS[1].value;
        var BEA;
        if (Object.keys(S[0].$CDW).indexOf($a) >= 0) {
            console.log(Object.keys(S[0].$CDW).indexOf($a));
            $a = S[0].$CDW[$a];
        } else if (S0.CDW.length > 1) {
            var n_a = S0.CDW[S0.CDW.length - 1][0];
            $a = S[0].$CDW[n_a];
        } else {
            var s0 = preg_replace('/s+/', ' ', $a);
            $a = explode(' ', trim(s0));
        }
        BEA = $a[$a.indexOf('B_CDW:') + 1];
        var BEA_a = S[0].$CDW[BEA];
        var BEA_o = {};
        BEA_o[BEA] = S[0].$CDW[BEA];
        var BEA_j = JSON.stringify(BEA_o);
        alert('  BEA_j  ' + BEA_j + '   BEA_a  ' + BEA_a);
        F('nxhr: auth/phos.php xo: xsrqh:');
        var t = S.length - 1;
        var ajax = S[t];
        S[t].onreadystatechange = function () {
            if (ajax.readyState == 4 && ajax.status == 200) {
                alert('  post ajax: ' + ajax.responseText);
                S.push(ajax.responseText);
                var FEA = $a[$a.indexOf('B_CDW:') + 2];
                F(FEA);
            }
        };
        F(BEA_j + ' jd: cdw: am: lcdw: w_cdw', 'je: xsend:');
        S0.skip = 2;
    }
    function CHAT(target, msg) {
        var d = new Date();
        console.log(d.toISOString());
        var j = {
            to: target,
            msg: msg
        };
        B(btoa(JSON.stringify(j)) + ' chat');
    }
    // old f_CHAT no hpbk
    function f_CHAT_no_hpbk() {
        var msg = S.pop();
        var target = S.pop();
        var d = new Date();
        console.log(d.toISOString());
        var j = {
            to: target,
            msg: msg
        };
        B(btoa(JSON.stringify(j)) + ' chat');
    }
    function f_CHAT() {
        var msg = S.pop();
        var target = S.pop();
        var d = new Date();
        console.log('add hpbk '+ d.toISOString());
        var j = {
            hpbk: S[0].K.hpbk,
            to: target,
            msg: msg
        };
        B(btoa(JSON.stringify(j)) + ' chat');
    }
    function U(j) {
        var d = new Date();
        console.log(d.toISOString());
        B(btoa(JSON.stringify(j)) + ' update');
    }
    function BX() {
        console.log(arguments);
        F('nxhr: phos.php xo: xsrqh:');
        F(arguments[0], 'je: xsend:');
    }
    function B_AUTH(c) {
        console.log(arguments);
        F('nxhr: phos.php xo: xsrqh:');
        t = S.length - 1;
        ajax = S[t];
        S[t].onreadystatechange = function () {
            if (ajax.readyState == 4 && ajax.status == 200) {
                console.log(ajax.responseText);
                console.log(c.decrypt(ajax.responseText));
                B(c.decrypt(ajax.responseText) + ' AUTH gsv: SP i: cmp: 0 ifeq: auth_pass b');
            }
        };
        F(btoa(c.getPublicKey()) + ' req_auth', 'je: xsend:');
    }
    async function B_AUTH_SC(c) {
        console.log(arguments);
        var pbk = S[S.length - 1];
        console.log(pbk);
        $.F('nxhr: phos.php xo: xsrqh:');
        var t = S.length - 1;
        var ajax = S[t];
        S[t].onreadystatechange = async function () {
            if (ajax.readyState == 4 && ajax.status == 200) {
                console.log(ajax.responseText);
                var E1 = ajax.responseText;
                var D1 = await window.crypto.subtle.decrypt({ name: 'RSA-OAEP' }, K.privateKey, str2ab(atob(E1)));
                console.log(ab2str(D1));
                B(ab2str(D1) + ' AUTH gsv: SP i: cmp: 0 ifeq: auth_pass b');
            }
        };
        F(btoa(pbk) + ' req_auth_sc', 'je: xsend:');
    }
    async function B_AUTH_CSV(c) {
        console.log(arguments);
        var pbk = S[S.length - 1];
        console.log(pbk);
        $.F('nxhr: phos.php xo: xsrqh:');
        var t = S.length - 1;
        var ajax = S[t];
        S[t].onreadystatechange = async function () {
            if (ajax.readyState == 4 && ajax.status == 200) {
                console.log(ajax.responseText);
                var E1 = ajax.responseText;
                var D1 = await window.crypto.subtle.decrypt({ name: 'RSA-OAEP' }, K.privateKey, str2ab(atob(E1)));
                console.log(ab2str(D1));
                B(ab2str(D1) + ' AUTH gsv: SP i: cmp: 0 ifeq: auth_pass b chromy ' + btoa(pbk) + ' ON ECHO bv: ec: ec:');
            }
        };
        F(btoa(pbk) + ' req_auth_sc', 'je: xsend:');
    }
    function str2ab(str) {
        var buf = new ArrayBuffer(str.length);
        var bufView = new Uint8Array(buf);
        for (var i = 0, strLen = str.length; i < strLen; i++) {
            bufView[i] = str.charCodeAt(i);
        }
        return buf;
    }
    async function f_AUTH_SC() {
        var K = S.pop();
        console.log(arguments);
        var pbk = S[S.length - 1];
        console.log(pbk);
        $.F('nxhr: auth/phos.php xo: xsrqh:');
        var t = S.length - 1;
        var ajax = S[t];
        S[t].onreadystatechange = async function () {
            if (ajax.readyState == 4 && ajax.status == 200) {
                console.log(ajax.responseText);
                var E1 = ajax.responseText;
                var D1 = await window.crypto.subtle.decrypt({ name: 'RSA-OAEP' }, K.privateKey, str2ab(atob(E1)));
                console.log(ab2str(D1));
                B(ab2str(D1) + ' AUTH gsv: SP i: cmp: 0 ifeq: auth_pass b');
            }
        };
        $.F(btoa(pbk) + ' req_auth_sc', 'je: xsend:');
    }
    async function f_AUTH_CSV() {
        var NN = S.pop();
        var K = S.pop(); // key pair, K.privateKey to decrypt secret phrase ciphertext after ajax
        console.log(arguments);
        var pbk = S[S.length - 1]; // s_pbk sent to server to encrypt secret phrase
        console.log(pbk);
        $.F('nxhr: auth/phos.php xo: xsrqh:');
        var t = S.length - 1;
        var ajax = S[t];
        S[t].onreadystatechange = async function () {
            if (ajax.readyState == 4 && ajax.status == 200) {
                console.log(ajax.responseText);
                var E1 = ajax.responseText;
                var D1 = await window.crypto.subtle.decrypt({ name: 'RSA-OAEP' }, K.privateKey, str2ab(atob(E1)));
                console.log(ab2str(D1));
                var a_csv = ': auth_csv dts: PASS ka: AUTH uss: ' + btoa(pbk) + ' PBK ka: AUTH uss: ' + NN + ' NN ka: AUTH uss: ; ';
                B(a_csv + ab2str(D1) + ' AUTH gsv: SP i: cmp: 0 ifeq: auth_csv b chromy ' + btoa(pbk) + ' ON ECHO bv: ec: ec:');
            }
        };
        $.F(btoa(pbk) + ' req_auth_sc', 'je: xsend:');
    }
    function ab2str(buf) {
        return String.fromCharCode.apply(null, new Uint8Array(buf));
    }
    var VM = this.VM;
    this.F = function () {
        // console.log('  2021  1138 ', VM);
        var e;
        var $count = 0;
        if (func_num_args() == 0) {
            return false;
        } else {
            for (var $i = 0; $i < arguments.length - 1; $i++) {
                e = arguments[$i];
                S.push(e);
            }
            FGL(arguments[$i]);
            S0.CDW.pop();
        }
    };
    this.F_async = function () {
        console.log('  2021  1138 ', VM);
        var e;
        var $count = 0;
        if (func_num_args() == 0) {
            return false;
        } else {
            for (var $i = 0; $i < arguments.length - 1; $i++) {
                e = arguments[$i];
                S.push(e);
            }
            FGL(arguments[$i]);
            S0.CDW.pop();
        }
        return S[S.length - 1];
    };
    function fgl_b64e() {
        S.push(btoa(S.pop()));
    }
    function fgl_je() {
        S.push(JSON.stringify(S.pop()));
    }
    function f_jd() {
        S.push(JSON.parse(S.pop()));
    }
    function f_alert() {
        alert(S[S.length - 1]);
    }
    function fgl_dup() {
        S.push(end(S));
    }
    function fgl_swap() {
        var a = S.pop();
        var b = S.pop();
        S.push(a);
        S.push(b);
    }
    function fgl_l() {
        var L = S.pop();
        var $SL = end(end(S0.CDW));
        $SL[L] = S[0].xk;
    }
    function end(a) {
        return a[a.length - 1];
    }
    this.function_exists = function (f) {
        return eval('typeof ' + f) === 'function';
    };
    function is_array(f) {
        return typeof f === 'object';
    }
    function isset(f) {
        return typeof f === 'undefined';
    }
    function substr(s, n, l) {
        return s.substr(n, l);
    }
    function fgl_ne() {
        $S = S;
        $n = array_pop($S);
        if ($n == 0) {
            e = eval('return ' + array_pop($S) + '();');
            S.push(e);
        } else {
            if (0) {
                $s = array_pop($S) + '(' + 'array_pop($S)';
                while ($n-- > 1) {
                    $s = $s + ', ' + 'array_pop($S)';
                }
                e = eval('return ' + $s + ');');
                S.push(e);
            } else {
                $s = array_pop($S) + '(' + array_pop($S);
                while ($n-- > 1) {
                    $s = $s + ', ' + 'array_pop($S)';
                }
                console.log($s);
                e = eval($s + ')');
                S.push(e);
            }
        }
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
    function f_ak() {
        S.push(Object.keys(S.pop()));
    }
    function array_pop(s) {
        return s.pop();
    }
    function explode(c, a) {
        var s;
        s = a.split(c);
        return s;
    }
    function preg_replace(p, r, a) {
        return a.replace(p, r);
    }
    function fgl_nxhr() {
        S.push(new XMLHttpRequest());
    }
    function fgl_xo() {
        var a = S.pop();
        var xmlhttp = end(S);
        xmlhttp.open('POST', a, true);
    }
    function fgl_xsrqh() {
        var xmlhttp = end(S);
        xmlhttp.setRequestHeader('Content-type', 'application/json');
    }
    function fgl_xsend() {
        var a = S.pop();
        var xmlhttp = end(S);
        xmlhttp.send(a);
    }
    function trim(a) {
        return a.trim();
    }
    function fgl_clog() {
        console.log(S.pop());
    }
    function fgl_s() {
        console.log(S);
    }
    function fgl_ec() {
        return (S[S.length-1]);
    }
    function preProc(str) {
        S.push(str);
        fgl_xs();
        sa = S.pop();
        str1 = JSON.stringify(sa);
        alert('preProc ' + str1 + ' sa ' + sa + ' str ' + str);
        if (str.length == 0) {
            document.getElementById('txtHint').innerHTML = '';
            return;
        } else {
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    alert('postProc_g() ' + this.responseText);
                    postProc_g(this.responseText);
                }
            };
            xmlhttp.open('POST', 'fgl_ajax.php', true);
            xmlhttp.setRequestHeader('Content-type', 'application/json');
            id = 'rpbox';
            xmlhttp.send(str1);
        }
    }
    var $CDW = {}, $v, s0 = '';
    this.$CDW = $CDW;
    S[0].$CDW = $CDW;
//    this.FGL = async function ($a) {
    this.FGL = function ($a) {
        s0 = preg_replace('/s+/', ' ', $a);
        var $a = explode(' ', trim(s0));

        if ($a[0]!=':') console.log( '  in FGL a', $a, '  S', JSON.stringify(S))

        var $SS = [], $xl = 0;
        var $xk = 0;
        var $xs = $a;
        var $xl = count($a);
        var $vk = $xk;
        var $Z = $xl;
        S.push($vk);
        var $t = array_pop(S);
        var $CC = $t[0];
        S0.skip = 0;
        S0.CDL = S0.CDW.length;
        // console.log('CDL', S0.CDL, 'CDW', S0.CDW);
        if (S0.CDL == 0) {
            $CDW.phos = $a;
            S0.CDW[0] = [
                'phos',
                0,
                {}
            ];
            // console.log('CDL', S0.CDL, 'CDW', S0.CDW);
            S0.cda = S0.CDW[S0.CDL];
            // console.log('CDL', S0.CDL, 'CDW', S0.CDW, 'cda', S0.cda);
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

            console.log( '  in FGL 902 v', $v)

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
                // await FGLA($WA);
                FGLA($WA);
                S0.CDW.pop();
                console.log(1183, 'after FGLA', JSON.stringify(S0.CDW));
                S0.cda = end(S0.CDW);
            } else if ($v == '>:' || $v == '<:') {
                S.push($v);
            } else {
                var $l = strlen($v);
                if ($v[0] == ':' && $l == 1) {
                    // console.log('colon definition');
                    $xk++;
                    $vk = $xk;
                    $v = trim($xs[$xk]);
                    // console.log('  v ', $v);
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

                    console.log( '  function_exists ', typeof $.function_exists, $fn, typeof (eval('f_'+$fn)) )

                    if ($.function_exists('fgl_' + $fn)) {
                        eval('fgl_' + $fn + '()');
                    } else if ($.function_exists('f_' + $fn)) {
                        // console.log('  1504 f_' + $fn + ' function exists ' + VM);
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
    };
    var FGL = this.FGL;
//    async function FGLA($a) {
    function FGLA($a) {
        console.log('  FGLA ', $a);
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
//                await FGLA($WA);
                FGLA($WA);
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
    }
    this.aFGL = async function ($a) {
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
                console.log(2105, 'before aFGLA', JSON.stringify(S0.CDW));
                K = await aFGLA($WA);
                S0.CDW.pop();
                console.log(2114, 'after aFGLA', JSON.stringify(S0.CDW));
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
        K = S[S.length - 1];
        console.log('  aFGL 1354 end  ', $v, $vk, S.length - 1, JSON.stringify(K));
        return K;
    };
    async function aFGLA($a) {
        console.log('  aFGLA  start  ', $a);
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
                        console.log('  VM ', VM, S.length, JSON.stringify(S[S.length - 1]));
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
        K = S[S.length - 1];
        console.log('  aFGLA 2557 end  ', $v, $vk, S.length - 1, JSON.stringify(K));
        return K;
    }
}
function f_cbv() {
    M.S.push(window.S[1][1].value);
}
window.Phos = Phos;
export {
    Phos
};
window.S = [];
window.S[0] = {};
window.S[0].dlb = {};
window.S[0].VM = {};
var S0 = window.S[0];
window.S.push('PHOS');
window.M = new Phos();
S0.VM['PHOS'] = window.M;
W.VM = window.S[0].VM;
M.F(': B_F SESSION: s: ; : F_O dup: dup: to: clog: body getn: 0 i: div ce: 2 pick: ih: ac: ; : AJAX B: B_F F_O ; : A_SS B: s_ss F_O ;');

// Decentralized User Centric DU = Duniix

// colon definition 
M.F(': B_AUTH SESSION: AUTH i: s: ; : A_AUTH B: B_AUTH F_O ;');

function _S(VM) {
    return _.VM[VM].S;
}
_._S = _S;
function _VM(VM) {
    return _.VM[VM];
}
_._VM = _VM;
_.s = M.S;
_.f = M.F; // magic def for f() for Phoscript wrapper
_.p = function (a) {
    s.push(a);
};
_.t = function () {
    return s[s.length - 1];
};
