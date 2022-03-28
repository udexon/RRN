import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Expenses from './routes/expenses';
import Invoices from './routes/invoices';
import Invoice from './routes/invoice';
import './main.css';

import { Phos } from "./Phos/libphos.jsx";

var S=window.M.S
var M=window.M

console.log( '  main M', M, '  S', S)

const rootElement = document.getElementById('app');

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      { 
        // r_App() 
        // f_children()
        f_chld()
      }
      { 
        // r_App_child() 
        r( <App />, "/", "Route_ch:")
      }
    </Routes>
  </BrowserRouter>,
  rootElement
);

function f_chld() {
  f( <Expenses />, "expenses", "Route:" )
  
    f( 'Select an invoice 888', 'index:' )
    f( <Invoice />, ":invoiceId", "Route:" )      
    f( 'merge:' ) 

  f( 'Invoices:' ) // need to import Invoices in libdom
  f( 'merge:' ) 
  
  f( 'There is nothing 000', 'h_p: r_main: * Route:') 
  f( 'merge:' ) 
}


function r_App() {
return(<Route path="/" element={<App />}>

{/* <Route path="expenses" element={<Expenses />} /> */
  f_path("expenses", <Expenses />)}

{ // r_Invoices() 
  // f_Invoices()
  // r_f_Invoices()
  // f_r_Invoices()
  // fx_Invoices()
  // fp_Invoices()
}
{ // f_Route() 
  f('Select an invoice 777', 'element:')
}
{ // r() 
  f( <Invoice />, ":invoiceId", "path:" )      
}
{ f( 'merge:' ) }
{ // fq_Invoices() 
  f( 'Invoices:' ) // need to import Invoices in libdom
  // r( 'Invoices:' ) // this works too
}
{ r() 
}

{ /* nothing */
  // r_nothing()
  // f("There is nothing 000", 'h_p: r_main: * path:') 
  r("There is nothing 000", 'h_p: r_main: * path:') 
}
{ // r_element() 
  // r() // with f() as TOS
}

</Route>)
}


function f_children() {
  f_path("expenses", <Expenses />)
  
    f( 'Select an invoice 777', 'element:' )
    f( <Invoice />, ":invoiceId", "path:" )      
    f( 'merge:' ) 

  f( 'Invoices:' ) // need to import Invoices in libdom
  f( 'merge:' ) 
  
  f( 'There is nothing 000', 'h_p: r_main: * path:') 
  f( 'merge:' ) 
}

function r_App_child() {
  return(<Route path="/" element={<App />}>
  
    { S.pop() }
  
  </Route>)
}
  

function r_nothing() {
return(<Route
          path="*"
          element={
            <main style={{ padding: '1rem' }}>
              <p>There's nothing here!</p>
            </main>
          }
        />)
}

function r_element() {
  return(<Route
            path="*"
            element={
              S.pop()
            }
          />)
}

function fq_Invoices() {
  console.log( '  in fq_Invoices ')

  return(<Route path="invoices" element={<Invoices />}> 
      { /* pf('Select an invoice 333', 'Route:') */ } 
      { /* S.push('Select an invoice 333') }
      { f( 'Route:' ) */ }
      
      { /* f_path(":invoiceId", <Invoice />) */ }
      
      { S.pop() }
    </Route>)
}


function f_invoices() {
  { pf('Select an invoice 333', 'Route:') }  
  { f_path(":invoiceId", <Invoice />) }
  { f('merge:') }
}

function f_Route() {
  console.log( '  in f_Route ')
  // M.S.push(<Route path="invoices" element={<Invoices />}> 
  return(<Route path="invoices" element={<Invoices />}> 
      { S.pop() }
    </Route>)
}

function f_Invoices() {
  M.S.push(<Route path="invoices" element={<Invoices />}> 
      { pf('Select an invoice 333', 'Route:') }  
      { f_path(":invoiceId", <Invoice />) }
      { r('merge:') }
    </Route>)
}

function r_f_Invoices() {
  console.log( '  in r_f_Invoices ')
  return(<Route path="invoices" element={<Invoices />}> 
      { pf('Select an invoice 333', 'Route:') }  
      { f_path(":invoiceId", <Invoice />) }
      { r('merge:') }
    </Route>)
}

function f_r_Invoices() {
  console.log( '  in f_r_Invoices ')

  // one line of RRN React Reverse Notation for each element. 
  // not too compact. 
  // function name and options must be elaborate enough to make sense.
  return(<Route path="invoices" element={<Invoices />}> 
      { /* pf('Select an invoice 333', 'Route:') */ } 
      { S.push('Select an invoice 333') }
      { f( 'Route:' ) }

      { /* f_path(":invoiceId", <Invoice />) */ }
      { S.push( <Invoice /> ) }
      { S.push( ":invoiceId" ) }
      { S.push( <Route path={S.pop()} element={S.pop()} /> ) }

      { r('merge:') }
    </Route>)
}

function fx_Invoices() {
  console.log( '  in fx_Invoices ')

  return(<Route path="invoices" element={<Invoices />}> 
      { /* pf('Select an invoice 333', 'Route:') */ } 
      { /* S.push('Select an invoice 333') }
      { f( 'Route:' ) */ }
      { f('Select an invoice 555', 'element:') } 

      { /* f_path(":invoiceId", <Invoice />) */ }
      { f( <Invoice />, ":invoiceId", "path:" ) }

      { r('merge:') }
    </Route>)
}

function fp_Invoices() {
  console.log( '  in fp_Invoices ')

  f('Select an invoice 666', 'element:')
  f( <Invoice />, ":invoiceId", "path:" )
  f( 'merge:' )
  return(<Route path="invoices" element={<Invoices />}> 
      { /* pf('Select an invoice 333', 'Route:') */ } 
      { /* S.push('Select an invoice 333') }
      { f( 'Route:' ) */ }
      
      { /* f_path(":invoiceId", <Invoice />) */ }
      
      { S.pop() }
    </Route>)
}



/*
const props = {index: true, element: r('h_p: r_main:') };
    window.M.S.push(<Route
    {...props}
    />);
*/

function r_Invoices() {
  return(<Route path="invoices" element={<Invoices />}> 
    {/*  f_path("invoices", <Invoices />) */}       
      {/* Select an invoice */
        // f_select()
        // f("select:")
        // f("Route:") '' s: '' d: "" t:<> c: {} eq: =
      }
      { // r() // for return, p for pop
        // pr('Select an invoice 333', 'Route:')
        pf('Select an invoice 333', 'Route:')
      }  
      {/* <Route path=":invoiceId" element={<Invoice />} /> */
        // f_path()
        // r_path(":invoiceId", <Invoice />) 
        f_path(":invoiceId", <Invoice />) 
      }
      { r('merge:') }
    </Route>)
}

function f_path_a() {
  console.log( '  in f_path ')
  S.push(<Invoice />)
  f(":invoiceId")
  // return(<Route path=":invoiceId" element={<Invoice />} />)
  // return(<Route path={M.S.pop()} element={<Invoice />} />)
  return(<Route path={S.pop()} element={S.pop()} />)
}

function f_path(a, b) {
  console.log( '  in f_path S', JSON.stringify(S))
  var S=window.M.S
  S.push(b)
  f(a)
  console.log( '  in f_path S', JSON.stringify(S), '  S.length', S.length)
  // return(<Route path=":invoiceId" element={<Invoice />} />)
  // return(<Route path={M.S.pop()} element={<Invoice />} />)
  // return(<Route path={S.pop()} element={S.pop()} />)
  S.push(<Route path={S.pop()} element={S.pop()} />)
}
function r_path(a, b) {
  console.log( '  in f_path ')
  M.S.push(b)
  f(a)
  // return(<Route path=":invoiceId" element={<Invoice />} />)
  // return(<Route path={M.S.pop()} element={<Invoice />} />)
  return(<Route path={M.S.pop()} element={M.S.pop()} />)
}
function pr(sa, sb) { // push then r()
  window.M.S.push(sa)
  M.FGL(sb)
  return M.S.pop()
}
function pf(sa, sb) { // push then f()
  window.M.S.push(sa)
  M.FGL(sb)
  // return M.S.pop()
}

// temporary name all arguments 0 1 .... [n-2] will be pushed to stack
// to cater for string, React elements etc
// [n-1] argument will be processed with FGL
// function fx() {
function f() {
  var S=window.M.S
  var M=window.M
  var l=arguments.length
  var s=arguments[l-1]
  for (var i=0; i<l-1; i++) S.push(arguments[i]) 
  console.log( '  in f', M)
  M.FGL(s)
  console.log( '  in f', JSON.stringify(M.S))
  // return <h1>{S.pop()}</h1)>
  // return S.pop()
}
function r() {
  var S=window.M.S
  var M=window.M
  var l=arguments.length
  if (l>0) {
    var s=arguments[l-1]
    for (var i=0; i<l-1; i++) S.push(arguments[i]) 
    console.log( '  in f', M)
    M.FGL(s)  
  }
  return(S.pop())
  console.log( '  in r' ) // , JSON.stringify(M.S))
  // return <h1>{S.pop()}</h1)>
  // return S.pop()
}
function fa(s) { 
  console.log( '  in f', M)
  M.FGL(s)
  console.log( '  in f', JSON.stringify(M.S))
  // return <h1>{S.pop()}</h1)>
  // return S.pop()
}
function r_phos(s="") { 
  console.log( '  in r ', JSON.stringify(M.S), '  s ', typeof s, S.length, JSON.stringify(S[S.length-1]))
  // if (s===undefined)
  if (s=="")
    return M.S.pop()
  else { 
    M.FGL(s)
    return M.S.pop()
  }
}
function f_select() {
  return(<Route
          index
          element={
            <main style={{ padding: '1rem' }}>
              <p>Select an invoice 777</p>
            </main>
          }
          />);
}