function parse_query_string(query) {
    var vars = query.split('&');
    var query_string = {};
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        var key = decodeURIComponent(pair[0]);
        var value = decodeURIComponent(pair[1]);
        if (typeof query_string[key] === 'undefined') {
            query_string[key] = decodeURIComponent(value);
        } else if (typeof query_string[key] === 'string') {
            var arr = [
                query_string[key],
                decodeURIComponent(value)
            ];
            query_string[key] = arr;
        } else {
            query_string[key].push(decodeURIComponent(value));
        }
    }
    return query_string;
}

var query = window.location.search.substring(1);
var get_param = parse_query_string(query);

window.GET = get_param;

var v_l = window.location.pathname.length - 8;

if (window.location.pathname.substring(v_l)=="duet.php") {
    console.log(window.location.pathname.substring(v_l));
    M.F(get_param.nn + ' duet:');
}
else M.F(get_param.nn + ' dlb:');

// M.F(get_param.nn + ' duet:');

S0 = M.S[0];
S0.dlb.NN = S0.dlb[get_param.nn];
S0.dlb.NN[1].style.minHeight = '50px';
d_form = S0.dlb.NN[0];
S.push(document.createElement('button'));
S.push(document.createTextNode('AUTH'));
n = S.length - 2;
d_form.append(S[n]);
S[n].append(S[n + 1]);
S[n].className = 'form-container btn';
S[n].onclick = function () {
    alert('Authenticate!');
    M.F('A_AUTH');
};
S.push(document.createElement('button'));
S.push(document.createTextNode('GenKeys'));
n = S.length - 2;
d_form.append(S[n]);
S[n].append(S[n + 1]);
S[n].className = 'form-container btn';
S[n].onclick = function () {
    alert('GenKeys');
    S0 = M.S[0];
    if (typeof S0.K !== 'object') {
        M.F(': save_auth savekp: ' + get_param.nn + ' AUTH_CSV: ; awt: rsa_oaep: save_auth ');
        console.log('after rsa_oaep:', M.S);
    } else {
        M.S.push(S0.K.s_pbk);
        M.S.push(S0.K.pair);
        M.F(get_param.nn + ' AUTH_CSV:');
    }
};
S.push(document.createElement('button'));
S.push(document.createTextNode('SEND'));
n = S.length - 2;
d_form.append(S[n]);
S[n].append(S[n + 1]);
S[n].className = 'form-container btn';
S[n].onclick = function () {
    M.F('cbv:');
    var cbv = M.S.pop();
    var s_in = cbv.split(' ');
    
    // s_in[0]=nickname
    M.F(s_in[0] + ' cbv: CHAT:');

    // hpbk = public key hash
    // M.F(s_in[0]+'-'+S0.K.hpbk + ' cbv: CHAT:');
};
S.push(document.createElement('button'));
S.push(document.createTextNode('GET'));
n = S.length - 2;
d_form.append(S[n]);
S[n].append(S[n + 1]);
S[n].className = 'form-container btn';
S[n].onclick = function () {
    M.F('cbv:');
    var cbv = M.S.pop();
    var s_in = cbv.split(' ');
    M.F(': B_F log/* glob: /_' + s_in[0] + '_/ grep: av: cx: 1 - i: fgc: ON ECHO bv: ec: ; AJAX');
};
S[0].dlb.PHOS[2].style.right = '0px';

// disable default navigate away after pressing button, attribute was 'submit'
// AUTH
document.getElementsByTagName('button')[2].setAttribute('type','button')

// GenKeys
document.getElementsByTagName('button')[3].setAttribute('type','button')

// SEND
document.getElementsByTagName('button')[4].setAttribute('type','button')

// GET
document.getElementsByTagName('button')[5].setAttribute('type','button')
