import { renderOrderSummary } from './checkout/orderSummary.js';
import { renderPaymentSummary } from './checkout/paymentSummary.js';
import { loadProducts,loadProductsFetch} from '../data/products.js';
import {loadCart, loadFromStorage} from '../data/cart.js';

 async function loadPage(){
  
  try{
  //  throw 'error1';
  await loadProductsFetch();

  const value = await new Promise((resolve,reject)=>{
    // throw 'error2';
    loadCart(()=>{
      resolve('value3');
    // reject('error3');
    });
  });
  }
  catch(error){
  console.log("Unexpected Error.Please try again later.");
  }

 

renderOrderSummary();
renderPaymentSummary();
 
}
loadPage();

//  Promise.all([
//  loadProductsFetch(),

//  new Promise((resolve)=>{
//     loadCart(()=>{
//       resolve();
//     });
//   })

// ]).then(()=>{

//  renderOrderSummary();
//   renderPaymentSummary();

// });



// new Promise( (resolve) =>{
//   loadProducts(() =>{
//     resolve('value1');
//   });
// }).then((value)=>{
//   console.log(value);
//   return new Promise((resolve)=>{
//     loadCart(()=>{
//       resolve();
//     });
//   });

// }).then(()=>{
//   renderOrderSummary();
//   renderPaymentSummary();

// });

