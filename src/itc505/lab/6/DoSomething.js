// Sample sports equipment data
const sportsEquipment = [
  { id: 1, name: 'Football', price: 20 },
  { id: 2, name: 'Basketball', price: 25 },
  { id: 3, name: 'Tennis Racquet', price: 50 }
];

// Cart to store selected items
const cart = [];

// Function to display sports equipment in the main section
function displaySportsEquipment() {
  const sportsSection = document.getElementById('sports-section');

  sportsEquipment.forEach(item => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <h3>${item.name}</h3>
      <p>Price: $${item.price}</p>
      <button onclick="addToCart(${item.id})">Add to Cart</button>
    `;
    sportsSection.appendChild(card);
  });
}

// Function to add an item to the cart
function addToCart(itemId) {
  const selectedItem = sportsEquipment.find(item => item.id === itemId);

  if (selectedItem) {
    const existingItem = cart.find(item => item.id === itemId);

    if (existingItem) {
      existingItem.quantity++;
    } else {
      cart.push({ ...selectedItem, quantity: 1 });
    }

    updateCartDisplay();
  }
}

// Function to update and display the cart
function updateCartDisplay() {
  const cartList = document.getElementById('cart-list');
  cartList.innerHTML = '';

  cart.forEach(item => {
    const cartItem = document.createElement('li');
    cartItem.innerHTML = `
      ${item.name} - Quantity: ${item.quantity}
      <button onclick="incrementItem(${item.id})">+</button>
      <button onclick="decrementItem(${item.id})">-</button>
    `;
    cartList.appendChild(cartItem);
  });
}

// Function to increment the quantity of an item in the cart
function incrementItem(itemId) {
  const selectedItem = cart.find(item => item.id === itemId);

  if (selectedItem) {
    selectedItem.quantity++;
    updateCartDisplay();
  }
}

// Function to decrement the quantity of an item in the cart
function decrementItem(itemId) {
  const selectedItem = cart.find(item => item.id === itemId);

  if (selectedItem && selectedItem.quantity > 1) {
    selectedItem.quantity--;
    updateCartDisplay();
  }
}

// Function to handle the buy button click
function buyItems() {
  // Perform any necessary actions for the purchase
  alert('Thank you for your purchase!');

  // Clear the cart
  cart.length = 0;
  updateCartDisplay();
}

// Initialize the sports equipment display
displaySportsEquipment();
