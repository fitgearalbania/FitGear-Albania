/* ---------------- PRODUCT DATA ---------------- */
/* Ndrysho fushat "description" me tekstin tënd real.
   Për foto: "image" te vetë produkti është foto default/kryesore.
   Te çdo ngjyrë (brenda "colors") ka gjithashtu një fushë "image" —
   nëse e plotëson atë, foto sipër do të ndryshojë automatikisht kur
   klienti zgjedh atë ngjyrë. Nëse e lë null, do të shfaqet foto default e produktit. */
const PRODUCTS = [
  {
    id:'straps',
    name:'Lifting Straps',
    price:990,
    tagline:'Për deadlift & rows të rënda',
    description:'Strapat e forta me nylon të ndërtuar për të përmirësuar kapjen dhe për të reduktuar rrëshqitjen gjatë ngritjeve të rënda.',
    image:'images/strapsblack.png', /* foto default e produktit */
    variantType:'color',
    colors:[
      {name:'Black', hex:'#1a1a1a', image:'images/strapsblack.png'},
      {name:'White', hex:'#f2f2f2', image:'images/strapswhite.png'},
      {name:'Camo Purple', hex:'linear-gradient(135deg,#3a1a4a,#7b3fa0,#2a0f38)', image:'images/strapspurplecamouflage.png'},
      {name:'Camo Red', hex:'linear-gradient(135deg,#4a0f14,#c81f2a,#2a0a0c)', image:'images/strapsredcamouflage.png'}
    ]
  },
  {
    id:'wraps',
    name:'Wrist Wraps',
    price:790,
    tagline:'Stabilitet për bench press',
    description:'Mbështetje e fortë elastike për kyçin që ndihmon të mbash pozicion të saktë gjatë ngarkesave të mëdha.',
    image:'images/wristbluewhite.png',
    variantType:'color',
    colors:[
      {name:'Blue + White', hex:'linear-gradient(90deg,#1e5fb0 50%, #f2f2f2 50%)', image:'images/wristbluewhite.png'},
      {name:'Black + Orange', hex:'linear-gradient(90deg,#1a1a1a 50%, #e07a1f 50%)', image:'images/wristorangeblack.png'}
    ]
  },
  {
    id:'gloves',
    name:'Gym Gloves',
    price:990,
    tagline:'Mbrojtje dhe grip maksimal',
    description:'Doreza me jastëkë të fortë në pëllëmbë dhe shpinë të ajrosur për mbrojtje dhe përshtatje gjatë ngritjes.',
    image:'images/glovesblack.png',
    variantType:'color-size',
    colors:[
      {name:'Black', hex:'#1a1a1a', sizes:['S','M','L'], image:'images/glovesblack.png'},
      {name:'Pink', hex:'#e85d9c', sizes:['S'], image:'images/glovespink.png'}
    ]
  },
  {
    id:'nasal',
    name:'Nasal Strips',
    price:699,
    tagline:'Frymëmarrje më e lirë gjatë stërvitjes',
    description:'Strips për hundë që hapin rrugët e frymëmarrjes dhe lehtësojnë ushtrimet intensive pa kompresuar fytyrën.',
    image:'images/nasalstrips.png',
    variantType:'color',
    colors:[
      {name:'Black', hex:'#1a1a1a', image:'images/nasalstrips.png'},
      {name:'Transparent', hex:'linear-gradient(135deg, rgba(255,255,255,0.45), rgba(255,255,255,0.05))', image:'images/nasalstrips.png'}
    ]
  },
  {
    id:'cante',
    name:'Cante Palestre',
    price:1590,
    tagline:'Për të mbajtur sendet tuaja në palestër',
    description:'Canta rezistente me xhepa të specializuar për shishen, telefonin dhe aromatizuesin, e përshtatshme për çdo stërvitje.',
    image:'images/canteblack.png',
    variantType:'color',
    colors:[
      {name:'Black', hex:'#1a1a1a', image:'images/canteblack.png'},
      {name:'Purple', hex:'#c918ff', image:'images/cantepurple.png'}
    ]
  },
  {
    id:'shaker',
    name:'Shaker',
    price:790,
    tagline:'Përzierje pa gunga, në çdo çantë',
    description:'Shaker pa BPA me kapak të fortë dhe rrjetë për përzierje të shpejtë të proteinave dhe suplimenteve.',
    image:'images/shakerblack.png',
    variantType:'color',
    colors:[
      {name:'Black', hex:'#1a1a1a', image:'images/shakerblack.png'},
      {name:'Purple', hex:'#a97fd1', image:'images/shakerpurple.png'}
    ]
  }
];

let cart = []; /* {productId, name, price, variantLabel, qty, image} */
let currentProduct = null;
let selectedColor = null;
let selectedSize = null;
let selectedQty = 1;

/* ---------------- RENDER PRODUCT GRID ---------------- */
const grid = document.getElementById('productGrid');
PRODUCTS.forEach(p=>{
  const variantNote = !p.variantType ? 'Pa variacione' :
    p.variantType === 'color' ? p.colors.length + ' ngjyra' :
    p.colors.length + ' ngjyra · masa S–L';
  const card = document.createElement('div');
  card.className = 'card';
  card.onclick = ()=>openModal(p.id);
  card.innerHTML = `
    <div class="card-media">
      <span class="card-tag">${p.tagline}</span>
      ${mediaHTML(p.image, p.name)}
    </div>
    <div class="card-body">
      <h3>${p.name}</h3>
      <p class="card-desc">${p.description}</p>
      <div class="card-variants">${variantNote}</div>
      <div class="card-foot">
        <span class="price mono">${p.price} L</span>
        <span class="card-arrow">→</span>
      </div>
    </div>`;
  grid.appendChild(card);
});

function mediaHTML(imageUrl, altText){
  if(imageUrl){
    return `<img class="product-photo" src="${imageUrl}" alt="${altText}">`;
  }
  return `<div class="photo-placeholder">
    <svg viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="1"></rect>
      <circle cx="9" cy="10.5" r="1.6"></circle>
      <path d="M3 16.5l5-4.5 4 3.5 3.5-3 5.5 5"></path>
    </svg>
    <span>Shto Foton<br>e Produktit</span>
  </div>`;
}

/* ---------------- MODAL ---------------- */
function openModal(id){
  currentProduct = PRODUCTS.find(p=>p.id===id);
  selectedColor = currentProduct.colors ? currentProduct.colors[0] : null;
  selectedSize = (selectedColor && selectedColor.sizes) ? selectedColor.sizes[0] : null;
  selectedQty = 1;
  renderModal();
  document.getElementById('overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal(){
  document.getElementById('overlay').classList.remove('open');
  document.body.style.overflow = '';
}
document.getElementById('overlay').addEventListener('click', e=>{
  if(e.target.id==='overlay') closeModal();
});

function renderModal(){
  const p = currentProduct;
  let variantHTML = '';

  if(p.variantType === 'color'){
    variantHTML += `<div class="field-label">Ngjyra: ${selectedColor.name}</div><div class="swatches">`;
    p.colors.forEach(c=>{
      variantHTML += `<div>
        <div class="swatch ${selectedColor.name===c.name?'active':''}" style="background:${c.hex}" onclick="pickColor('${c.name}')" title="${c.name}"></div>
      </div>`;
    });
    variantHTML += `</div>`;
  }

  if(p.variantType === 'color-size'){
    variantHTML += `<div class="field-label">Ngjyra: ${selectedColor.name}</div><div class="swatches">`;
    p.colors.forEach(c=>{
      variantHTML += `<div class="swatch ${selectedColor.name===c.name?'active':''}" style="background:${c.hex}" onclick="pickColor('${c.name}')" title="${c.name}"></div>`;
    });
    variantHTML += `</div>`;
    variantHTML += `<div class="field-label">Masa: ${selectedSize||''}</div><div class="opt-row">`;
    ['S','M','L'].forEach(s=>{
      const available = selectedColor.sizes.includes(s);
      variantHTML += `<button type="button" class="opt-pill ${selectedSize===s?'active':''}" ${available?'':'disabled'} onclick="pickSize('${s}')">${s}</button>`;
    });
    variantHTML += `</div>`;
  }

  const priceTotal = p.price * selectedQty;
  const activeImage = (selectedColor && selectedColor.image) || p.image;

  document.getElementById('modalContent').innerHTML = `
    <div class="modal-media">
      <button class="modal-close" onclick="closeModal()">✕</button>
      ${mediaHTML(activeImage, p.name)}
    </div>
    <div class="modal-body">
      <span class="tag">${p.tagline}</span>
      <h2>${p.name}</h2>
      <div class="modal-price">${p.price} L</div>
      <p class="modal-desc">${p.description}</p>
      ${variantHTML}
      <div>
        <div class="field-label">Sasia</div>
        <div class="qty-row">
          <div class="qty-box">
            <button type="button" onclick="changeQty(-1)">−</button>
            <span>${selectedQty}</span>
            <button type="button" onclick="changeQty(1)">+</button>
          </div>
          <span class="stock-note"><span class="stock-dot"></span>Në stok</span>
        </div>
      </div>
      <button class="add-btn" onclick="addToCart()">Shto në Listë · ${priceTotal} L</button>
    </div>`;
}

function pickColor(name){
  selectedColor = currentProduct.colors.find(c=>c.name===name);
  if(selectedColor.sizes){ selectedSize = selectedColor.sizes[0]; }
  renderModal();
}
function pickSize(s){
  if(!selectedColor.sizes.includes(s)) return;
  selectedSize = s;
  renderModal();
}
function changeQty(delta){
  selectedQty = Math.max(1, selectedQty + delta);
  renderModal();
}

/* ---------------- CART ---------------- */
function addToCart(){
  const p = currentProduct;
  let variantLabel = '';
  if(p.variantType==='color') variantLabel = selectedColor.name;
  if(p.variantType==='color-size') variantLabel = `${selectedColor.name} / ${selectedSize}`;

  const key = p.id + '|' + variantLabel;
  const existing = cart.find(i=>i.key===key);
  if(existing){
    existing.qty += selectedQty;
  } else {
    cart.push({
      key,
      productId:p.id,
      name:p.name,
      price:p.price,
      variantLabel,
      qty:selectedQty,
      image:(selectedColor && selectedColor.image) || p.image
    });
  }
  renderCart();
  closeModal();
  openDrawer();
}

function removeFromCart(key){
  cart = cart.filter(i=>i.key!==key);
  renderCart();
}

function cartTotal(){
  return cart.reduce((sum,i)=>sum + i.price*i.qty, 0);
}
function cartCount(){
  return cart.reduce((sum,i)=>sum + i.qty, 0);
}

function renderCart(){
  document.getElementById('cartCount').textContent = cartCount();

  const drawerItems = document.getElementById('drawerItems');
  const reviewLines = document.getElementById('reviewLines');
  const reviewTotal = document.getElementById('reviewTotal');
  const submitBtn = document.getElementById('submitOrderBtn');
  const drawerCheckoutBtn = document.getElementById('drawerCheckoutBtn');

  if(cart.length===0){
    drawerItems.innerHTML = `<div class="empty-cart">Lista jote është bosh.<br>Shto produkte nga katalogu.</div>`;
    reviewLines.innerHTML = `<p class="empty-cart">Shporta është bosh. Shto produkte më sipër.</p>`;
    reviewTotal.style.display='none';
    document.getElementById('freeShippingNote').style.display='none';
    submitBtn.disabled = true;
    drawerCheckoutBtn.disabled = true;
  } else {
    drawerItems.innerHTML = cart.map(i=>`
      <div class="cart-item">
        <div class="mini-photo">${i.image ? `<img src="${i.image}" alt="${i.name}">` : `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="1"></rect><circle cx="9" cy="10.5" r="1.6"></circle><path d="M3 16.5l5-4.5 4 3.5 3.5-3 5.5 5"></path></svg>`}</div>
        <div class="cart-item-info">
          <b>${i.name}</b>
          <span>${i.variantLabel || 'Standarde'} · Sasia: ${i.qty}</span>
          <div class="cart-item-row">
            <span class="price mono">${i.price*i.qty} L</span>
            <button class="remove-btn" onclick="removeFromCart('${i.key}')">Hiq</button>
          </div>
        </div>
      </div>`).join('');

    reviewLines.innerHTML = cart.map(i=>`
      <div class="review-line">
        <span><b>${i.name}</b> — ${i.variantLabel||'Standarde'} × ${i.qty}</span>
        <span>${i.price*i.qty} L</span>
      </div>`).join('');
    reviewTotal.style.display='flex';
    document.getElementById('freeShippingNote').style.display='block';
    submitBtn.disabled = false;
    drawerCheckoutBtn.disabled = false;
  }

  document.getElementById('drawerSubtotal').textContent = cartTotal() + ' L';
  document.getElementById('drawerTotal').textContent = cartTotal() + ' L';
  document.getElementById('reviewTotalPrice').textContent = cartTotal() + ' L';
}

/* ---------------- DRAWER ---------------- */
function openDrawer(){
  document.getElementById('drawer').classList.add('open');
  document.getElementById('drawerOverlay').classList.add('open');
}
function closeDrawer(){
  document.getElementById('drawer').classList.remove('open');
  document.getElementById('drawerOverlay').classList.remove('open');
}
function goToCheckout(){
  closeDrawer();
  document.getElementById('checkout').scrollIntoView({behavior:'smooth'});
}

/* ---------------- CHECKOUT SUBMIT (Formspree) ---------------- */
const FORMSPREE_URL = 'https://formspree.io/f/xzdllwzv';
const checkoutForm = document.getElementById('checkoutForm');
const formMsg = document.getElementById('formMsg');

checkoutForm.addEventListener('submit', async function(e){
  e.preventDefault();
  if(cart.length===0) return;

  const orderText = cart.map(i=>`${i.name} (${i.variantLabel||'Standarde'}) x${i.qty} = ${i.price*i.qty}L`).join('\n');
  document.getElementById('orderHidden').value = orderText;
  document.getElementById('totalHidden').value = cartTotal() + ' L';

  const submitBtn = document.getElementById('submitOrderBtn');
  submitBtn.disabled = true;
  submitBtn.textContent = 'Duke dërguar...';

  try{
    const formData = new FormData(checkoutForm);
    const res = await fetch(FORMSPREE_URL, {
      method:'POST',
      body:formData,
      headers:{ 'Accept':'application/json' }
    });

    if(res.ok){
      formMsg.className = 'form-msg show ok';
      formMsg.textContent = 'Porosia u dërgua me sukses! Do të të kontaktojmë shpejt për konfirmim.';
      cart = [];
      renderCart();
      checkoutForm.reset();
      submitBtn.textContent = 'Dërgo Porosinë';
    } else {
      throw new Error('Gabim gjatë dërgimit');
    }
  } catch(err){
    formMsg.className = 'form-msg show err';
    formMsg.textContent = 'Diçka shkoi keq. Provo përsëri ose na kontakto direkt.';
    submitBtn.textContent = 'Dërgo Porosinë';
  }
  submitBtn.disabled = cart.length===0;
});

renderCart();