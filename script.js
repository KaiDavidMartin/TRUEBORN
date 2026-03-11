// =======================
// CART & CHECKOUT SYSTEM
// =======================

function getCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(name, price, image) {
    const cart = getCart();
    cart.push({ name, price, image });
    saveCart(cart);
    alert(name + " added to cart!");
    displayCart();
}

function removeItem(index) {
    const cart = getCart();
    cart.splice(index, 1);
    saveCart(cart);
    displayCart();
}

function displayCart() {
    const cart = getCart();
    const cartContainer = document.getElementById("cart-items");
    const totalContainer = document.getElementById("cart-total");
    if (!cartContainer || !totalContainer) return;

    cartContainer.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;
        cartContainer.innerHTML += `
            <div class="cart-item">
                <img src="${item.image}" class="cart-img">
                <div>
                    <h4>${item.name}</h4>
                    <p>$${item.price}</p>
                    ${cartContainer.id === "cart-items" ? `<button onclick="removeItem(${index})">Remove</button>` : ""}
                </div>
            </div>
        `;
    });

    totalContainer.innerText = "$" + total.toFixed(2);
}

function goToCheckout() {
    window.location.href = "checkout.html";
}

window.onload = displayCart;

function goToCheckout() {
    window.location.href = "checkout.html"; // Redirects to checkout page
}