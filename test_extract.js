
/* &#x2500;&#x2500; DATA &#x2500;&#x2500; */
const BOOKS = [
    { id:1, title:"Java Spring Boot Asoslari", author:"Jaloliddin Qodirov", category:"IT & Dasturlash", rating:4.9, progress:80, trend:true, isNew:true, cover:"https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=600&q=80", desc:"Spring Boot frameworkini 0 dan professional darajagacha o'rganish bo'yicha amaliy qo'llanma." },
    { id:2, title:"Clean Code: Pokiza Kod", author:"Robert C. Martin", category:"IT & Dasturlash", rating:5.0, progress:45, trend:true, isNew:false, cover:"https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80", desc:"Professional dasturchilar uchun o'qilishi oson va toza kod yozish sirlari." },
    { id:3, title:"Atomic Habits (Atom Odatlari)", author:"James Clear", category:"Shaxsiy Rivojlanish", rating:4.95, progress:90, trend:true, isNew:true, cover:"https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80", desc:"Kichik 1% o'zgarishlar orqali katta natijalarga erishish va ijobiy odatlar shakllantirish." },
    { id:4, title:"O'tkan Kunlar", author:"Abdulla Qodiriy", category:"Badiiy", rating:4.9, progress:100, trend:false, isNew:false, cover:"https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=600&q=80", desc:"O'zbek adabiyotining eng mashhur tarixi romani. Otabek va Kumushning fojiali sevgisi." },
    { id:5, title:"Boy Ota, Kambag'al Ota", author:"Robert Kiyosaki", category:"Biznes", rating:4.8, progress:55, trend:true, isNew:false, cover:"https://images.unsplash.com/photo-1592496431122-2349e0fbc666?auto=format&fit=crop&w=600&q=80", desc:"Moliyaviy savodxonlik, investitsiya va boylikni oshirish haqidagi jahon bestselleri." },
    { id:6, title:"Algoritmlar va Ma'lumotlar Tuzilmasi", author:"Aditya Bhargava", category:"IT & Dasturlash", rating:4.85, progress:30, trend:false, isNew:true, cover:"https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=600&q=80", desc:"Visual va sodda usulda algoritmik fikrlashni shakllantiruvchi qo'llanma." },
    { id:7, title:"Deep Work", author:"Cal Newport", category:"Shaxsiy Rivojlanish", rating:4.7, progress:0, trend:false, isNew:true, cover:"https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=600&q=80", desc:"Diqqatni jamlagan holda chuqur fikrlab ishlash usullari." },
    { id:8, title:"Ikigai: Yaponcha Baxtning Siri", author:"H&eacute;ctor Garc&iacute;a", category:"Psixologiya", rating:4.75, progress:0, trend:true, isNew:false, cover:"https://images.unsplash.com/photo-1507838153414-b4b713384a76?auto=format&fit=crop&w=600&q=80", desc:"Hayotdan zavq olish va o'z maqsadingizni topish haqidagi yapon falsafasi." },
];



const QUOTES = [
    { text:"Kitoblar eng yaxshi do'stlar. Ular seni hech qachon aldamaydi, hech qachon tark etmaydi.", author:"\u2014 Vladimir Lenin" },
    { text:"Kuniga bir soat kitob o'qing. Bu sizni dunyodagi har qanday sohadagi ekspertga aylantiradi \u2014 7 yil ichida.", author:"\u2014 Earl Nightingale" },
    { text:"Kitob o'qimaydigan kishi o'qiy olmaydigan kishidan ko'ra afzalligiga ega emas.", author:"\u2014 Mark Twain" },
    { text:"Bir kitob o'qigan yuz kishi bor, lekin uni his qilgan faqat bitta kishi.", author:"\u2014 Leo Tolstoy" },
    { text:"O'qish \u2014 bu xotiraning mashqi, tafakkurning quroli va ruhning ozuqasi.", author:"\u2014 Francis Bacon" },
    { text:"Eng yaxshi do'st \u2014 kitob. U doim haqiqatni aytadi va so'z qaytarmaydi.", author:"\u2014 Ernest Hemingway" },
    { text:"Bitta kitob hayotingizni butunlay o'zgartirishi mumkin. O'shing.", author:"\u2014 Kutubxona" },
];







const FAQS = [
    { q:"Kitoblarni yuklab olish bepulmi?", a:"Ha! Bepul tarifdagi foydalanuvchilar 5 ta kitobni bepul o'qishi mumkin. Pro va VIP obunachilari esa cheksiz yuklab olish imkoniyatiga ega bo'ladi." },
    { q:"Audio kitoblarni qanday tinglash mumkin?", a:"Audio Kutubxona sahifasiga o'tib, play tugmasini bosing. Kitob to'g'ridan-to'g'ri saytda ijro etiladi va orqa fonda davom ettirish mumkin." },
    { q:"Kitob bron qilish qanday ishlaydi?", a:"Agar siz istagan kitob boshqa kitobxonda bo'lsa, navbatga yozilasiz. Kitob qaytgach Telegram bot va email orqali xabar olasiz." },
    { q:"Ro'yxatdan o'tish majburiymi?", a:"Yo'q. Bosh sahifani, katalogni va 5 ta kitobni ochish uchun ro'yxat shart emas. Lekin progress, favorites va AI tavsiyalar uchun kirish kerak." },
    { q:"Badge va ball tizimi qanday ishlaydi?", a:"Har bir kitobni tugatganingizda ball yig'asiz. Maxsus shartlarni bajarib badge olasiz. Oylik leaderboard'da eng ko'p ball to'plagan 3 kishi sovg'a yutadi." },
];

const NOTIFICATIONS = [
    { icon:`<svg width="1.1em" height="1.1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: -0.125em;"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>`, title:"Yangi kitob qo'shildi", text:'"Deep Work" Cal Newport tomonidan kutubxonaga qo\'shildi.', time:"5 daqiqa oldin" },
    { icon:`<svg width="1.1em" height="1.1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: -0.125em;"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>`, title:"Bron tasdiqlandi", text:'"Atomic Habits" bron qilingan kitob 3 kun ichida qaytadi.', time:"1 soat oldin" },
    { icon:`<svg width="1.1em" height="1.1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: -0.125em;"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>`, title:"Badge olingdi!", text:'Siz "Top Reader" badge oldingiz! Tabriklaymiz <svg width="1.1em" height="1.1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-0.125em"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>', time:"Kecha" },
    { icon:"&#x23F0;", title:"O'qish vaqti", text:"Bugun 20 sahifa o'qishni unutmang!", time:"2 soat oldin" },
    { icon:`<svg width="1.1em" height="1.1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: -0.125em;"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>`, title:"Obuna yangilandi", text:"Pro obunangiz yana 28 kun davom etadi.", time:"3 kun oldin" },
];

/* &#x2500;&#x2500; STATE &#x2500;&#x2500; */
let currentCategory = 'all';
let sortMode = 'new';
let activeBook = null;
const favorites = new Set();
const readLater = new Set();
let quoteIndex = 0;
let quoteTimer = null;

/* &#x2500;&#x2500; ROUTING (SPA Pages) &#x2500;&#x2500; */
function showPage(name) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const page = document.getElementById('page-' + name);
    if (page) {
        page.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    // Update bottom nav active state
    document.querySelectorAll('.bnav-btn').forEach(b => {
        b.classList.toggle('active', b.id === 'bnav-' + name);
    });
    // Lazy-init page content
    
    if (name === 'profile') { updateProfilePage(); }
    if (name === 'notifications') { renderNotifications(); }
    
    
    if (name === 'catalog') { renderCatalog(); }
}

/* &#x2500;&#x2500; MOBILE MENU &#x2500;&#x2500; */
function toggleMobileMenu() {
    const drawer = document.getElementById('mobileDrawer');
    const btn = document.getElementById('hamburgerBtn');
    drawer.classList.toggle('open');
    btn.classList.toggle('open');
    document.body.style.overflow = drawer.classList.contains('open') ? 'hidden' : '';
}
function closeMobileMenu() {
    document.getElementById('mobileDrawer').classList.remove('open');
    document.getElementById('hamburgerBtn').classList.remove('open');
    document.body.style.overflow = '';
}
function navTo(name) {
    closeMobileMenu();
    setTimeout(() => showPage(name), 280);
}

/* <svg width="1.1em" height="1.1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: -0.125em;"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> PROFILE <svg width="1.1em" height="1.1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: -0.125em;"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> */
function updateProfilePage() {
    let user = JSON.parse(localStorage.getItem('user') || '{}');
    if (!user) user = {};
    const name = user.fullName || user.username || 'Mehmon Foydalanuvchi';
    
    const el = document.getElementById('profileName');
    if (el) el.textContent = name;
    
    const av = document.getElementById('profileAvatar');
    if (av) av.textContent = name.charAt(0).toUpperCase();

    // Game stats
    const lvlEl = document.getElementById('profileLevel');
    if (lvlEl) {
        let title = user.level > 10 ? 'Expert Reader' : user.level > 5 ? 'Pro Reader' : 'Beginner';
        lvlEl.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg> ${title} (Level ${user.level || 1})`;
    }
    const streakEl = document.getElementById('profileStreak');
    if (streakEl) {
        streakEl.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path></svg> ${user.streak || 0} Kun Streak`;
    }
    const xpEl = document.getElementById('profileXp');
    if (xpEl) {
        xpEl.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20v-6M6 20V10M18 20V4"></path></svg> ${(user.xp || 0).toLocaleString()} XP`;
    }
}

/* &#x2500;&#x2500; QUOTE ROTATOR &#x2500;&#x2500; */
function initQuotes() {
    const dotsEl = document.getElementById('quoteDots');
    dotsEl.innerHTML = QUOTES.map((_, i) => `<div class="quote-dot${i===0?' active':''}" onclick="goQuote(${i})"></div>`).join('');
    showQuote(0);
    quoteTimer = setInterval(() => { quoteIndex = (quoteIndex + 1) % QUOTES.length; showQuote(quoteIndex); }, 4500);
}
function showQuote(i) {
    quoteIndex = i;
    document.getElementById('quoteText').textContent = '"' + QUOTES[i].text + '"';
    document.getElementById('quoteAuthor').textContent = QUOTES[i].author;
    document.querySelectorAll('.quote-dot').forEach((d, idx) => d.classList.toggle('active', idx === i));
}
function goQuote(i) { clearInterval(quoteTimer); showQuote(i); quoteTimer = setInterval(() => { quoteIndex = (quoteIndex+1)%QUOTES.length; showQuote(quoteIndex); }, 4500); }

/* &#x2500;&#x2500; COUNTER ANIMATION &#x2500;&#x2500; */
function animCount(id, target, suffix='') {
    let start = 0; const step = target / 60;
    const el = document.getElementById(id);
    const t = setInterval(() => {
        start += step; if (start >= target) { start = target; clearInterval(t); }
        el.textContent = Math.floor(start).toLocaleString('uz-UZ') + suffix;
    }, 25);
}

/* &#x2500;&#x2500; BOOK CARD HTML &#x2500;&#x2500; */
function bookCardHTML(book) {
    return `
    <div class="book-card" id="bcard-${book.id}">
        <button class="fav-btn ${favorites.has(book.id)?'active':''}" onclick="toggleFav(event,${book.id})" title="Sevimlilarga qo'shish">&#x2665;</button>
        <div class="cover-wrap" onclick="openBookModal(${book.id})">
            ${book.category ? `<span class="cat-badge">${book.category}</span>` : ''}
            ${book.trend ? `<span class="trend-badge"><svg width="1.1em" height="1.1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: -0.125em;"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path></svg> Trend</span>` : ''}
            <img src="${book.cover}" alt="${book.title}" loading="lazy">
        </div>
        <div onclick="openBookModal(${book.id})">
            <div class="book-title">${book.title}</div>
            <div class="book-auth">${book.author}</div>
            <div class="progress-wrap">
                <div class="progress-lbl">${book.progress > 0 ? `O'qildi: ${book.progress}%` : 'Boshlanmagan'}</div>
                <div class="progress-bar"><div class="progress-fill" style="width:${book.progress}%"></div></div>
            </div>
        </div>
        <div class="book-footer">
            <div class="rating"><svg width="1.1em" height="1.1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: -0.125em;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg> ${book.rating}</div>
            <button class="read-btn" onclick="openBookModal(${book.id})">O'qish &rarr;</button>
        </div>
    </div>`;
}

/* &#x2500;&#x2500; HOME TRENDING &#x2500;&#x2500; */
function renderTrending() {
    const trend = BOOKS.filter(b => b.trend).slice(0, 3);
    document.getElementById('trendingGrid').innerHTML = trend.map(bookCardHTML).join('');
}

/* &#x2500;&#x2500; CATALOG &#x2500;&#x2500; */
function renderCatalog() {
    const search = (document.getElementById('catalogSearch')?.value || '').toLowerCase();
    let list = [...BOOKS];
    if (currentCategory !== 'all') list = list.filter(b => b.category === currentCategory);
    if (search) list = list.filter(b => b.title.toLowerCase().includes(search) || b.author.toLowerCase().includes(search));
    if (sortMode === 'rating') list.sort((a,b) => b.rating - a.rating);
    else if (sortMode === 'top') list.sort((a,b) => b.progress - a.progress);
    else if (sortMode === 'trend') list = list.filter(b => b.trend);
    const grid = document.getElementById('catalogGrid');
    if (grid) grid.innerHTML = list.length ? list.map(bookCardHTML).join('') : '<p style="color:var(--muted);">Natija topilmadi.</p>';
}
function setCategory(cat, btn) {
    currentCategory = cat;
    document.querySelectorAll('.cat-pill').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderCatalog();
}
function setSortMode(mode, btn) {
    sortMode = mode;
    document.querySelectorAll('#page-catalog .cat-pill[id^="sort"]').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderCatalog();
}
function filterCatalog() { renderCatalog(); }
function handleHomeSearch() {
    const q = document.getElementById('homeSearch').value;
    if (q.length > 1) { showPage('catalog'); setTimeout(() => { const ci = document.getElementById('catalogSearch'); if(ci) ci.value = q; renderCatalog(); }, 100); }
}

/* &#x2500;&#x2500; AUDIO &#x2500;&#x2500; */
/* &#x2500;&#x2500; LEADERBOARD &#x2500;&#x2500; */
/* &#x2500;&#x2500; BADGES &#x2500;&#x2500; */
/* &#x2500;&#x2500; HEATMAP &#x2500;&#x2500; */
function renderHeatmap() {
    const el = document.getElementById('heatmapGrid');
    if (!el) return;
    let html = '';
    for (let i = 0; i < 26; i++) {
        html += '<div class="hcol">';
        for (let j = 0; j < 5; j++) {
            const r = Math.random();
            const cls = r < .3 ? '' : r < .5 ? 'l1' : r < .7 ? 'l2' : r < .88 ? 'l3' : 'l4';
            html += `<div class="hcell ${cls}"></div>`;
        }
        html += '</div>';
    }
    el.innerHTML = html;
}

/* &#x2500;&#x2500; PROFILE &#x2500;&#x2500; */
function updateProfilePage() {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const name = user.fullName || user.username || 'Mehmon Foydalanuvchi';
    const el = document.getElementById('profileName');
    if (el) el.textContent = name;
    const av = document.getElementById('profileAvatar');
    if (av) av.textContent = name.charAt(0).toUpperCase();

    const favEl = document.getElementById('favList');
    if (favEl) {
        if (favorites.size === 0) { favEl.innerHTML = '<div style="color:var(--muted);font-size:.9rem;">Hali sevimlilar ro\'yxatiga kitob qo\'shilmagan.</div>'; }
        else { favEl.innerHTML = [...favorites].map(id => { const b = BOOKS.find(x => x.id === id); return b ? `<div style="font-weight:700;padding:10px 14px;background:rgba(255,255,255,.04);border-radius:14px;border:1px solid var(--border);">&#x2764;&#xFE0F; ${b.title} \u2014 ${b.author}</div>` : ''; }).join(''); }
    }
    const rlEl = document.getElementById('readLaterList');
    if (rlEl) {
        if (readLater.size === 0) { rlEl.innerHTML = '<div style="color:var(--muted);font-size:.9rem;">"Keyin o\'qiyman" ro\'yxatingiz bo\'sh.</div>'; }
        else { rlEl.innerHTML = [...readLater].map(id => { const b = BOOKS.find(x => x.id === id); return b ? `<div style="font-weight:700;padding:10px 14px;background:rgba(255,255,255,.04);border-radius:14px;border:1px solid var(--border);"><svg width="1.1em" height="1.1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-0.125em"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg> ${b.title} \u2014 ${b.author}</div>` : ''; }).join(''); }
    }
}

/* &#x2500;&#x2500; NOTIFICATIONS &#x2500;&#x2500; */
function renderNotifications() {
    const el = document.getElementById('notifList');
    if (!el) return;
    el.innerHTML = NOTIFICATIONS.map(n => `
    <div class="notif-item">
        <div class="notif-icon">${n.icon}</div>
        <div style="flex:1">
            <div style="font-weight:800;font-size:.92rem;margin-bottom:3px;">${n.title}</div>
            <div class="notif-text">${n.text}</div>
            <div class="notif-time">${n.time}</div>
        </div>
        <div class="notif-dot"></div>
    </div>`).join('');
}

/* &#x2500;&#x2500; PLANS & FAQ &#x2500;&#x2500; */
function renderFaq() {
    const el = document.getElementById('faqList');
    if (!el) return;
    el.innerHTML = FAQS.map(f => `
    <div class="faq-item" onclick="this.classList.toggle('open')">
        <div class="faq-q"><span>${f.q}</span><span class="faq-arr">&#x25BC;</span></div>
        <div class="faq-a">${f.a}</div>
    </div>`).join('');
}

/* &#x2500;&#x2500; BOOK MODAL &#x2500;&#x2500; */
function openBookModal(id) {
    activeBook = BOOKS.find(b => b.id === id);
    if (!activeBook) return;
    document.getElementById('modalTitle').textContent = activeBook.title;
    document.getElementById('modalAuthor').textContent = activeBook.author + ' &#x2022; ' + activeBook.category;
    document.getElementById('modalDesc').textContent = activeBook.desc;
    document.getElementById('modalCover').src = activeBook.cover;
    document.getElementById('modalTags').innerHTML = `<span class="modal-tag">${activeBook.category}</span><span class="modal-tag"><svg width="1.1em" height="1.1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: -0.125em;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg> ${activeBook.rating}</span>`;
    const qrEl = document.getElementById('qrcode');
    qrEl.innerHTML = '';
    try { new QRCode(qrEl, { text: window.location.origin + '/#book-' + id, width:52, height:52 }); } catch(e) {}
    document.getElementById('bookModal').classList.add('open');
}
function closeBookModal() { document.getElementById('bookModal').classList.remove('open'); }
function setModalRating(r) { document.querySelectorAll('.modal-stars .star').forEach((s,i) => s.classList.toggle('active', i < r)); showToast(`<svg width="1.1em" height="1.1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: -0.125em;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg> ${r} yulduz berildi!`); }
function readOnline() { if(activeBook) showToast(`<svg width="1.1em" height="1.1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: -0.125em;"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg> "${activeBook.title}" PDF viewerda ochilmoqda...`); }
function addFavorite() {
    if (!activeBook) return;
    if (favorites.has(activeBook.id)) { favorites.delete(activeBook.id); showToast('<svg width="1.1em" height="1.1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-0.125em"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/><line x1="12" y1="14" x2="12" y2="10"/></svg>&#x2665; Sevimlilardan olib tashlandi'); }
    else { favorites.add(activeBook.id); showToast('\u2764\uFE0F Sevimlilarga qo\'shildi!'); }
    document.querySelectorAll('.fav-btn').forEach(b => { const id = parseInt(b.closest('.book-card')?.id?.split('-')[1]); if (id) b.classList.toggle('active', favorites.has(id)); });
}
function addReadLater() {
    if (!activeBook) return;
    readLater.add(activeBook.id);
    showToast(`<svg width="1.1em" height="1.1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-0.125em"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg> "${activeBook.title}" "Keyin o'qiyman" ro'yxatiga qo'shildi!`);
}
function reserveBook() { if(activeBook) showToast(`<svg width="1.1em" height="1.1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-0.125em"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg> "${activeBook.title}" bo'yicha navbatga yozildingiz! Kitob bo'shagach Telegram va Email orqali xabar olasiz.`); }
function submitComment() {
    const txt = document.getElementById('commentInput').value.trim();
    if (!txt) return showToast('Iltimos sharh yozing!');
    showToast('&#x2705; Sharhingiz qabul qilindi!');
    document.getElementById('commentInput').value = '';
}

/* &#x2500;&#x2500; FAV TOGGLE (card btn) &#x2500;&#x2500; */
function toggleFav(e, id) {
    e.stopPropagation();
    if (favorites.has(id)) { favorites.delete(id); showToast('<svg width="1.1em" height="1.1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-0.125em"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/><line x1="12" y1="14" x2="12" y2="10"/></svg>&#x2665; Sevimlilardan olib tashlandi'); }
    else { favorites.add(id); showToast('\u2764\uFE0F Sevimlilarga qo\'shildi!'); }
    e.currentTarget.classList.toggle('active', favorites.has(id));
}

/* &#x2500;&#x2500; REMINDER &#x2500;&#x2500; */
function setReminder() {
    const t = document.getElementById('reminderTime').value;
    showToast(`&#x23F0;&#x23F0; Kunlik eslatma ${t} uchun belgilandi! "Bugun o'qishni unutmang" <svg width="1.1em" height="1.1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: -0.125em;"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>`);
}

/* &#x2500;&#x2500; AI CHAT &#x2500;&#x2500; */
const aiReplies = [
    b => `"${b}" mavzusida siz uchun "Deep Work" va "Atomic Habits" kitoblarini tavsiya qilaman! <svg width="1.1em" height="1.1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: -0.125em;"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>`,
    b => `"${b}" bo'yicha eng yaxshi tanlov: Clean Code yoki Algoritmlar qo'llanmasi!`,
    b => `Sizga yoqadigan mavzu bo'yicha Kutubxonamizdagi "Boy Ota, Kambag'al Ota" kitobini o'qishni maslahat beraman!`,
    b => `"${b}" haqida izlamoqchisiz? Unda Ikigai va Deep Work kitoblarini ko'rib chiqing!`,
];
let aiIdx = 0;
function toggleAiChat() { document.getElementById('aiPanel').classList.toggle('open'); }
function sendAi() {
    const input = document.getElementById('aiInput');
    const msg = input.value.trim();
    if (!msg) return;
    const body = document.getElementById('aiBody');
    body.innerHTML += `<div class="ai-msg user">${msg}</div>`;
    input.value = '';
    body.innerHTML += `<div class="typing" id="aiTyping"><span></span><span></span><span></span></div>`;
    body.scrollTop = body.scrollHeight;
    setTimeout(() => {
        document.getElementById('aiTyping')?.remove();
        const reply = aiReplies[aiIdx % aiReplies.length](msg);
        aiIdx++;
        body.innerHTML += `<div class="ai-msg bot">${reply}</div>`;
        body.scrollTop = body.scrollHeight;
    }, 1200);
}

/* &#x2500;&#x2500; TOAST &#x2500;&#x2500; */
function showToast(msg) {
    const stack = document.getElementById('toastStack');
    const t = document.createElement('div');
    t.className = 'toast';
    t.innerHTML = `<span>${msg}</span>`;
    stack.appendChild(t);
    setTimeout(() => t.remove(), 3500);
}

/* &#x2500;&#x2500; AUTH &#x2500;&#x2500; */
function checkUserAuth() {
    const container = document.getElementById('userInfoContainer');
    const user = JSON.parse(localStorage.getItem('user') || 'null');
    if (user) {
        const init = (user.fullName || user.username || 'U').charAt(0).toUpperCase();
        const name = user.fullName || user.username || '';
        container.innerHTML = `<div class="user-badge"><div class="avatar">${init}</div><span class="user-name">${name}</span><button class="logout-link" onclick="logout()">&#x2715;</button></div>`;
    } else {
        // Desktop: full text button | Mobile: icon-only circle button
        container.innerHTML = `
            <a href="/login" class="auth-btn">Kirish / Ro'yxatdan o'tish</a>
            <a href="/login" class="auth-btn-short" title="Kirish"><svg width="1.1em" height="1.1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: -0.125em;"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></a>`;
    }
}
function logout() { localStorage.removeItem('token'); localStorage.removeItem('user'); checkUserAuth(); showToast('<svg width="1.1em" height="1.1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-0.125em"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg> Tizimdan chiqildi.'); }

/* &#x2500;&#x2500; THEME &#x2500;&#x2500; */
function toggleTheme() {
    const t = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', t);
    document.getElementById('themeIcon').innerHTML = t === 'light' ? '<svg width="1.1em" height="1.1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: -0.125em;"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>' : '<svg width="1.1em" height="1.1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: -0.125em;"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>';
    localStorage.setItem('theme', t);
}

/* &#x2500;&#x2500; CANVAS PARTICLES &#x2500;&#x2500; */
const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');
let pts = [];
function resizeCanvas() { canvas.width = innerWidth; canvas.height = innerHeight; pts = Array.from({length:55}, () => ({ x:Math.random()*canvas.width, y:Math.random()*canvas.height, vx:(Math.random()-.5)*.7, vy:(Math.random()-.5)*.7 })); }
function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pts.forEach(p => { p.x += p.vx; p.y += p.vy; if(p.x<0||p.x>canvas.width)p.vx*=-1; if(p.y<0||p.y>canvas.height)p.vy*=-1; ctx.beginPath(); ctx.arc(p.x,p.y,1.5,0,Math.PI*2); ctx.fillStyle='rgba(41,151,255,.28)'; ctx.fill(); });
    for(let i=0;i<pts.length;i++) for(let j=i+1;j<pts.length;j++) {
        const dx=pts[i].x-pts[j].x, dy=pts[i].y-pts[j].y, d=Math.sqrt(dx*dx+dy*dy);
        if(d<115){ ctx.beginPath(); ctx.strokeStyle=`rgba(41,151,255,${.14-d/820})`; ctx.lineWidth=.5; ctx.moveTo(pts[i].x,pts[i].y); ctx.lineTo(pts[j].x,pts[j].y); ctx.stroke(); }
    }
    requestAnimationFrame(drawParticles);
}
window.addEventListener('resize', resizeCanvas);

/* &#x2500;&#x2500; TELEGRAM POPUP &#x2500;&#x2500; */
function closeTgPopup() {
    const p = document.getElementById('tgPopup');
    if(p) {
        p.style.opacity = '0';
        setTimeout(() => p.style.display = 'none', 400);
    }
    localStorage.setItem('tgPopupSeen', 'true');
}

/* &#x2500;&#x2500; INIT &#x2500;&#x2500; */
window.addEventListener('load', () => {
    const t = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', t);
    document.getElementById('themeIcon').innerHTML = t === 'light' ? '<svg width="1.1em" height="1.1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: -0.125em;"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>' : '<svg width="1.1em" height="1.1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: -0.125em;"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>';
    checkUserAuth();
    initQuotes();
    animCount('cnt1', 1450, '+');
    animCount('cnt2', 350, '+');
    animCount('cnt3', 8200, '+');
    animCount('cnt4', 25000, '+');
    renderTrending();
    resizeCanvas();
    drawParticles();
    
    // Telegram Popup Logic
    if (!localStorage.getItem('tgPopupSeen')) {
        setTimeout(() => {
            const popup = document.getElementById('tgPopup');
            if (popup) popup.style.display = 'flex';
        }, 2500); // 2.5s after load
    }

    // show welcome toast after 1.5s
    setTimeout(() => showToast('<svg width="1.1em" height="1.1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: -0.125em;"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg> Kutubxonaga Xush Kelibsiz!'), 1500);
});



      if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
          navigator.serviceWorker.register('/sw.js').then(reg => {
            console.log('SW registered!', reg);
          }).catch(err => console.log('SW registration failed', err));
        });
      }
    