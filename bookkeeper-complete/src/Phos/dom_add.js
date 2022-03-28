function f_dom() {
    var n_dlb = 'DSC';
    var SS = window.M.S;
    var S =  SS[0].dlb[n_dlb];
    S.push(document.createElement('textarea'));
    var n = S.length-1;
    // S0.dlb.DSC[1].style.minHeight='50px'
    S[n].style.minHeight='50px'
    S[n].className = 'form-container textarea';
    S[0].append(S[n]); // form append textarea
}

localhost-1613662323922.log:S0.dlb.DSC[5].setAttribute('id','dsc_sign')
localhost-1613663738459.log:S0.dlb.DSC[5].setAttribute('id','dsc_sign')
localhost-1613663738459.log:S0.dlb.DSC[6].setAttribute('id','dsc_ecr')
localhost-1613663738459.log:S0.dlb.DSC[7].setAttribute('id','dsc_aor')

S0.dlb.DSC[1] is first text area

function f_dom() {
    // var n_dlb = 'DSC';
    var s = window.M.S;
    var n = s.pop();
    var n_dlb = s.pop();
    // params n_dlb n dom:
    // check type of element with input n, can modify existing elements
    // if typeof params === object (json) use it, else default to fixed length list (simpler)
    var SS = window.M.S;
    var S =  SS[0].dlb[n_dlb];
    // S.push(document.createElement('textarea')); // put create element as separate function
    // var n = S.length-1;
    // S0.dlb.DSC[1].style.minHeight='50px'
    // height padding etc are fixed
    // id default values read from json
    S[n].style.minHeight='20px'
    S[n].style.height='20px'
    S[n].className = 'form-container textarea';
    S[n].style.marginBottom='0px'

    // localhost-1613723342436.log:S0.dlb.DSC[6].style.padding='2px'
    S[n].style.padding='2px'
    S[n].value = s.pop() // read from json?
    S[n].setAttribute('id', s.pop())
    // S[0].append(S[n]); // form append textarea; after ce: (defined in libphos.js)
}

// textarea ce: DSC app:
function f_app()
{
    var s = window.M.S;
    // var n = s.pop();
    var n_dlb = s.pop();
    var S =  s[0].dlb[n_dlb];
    // S0.dlb.DSC[0]
    var E=s.pop();
    S[0].append(E); // append to form
    S.push(E); // push to array
    console.log(S);
}

f('textarea ce: DSC app:')
f('dsc_sign 123 DSC 4 dom:')

// 2021-02-16 1953 awa: ecr_sig ab_scj
function f_ss() { console.log('  ss:  ',s.length, JSON.stringify(s[s.length-1])) }
p('I promise to pay Chris Someone USD10.')
f('2 pick: dup:')
// f(': mk_sign awa: sign_kp: ss: rsa_sign ;')
f(': do_sign awa: im_pbk ss: mk_sign ;')
// f(': do_sign awa: im_pbk ss: ;')
f(': im_pbk . dup: js: jd: msg ix: awa: impbk: ss: ;')
f(': mk_sign awa: sign_kp: rsa_sign ;')
f(': ecr_sig 5 pick: s2ab: 1 pick: 1 pick: catab: 4 pick: 1 pick: ecr: ; : ab_scj ab2s: btoa: scj: ;') // sig done
f(': do_scj awa: ecr_sig ab_scj ;') // awa not working properly? does not wait to complete executing?
f(': rsa_sign saveks: privateKey ix: 123 awa: sign: do_scj ;')
f('awa: do_sign ss:')



f(': rsa_sign saveks: privateKey ix: 123 awa: sign: do_scj ;') // signed msg
p('I promise to pay Chris Someone USD10.') // encrypted msg
scj.etc='any other messages'

p('I promise to pay Chris Someone USD10.')
f('2 pick: dup:')
f(': rsa_sign saveks: privateKey ix: 123 awa: sign: do_scj ;')
f('awa: do_sign ss:')

document.getElementById('dsc_sign').value
document.getElementById('dsc_ecr').value
document.getElementById('dsc_aor').value


// 2021-02-19 get values from DSC dialog box
async function f_scj_d() {
var s=window.M.S;
var n=s.length
console.log( '  scj: ', s, '   n ', n, '   sbk ', s[n-5].publicKey );
var scj = {}
scj = { sig: s[n-1] }
// scj.sbk = await exportPublicKey(s[n-5].publicKey)
scj.sbk = await exportPublicKey(s[0].KS.pair.publicKey);
scj.pbk = S0.K.s_pbk
scj.msg=document.getElementById('dsc_sign').value
scj.etc=document.getElementById('dsc_aor').value
p(JSON.stringify(scj))
}
p(document.getElementById('dsc_ecr').value)
f('2 pick: dup:')
// f(': rsa_sign saveks: privateKey ix: 123 awa: sign: do_scj ;')
f(': rsa_sign saveks: privateKey ix: '+ document.getElementById('dsc_sign').value +' awa: sign: do_scj ;')
f(': ab_scj ab2s: btoa: scj_d: ;')
f('awa: do_sign ss:')




function f_dlb() {
    var SS = window.M.S;
    var S = [];
    S.push(document.createElement('form'));
    S.push(document.createElement('textarea'));
    S.push(document.createElement('div'));
    S.push(document.createElement('button'));
    var n_dlb = SS.pop();
    S.push(document.createTextNode(n_dlb));
    SS[0].dlb[n_dlb] = S;
    var n_nn = n_dlb + '_';
    var n_alias = 'NN_';
    SS[0].dlb.NN_ = {};
    SS[0].dlb[n_nn] = SS[0].dlb.NN_;
    var style = document.createElement('style');
    style.innerHTML = 'body {font-family: Arial, Helvetica, sans-serif;} * {box-sizing: border-box;} /* The popup chat - hidden by default */ .chat-popup {  display: none;  position: fixed;  bottom: 0;  right: 150px;  border: 3px solid #f1f1f1;  z-index: 9;} .open-button {  background-color: #555;  color: white;  padding: 16px 20px;  border: none;  cursor: pointer;  opacity: 0.8;  position: fixed;  bottom: 23px;  right: 28px;  width: 280px;}  .form-container {  max-width: 300px;  padding: 10px;  background-color: white; } .form-container textarea {  width: 100%;  padding: 15px;  margin: 5px 0 22px 0;  border: none;  background: #f1f1f1;  resize: none;  min-height: 200px; }\u3000.form-container .btn {  background-color: #4CAF50;  color: white;  padding: 16px 20px;  border: none;  cursor: pointer;  width: 100%;  margin-bottom:10px;  opacity: 0.8;\u3000}';
    var ref = document.querySelector('body');
    ref.parentNode.insertBefore(style, ref);
    ref.append(S[2]);
    S[2].append(S[0]);
    S[0].append(S[3]);
    S[3].append(S[4]);
    S[2].className = 'chat-popup';
    S[2].style.display = 'block';
    S[0].append(S[1]);
    S[0].className = 'form-container';
    S[1].className = 'form-container textarea';
    S[3].className = 'form-container btn';
    S[3].style.backgroundColor = 'red';
    S[3].onclick = function () {
        M.F(S[1].value);
    };
    S[0].style.backgroundColor = 'grey';
    window.onbeforeunload = function () {
        return 'Reload?';
    };
    window.S.push(S);
}
