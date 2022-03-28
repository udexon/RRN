import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Invoices from '../routes/invoices';

// var M=window.M
// var S=window.M.S

function f_merge() { 
    // return (<><th>{s_hd}</th><th>{s_hd}</th> </>) 
    var S=window.M.S
    console.log( '  in f_merge window.M.S', JSON.stringify(window.M.S), '  S', JSON.stringify(S), '  S.length', S.length)
    S.push(<>{S.pop()}{S.pop()}</>) 
    
}
function f_swap() { 
    var S=window.M.S
    var a=S.pop()
    var b=S.pop()
    S.push(a)
    S.push(b) 
}
function f_sm() { // swap: merge: 
    f_swap(); f_merge();
}
function f_path() {
    console.log( '  in f_path S', JSON.stringify(S))
    var S=window.M.S
    console.log( '  in f_path S', JSON.stringify(S), '  S.length', S.length)
    S.push(<Route path={S.pop()} element={S.pop()} />)
}
function f_Route_ch() {
    f_path_ch()
}
function f_path_ch() {
    console.log( '  in f_path S', JSON.stringify(S))
    var S=window.M.S
    console.log( '  in f_path S', JSON.stringify(S), '  S.length', S.length)
    S.push(<Route path={S.pop()} element={S.pop()}> {S.pop()} </Route>)
}
function f_getn() {
    var S = window.S;
    S.push(getElementsByTagName(S.pop()));
}
function f_h_p() { // html p
    var S = window.M.S;
    console.log( '  in h_p ')
    S.push(<p>{S.pop()}</p>);
    // S.push(element);
}
function f_h_h() { // html p
    const element = React.createElement(
      'h1',
      {className: 'greeting'},
      'Hello, world!'
    );
    var S = window.M.S;
    // S.push('<p>'+S.pop()+'</p>');
    S.push(element);
}
function f(s="") { 
    var S=window.M.S
    var M=window.M

    console.log( '  in f ', M.S, '  s ', typeof s)
    // if (s===undefined)
    if (s=="")
      return M.S.pop()
    else { 
      M.FGL(s)
      // return M.S.pop()
    }
}
function r(s="") { 
    var S=window.M.S
    var M=window.M
    
    console.log( '  in r ', JSON.stringify(M.S), '  s ', typeof s)
    // if (s===undefined)
    if (s=="")
      return M.S.pop()
    else { 
      M.FGL(s)
      return M.S.pop()
    }
}
function p(s) { // p=push d=drop / pop
    window.M.S.push(s)
}
function pr(sa, sb) { // push then r()
    var S=window.M.S
    var M=window.M
    
    window.M.S.push(sa)
    M.FGL(sb)
    return M.S.pop()
}
function f_r_main() { // r=react element
    p(<main style={{ padding: '1rem' }}>
        { window.M.S.pop() }
      </main>)
}
function f_select() {
    console.log( '  in f_select libdom.jsx ')
    // return(<Route
    var S=window.M.S
    window.M.S.push(777)
    // p('Select an invoice 888') // how to put this in element?
    f('Route:')
}
function f_Route() {
    // f_Route_main() 
    f_path()
}
function f_Route_props() {
    // var i=index
    // const props = {firstName: 'Ben', lastName: 'Hector'};
    const props = { path: S.pop(), element: S.pop() };
    window.M.S.push(<Route
    {...props}
    />);
}
function f_index() {
    f_element()
}
function f_element() {
    // var i=index
    // const props = {firstName: 'Ben', lastName: 'Hector'};
    const props = {index: true, element: r('h_p: r_main:') };
    window.M.S.push(<Route {...props} />);
}
function f_nothing() {
    return(<Route
          path="*"
          element={
            <main style={{ padding: '1rem' }}>
              <p>There's nothing here!</p>
            </main>
          }
        />)
}
function f_Route_main() {
    // var i=index
    // const props = {firstName: 'Ben', lastName: 'Hector'};
    const props = {index: true, element: r('h_p: r_main:') };
    window.M.S.push(<Route
    {...props}
    />);
}
function f_Route_i() {
    window.M.S.push(<Route
    index
    element=            
        { // pr('Select an invoice 999','h_p: r_main:') 
            r('h_p: r_main:') 
        }
    />);
}

function r_main() {
  return(<main style={{ padding: '1rem' }}>
    {/* <p>Select an invoice 888</p> */}
    { /* console.log(S.push('Select an invoice 888')) */ }
    { p('Select an invoice 888') }
    { r('h_p:') }
    </main>) 
}
function f_p() {
    alert('  f_p ');
    var S = [];
    S.push(document.createElement('form'));
    S.push(document.createElement('textarea'));
    S.push(document.createElement('div'));
    S.push(document.createElement('button'));
    S.push(document.createTextNode('PHOS 1231'));
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
        alert(S[1].value);
        M.F(S[1].value);
    };
    S[0].style.backgroundColor = 'grey';
    window.onbeforeunload = function () {
        return 'Reload?';
    };
    window.S.push(S);
}
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
function f_duet() {
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
    
    // 2021-09-05 duitter use global to switch mode: Command Mode, Duitter Mode
    // Use original PHOS dlb or other UI for general command 
    /*
    S[3].onclick = function () {
        M.F(S[1].value);
    };
    */
    
    // /*
    S[3].onclick = function () {
    M.F('cbv:');
    var cbv = M.S.pop();
    var s_in = cbv.split(' ');
    // M.F(s_in[0] + ' cbv: CHAT:');
    M.F('duet cbv: CHAT:');
};
    
    // */
    
    
    S[0].style.backgroundColor = 'grey';
    window.onbeforeunload = function () {
        return 'Reload?';
    };
    window.S.push(S);
}
function f_dlbx() {
    var S = window.S;
    var S0 = S[0];
    var B = S0.dlb[S.pop()];
    S.push(B);
}
function f_dlb_url() { // alias to dlburl: 
    f_dlburl();
}
function f_dlburl() {
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
        // M.F(S[1].value);
        M.F(': B_F '+ S[1].value +' id_url ; AJAX');
    };
    S[0].style.backgroundColor = 'grey';
    window.onbeforeunload = function () {
        return 'Reload?';
    };
    window.S.push(S);
}
function f_bottom() {
    var S = window.S;
    var S0 = S[0];
    var btm = S.pop();
    var B = S[S.length - 1];
    B[2].style.bottom = btm;
}
function f_right() {
    var S = window.S;
    var S0 = S[0];
    var rgh = S.pop();
    var B = S[S.length - 1];
    B[2].style.right = rgh;
}
function f_dlb_right() {
    var S = M.S;
    var S0 = S[0];
    var dlb = S.pop();
    var rgh = S.pop();
    var B = S0.dlb[dlb];
    B[2].style.right = rgh;
}
function f_dlb_bottom() {
    var S = M.S;
    var S0 = S[0];
    var dlb = S.pop();
    var btm = S.pop();
    var B = S0.dlb[dlb];
    B[2].style.bottom = btm;
}
function input_password() {
    var p = document.createElement('div');
    p.innerHTML = '<input id="genkey" type="password">';
    var body = document.getElementsByTagName('body');
    body[0].appendChild(p);
    return p;
}
function f_pw_mk() {
    var p = document.createElement('div');
    p.innerHTML = '<input id="genkey" type="password">';
    S.pop().appendChild(p);
}
function f_pw_get() {
    var p = document.createElement('div');
    p.innerHTML = '<input id="genkey" type="password">';
    S.push(S.pop().value);
}
function f_val() {
    var S = M.S;
    var E = S.pop();
    console.log(E);
    S.push(E.value);
}
function f_nn_form() {
    M.S.push(M.S[0].dlb.NN[0]);
}
function f_file0() { // deprecated 2021-04-02
    var d_file = document.createElement('input');
    d_file.setAttribute('type', 'file');
    M.S.pop().append(d_file);
}
function f_load0() { // deprecated 2021-04-02
    M.S.pop().addEventListener('change', function () {
        var fr = new FileReader();
        fr.onload = function () {
            M.S.push(fr.result);
        };
        fr.readAsText(this.files[0]);
    });
}

function f_blob() { // new Blob
    var M = window.M;
// let pvkBlobEK = new Blob([ EK ])
M.S.push( new Blob([ M.S.pop() ]) )

}

function downloadBlob(blob, name = 'file.txt') {
  // Convert your blob into a Blob URL (a special url that points to an object in the browser's memory)
  const blobUrl = URL.createObjectURL(blob);

  // Create a link element
  const link = document.createElement("a");

  // Set link's href to point to the Blob URL
  link.href = blobUrl;
  link.download = name;

  // Append link to the body
  document.body.appendChild(link);

  // Dispatch click event on the link
  // This is necessary as link.click() does not work on the latest firefox
  link.dispatchEvent(
    new MouseEvent('click', { 
      bubbles: true, 
      cancelable: true, 
      view: window 
    })
  );

  // Remove link from body
  document.body.removeChild(link);
}

function f_download() {
    var M = window.M;
var name = M.S.pop();
var blob = M.S.pop(); 
  // Convert your blob into a Blob URL (a special url that points to an object in the browser's memory)
  const blobUrl = URL.createObjectURL(blob);

  // Create a link element
  const link = document.createElement("a");

  // Set link's href to point to the Blob URL
  link.href = blobUrl;
  link.download = name;

  // Append link to the body
  document.body.appendChild(link);

  // Dispatch click event on the link
  // This is necessary as link.click() does not work on the latest firefox
  link.dispatchEvent(
    new MouseEvent('click', { 
      bubbles: true, 
      cancelable: true, 
      view: window 
    })
  );

  // Remove link from body
  document.body.removeChild(link);
}

function f_file() {
    var M = window.M;
    var d_file = document.createElement('input');
    d_file.setAttribute('type', 'file');
    d_file.setAttribute('id', M.S.pop());
    M.S.pop().append(d_file);
}

function f_load() {
    var M = window.M;
    var L = document.getElementById(M.S.pop());
    
    L.addEventListener('change', function () {
        var fr = new FileReader();
        fr.onload = function () {
            M.S.push(fr.result);
        };
        fr.readAsText(this.files[0]);
    });
}
function f_button() {
    var n_btn = M.S.pop();
    var S = M.S[0].dlb.NN_.S;
    var d_form = M.S[0].dlb.NN[0];
    S.push(document.createElement('button'));
    S.push(document.createTextNode(n_btn));
    n = S.length - 2;
    d_form.append(S[n]);
    S[n].append(S[n + 1]);
    S[n].className = 'form-container btn';
    S[n].onclick = function () {
        alert(n_btn);
    };
}
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

function f_Invoices() {
    console.log( '  in fp_Invoices ')
    var S=window.M.S
  
    // return(<Route path="invoices" element={<Invoices />}> 
    S.push(<Route path="invoices" element={<Invoices />}> 
        { /* pf('Select an invoice 333', 'Route:') */ } 
        { /* S.push('Select an invoice 333') }
        { f( 'Route:' ) */ }
        
        { /* f_path(":invoiceId", <Invoice />) */ }
        
        { S.pop() }
      </Route>)
  }
  

export {
    f_p, f_h_p, f_select, f_h_h, f_r_main, f_Route,
    f_Route_props, f_merge, f_swap, f_sm, f_path,
    f_dlb, f_dlburl, f_dlb_url, f_duet, f_element,
    f_dlbx, f_Invoices, f_path_ch, f_index,
    f_bottom,f_Route_ch,
    f_right, f_dlb_right, f_dlb_bottom,
    f_val,
    f_app,
    f_dom,
    f_file, f_load, f_blob, f_download
};
