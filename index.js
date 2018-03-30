var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var price = Math.floor(Math.random() * 100) + 1;
 cart.push({
   'itemName': item,
   'itemPrice': price
 });

 return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  // var msg = 'In your cart, you have';
  // for (let i = 0; i < cart.length; i++) {
  //   if (i === cart.length - 1 && cart.length > 1) {
  //     msg += ` and ${cart[i].itemName} at $${cart[i].itemPrice}`;
  //   } else {
  //     msg += ` ${cart[i].itemName} at $${cart[i].itemPrice},`;
  //   }
  // }
  // msg += '.';
  var msg = '';

  return cart.length === 0 ? 'Your shopping cart is empty.' : msg;
}

function total() {
  // write your code here
  var total = cart.reduce((total, item) => total += item.itemPrice, 0);
  //console.log(total);
  return total;
}

function removeFromCart(item) {
  // write your code here
  if (!cart.some(elem => elem.itemName === item)) {
    return 'That item is not in your cart.';
  }
  cart = cart.filter(elem => elem.itemName !== item);
  return cart;
}

function placeOrder(cardNumber) {
  // write your code here
  if (typeof cardNumber === 'undefined') {
    return `Sorry, we don't have a credit card on file for you.`;
  }

  var msg = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`;
  cart = [];
  return msg;
}
