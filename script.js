// Invio del form
document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();

    const toast = document.createElement("div");
    toast.textContent = "Messaggio inviato! Ti ricontatteremo presto.";
    toast.className = "toast-message";
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.add("show");
    }, 100);

    setTimeout(() => {
        toast.classList.remove("show");
        setTimeout(() => toast.remove(), 300);
    }, 4000);
});

// Aggiunta al carrello
document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", () => {
        const toast = document.createElement("div");
        toast.textContent = "Prodotto aggiunto al carrello!";
        toast.className = "toast-message";
        document.body.appendChild(toast);

        setTimeout(() => toast.classList.add("show"), 100);
        setTimeout(() => {
            toast.classList.remove("show");
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    // Aggiungi uno scorrimento personalizzato
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  });
});

let cart = [];

document.querySelectorAll(".add-to-cart").forEach((button, index) => {
    button.addEventListener("click", () => {
        const card = button.closest(".product-card");
        const name = card.querySelector("h3").innerText;
        const price = parseFloat(card.querySelector(".price").innerText.replace("€", ""));

        const existingItem = cart.find(item => item.name === name);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ name, price, quantity: 1 });
        }

        updateCartDisplay();

        const toast = document.createElement("div");
        toast.textContent = "Prodotto aggiunto al carrello!";
        toast.className = "toast-message";
        document.body.appendChild(toast);

        setTimeout(() => toast.classList.add("show"), 100);
        setTimeout(() => {
            toast.classList.remove("show");
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    });
});

function updateCartDisplay() {
    const cartContainer = document.querySelector(".cart-items");
    const totalContainer = document.querySelector(".cart-total");
    cartContainer.innerHTML = "";

    let total = 0;

    cart.forEach(item => {
        total += item.price * item.quantity;

        const div = document.createElement("div");
        div.className = "cart-item";
        div.innerHTML = `
            <span>${item.name} (x${item.quantity})</span>
            <span>€${(item.price * item.quantity).toFixed(2)}</span>
        `;
        cartContainer.appendChild(div);
    });

    totalContainer.textContent = `Totale: €${total.toFixed(2)}`;
}

document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', (event) => {
    const productCard = button.closest('.product-card');
    const productName = productCard.querySelector('h3').textContent;
    alert(`${productName} aggiunto al carrello!`);
    // Logica per aggiungere il prodotto al carrello
  });
});



