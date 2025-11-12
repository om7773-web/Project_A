

const products = [
  { id: 1, title: 'Love Edition For Her', price: 30, oldPrice: 60, rating: 5, img: 'project_r/images/i1.webp' },
  { id: 2, title: 'Arome Le Parfum', price: 79, oldPrice: null, rating: 5, img: 'project_r/images/i2.webp' },
  { id: 3, title: 'Aersace For Men', price: 50.99, oldPrice: null, rating: 4.5, img: 'project_r/images/i3.webp' },
  { id: 4, title: 'Million Gold for Her', price: 50, oldPrice: null, rating: 5, img: 'project_r/images/i4.webp' },
  { id: 5, title: 'Arome Virtual Flower', price: 200, oldPrice: 300, rating: 4, img: 'project_r/images/i5.webp' },
  { id: 6, title: 'Black Wild Fragrance', price: 30, oldPrice: 60, rating: 5, img: 'project_r/images/i6.webp' },
];



const grid = document.getElementById('productGrid');
const cartCount = document.getElementById('cartCount');
let cart = 0;

function formatPrice(v) {
  return (typeof v === 'number') ? ('$' + v.toFixed(2)) : v;
}

function renderProducts() {
  grid.innerHTML = '';
  products.forEach(p => {
    const el = document.createElement('div');
    el.className = 'product';
    el.id = 'product-' + p.id;

    el.innerHTML = `
      <div class="thumb">
        <img src="${p.img}" alt="${p.title}">
      </div>
      <div class="title">${p.title}</div>
      <div class="price">
        ${formatPrice(p.price)} 
        ${p.oldPrice ? `<span style="text-decoration:line-through;color:var(--muted);font-weight:600;margin-left:.5rem">${formatPrice(p.oldPrice)}</span>` : ''}
      </div>
      <div class="meta">
        <div>⭐ ${p.rating} / 5</div>
        <div>
          <button onclick="addToCart(${p.id})" style="background:transparent;border:1px solid var(--accent);padding:.35rem .6rem;border-radius:8px;cursor:pointer;font-weight:700;color:var(--accent)">Add</button>
        </div>
      </div>
    `;
    grid.appendChild(el);
  });
}

function renderProductMenu() {
  const menu = document.getElementById('productMenu');
  products.forEach(p => {
    const item = document.createElement('li');
    item.textContent = p.title;
    item.onclick = () => {
      document.getElementById('product-' + p.id).scrollIntoView({ behavior: 'smooth' });
    };
    menu.appendChild(item);
  });
}

renderProductMenu();



function addToCart(id) {
  cart += 1;
  cartCount.textContent = cart;
  const prod = products.find(x => x.id === id);
  // simple floating message
  const msg = document.createElement('div');
  msg.textContent = prod.title + ' added to cart';
  Object.assign(msg.style, { position: 'fixed', right: '20px', bottom: '20px', background: '#111', color: '#fff', padding: '10px 14px', borderRadius: '8px', boxShadow: '0 6px 20px rgba(0,0,0,.2)', zIndex: 9999 });
  document.body.appendChild(msg);
  setTimeout(() => msg.remove(), 1600);
}

function scrollToShop() {
  document.getElementById('shop').scrollIntoView({ behavior: 'smooth' });
}

function openNewsletter() {
  const email = prompt('Enter your email to subscribe to our newsletter');
  if (email) {
    alert('Thanks! ' + email + ' has been subscribed. (demo)');
  }
}

renderProducts();
