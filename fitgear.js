/* ---------------- PRODUCT DATA ---------------- */
/* Ndrysho fushat "description" me tekstin tënd real.
   Për foto: "image" te vetë produkti është foto default/kryesore.
   Te çdo ngjyrë (brenda "colors") ka gjithashtu një fushë "image" —
   nëse e plotëson atë, foto sipër do të ndryshojë automatikisht kur
   klienti zgjedh atë ngjyrë. Nëse e lë null, do të shfaqet foto default e produktit. */
const DEFAULT_STOCK = 10;
const STOCK_STORAGE_KEY = 'fitgear_inventory_v1';
const PRODUCTS = [
  {
    id:'straps',
    name:'Lifting Straps',
    price:990,
    tagline:'Për deadlift & rows të rënda',
    description:'Strapat e forta me nylon të ndërtuar për të përmirësuar kapjen dhe për të reduktuar rrëshqitjen gjatë ngritjeve të rënda.',
    image:'images/strapsblack.png',
    inStock:true,
    stock:4,
    variantType:'color',
    colors:[
      {name:'Black', hex:'#1a1a1a', image:'images/strapsblack.png', inStock:true, stock:1},
      {name:'White', hex:'#f2f2f2', image:'images/strapswhite.png', inStock:true, stock:1},
      {name:'Camo Purple', hex:'linear-gradient(135deg,#3a1a4a,#7b3fa0,#2a0f38)', image:'images/strapspurplecamouflage.png', inStock:true, stock:1},
      {name:'Camo Red', hex:'linear-gradient(135deg,#4a0f14,#c81f2a,#2a0a0c)', image:'images/strapsredcamouflage.png', inStock:false, stock:1}
    ]
  },
  {
    id:'wraps',
    name:'Wrist Wraps',
    price:790,
    tagline:'Stabilitet për bench press',
    description:'Mbështetje e fortë elastike për kyçin që ndihmon të mbash pozicion të saktë gjatë ngarkesave të mëdha.',
    image:'images/wristbluewhite.png',
    inStock:true,
    stock:1,
    variantType:'color',
    colors:[
      {name:'Blue + White', hex:'linear-gradient(90deg,#1e5fb0 50%, #f2f2f2 50%)', image:'images/wristbluewhite.png', inStock:true, stock:1},
      {name:'Black + Orange', hex:'linear-gradient(90deg,#1a1a1a 50%, #e07a1f 50%)', image:'images/wristorangeblack.png', inStock:true, stock:0}
    ]
  },
  {
    id:'gloves',
    name:'Gym Gloves',
    price:990,
    tagline:'Mbrojtje dhe grip maksimal',
    description:'Doreza me jastëkë të fortë në pëllëmbë dhe shpinë të ajrosur për mbrojtje dhe përshtatje gjatë ngritjes.',
    image:'images/glovesblack.png',
    inStock:true,
    stock:0,
    variantType:'color-size',
    colors:[
      {name:'Black', hex:'#1a1a1a', sizes:['S','M','L'], sizeStock:{S:2,M:1,L:0}, image:'images/glovesblack.png', inStock:true, stock:0},
      {name:'Pink', hex:'#e85d9c', sizes:['S'], sizeStock:{S:0}, image:'images/glovespink.png', inStock:false, stock:0}
    ]
  },
  {
    id:'nasal',
    name:'Nasal Strips',
    price:699,
    tagline:'Frymëmarrje më e lirë gjatë stërvitjes',
    description:'Strips për hundë që hapin rrugët e frymëmarrjes dhe lehtësojnë ushtrimet intensive pa kompresuar fytyrën.',
    image:'images/nasalstrips.png',
    inStock:true,
    stock:2,
    variantType:'color',
    colors:[
      {name:'Black', hex:'#1a1a1a', image:'images/nasalstrips.png', inStock:true, stock:2},
      {name:'Transparent', hex:'linear-gradient(135deg, rgba(255,255,255,0.45), rgba(255,255,255,0.05))', image:'images/nasalstrips.png', inStock:true, stock:0}
    ]
  },
  {
    id:'cante',
    name:'Cante Palestre',
    price:1590,
    tagline:'Për të mbajtur sendet tuaja në palestër',
    description:'Canta rezistente me xhepa të specializuar për shishen, telefonin dhe aromatizuesin, e përshtatshme për çdo stërvitje.',
    image:'images/canteblack.png',
    inStock:true,
    stock:2,
    variantType:'color',
    colors:[
      {name:'Black', hex:'#1a1a1a', image:'images/canteblack.png', inStock:true, stock:1},
      {name:'Purple', hex:'#c918ff', image:'images/cantepurple.png', inStock:true, stock:1}
    ]
  },
  {
    id:'shaker',
    name:'Shaker',
    price:790,
    tagline:'Përzierje pa gunga, në çdo çantë',
    description:'Shaker me kapak të fortë dhe rrjetë për përzierje të shpejtë të proteinave dhe suplimenteve.',
    image:'images/shakerblack.png',
    inStock:true,
    stock:2,
    variantType:'color',
    colors:[
      {name:'Black', hex:'#1a1a1a', image:'images/shakerblack.png', inStock:true, stock:1},
      {name:'Purple', hex:'#a97fd1', image:'images/shakerpurple.png', inStock:true, stock:1}
    ]
  },
  {
    id:'finger-trainer',
    name:'Finger Trainer',
    price:590,
    tagline:'Për grip dhe kontroll të gishtave',
    description:'Trajner i vogël për gishtërinj që ndihmon në zhvillimin e forcës së kapjes dhe stabilitetit në çdo stërvitje.',
    image:'images/fingertrainer.png',
    inStock:true,
    stock:1,
    variantType:'color',
    colors:[
      {name:'Black', hex:'#1a1a1a', image:'images/fingertrainer.png', inStock:true, stock:1}
    ]
  },
  {
    id:'grip-trainer',
    name:'Grip Trainer',
    price:490,
    tagline:'Për forcë të kapjes',
    description:'Një trajner i fokusuar në gripin e dorës, për të lehtësuar progresin në ngritje dhe stërvitje të përgjithshme.',
    image:'images/griptrainer.png',
    inStock:true,
    stock:1,
    variantType:'color',
    colors:[
      {name:'Black', hex:'#1a1a1a', image:'images/griptrainer.png', inStock:true, stock:1}
    ]
  },
  {
    id:'grip-ring-egg',
    name:'Grip Ring & Egg',
    price:490,
    tagline:'Për forcim të dorës',
    description:'Paketë e thjeshtë por efektive për punën mbi dorë dhe gripin e tyre gjatë sesioneve të përsëritura.',
    image:'images/griprindandegg.png',
    inStock:true,
    stock:1,
    variantType:'color',
    colors:[
      {name:'Gray', hex:'#9aa1ad', image:'images/griprindandegg.png', inStock:true, stock:1}
    ]
  },
  {
    id:'resistance-bands',
    name:'Resistance Bands',
    price:1190,
    tagline:'Për mobilitet dhe forcim',
    description:'Llastiqet e rezistencës të dizajnuar për stërvitje intensive.',
    image:'images/llastiqemeshkujsh.png',
    inStock:true,
    stock:1,
    variantType:'option',
    options:[
      {label:'M', name:'Male Band', image:'images/llastiqemeshkujsh.png', inStock:true, stock:1},
      {label:'F', name:'Female Band', image:'images/llastiqefemrash.png', inStock:true, stock:1}
    ]
  },
  {
    id:'tape',
    name:'Tapet',
    price:1190,
    tagline:'Për mbështetje',
    description:'Tapet për mbrojtje të kyçeve dhe mbështetje më të mirë gjatë stërvitjeve intensive.',
    image:'images/tapetblack.png',
    inStock:true,
    stock:2,
    variantType:'color',
    colors:[
      {name:'Black', hex:'#1a1a1a', image:'images/tapetblack.png', inStock:true, stock:1},
      {name:'Pink', hex:'#e85d9c', image:'images/tapetpink.png', inStock:true, stock:1}
    ]
  },
  {
    id:'griper',
    name:'Griper',
    price:690,
    tagline:'Për grip më të mirë',
    description:'Griper i specializuar për forcimin e parakrahut.',
    image:'images/griper.png',
    inStock:true,
    stock:1,
    variantType:'color',
    colors:[
      {name:'Black', hex:'#1a1a1a', image:'images/griper.png', inStock:true, stock:1}
    ]
  },
  {
    id:'abs-wheel',
    name:'ABS Wheel',
    price:1190,
    tagline:'Për abs dhe forcë të barkut',
    description:'Rrotë e specializuar për trajnimin e abs dhe forcës qendrore, e përshtatshme për shtëpi ose sallë.',
    image:'images/abswheel.png',
    inStock:true,
    stock:0,
    variantType:'color',
    colors:[
      {name:'Black', hex:'#1a1a1a', image:'images/abswheel.png', inStock:true, stock:0}
    ]
  }
];

const OFFERS = [
  {
    id:'girls-bundle',
    name:'Girls Bundle',
    price:3190,
    tagline:'Oferte për vajzat',
    description:'Paketë e zgjedhur për stërvitje të këndshme dhe të besueshme me aksesorë të kombinuar për femra.',
    image:'images/girlsbundle.png',
    inStock:true,
    stock:1
  },
  {
    id:'grip-bundle',
    name:'Grip Bundle',
    price:2090,
    tagline:'Për grip me te fortë',
    description:'Paketë për të përmirësuar forcën e dorës dhe kontrollin gjatë çdo sesioni.',
    image:'images/gripbundle.png',
    inStock:true,
    stock:1
  },
  {
    id:'ultimate-bundle',
    name:'Ultimate Bundle',
    price:3990,
    tagline:'Essentials për stërvitje të plotë',
    description:'Bashkim i fuqishëm i aksesorëve të specializuar për një rutinë të plotë të stërvitjes.',
    image:'images/ultimatebundle.png',
    inStock:true,
    stock:1
  },
  {
    id:'gym-home-bundle',
    name:'Gym Home Bundle',
    price:3290,
    tagline:'Për stërvitje në shtëpi',
    description:'Paketë e kombinuar për stërvitje në shtëpi, me zgjedhje për meshkuj ose femra.',
    image:'images/gymhomeboysbundle.png',
    inStock:true,
    stock:0,
    variantType:'option',
    options:[
      {label:'M', name:'Male Bundle', image:'images/gymhomeboysbundle.png', inStock:true, stock:0},
      {label:'F', name:'Female Bundle', image:'images/gymhomegirlsbundle.png', inStock:true, stock:0}
    ]
  },
  {
    id:'wrist-bundle',
    name:'Wrist Bundle',
    price:1590,
    tagline:'Për stërvitje më të mirë',
    description:'Paketë e përqendruar te mbështetja e kyçeve dhe kontrollit gjatë ngritjes.',
    image:'images/wristbundle.png',
    inStock:true,
    stock:1
  }
];

let cart = []; /* {productId, name, price, variantLabel, qty, image} */
let currentProduct = null;
let selectedColor = null;
let selectedOption = null;
let selectedSize = null;
let selectedQty = 1;
function snapshotItem(item){
  const base = {
    id: item.id,
    stock: normalizeStock(item),
    inStock: isInStock(item)
  };

  if(Array.isArray(item.colors)){
    base.colors = item.colors.map(color => ({
      name: color.name,
      stock: normalizeStock(color),
      inStock: isInStock(color),
      sizeStock: color.sizeStock ? { ...color.sizeStock } : undefined
    }));
  }

  if(Array.isArray(item.options)){
    base.options = item.options.map(option => ({
      label: option.label,
      stock: normalizeStock(option),
      inStock: isInStock(option)
    }));
  }

  return base;
}
function hydrateStockState(){
  try{
    const saved = JSON.parse(localStorage.getItem(STOCK_STORAGE_KEY));
    if(!saved) return;

    const applyState = (list, savedList) => {
      if(!Array.isArray(savedList)) return;
      savedList.forEach(savedItem => {
        const item = list.find(entry => entry.id === savedItem.id);
        if(!item) return;
        if(typeof savedItem.stock === 'number') item.stock = savedItem.stock;
        if(typeof savedItem.inStock === 'boolean') item.inStock = savedItem.inStock;
        if(Array.isArray(savedItem.colors) && Array.isArray(item.colors)){
          savedItem.colors.forEach(savedColor => {
            const color = item.colors.find(entry => entry.name === savedColor.name);
            if(!color) return;
            if(typeof savedColor.stock === 'number') color.stock = savedColor.stock;
            if(typeof savedColor.inStock === 'boolean') color.inStock = savedColor.inStock;
            if(savedColor.sizeStock) color.sizeStock = { ...color.sizeStock, ...savedColor.sizeStock };
          });
        }
        if(Array.isArray(savedItem.options) && Array.isArray(item.options)){
          savedItem.options.forEach(savedOption => {
            const option = item.options.find(entry => entry.label === savedOption.label);
            if(!option) return;
            if(typeof savedOption.stock === 'number') option.stock = savedOption.stock;
            if(typeof savedOption.inStock === 'boolean') option.inStock = savedOption.inStock;
          });
        }
      });
    };

    applyState(PRODUCTS, saved.products);
    applyState(OFFERS, saved.offers);
  } catch(err){
    console.warn('Could not hydrate stock state', err);
  }
}
function persistStockState(){
  try{
    localStorage.setItem(STOCK_STORAGE_KEY, JSON.stringify({
      products: PRODUCTS.map(snapshotItem),
      offers: OFFERS.map(snapshotItem)
    }));
  } catch(err){
    console.warn('Could not persist stock state', err);
  }
}

hydrateStockState();

function isInStock(item){
  if(!item) return false;
  if(item.inStock === false && !Array.isArray(item.colors) && !Array.isArray(item.options)) return false;
  if(Array.isArray(item.colors)) return item.colors.some(color => isInStock(color));
  if(Array.isArray(item.options)) return item.options.some(option => isInStock(option));
  return normalizeStock(item) > 0;
}
function normalizeStock(item, fallback = DEFAULT_STOCK){
  if(!item) return 0;
  if(typeof item.stock === 'number') return Math.max(0, item.stock);
  if(item.inStock === false) return 0;
  return fallback;
}
function getFirstAvailableColor(product){
  return product.colors ? product.colors.find(c=>isInStock(c) && normalizeStock(c) > 0) || product.colors.find(c=>isInStock(c)) || null : null;
}
function getFirstAvailableOption(product){
  return product.options ? product.options.find(o=>isInStock(o) && normalizeStock(o) > 0) || product.options.find(o=>isInStock(o)) || null : null;
}
function getSizeQty(color, size){
  if(!color || !size || !color.sizeStock || typeof color.sizeStock[size] === 'undefined') return null;
  const stockValue = color.sizeStock[size];
  if(typeof stockValue === 'number') return Math.max(0, stockValue);
  if(stockValue === true) return normalizeStock(color, normalizeStock(color));
  return 0;
}
function getFirstAvailableSize(color){
  if(!color || !color.sizes) return null;
  return color.sizes.find(size => getSizeQty(color, size) > 0 || (typeof color.sizeStock?.[size] === 'boolean' && color.sizeStock[size])) || null;
}
function isSizeAvailable(color, size){
  if(!color || !color.sizes || !size) return false;
  if(!color.sizeStock) return true;
  const stockValue = color.sizeStock[size];
  if(typeof stockValue === 'number') return stockValue > 0;
  if(typeof stockValue === 'boolean') return stockValue;
  return true;
}
function getAvailableQty(product, color, size, option){
  if(!product || !isInStock(product)) return 0;
  const activeColor = color || getFirstAvailableColor(product);
  const activeOption = option || getFirstAvailableOption(product);

  if(product.variantType === 'option'){
    const qty = normalizeStock(activeOption, normalizeStock(product));
    return Math.max(0, qty);
  }
  if(product.variantType === 'color-size'){
    if(!activeColor) return 0;
    const sizeQty = getSizeQty(activeColor, size);
    if(sizeQty !== null) return Math.max(0, sizeQty);
    return Math.max(0, normalizeStock(activeColor, normalizeStock(product)));
  }
  if(product.variantType === 'color'){
    if(!activeColor) return 0;
    return Math.max(0, normalizeStock(activeColor, normalizeStock(product)));
  }
  return Math.max(0, normalizeStock(product));
}
function canAddToCart(product, color, size, option){
  if(!isInStock(product)) return false;
  const availableQty = getAvailableQty(product, color, size, option);
  return availableQty > 0;
}

/* ---------------- RENDER PRODUCT GRID ---------------- */
const grid = document.getElementById('productGrid');
PRODUCTS.forEach(p=>{
  const variantNote = !p.variantType ? 'Pa variacione' :
    p.variantType === 'color' ? p.colors.length + ' ngjyra' :
    p.variantType === 'color-size' ? p.colors.length + ' ngjyra · masa S–L' :
    p.variantType === 'option' ? 'Zgjedh M ose F' : 'Pa variacione';
  const card = document.createElement('div');
  const available = getAvailableQty(p, getFirstAvailableColor(p), null, getFirstAvailableOption(p)) > 0;
  card.className = `card${available ? '' : ' is-out'}`;
  card.onclick = ()=>{ if(available) openModal(p.id); };
  card.innerHTML = `
    <div class="card-media">
      <span class="card-tag">${p.tagline}</span>
      ${!isInStock(p) ? '<span class="status-pill">Out of stock</span>' : ''}
      ${mediaHTML(p.image, p.name)}
    </div>
    <div class="card-body">
      <h3>${p.name}</h3>
      <p class="card-desc">${p.description}</p>
      <div class="card-variants">${isInStock(p) ? variantNote : 'Jashtë stokut · ' + variantNote}</div>
      <div class="card-foot">
        <span class="price mono">${p.price} L</span>
        <span class="card-arrow">→</span>
      </div>
    </div>`;
  grid.appendChild(card);
});

function renderOffers(){
  const offerGrid = document.getElementById('offerGrid');
  if(!offerGrid) return;

  offerGrid.innerHTML = '';
  OFFERS.forEach(offer=>{
    const card = document.createElement('div');
    const available = getAvailableQty(offer, null, null, null) > 0;
    card.className = `card${available ? '' : ' is-out'}`;
    card.onclick = ()=>{ if(available) openOfferModal(offer.id); };
    card.innerHTML = `
      <div class="card-media">
        <span class="card-tag">${offer.tagline}</span>
        ${!isInStock(offer) ? '<span class="status-pill">Out of stock</span>' : ''}
        ${mediaHTML(offer.image, offer.name)}
      </div>
      <div class="card-body">
        <h3>${offer.name}</h3>
        <p class="card-desc">${offer.description}</p>
        <div class="card-variants">${available ? 'Oferta në stok' : 'Oferta jashtë stokut'}</div>
        <div class="card-foot">
          <span class="price mono">${offer.price} L</span>
          <span class="card-arrow">→</span>
        </div>
      </div>`;
    offerGrid.appendChild(card);
  });
}
renderOffers();

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
  if(!currentProduct || !isInStock(currentProduct) || getAvailableQty(currentProduct, getFirstAvailableColor(currentProduct), null, null) <= 0) return;

  currentProduct.source = 'product';
  selectedColor = getFirstAvailableColor(currentProduct);
  selectedOption = getFirstAvailableOption(currentProduct);
  if(currentProduct.variantType === 'color-size'){
    selectedSize = getFirstAvailableSize(selectedColor);
  } else {
    selectedSize = null;
  }
  selectedQty = 1;
  renderModal();
  document.getElementById('overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function openOfferModal(id){
  const offer = OFFERS.find(o=>o.id===id);
  if(!offer || !isInStock(offer) || getAvailableQty(offer, null, null, null) <= 0) return;

  currentProduct = { ...offer, source:'offer', variantType: offer.variantType || 'offer' };
  selectedColor = null;
  selectedOption = null;
  selectedSize = null;
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
  if(!p) return;

  if(p.variantType === 'color' || p.variantType === 'color-size'){
    if(!selectedColor || !isInStock(selectedColor) || normalizeStock(selectedColor, normalizeStock(p)) <= 0){
      selectedColor = getFirstAvailableColor(p);
    }
  }
  if(p.variantType === 'option'){
    if(!selectedOption || !isInStock(selectedOption) || normalizeStock(selectedOption, normalizeStock(p)) <= 0){
      selectedOption = getFirstAvailableOption(p);
    }
  }
  if(p.variantType === 'color-size' && selectedColor){
    const newSize = getFirstAvailableSize(selectedColor);
    if(!selectedSize || !isSizeAvailable(selectedColor, selectedSize)) selectedSize = newSize;
  }

  let variantHTML = '';
  const stockState = isInStock(p) ? 'Në stok' : 'Jashtë stokut';
  const maxQty = getAvailableQty(p, selectedColor, selectedSize, selectedOption);
  selectedQty = Math.min(selectedQty, Math.max(1, maxQty));

  if(p.variantType === 'color'){
    variantHTML += `<div class="field-label">Ngjyra${selectedColor ? ': ' + selectedColor.name : ''}</div><div class="swatches">`;
    p.colors.forEach(c=>{
      const disabled = !isInStock(c) || normalizeStock(c, normalizeStock(p)) <= 0;
      variantHTML += `<div>
        <div class="swatch ${selectedColor && selectedColor.name===c.name?'active':''} ${disabled?'is-disabled':''}" style="background:${c.hex}; ${disabled ? 'opacity:.4; cursor:not-allowed;' : ''}" ${disabled ? '' : `onclick="pickColor('${c.name}')"`} title="${c.name}"></div>
      </div>`;
    });
    variantHTML += `</div>`;
  }

  if(p.variantType === 'color-size'){
    variantHTML += `<div class="field-label">Ngjyra${selectedColor ? ': ' + selectedColor.name : ''}</div><div class="swatches">`;
    p.colors.forEach(c=>{
      const disabled = !isInStock(c) || normalizeStock(c, normalizeStock(p)) <= 0;
      variantHTML += `<div>
        <div class="swatch ${selectedColor && selectedColor.name===c.name?'active':''} ${disabled?'is-disabled':''}" style="background:${c.hex}; ${disabled ? 'opacity:.4; cursor:not-allowed;' : ''}" ${disabled ? '' : `onclick="pickColor('${c.name}')"`} title="${c.name}"></div>
      </div>`;
    });
    variantHTML += `</div>`;
    variantHTML += `<div class="field-label">Masa${selectedSize ? ': ' + selectedSize : ''}</div><div class="opt-row">`;
    ['S','M','L'].forEach(s=>{
      const available = selectedColor && isSizeAvailable(selectedColor, s) && (selectedColor.sizeStock ? selectedColor.sizeStock[s] > 0 : true);
      variantHTML += `<button type="button" class="opt-pill ${selectedSize===s?'active':''}" ${available?'':'disabled'} onclick="pickSize('${s}')">${s}</button>`;
    });
    variantHTML += `</div>`;
  }

  if(p.variantType === 'option'){
    variantHTML += `<div class="field-label">Zgjedhja${selectedOption ? ': ' + selectedOption.label : ''}</div><div class="opt-row">`;
    p.options.forEach(option=>{
      const available = isInStock(option) && normalizeStock(option, normalizeStock(p)) > 0;
      variantHTML += `<button type="button" class="opt-pill ${selectedOption && selectedOption.label===option.label?'active':''}" ${available?'':'disabled'} onclick="pickOption('${option.label}')">${option.label}</button>`;
    });
    variantHTML += `</div>`;
  }

  const priceTotal = p.price * selectedQty;
  const activeImage = (selectedOption && selectedOption.image) || (selectedColor && selectedColor.image) || p.image;
  const addDisabled = !canAddToCart(p, selectedColor, selectedSize, selectedOption) || maxQty <= 0;

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
            <button type="button" ${selectedQty <= 1 || addDisabled ? 'disabled' : ''} onclick="changeQty(-1)">−</button>
            <span>${selectedQty}</span>
            <button type="button" ${selectedQty >= maxQty || addDisabled ? 'disabled' : ''} onclick="changeQty(1)">+</button>
          </div>
          <span class="stock-note"><span class="stock-dot ${maxQty > 0 ? 'ok' : 'off'}"></span>${maxQty > 0 ? `${maxQty} në stok` : 'Jashtë stokut'}</span>
        </div>
      </div>
      <button class="add-btn" ${addDisabled ? 'disabled' : ''} onclick="addToCart()">Shto në Listë · ${priceTotal} L</button>
    </div>`;
}

function pickColor(name){
  const color = currentProduct.colors.find(c=>c.name===name);
  if(!color || !isInStock(color)) return;
  selectedColor = color;
  if(currentProduct.variantType === 'color-size'){
    selectedSize = getFirstAvailableSize(selectedColor);
  }
  renderModal();
}
function pickOption(label){
  const option = currentProduct.options.find(o=>o.label===label);
  if(!option || !isInStock(option) || normalizeStock(option, normalizeStock(currentProduct)) <= 0) return;
  selectedOption = option;
  selectedQty = 1;
  renderModal();
}
function pickSize(s){
  if(!selectedColor || !selectedColor.sizes || !isSizeAvailable(selectedColor, s)) return;
  selectedSize = s;
  renderModal();
}
function changeQty(delta){
  const p = currentProduct;
  const maxQty = getAvailableQty(p, selectedColor, selectedSize, selectedOption);
  if(maxQty <= 0) return;
  selectedQty = Math.max(1, Math.min(maxQty, selectedQty + delta));
  renderModal();
}

/* ---------------- CART ---------------- */
function addToCart(){
  const p = currentProduct;
  const maxQty = getAvailableQty(p, selectedColor, selectedSize, selectedOption);
  if(!canAddToCart(p, selectedColor, selectedSize, selectedOption) || selectedQty > maxQty) return;

  let variantLabel = '';
  if(p.variantType==='color') variantLabel = selectedColor.name;
  if(p.variantType==='color-size') variantLabel = `${selectedColor.name} / ${selectedSize}`;
  if(p.variantType==='option') variantLabel = `${selectedOption.label}`;

  const key = p.id + '|' + variantLabel;
  const existing = cart.find(i=>i.key===key);
  if(existing){
    existing.qty += selectedQty;
  } else {
    cart.push({
      key,
      source:p.source || 'product',
      productId:p.id,
      name:p.name,
      price:p.price,
      variantLabel,
      qty:selectedQty,
      image:(selectedOption && selectedOption.image) || (selectedColor && selectedColor.image) || p.image
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
      applyStockReservation(cart);
      persistStockState();
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

function applyStockReservation(cartItems){
  cartItems.forEach(item=>{
    const sourceList = item.source === 'offer' ? OFFERS : PRODUCTS;
    const product = sourceList.find(p=>p.id===item.productId);
    if(!product) return;

    if(item.source === 'offer'){
      product.stock = Math.max(0, normalizeStock(product) - item.qty);
      product.inStock = product.stock > 0;
      return;
    }

    if(product.variantType === 'option'){
      const option = product.options.find(o=>o.label===item.variantLabel);
      if(option){
        option.stock = Math.max(0, normalizeStock(option, normalizeStock(product)) - item.qty);
        option.inStock = option.stock > 0;
      }
      product.stock = Math.max(0, normalizeStock(product) - item.qty);
      product.inStock = product.stock > 0;
      return;
    }

    if(product.variantType === 'color-size'){
      const [colorName, size] = item.variantLabel.split(' / ');
      const color = product.colors.find(c=>c.name===colorName);
      if(color && color.sizeStock && size){
        color.sizeStock[size] = Math.max(0, (color.sizeStock[size] || 0) - item.qty);
        color.inStock = Object.values(color.sizeStock).some(value => value > 0);
      }
      product.stock = Math.max(0, normalizeStock(product) - item.qty);
      product.inStock = product.stock > 0;
      return;
    }

    if(product.variantType === 'color'){
      const color = product.colors.find(c=>c.name===item.variantLabel);
      if(color){
        color.stock = Math.max(0, normalizeStock(color, normalizeStock(product)) - item.qty);
        color.inStock = color.stock > 0;
      }
      product.stock = Math.max(0, normalizeStock(product) - item.qty);
      product.inStock = product.stock > 0;
    }
  });
}

renderCart();