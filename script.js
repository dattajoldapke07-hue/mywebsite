const products = [
  {
    id: 1,
    name: "T-Shirt",
    price: 500,
    image: "https://www.freeiconspng.com/uploads/blank-t-shirt-png-16.jpg"
  },
  {
    id: 2,
    name: "Shoes",
    price: 1500,
    image: "https://www.pngall.com/wp-content/uploads/5/Men-Shoes-PNG-Image-File.png"
  },
  {
    id: 3,
    name: "Watch",
    price: 2000,
    image: "https://png.pngtree.com/png-clipart/20250501/original/pngtree-a-black-and-gold-rolex-watch-png-image_20925413.png"
  },
  {
    id: 4,
    name: "Backpack",
    price: 800,
    image: "https://images.unsplash.com/photo-1509762774605-f07235a08f1f"
  },
  {
    id: 5,
    name: "Premium Cotton Brown Shirt",
    price: 699,
    image:"https://vui.unsplash.com/resize?height=256&quality=60&type=auto&url=https%3A%2F%2Fsearched-images.s3.us-west-2.amazonaws.com%2F365fb0bd-4ece-40f0-b554-1b2a9b6ad8ea%3FX-Amz-Algorithm%3DAWS4-HMAC-SHA256%26X-Amz-Credential%3DAKIAQ4GRIA4QTG2PSHUB%252F20260323%252Fus-west-2%252Fs3%252Faws4_request%26X-Amz-Date%3D20260323T155039Z%26X-Amz-Expires%3D86400%26X-Amz-SignedHeaders%3Dhost%26X-Amz-Signature%3D679277c053bd5858436a0f2e7a289d412da32b330c3bbf5be05be63c9e1c4d6b&sign=Ck2O_dPCp8lKPeh83si15J_0wcNLI5d_7JMTyQWhWH8"
  },
    {
    id: 6,
    name: "Round Sunglass",
    price: 450,
    image:"https://vui.unsplash.com/resize?height=256&quality=60&type=auto&url=https%3A%2F%2Fsearched-images.s3.us-west-2.amazonaws.com%2F88ebf729-2851-4ce3-a040-743fa5310a1c%3FX-Amz-Algorithm%3DAWS4-HMAC-SHA256%26X-Amz-Credential%3DAKIAQ4GRIA4QTG2PSHUB%252F20260323%252Fus-west-2%252Fs3%252Faws4_request%26X-Amz-Date%3D20260323T160405Z%26X-Amz-Expires%3D86400%26X-Amz-SignedHeaders%3Dhost%26X-Amz-Signature%3D030c6c68136cf64238dad2a9ae968ecee1e23dd19e1cb81aeb0e20bf1e5291b4&sign=qz0K2h4iFpWTr0a7WZUIFilMlpZ03GzGVSJwBlBH1Rs"},
     {
    id: 7,
    name: "White Shirt In All Size's",
    price: 299,
    image:"https://vui.unsplash.com/resize?height=256&quality=60&type=auto&url=https%3A%2F%2Fsearched-images.s3.us-west-2.amazonaws.com%2Fcaaec30a-7445-4e1c-8214-7a2761070476%3FX-Amz-Algorithm%3DAWS4-HMAC-SHA256%26X-Amz-Credential%3DAKIAQ4GRIA4QTG2PSHUB%252F20260323%252Fus-west-2%252Fs3%252Faws4_request%26X-Amz-Date%3D20260323T162614Z%26X-Amz-Expires%3D86400%26X-Amz-SignedHeaders%3Dhost%26X-Amz-Signature%3D96b4e4e9597afa618d0425e9387ce28f95cf79ca99505d31da0aafc86c038ccb&sign=i1IIfGqa8hvRNVivtD7NdwHEo6Ys0zSNsFIH8fJZ1AI"},
   {
    id : 8,
    name: "Clear Acrylic Trophy",
    price: 10,
 image:"https://vui.unsplash.com/resize?height=256&quality=60&type=auto&url=https%3A%2F%2Fsearched-images.s3.us-west-2.amazonaws.com%2F41a8ae31-e9d7-4d36-b963-5859e2bbad2c%3FX-Amz-Algorithm%3DAWS4-HMAC-SHA256%26X-Amz-Credential%3DAKIAQ4GRIA4QTG2PSHUB%252F20260323%252Fus-west-2%252Fs3%252Faws4_request%26X-Amz-Date%3D20260323T163057Z%26X-Amz-Expires%3D86400%26X-Amz-SignedHeaders%3Dhost%26X-Amz-Signature%3D2ab3019c06f995a04d508091dac5af2def03eefd0597c07b9b9f5c111d8c20c7&sign=bk-ymNCCunLmCrOrS6AeMs20LiaiSSJla3HrCyStKJs"},
   {
    id: 9,
    name: "Premium Silk Saree's",
    price: 1499,
    image: "https://vui.unsplash.com/resize?height=256&quality=60&type=auto&url=https%3A%2F%2Fsearched-images.s3.us-west-2.amazonaws.com%2F43fb48c3-5a76-45e0-a1a0-f860ef265244%3FX-Amz-Algorithm%3DAWS4-HMAC-SHA256%26X-Amz-Credential%3DAKIAQ4GRIA4QTG2PSHUB%252F20260324%252Fus-west-2%252Fs3%252Faws4_request%26X-Amz-Date%3D20260324T103843Z%26X-Amz-Expires%3D86400%26X-Amz-SignedHeaders%3Dhost%26X-Amz-Signature%3D51486e782dedcbe3b4885fed7f60cff094331d885428bd3928a1b0241e383cb1&sign=V9TtwmXU0X3FIs2Y8Iyw-mDx4ctirNdd1BrfMiCKy4M"
 },
];

let cart = [];

// Load products
function loadProducts() {
  const container = document.getElementById("products");

  products.forEach(p => {
    const div = document.createElement("div");
    div.classList.add("product");

    div.innerHTML = `
      <img src="${p.image}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>₹${p.price}</p>
      <button onclick="addToCart(${p.id})">Add to Cart</button>
    `;

    container.appendChild(div);
  });
}

// Cart functions
function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  updateCartCount();
}

function updateCartCount() {
  document.getElementById("cart-count").innerText = cart.length;
}

function viewCart() {
  const modal = document.getElementById("cart-modal");
  const items = document.getElementById("cart-items");
  const total = document.getElementById("total");

  items.innerHTML = "";
  let sum = 0;

  cart.forEach(item => {
    const li = document.createElement("li");
    li.innerText = `${item.name} - ₹${item.price}`;
    items.appendChild(li);
    sum += item.price;
  });

  total.innerText = sum;
  modal.classList.remove("hidden");
}

function closeCart() {
  document.getElementById("cart-modal").classList.add("hidden");
}

function checkout() {
  alert("🎉 Payment Successful (Demo)");
  cart = [];
  updateCartCount();
  closeCart();
}

// Start
loadProducts();
