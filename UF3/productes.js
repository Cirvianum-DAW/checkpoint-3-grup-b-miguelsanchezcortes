const products = [
  { category: "Electrònica", price: 499.99, name: "Telèfon Intel·ligent" },
  { category: "Electrònica", price: 799.99, name: "Portàtil" },
  { category: "Electrònica", price: 299.99, name: "Auriculars sense fils" },
  { category: "Electrònica", price: 199.99, name: "Televisor Intel·ligent" },
  { category: "Electrònica", price: 149.99, name: "Relotge Intel·ligent" },
  { category: "Llar", price: 249.99, name: "Rentadora" },
  { category: "Llar", price: 149.99, name: "Assecadora" },
  { category: "Llar", price: 99.99, name: "Cafetera" },
  { category: "Llar", price: 79.99, name: "Torradora" },
  { category: "Llar", price: 199.99, name: "Aspiradora" },
];

let productContainer = document.getElementById("products-container");

function initProductSelect() {
  let selectProduct = document.getElementById("product");
  let div = document.createElement("div");
  let preu = 0;
  const listProducts = products.map((product) => {
    const option = document.createElement("option");
    option.value = product.name;
    option.innerHTML = product.name;
    preu = product.price;
    selectProduct.appendChild(option);
  });
  selectProduct.addEventListener("change", function() {
    let quantity = document.getElementById('quantity');
    quantity.value = 1;
    let price = document.getElementById('price');
    price.value = preu;
  });
}

initProductSelect();
