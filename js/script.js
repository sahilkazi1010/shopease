// Quantity control
function changeQty(delta) {
  const el = document.getElementById('qty');
  let val = parseInt(el.textContent) + delta;
  if (val < 1) val = 1;
  el.textContent = val;
}

// Add to cart confirmation
function addToCart() {
  const qty = document.getElementById('qty').textContent;
  alert('✅ ' + qty + ' item(s) added to cart!\nThank you for shopping with ShopEase.');
}
