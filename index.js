function openMenu(){
  document.getElementById("nav-menu").style.right = "0";
}

function closeMenu(){
  document.getElementById("nav-menu").style.right = "-300px";
}

  // Product prices per kg
  const productPrices = {
    "Organic Apples": 200,
    "Organic Oranges": 180,
    "Sweets Carrots": 50,
    "Sweets Radish": 30,
    "Fresh Brinjal": 40,
    "Fresh Pumpkin": 60,
    "Fresh Cauliflower": 50,
    "Fresh Capsicum": 50,
    "Green Chilli": 50,
    "Crisp Lettuce": 50
  };

  // Select form elements
  const productSelect = document.querySelector('#form-box select:nth-of-type(1)');
  const qtySelect = document.querySelector('#form-box select:nth-of-type(2)');
  const priceInput = document.querySelector('#form-box input[readonly]');

  // Function to calculate price
  function updatePrice() {
    const product = productSelect.value;
    const qty = qtySelect.value;

    if (!product || !qty) {
      priceInput.value = '';
      return;
    }

    // Convert quantity to kg
    let qtyKg = 0;
    if (qty.includes("Gm")) {
      qtyKg = parseFloat(qty) / 1000; // grams to kg
    } else if (qty.includes("Kg")) {
      qtyKg = parseFloat(qty);
    }

    const price = productPrices[product] * qtyKg;
    priceInput.value = `Rs.${price.toFixed(2)}`;
  }

  // Event listeners
  productSelect.addEventListener('change', updatePrice);
  qtySelect.addEventListener('change', updatePrice);
