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
  var msg = 'In your cart, you have';
  for (let i = 0; i < cart.length; i++) {
    if (i === cart.length - 1 && cart.length > 1) {
      msg += ` and ${cart[i].itemName} at $${cart[i].itemPrice}`;
    } else {
      msg += ` ${cart[i].itemName} at $${cart[i].itemPrice},`;
    }
  }
  msg += '.';

  return cart.length === 0 ? 'Your shopping cart is empty.' : msg;
}

function total() {
  // write your code here
  return cart.reduce((total, item) => total += item.itemPrice);
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
