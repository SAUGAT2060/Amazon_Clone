export const cart=[];
export function addToCart(productId){
  let addedMessageTimeoutId;
  let matchingItem;


  cart.forEach((cartItem)=>{

    if(productId === cartItem.productId){
      matchingItem = cartItem;
    }
  });

  const addedMessage = document.querySelector(`.js-added-to-cart-${productId}`);

  addedMessage.classList.add('added-to-cart-visible');

  if(addedMessageTimeoutId){
    clearTimeout(addedMessageTimeoutId);
  }

  const timeoutId= setTimeout(()=>{
      addedMessage.classList.remove('added-to-cart-visible');


  },2000);

  addedMessageTimeoutId=timeoutId;
  const quantitySelector =  document.querySelector(`.js-quantity-selector-${productId}`);


  const quantity = Number(quantitySelector.value);

  if(matchingItem){
    matchingItem.quantity+=quantity;

  }
  else{
    cart.push({

      productId,
      quantity
    });
  }
}