// =============================================
// PRODUCT & CATEGORY DATA
// =============================================

const STORE_URL = window.location.origin + window.location.pathname.replace(/[^/]*$/, '');

const categories = [
    { id: '1', name: 'Atramenty', icon: '\u{1F5A4}' },
    { id: '2', name: 'Stalowki', icon: '\u{2712}\u{FE0F}' },
    { id: '3', name: 'Piora wieczne', icon: '\u{1F58B}\u{FE0F}' },
    { id: '4', name: 'Papier i Pergaminy', icon: '\u{1F4DC}' },
    { id: '5', name: 'Zestawy kaligraficzne', icon: '\u{1F3A8}' }
];

const products = [
    { id: 'INK-001', title: 'Atrament Czarny Klasyczny 50ml', price: 29.99, categoryId: '1', categoryName: 'Atramenty', icon: '\u{1F5A4}', sku: 'ATR-BLK-50', image: 'https://placehold.co/400x400/1a1a1a/ffffff?text=Atrament+Czarny', description: 'Klasyczny czarny atrament do kaligrafii. Doskonala plynnosc, gleboka czern. Idealny do codziennej pracy z piorem.' },
    { id: 'INK-002', title: 'Atrament Sepia Vintage 30ml', price: 34.99, categoryId: '1', categoryName: 'Atramenty', icon: '\u{1F90E}', sku: 'ATR-SEP-30', image: 'https://placehold.co/400x400/8B4513/ffffff?text=Atrament+Sepia', description: 'Atrament w kolorze sepii, inspirowany historycznymi dokumentami. Nadaje listom i kaligrafii antyczny charakter.' },
    { id: 'INK-003', title: 'Atrament Blekitny Niebo 50ml', price: 32.99, categoryId: '1', categoryName: 'Atramenty', icon: '\u{1F499}', sku: 'ATR-BLU-50', image: 'https://placehold.co/400x400/4682B4/ffffff?text=Atrament+Blekitny', description: 'Delikatny blekitny atrament o subtelnym odcieniu nieba. Swietny do listow i zaprosen.' },
    { id: 'INK-004', title: 'Zestaw Atramentow 6 kolorow', price: 89.99, categoryId: '1', categoryName: 'Atramenty', icon: '\u{1F3A8}', sku: 'ATR-SET-6', image: 'https://placehold.co/400x400/8b6914/ffffff?text=Zestaw+Atramentow', description: 'Zestaw szesciu atramentow w roznych kolorach: czarny, sepia, blekitny, zielony, fioletowy, czerwony.' },
    { id: 'NIB-001', title: 'Stalowka Nikko G', price: 12.99, categoryId: '2', categoryName: 'Stalowki', icon: '\u{2712}\u{FE0F}', sku: 'NIB-NKG-01', image: 'https://placehold.co/400x400/2c1810/ffffff?text=Nikko+G', description: 'Popularna stalowka Nikko G, idealna dla poczatkujacych. Elastyczna i latwa w uzyciu.' },
    { id: 'NIB-002', title: 'Stalowka Brause Steno Blue Pumpkin', price: 8.99, categoryId: '2', categoryName: 'Stalowki', icon: '\u{2712}\u{FE0F}', sku: 'NIB-BRS-01', image: 'https://placehold.co/400x400/2c1810/ffffff?text=Brause+Steno', description: 'Stalowka Brause o sredniej elastycznosci. Swietna do stylu italik i copperplate.' },
    { id: 'NIB-003', title: 'Stalowka Hunt 101', price: 14.99, categoryId: '2', categoryName: 'Stalowki', icon: '\u{2712}\u{FE0F}', sku: 'NIB-HNT-01', image: 'https://placehold.co/400x400/2c1810/ffffff?text=Hunt+101', description: 'Profesjonalna stalowka Hunt 101 z duzym zbiornikiem atramentu. Idealna do dlugich sesji kaligraficznych.' },
    { id: 'NIB-004', title: 'Zestaw stalowek 10 szt.', price: 49.99, categoryId: '2', categoryName: 'Stalowki', icon: '\u{2712}\u{FE0F}', sku: 'NIB-SET-10', image: 'https://placehold.co/400x400/2c1810/ffffff?text=Zestaw+Stalowek', description: 'Zestaw dziesieciu roznych stalowek do kaligrafii. Zawiera stalowki pointed pen i broad edge.' },
    { id: 'PEN-001', title: 'Pioro Wieczne Lamy Safari', price: 149.99, categoryId: '3', categoryName: 'Piora wieczne', icon: '\u{1F58B}\u{FE0F}', sku: 'PEN-LAM-01', image: 'https://placehold.co/400x400/333333/ffffff?text=Lamy+Safari', description: 'Kultowe pioro wieczne Lamy Safari. Ergonomiczny chwyt, wymienne naboje. Dostepne w kolorze czarnym.' },
    { id: 'PEN-002', title: 'Pioro Wieczne Platinum Preppy', price: 39.99, categoryId: '3', categoryName: 'Piora wieczne', icon: '\u{1F58B}\u{FE0F}', sku: 'PEN-PLT-01', image: 'https://placehold.co/400x400/333333/ffffff?text=Platinum+Preppy', description: 'Niedrogie pioro wieczne Platinum Preppy. Swietne dla poczatkujacych. Delikatna stalowka F.' },
    { id: 'PEN-003', title: 'Pioro Wieczne TWSBI Eco', price: 219.99, categoryId: '3', categoryName: 'Piora wieczne', icon: '\u{1F58B}\u{FE0F}', sku: 'PEN-TWS-01', image: 'https://placehold.co/400x400/333333/ffffff?text=TWSBI+Eco', description: 'Pioro tlokowe TWSBI Eco z przezroczystym korpusem. Duzy zbiornik atramentu, plynne pisanie.' },
    { id: 'PEN-004', title: 'Pioro Wieczne Parker Sonnet', price: 459.99, categoryId: '3', categoryName: 'Piora wieczne', icon: '\u{1F58B}\u{FE0F}', sku: 'PEN-PRK-01', image: 'https://placehold.co/400x400/333333/ffffff?text=Parker+Sonnet', description: 'Eleganckie pioro wieczne Parker Sonnet ze zlotym stalowka 18K. Idealny prezent dla milosnika pisania.' },
    { id: 'PAP-001', title: 'Blok do Kaligrafii A4 100 ark.', price: 44.99, categoryId: '4', categoryName: 'Papier i Pergaminy', icon: '\u{1F4C4}', sku: 'PAP-BLK-A4', image: 'https://placehold.co/400x400/f5f0e6/2c1810?text=Blok+A4', description: 'Blok papieru do kaligrafii formatu A4, 100 arkuszy. Gladka powierzchnia, gramatura 90g/m2.' },
    { id: 'PAP-002', title: 'Pergamin Naturalny A3', price: 19.99, categoryId: '4', categoryName: 'Papier i Pergaminy', icon: '\u{1F4DC}', sku: 'PAP-PRG-A3', image: 'https://placehold.co/400x400/f5f0e6/2c1810?text=Pergamin+A3', description: 'Autentyczny pergamin formatu A3. Naturalny kolor, idealna powierzchnia do kaligrafii.' },
    { id: 'PAP-003', title: 'Papier Bawelniany Kremowy 25 ark.', price: 54.99, categoryId: '4', categoryName: 'Papier i Pergaminy', icon: '\u{1F4C3}', sku: 'PAP-COT-25', image: 'https://placehold.co/400x400/f5f0e6/2c1810?text=Papier+Bawelniany', description: 'Luksusowy papier bawelniany w kolorze kremowym. 25 arkuszy, gramatura 120g/m2. Idealny do zaprosen.' },
    { id: 'PAP-004', title: 'Zwoj Pergaminu 5m', price: 79.99, categoryId: '4', categoryName: 'Papier i Pergaminy', icon: '\u{1F4DC}', sku: 'PAP-ZWJ-5M', image: 'https://placehold.co/400x400/f5f0e6/2c1810?text=Zwoj+Pergaminu', description: 'Zwoj pergaminu o dlugosci 5 metrow. Imitacja starozytnego pergaminu, idealny do dlugich projektow.' },
    { id: 'SET-001', title: 'Zestaw Startowy do Kaligrafii', price: 129.99, categoryId: '5', categoryName: 'Zestawy kaligraficzne', icon: '\u{1F381}', sku: 'SET-STR-01', image: 'https://placehold.co/400x400/c9a84c/2c1810?text=Zestaw+Startowy', description: 'Kompletny zestaw dla poczatkujacych: 3 stalowki, uchwyt, atrament czarny, blok A5. Idealny na prezent.' },
    { id: 'SET-002', title: 'Zestaw Profesjonalny Copperplate', price: 249.99, categoryId: '5', categoryName: 'Zestawy kaligraficzne', icon: '\u{1F381}', sku: 'SET-PRO-01', image: 'https://placehold.co/400x400/c9a84c/2c1810?text=Zestaw+Pro', description: 'Zestaw profesjonalny do stylu copperplate: 5 stalowek, 2 uchwyty, 3 atramenty, papier premium.' },
    { id: 'SET-003', title: 'Zestaw Pioro + Atrament Gift Box', price: 189.99, categoryId: '5', categoryName: 'Zestawy kaligraficzne', icon: '\u{1F381}', sku: 'SET-GFT-01', image: 'https://placehold.co/400x400/c9a84c/2c1810?text=Gift+Box', description: 'Elegancki zestaw prezentowy: pioro wieczne i atrament w ozdobnym pudelku. Idealny prezent.' },
    { id: 'SET-004', title: 'Zestaw Brush Lettering', price: 99.99, categoryId: '5', categoryName: 'Zestawy kaligraficzne', icon: '\u{1F381}', sku: 'SET-BRL-01', image: 'https://placehold.co/400x400/c9a84c/2c1810?text=Brush+Lettering', description: 'Zestaw do brush letteringu: 6 brush penow, blok papieru, poradnik. Swietny na poczatek przygody z liternictwem.' }
];

// =============================================
// CART (persisted in localStorage)
// =============================================
let cart = JSON.parse(localStorage.getItem('atramento_cart') || '[]');

function saveCart() {
    localStorage.setItem('atramento_cart', JSON.stringify(cart));
}

function addToCart(productId, qty) {
    const p = products.find(pr => pr.id === productId);
    if (!p) return;
    qty = qty || 1;
    const existing = cart.find(item => item.id === productId);
    if (existing) {
        existing.qty += qty;
    } else {
        cart.push({ id: p.id, title: p.title, price: p.price, icon: p.icon, sku: p.sku, image: p.image, categoryId: p.categoryId, categoryName: p.categoryName, qty: qty });
    }
    saveCart();
    updateCartUI();
    showToast('Dodano "' + p.title + '" do koszyka');
    edroneAddToCart(p);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartUI();
}

function updateCartUI() {
    var count = cart.reduce(function(sum, item) { return sum + item.qty; }, 0);
    var countEl = document.getElementById('cart-count');
    if (countEl) countEl.textContent = count;

    var cartItems = document.getElementById('cart-items');
    if (!cartItems) return;

    if (cart.length === 0) {
        cartItems.innerHTML = '<p style="text-align:center; color: var(--text-light); padding: 40px 0;">Koszyk jest pusty</p>';
    } else {
        cartItems.innerHTML = cart.map(function(item) {
            return '<div class="cart-item">' +
                '<div class="cart-item-icon">' + item.icon + '</div>' +
                '<div class="cart-item-details">' +
                    '<h4>' + item.title + '</h4>' +
                    '<div class="price">' + item.qty + ' x ' + item.price.toFixed(2) + ' zl</div>' +
                '</div>' +
                '<button class="cart-item-remove" onclick="removeFromCart(\'' + item.id + '\')">&times;</button>' +
            '</div>';
        }).join('');
    }

    var total = cart.reduce(function(sum, item) { return sum + item.price * item.qty; }, 0);
    var totalEl = document.getElementById('cart-total-price');
    if (totalEl) totalEl.textContent = total.toFixed(2) + ' zl';
}

function toggleCart() {
    document.getElementById('cart-panel').classList.toggle('open');
    document.getElementById('cart-overlay').classList.toggle('open');
}

function checkout() {
    if (cart.length === 0) {
        showToast('Koszyk jest pusty!');
        return;
    }
    var orderId = 'ORD-' + Date.now();
    edroneOrder(orderId, cart);
    cart = [];
    saveCart();
    updateCartUI();
    toggleCart();
    window.location.href = 'thank-you.html?order=' + orderId;
}

// =============================================
// TOAST
// =============================================
function showToast(msg) {
    var toast = document.getElementById('toast');
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(function() { toast.classList.remove('show'); }, 2500);
}

// =============================================
// PRODUCT CARD HTML HELPER
// =============================================
function productCardHTML(p) {
    return '<div class="product-card">' +
        '<div class="product-image"><a href="product.html?id=' + p.id + '"><img src="' + p.image + '" alt="' + p.title + '"/></a></div>' +
        '<div class="product-info">' +
            '<div class="product-category">' + p.categoryName + '</div>' +
            '<h3><a href="product.html?id=' + p.id + '">' + p.title + '</a></h3>' +
            '<div class="product-price">' + p.price.toFixed(2) + ' zl</div>' +
            '<button class="btn btn-primary" onclick="addToCart(\'' + p.id + '\')">Dodaj do koszyka</button>' +
        '</div>' +
    '</div>';
}

// =============================================
// EDRONE TRACKING
// =============================================
function edroneReset() {
    var fields = [
        'action_type', 'email', 'first_name', 'last_name', 'user_id',
        'subscriber_status', 'sms_subscriber_status', 'customer_tags',
        'product_ids', 'product_skus', 'product_titles', 'product_images',
        'product_urls', 'product_availability', 'product_counts',
        'product_category_ids', 'product_category_names',
        'order_id', 'country', 'city', 'base_currency', 'order_currency',
        'base_payment_value', 'order_payment_value', 'phone'
    ];
    fields.forEach(function(f) { delete _edrone[f]; });
}

function edroneHomepageView() {
    edroneReset();
    _edrone.action_type = 'homepage_view';
    if (typeof _edrone.init === 'function') _edrone.init();
}

function edroneProductView(product) {
    edroneReset();
    _edrone.action_type = 'product_view';
    _edrone.product_ids = product.id;
    _edrone.product_titles = encodeURIComponent(product.title);
    _edrone.product_images = encodeURIComponent(product.image);
    _edrone.product_urls = encodeURIComponent(STORE_URL + 'product.html?id=' + product.id);
    _edrone.product_skus = product.sku;
    _edrone.product_category_ids = product.categoryId;
    _edrone.product_category_names = encodeURIComponent(product.categoryName);
    _edrone.product_availability = '1';
    if (typeof _edrone.init === 'function') _edrone.init();
}

function edroneCategoryView(categoryIds, categoryNames) {
    edroneReset();
    _edrone.action_type = 'category_view';
    _edrone.product_category_ids = categoryIds;
    _edrone.product_category_names = encodeURIComponent(categoryNames);
    if (typeof _edrone.init === 'function') _edrone.init();
}

function edroneAddToCart(product) {
    edroneReset();
    _edrone.action_type = 'add_to_cart';
    _edrone.product_ids = product.id;
    _edrone.product_titles = encodeURIComponent(product.title);
    _edrone.product_images = encodeURIComponent(product.image);
    _edrone.product_urls = encodeURIComponent(STORE_URL + 'product.html?id=' + product.id);
    _edrone.product_skus = product.sku;
    _edrone.product_category_ids = product.categoryId;
    _edrone.product_category_names = encodeURIComponent(product.categoryName);
    if (typeof _edrone.init === 'function') _edrone.init();
}

function edroneOrder(orderId, cartItems) {
    edroneReset();
    _edrone.action_type = 'order';
    _edrone.email = 'klient@atramento.pl';
    _edrone.first_name = 'Jan';
    _edrone.last_name = 'Kowalski';
    _edrone.user_id = 'CUST-001';
    _edrone.subscriber_status = '1';
    _edrone.order_id = orderId;
    _edrone.country = 'PL';
    _edrone.city = 'Krakow';
    _edrone.base_currency = 'PLN';
    _edrone.order_currency = 'PLN';
    var total = cartItems.reduce(function(s, i) { return s + i.price * i.qty; }, 0);
    _edrone.base_payment_value = total.toFixed(2);
    _edrone.order_payment_value = total.toFixed(2);
    _edrone.product_ids = cartItems.map(function(i) { return i.id; }).join('|');
    _edrone.product_skus = cartItems.map(function(i) { return i.sku; }).join('|');
    _edrone.product_titles = cartItems.map(function(i) { return encodeURIComponent(i.title); }).join('|');
    _edrone.product_images = cartItems.map(function(i) { return encodeURIComponent(i.image); }).join('|');
    _edrone.product_urls = cartItems.map(function(i) { return encodeURIComponent(STORE_URL + 'product.html?id=' + i.id); }).join('|');
    _edrone.product_counts = cartItems.map(function(i) { return i.qty; }).join('|');
    _edrone.product_category_ids = cartItems.map(function(i) { return i.categoryId; }).join('|');
    _edrone.product_category_names = cartItems.map(function(i) { return encodeURIComponent(i.categoryName); }).join('|');
    if (typeof _edrone.init === 'function') _edrone.init();
}

function edroneSubscribe(email, firstName, tag) {
    edroneReset();
    _edrone.action_type = 'subscribe';
    _edrone.email = email;
    _edrone.subscriber_status = '1';
    _edrone.customer_tags = tag || 'Newsletter';
    if (firstName) _edrone.first_name = firstName;
    if (typeof _edrone.init === 'function') _edrone.init();
}

// =============================================
// EDRONE EVENT SIMULATOR
// =============================================
var simulatorInterval = null;

var fakeCustomers = [
    { email: 'anna.nowak@gmail.com', first_name: 'Anna', last_name: 'Nowak', user_id: 'CUST-SIM-001' },
    { email: 'piotr.wisniewski@wp.pl', first_name: 'Piotr', last_name: 'Wisniewski', user_id: 'CUST-SIM-002' },
    { email: 'maria.kowalczyk@onet.pl', first_name: 'Maria', last_name: 'Kowalczyk', user_id: 'CUST-SIM-003' },
    { email: 'jan.zielinski@gmail.com', first_name: 'Jan', last_name: 'Zielinski', user_id: 'CUST-SIM-004' },
    { email: 'katarzyna.wozniak@yahoo.com', first_name: 'Katarzyna', last_name: 'Wozniak', user_id: 'CUST-SIM-005' },
];

var simulatedActions = [
    { type: 'homepage_view', weight: 25 },
    { type: 'product_view', weight: 25 },
    { type: 'category_view', weight: 15 },
    { type: 'add_to_cart', weight: 12 },
    { type: 'subscribe', weight: 8 },
    { type: 'order', weight: 10 },
    { type: 'order_cancel', weight: 5 },
];

var simOrderCounter = 1000;

function pickWeightedAction() {
    var totalWeight = simulatedActions.reduce(function(s, a) { return s + a.weight; }, 0);
    var rand = Math.random() * totalWeight;
    for (var i = 0; i < simulatedActions.length; i++) {
        rand -= simulatedActions[i].weight;
        if (rand <= 0) return simulatedActions[i].type;
    }
    return 'homepage_view';
}

function pickRandomProduct() { return products[Math.floor(Math.random() * products.length)]; }
function pickRandomCategory() { return categories[Math.floor(Math.random() * categories.length)]; }
function pickRandomCustomerOrAnon() {
    if (Math.random() < 0.4) return null;
    return fakeCustomers[Math.floor(Math.random() * fakeCustomers.length)];
}

function simulateEvent() {
    var actionType = pickWeightedAction();
    var customer = pickRandomCustomerOrAnon();
    var isAnon = !customer;

    edroneReset();
    if (customer) {
        _edrone.email = customer.email;
        _edrone.first_name = customer.first_name;
        _edrone.last_name = customer.last_name;
        _edrone.user_id = customer.user_id;
    }

    var logDetail = '';

    switch (actionType) {
        case 'homepage_view':
            _edrone.action_type = 'homepage_view';
            logDetail = 'Strona glowna';
            if (typeof _edrone.init === 'function') _edrone.init();
            break;
        case 'product_view':
            var p = pickRandomProduct();
            _edrone.action_type = 'product_view';
            _edrone.product_ids = p.id;
            _edrone.product_titles = encodeURIComponent(p.title);
            _edrone.product_images = encodeURIComponent(p.image);
            _edrone.product_urls = encodeURIComponent(STORE_URL + 'product.html?id=' + p.id);
            _edrone.product_skus = p.sku;
            _edrone.product_category_ids = p.categoryId;
            _edrone.product_category_names = encodeURIComponent(p.categoryName);
            _edrone.product_availability = '1';
            logDetail = p.title;
            if (typeof _edrone.init === 'function') _edrone.init();
            break;
        case 'category_view':
            var cat = pickRandomCategory();
            _edrone.action_type = 'category_view';
            _edrone.product_category_ids = cat.id;
            _edrone.product_category_names = encodeURIComponent(cat.name);
            logDetail = cat.name;
            if (typeof _edrone.init === 'function') _edrone.init();
            break;
        case 'add_to_cart':
            var p2 = pickRandomProduct();
            _edrone.action_type = 'add_to_cart';
            _edrone.product_ids = p2.id;
            _edrone.product_titles = encodeURIComponent(p2.title);
            _edrone.product_images = encodeURIComponent(p2.image);
            _edrone.product_urls = encodeURIComponent(STORE_URL + 'product.html?id=' + p2.id);
            _edrone.product_skus = p2.sku;
            _edrone.product_category_ids = p2.categoryId;
            _edrone.product_category_names = encodeURIComponent(p2.categoryName);
            logDetail = p2.title;
            if (typeof _edrone.init === 'function') _edrone.init();
            break;
        case 'subscribe':
            var subCustomer = customer || fakeCustomers[Math.floor(Math.random() * fakeCustomers.length)];
            _edrone.action_type = 'subscribe';
            _edrone.email = subCustomer.email;
            _edrone.first_name = subCustomer.first_name;
            _edrone.subscriber_status = '1';
            var tags = ['Newsletter Footer', 'Exit Popup', 'Sidebar Form', 'Checkout Subscribe'];
            _edrone.customer_tags = tags[Math.floor(Math.random() * tags.length)];
            logDetail = subCustomer.email + ' (' + _edrone.customer_tags + ')';
            if (typeof _edrone.init === 'function') _edrone.init();
            break;
        case 'order':
            var orderCustomer = customer || fakeCustomers[Math.floor(Math.random() * fakeCustomers.length)];
            var orderProducts = [];
            var numProducts = Math.floor(Math.random() * 3) + 1;
            for (var i = 0; i < numProducts; i++) orderProducts.push(Object.assign({}, pickRandomProduct(), { qty: Math.floor(Math.random() * 3) + 1 }));
            var orderId = 'SIM-ORD-' + (simOrderCounter++);
            var total = orderProducts.reduce(function(s, p) { return s + p.price * p.qty; }, 0);
            _edrone.action_type = 'order';
            _edrone.email = orderCustomer.email;
            _edrone.first_name = orderCustomer.first_name;
            _edrone.last_name = orderCustomer.last_name;
            _edrone.user_id = orderCustomer.user_id;
            _edrone.subscriber_status = '1';
            _edrone.order_id = orderId;
            _edrone.country = 'PL';
            _edrone.city = ['Krakow', 'Warszawa', 'Wroclaw', 'Gdansk', 'Poznan'][Math.floor(Math.random() * 5)];
            _edrone.base_currency = 'PLN';
            _edrone.order_currency = 'PLN';
            _edrone.base_payment_value = total.toFixed(2);
            _edrone.order_payment_value = total.toFixed(2);
            _edrone.product_ids = orderProducts.map(function(p) { return p.id; }).join('|');
            _edrone.product_skus = orderProducts.map(function(p) { return p.sku; }).join('|');
            _edrone.product_titles = orderProducts.map(function(p) { return encodeURIComponent(p.title); }).join('|');
            _edrone.product_images = orderProducts.map(function(p) { return encodeURIComponent(p.image); }).join('|');
            _edrone.product_urls = orderProducts.map(function(p) { return encodeURIComponent(STORE_URL + 'product.html?id=' + p.id); }).join('|');
            _edrone.product_counts = orderProducts.map(function(p) { return p.qty; }).join('|');
            _edrone.product_category_ids = orderProducts.map(function(p) { return p.categoryId; }).join('|');
            _edrone.product_category_names = orderProducts.map(function(p) { return encodeURIComponent(p.categoryName); }).join('|');
            logDetail = orderId + ' (' + total.toFixed(2) + ' PLN, ' + orderCustomer.email + ')';
            if (typeof _edrone.init === 'function') _edrone.init();
            break;
        case 'order_cancel':
            var cancelCustomer = customer || fakeCustomers[Math.floor(Math.random() * fakeCustomers.length)];
            var cancelOrderId = 'SIM-ORD-' + Math.floor(Math.random() * simOrderCounter);
            var data = new URLSearchParams({
                app_id: _edrone.app_id,
                sender_type: 'server',
                action_type: 'order_cancel',
                order_id: cancelOrderId,
                email: cancelCustomer.email
            });
            fetch('https://api.edrone.me/trace', { method: 'POST', body: data }).catch(function() {});
            logDetail = cancelOrderId + ' (' + cancelCustomer.email + ')';
            break;
    }

    addLogEntry(actionType, customer, logDetail, isAnon && actionType !== 'subscribe' && actionType !== 'order');
}

function addLogEntry(actionType, customer, detail, isAnon) {
    var time = new Date().toLocaleTimeString();
    var userInfo = isAnon
        ? '<span class="log-anon">anonim</span>'
        : '<span class="log-email">' + (customer ? customer.email : '?') + '</span>';
    var entry = '<div class="log-entry"><span class="log-time">' + time + '</span> <span class="log-action">' + actionType + '</span> ' + userInfo + '<br/><small>' + detail + '</small></div>';
    var logEl = document.getElementById('sim-log');
    if (!logEl) return;
    logEl.innerHTML = entry + logEl.innerHTML;
    var entries = logEl.querySelectorAll('.log-entry');
    for (var i = 50; i < entries.length; i++) entries[i].remove();
}

function startSimulator() {
    if (simulatorInterval) return;
    function scheduleNext() {
        var delay = 3000 + Math.random() * 5000;
        simulatorInterval = setTimeout(function() {
            simulateEvent();
            scheduleNext();
        }, delay);
    }
    simulateEvent();
    scheduleNext();
    document.getElementById('sim-status').textContent = 'Dziala...';
    document.getElementById('sim-status').style.color = '#4ecdc4';
    document.getElementById('sim-start').classList.add('active');
}

function stopSimulator() {
    if (simulatorInterval) { clearTimeout(simulatorInterval); simulatorInterval = null; }
    document.getElementById('sim-status').textContent = 'Zatrzymany';
    document.getElementById('sim-status').style.color = '#e0e0e0';
    document.getElementById('sim-start').classList.remove('active');
}

function sendSingleEvent() { simulateEvent(); }
function clearSimLog() { var el = document.getElementById('sim-log'); if (el) el.innerHTML = ''; }
function toggleSimulator() { document.getElementById('sim-panel').classList.toggle('open'); }

// Init cart UI on page load
document.addEventListener('DOMContentLoaded', function() { updateCartUI(); });
