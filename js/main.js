/* ==========================================================================
   TØJ SOURCING — THREAD INTELLIGENCE JAVASCRIPT SYSTEM
   Scroll reveals | Counter animations | Interactive SVG World Map | Form validations
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initPreloader();
  initVideoFadeIn();
  initNavbarScroll();
  initMobileMenu();
  initScrollSpy();
  initSplitText();
  initScrollAnimations();
  initCounters();
  initMarquee();
  initInteractiveMap();
  initTeaserMap();
  initContactMap();
  initPortfolioFilters();
  initContactForm();
});

/* --- Navbar Scroll Controller --- */
function initNavbarScroll() {
  const nav = document.querySelector('nav.navbar');
  if (!nav) return;
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.classList.add('nav-scrolled');
    } else {
      nav.classList.remove('nav-scrolled');
    }
  });
}

/* --- Split-Text Word "Fall-Off" Reveal --- */
function initSplitText() {
  const revealTargets = document.querySelectorAll('[data-split-reveal]');
  
  revealTargets.forEach(target => {
    const childNodes = Array.from(target.childNodes);
    target.innerHTML = ''; // Clear original text
    
    childNodes.forEach((node, nodeIndex) => {
      if (node.nodeType === Node.ELEMENT_NODE && node.nodeName === 'BR') {
        target.appendChild(document.createElement('br'));
      } else if (node.nodeType === Node.TEXT_NODE) {
        const text = node.textContent.trim();
        if (text === '') return;
        
        const words = text.split(/\s+/);
        words.forEach((word, wordIndex) => {
          const wordSpan = document.createElement('span');
          wordSpan.className = 'reveal-wrapper';
          
          const chars = word.split('');
          chars.forEach((char, charIndex) => {
            const charSpan = document.createElement('span');
            charSpan.className = 'char-reveal';
            charSpan.textContent = char;
            // Stagger transitions slightly based on index
            const delay = (wordIndex * 0.05) + (charIndex * 0.02);
            charSpan.style.transitionDelay = `${delay}s`;
            wordSpan.appendChild(charSpan);
          });
          
          target.appendChild(wordSpan);
          
          // Add space between words (except the last word)
          if (wordIndex < words.length - 1) {
            target.appendChild(document.createTextNode(' '));
          }
        });
        
        // Add space after text nodes if they are not the last node and not followed by a BR
        if (nodeIndex < childNodes.length - 1 && childNodes[nodeIndex + 1].nodeName !== 'BR') {
          target.appendChild(document.createTextNode(' '));
        }
      }
    });
  });
}

/* --- General Scroll triggered reveals (Fade up, split text) --- */
function initScrollAnimations() {
  // Intersection Observer config
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -10% 0px',
    threshold: 0.1
  };
  
  const animObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Trigger split characters
        const chars = entry.target.querySelectorAll('.char-reveal');
        if (chars.length > 0) {
          chars.forEach(char => char.classList.add('revealed'));
        } else {
          entry.target.classList.add('animated');
        }
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Track fade-up containers and split text headlines
  document.querySelectorAll('.fade-up-trigger').forEach(el => animObserver.observe(el));
  document.querySelectorAll('[data-split-reveal]').forEach(el => animObserver.observe(el));
}

/* --- Dynamic Stats Counter --- */
function initCounters() {
  const counterElements = document.querySelectorAll('.counter-val');
  if (counterElements.length === 0) return;
  
  const counterObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        startCounting(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  
  counterElements.forEach(el => counterObserver.observe(el));
  
  function startCounting(el) {
    const target = parseFloat(el.getAttribute('data-target'));
    const duration = 2000; // 2 seconds animation
    const startTime = performance.now();
    const isDecimal = el.getAttribute('data-decimal') === 'true';
    const prefix = el.getAttribute('data-prefix') || '';
    const suffix = el.getAttribute('data-suffix') || '';
    
    function updateCounter(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing out cubic: progress = 1 - (1 - progress)^3
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentVal = easeProgress * target;
      
      if (isDecimal) {
        el.textContent = `${prefix}${currentVal.toFixed(1)}${suffix}`;
      } else {
        el.textContent = `${prefix}${Math.floor(currentVal)}${suffix}`;
      }
      
      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        // Enforce exact end value
        el.textContent = `${prefix}${isDecimal ? target.toFixed(1) : target}${suffix}`;
      }
    }
    
    requestAnimationFrame(updateCounter);
  }
}

/* --- Infinite Client Marquee --- */
function initMarquee() {
  const marqueeTrack = document.querySelector('.marquee-track');
  if (!marqueeTrack) return;
  
  // Duplicate contents to ensure infinite flow overlap
  const content = marqueeTrack.innerHTML;
  marqueeTrack.innerHTML = content + content + content;
  
  // Calculate dynamic duration to match the velocity of Vetted Production Credentials (.cert-pan-track)
  matchMarqueeSpeeds();
  
  // Also recalculate speed on window resize
  window.addEventListener('resize', matchMarqueeSpeeds);
}

function matchMarqueeSpeeds() {
  const marqueeTrack = document.querySelector('.marquee-track');
  const certTrack = document.querySelector('.cert-pan-track');
  if (!marqueeTrack) return;
  
  let targetDuration = 218.75; // Default fallback (150 items vs 24 items ratio * 35s)
  
  if (certTrack) {
    const marqueeWidth = marqueeTrack.scrollWidth;
    const certWidth = certTrack.scrollWidth;
    if (marqueeWidth && certWidth) {
      // certTrack translates by -50% in 35s, meaning its velocity is (certWidth / 2) / 35 pixels/sec.
      // To match that physical speed, marqueeTrack's duration should be:
      // duration = (marqueeWidth / 2) / ((certWidth / 2) / 35) = (marqueeWidth / certWidth) * 35s
      targetDuration = (marqueeWidth / certWidth) * 35;
    }
  } else {
    // If certTrack is not present on the current page, fallback using item count ratio
    // certTrack has 24 items.
    const marqueeItemsCount = marqueeTrack.children.length;
    targetDuration = (marqueeItemsCount / 24) * 35;
  }
  
  marqueeTrack.style.animationDuration = `${targetDuration.toFixed(2)}s`;
}

/* --- Interactive Leaflet Map --- */
const GLOBAL_LOCATIONS = [
  // --- WE THINK ---
  { id: 'newyork_think', name: 'New York Studio', role: 'We Think (Design)', layer: 'think', lat: 40.7128, lng: -74.0060, image: 'assets/global_newyork.webp', details: 'USA fashion design studio and client account interface, coordinating styling trends and custom collections for North American retail.' },
  { id: 'london_think', name: 'London Studio', role: 'We Think (R&D)', layer: 'think', lat: 51.5074, lng: -0.1278, image: 'assets/global_london.webp', details: 'International design direction, trend analysis, eco-alternative material selection, and global fashion supply chain coordination.' },
  { id: 'barcelona_think', name: 'Barcelona Studio', role: 'We Think (R&D)', layer: 'think', lat: 41.3851, lng: 2.1734, image: 'assets/global_barcelona.webp', details: 'European sourcing agency, focusing on sustainable fabric research, recycled yarn engineering, and high-end design layouts.' },
  { id: 'dubai_think', name: 'Dubai Studio', role: 'We Think (Strategy)', layer: 'think', lat: 25.2048, lng: 55.2708, image: 'assets/global_dubai.webp', details: 'Strategic procurement shell, coordinating international logistics routes, customs clearing partnerships, and global trade compliance.' },

  // --- WE DISPLAY ---
  { id: 'dhaka_display', name: 'Dhaka Showroom', role: 'We Display', layer: 'display', lat: 23.836, lng: 90.369, image: 'assets/global_dhaka.webp', details: 'Dhaka preview center showcasing seasonal fabric decks, active CAD mockups, and completed knitwear and woven production samples.' },
  { id: 'london_display', name: 'London Showroom', role: 'We Display', layer: 'display', lat: 51.52, lng: -0.11, image: 'assets/global_london.webp', details: 'West End showroom featuring mockups, physical range boards, and interactive garment displays for European buyers.' },

  // --- WE ASSEMBLE ---
  { id: 'bangladesh_assemble', name: 'Bangladesh Hub', role: 'We Assemble', layer: 'assemble', lat: 23.6850, lng: 90.3563, image: 'assets/global_dhaka.webp', details: 'Primary assembly infrastructure anchoring 80+ audited factories. Driving bulk apparel manufacturing, fabric knitting, and final line QA.' },
  { id: 'china_assemble', name: 'China Hub', role: 'We Assemble', layer: 'assemble', lat: 31.2304, lng: 121.4737, image: 'assets/global_china.webp', details: 'Advanced smart manufacturing shell, coordinating specialized performance fabrics, accessory sourcing, and high-tech weaving lines.' },
  { id: 'usa_assemble', name: 'USA Hub', role: 'We Assemble', layer: 'assemble', lat: 34.0522, lng: -118.2437, image: 'assets/global_newyork.webp', details: 'West Coast logistics hub and micro-manufacturing shell, supporting local sample grading, fast-turn styling, and distribution.' },
  { id: 'uk_assemble', name: 'UK Hub', role: 'We Assemble', layer: 'assemble', lat: 53.4808, lng: -2.2426, image: 'assets/global_london.webp', details: 'UK domestic fulfillment shell, handling customs clearing, supply chain buffering, local repacking, and final retail delivery.' },
  { id: 'spain_assemble', name: 'Spain Hub', role: 'We Assemble', layer: 'assemble', lat: 40.4637, lng: -3.7492, image: 'assets/global_barcelona.webp', details: 'Southern Europe logistics coordinator, managing warehouse buffering, retail delivery routing, and Mediterranean trade clearance.' },
  { id: 'italy_assemble', name: 'Italy Hub', role: 'We Assemble', layer: 'assemble', lat: 43.7696, lng: 11.2558, image: 'assets/global_italy.webp', details: 'Premium luxury outerwear atelier in Florence, handling specialized fabric finishes, tailored sample drafting, and European artisanal assembly.' },
  { id: 'australia_assemble', name: 'Australia Hub', role: 'We Assemble', layer: 'assemble', lat: -33.8688, lng: 151.2093, image: 'assets/global_sydney.webp', details: 'Oceania regional logistics buffer, managing freight routing, custom clearance support, and fast replenishment for local retailers.' }
];

function initInteractiveMap() {
  const mapWrapper = document.getElementById('interactive-map-wrapper');
  if (!mapWrapper || !document.getElementById('leaflet-map')) return;
  
  const detailsPanel = document.getElementById('map-node-details');
  const controlButtons = mapWrapper.querySelectorAll('.map-control-btn');
  
  // Initialize Leaflet map
  const map = L.map('leaflet-map', {
    center: [20, 10],
    zoom: 2,
    scrollWheelZoom: false,
    zoomControl: true,
    minZoom: 2,
    maxZoom: 10
  });
  
  // Custom Positron light tileset from CartoDB
  L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 20
  }).addTo(map);
  
  // Group for active markers
  const markerGroup = L.layerGroup().addTo(map);
  
  let currentLayer = 'all';
  
  // Function to create custom divIcon for glowing lime/chartreuse pulse
  function createCustomIcon() {
    return L.divIcon({
      className: 'custom-map-marker',
      html: '<div class="marker-pulse"></div><div class="marker-dot"></div>',
      iconSize: [24, 24],
      iconAnchor: [12, 12]
    });
  }
  
  // Function to render markers based on layer filter
  function renderMarkers() {
    markerGroup.clearLayers();
    
    GLOBAL_LOCATIONS.forEach(loc => {
      // Check if node matches active filter
      const isVisible = currentLayer === 'all' || loc.layer === currentLayer;
      
      if (isVisible) {
        const marker = L.marker([loc.lat, loc.lng], {
          icon: createCustomIcon()
        });
        
        // Custom interactive popups matching Thread Intelligence design system
        const popupContent = `
          <div class="map-popup-container">
            <h4 class="map-tooltip-title" style="margin: 0 0 4px 0; font-family: var(--font-display); font-size: 1.1rem; color: var(--color-linen);">${loc.name}</h4>
            <div class="map-tooltip-role" style="font-family: var(--font-mono); font-size: 0.65rem; color: var(--color-lime); text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 4px;">${loc.role}</div>
            <p class="map-tooltip-desc" style="margin: 0; font-family: var(--font-mono); font-size: 0.7rem; color: #889bb0; line-height: 1.3;">Click for details</p>
          </div>
        `;
        
        marker.bindPopup(popupContent, {
          closeButton: false,
          offset: L.point(0, -5)
        });
        
        // Hover listeners for popups
        marker.on('mouseover', function() {
          this.openPopup();
        });
        
        marker.on('mouseout', function() {
          this.closePopup();
        });
        
        // Click listener to select node and center camera
        marker.on('click', () => {
          selectNode(loc);
          map.setView([loc.lat, loc.lng], 5, { animate: true });
        });
        
        markerGroup.addLayer(marker);
      }
    });
  }
  
  function selectNode(loc) {
    if (!detailsPanel) return;
    
    // Smooth transition
    detailsPanel.style.opacity = '0';
    setTimeout(() => {
      detailsPanel.querySelector('.selected-node-title').textContent = loc.name;
      detailsPanel.querySelector('.selected-node-role').textContent = loc.role;
      detailsPanel.querySelector('.selected-node-desc').textContent = loc.details;
      
      const imgContainer = detailsPanel.querySelector('.node-image-container');
      const imgEl = detailsPanel.querySelector('.selected-node-img');
      
      if (imgContainer && imgEl) {
        if (loc.image) {
          imgEl.src = loc.image;
          imgEl.alt = loc.name;
          imgContainer.style.display = 'block';
        } else {
          imgContainer.style.display = 'none';
        }
      }
      
      detailsPanel.style.opacity = '1';
    }, 150);
  }
  
  // Set up filter control buttons
  controlButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      controlButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentLayer = btn.getAttribute('data-layer');
      renderMarkers();
    });
  });
  
  // Initial render
  renderMarkers();
}

/* --- Static World Map Teaser (Home Page) --- */
function initTeaserMap() {
  const mapContainer = document.getElementById('static-teaser-map');
  if (!mapContainer) return;
  
  // Initialize Leaflet map as a completely static/read-only panel
  const map = L.map('static-teaser-map', {
    center: [30, 10],
    zoom: 1.2,
    zoomControl: false,
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    boxZoom: false,
    keyboard: false,
    attributionControl: false
  });
  
  // Custom Positron light tileset from CartoDB (no labels for a clean teaser look)
  L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    maxZoom: 10
  }).addTo(map);
  
  // Function to create glowing lime/chartreuse pulse icon
  function createCustomIcon() {
    return L.divIcon({
      className: 'custom-map-marker',
      html: '<div class="marker-pulse"></div><div class="marker-dot"></div>',
      iconSize: [16, 16],
      iconAnchor: [8, 8]
    });
  }
  
  // Add glowing markers for our active shells
  GLOBAL_LOCATIONS.forEach(loc => {
    L.marker([loc.lat, loc.lng], {
      icon: createCustomIcon()
    }).addTo(map);
  });
  
  // Draw clean, monospaced logical connection lines (Thread Intelligence)
  // New York to London (Slate line)
  L.polyline([[40.7128, -74.0060], [51.5074, -0.1278]], {
    color: '#23344b', // var(--color-slate)
    weight: 1,
    dashArray: '3, 6',
    opacity: 0.6
  }).addTo(map);

  // London to Dhaka HQ (Lime / Chartreuse active line)
  L.polyline([[51.5074, -0.1278], [23.836, 90.369]], {
    color: '#bbd72a', // var(--color-lime)
    weight: 1.2,
    dashArray: '3, 6',
    opacity: 0.8
  }).addTo(map);
}

/* --- High-Fidelity Interactive Map (Contact Page) --- */
function initContactMap() {
  const mapContainer = document.getElementById('contact-map');
  if (!mapContainer) return;
  
  // Center coordinates for Dhaka HQ (Mirpur DOHS)
  const hqCoords = [23.8329062, 90.3621453];
  
  // Initialize Leaflet map centered at Dhaka HQ
  const map = L.map('contact-map', {
    center: hqCoords,
    zoom: 15,
    scrollWheelZoom: false, // Prevents scroll-blocking when browsing the page
    zoomControl: true,
    dragging: true,
    touchZoom: true,
    doubleClickZoom: true
  });
  
  // Custom Positron light tileset from CartoDB (with labels for high-precision physical navigation)
  L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 20
  }).addTo(map);
  
  // Custom glowing needle pulse icon for Dhaka HQ
  const customIcon = L.divIcon({
    className: 'custom-map-marker',
    html: '<div class="marker-pulse"></div><div class="marker-dot"></div>',
    iconSize: [32, 32],
    iconAnchor: [16, 16]
  });
  
  // Add HQ marker
  const marker = L.marker(hqCoords, { icon: customIcon }).addTo(map);
  
  // Bind custom popup content with physical Mirpur DOHS details
  const popupContent = `
    <div class="map-popup-container" style="min-width: 200px;">
      <h4 class="map-tooltip-title" style="margin: 0 0 6px 0; font-family: var(--font-display); font-size: 1.15rem; color: var(--color-linen); border-bottom: 1px solid var(--color-slate); padding-bottom: 4px;">TØJ Sourcing HQ</h4>
      <div class="map-tooltip-role" style="font-family: var(--font-mono); font-size: 0.65rem; color: var(--color-lime); text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 6px;">Assemble HQ &amp; Operations</div>
      <p class="map-tooltip-desc" style="margin: 0; font-family: var(--font-mono); font-size: 0.75rem; color: #889bb0; line-height: 1.4;">
        House-774, Road-11, Avenue-2,<br>
        Mirpur DOHS, Dhaka-1216,<br>
        Bangladesh
      </p>
    </div>
  `;
  
  marker.bindPopup(popupContent, {
    closeButton: false,
    offset: L.point(0, -5)
  }).openPopup(); // Automatically open on load
  
  // Trigger invalidateSize after map loads to ensure correct tile alignments and boundary sizing
  setTimeout(() => {
    map.invalidateSize();
  }, 100);
}

/* --- Apparel Showcase filtering --- */
function initPortfolioFilters() {
  const grid = document.querySelector('.portfolio-grid');
  if (!grid) return;
  
  const filterBtns = document.querySelectorAll('.filter-btn');
  const items = document.querySelectorAll('.portfolio-item');
  
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      const filter = btn.getAttribute('data-filter');
      
      items.forEach(item => {
        const category = item.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          item.style.display = 'block';
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
          }, 50);
        } else {
          item.style.opacity = '0';
          item.style.transform = 'scale(0.95)';
          setTimeout(() => {
            item.style.display = 'none';
          }, 300);
        }
      });
    });
  });
}

/* --- Structured Inquiry Form Validation --- */
function initContactForm() {
  const form = document.getElementById('inquiry-form');
  if (!form) return;
  
  const inputs = form.querySelectorAll('.form-input');
  
  // Interactively highlight valid/invalid states on blur
  inputs.forEach(input => {
    input.addEventListener('blur', () => {
      validateField(input);
    });
    
    input.addEventListener('input', () => {
      // Remove visual error states while typing
      input.style.borderBottomColor = '';
    });
  });
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isFormValid = true;
    
    inputs.forEach(input => {
      if (!validateField(input)) {
        isFormValid = false;
      }
    });
    
    if (isFormValid) {
      submitFormSimulation(form);
    }
  });
  
  function validateField(input) {
    const value = input.value.trim();
    let isValid = true;
    
    if (input.hasAttribute('required') && value === '') {
      isValid = false;
    }
    
    if (input.type === 'email' && value !== '') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        isValid = false;
      }
    }
    
    if (isValid) {
      input.style.borderBottomColor = 'var(--color-lime)';
    } else {
      input.style.borderBottomColor = 'var(--color-error)';
    }
    
    return isValid;
  }
  
  function submitFormSimulation(formEl) {
    const submitBtn = formEl.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    submitBtn.disabled = true;
    submitBtn.textContent = 'TRANSMITTING...';
    submitBtn.style.backgroundColor = 'var(--color-navy)';
    submitBtn.style.color = 'var(--color-lime)';
    
    setTimeout(() => {
      // Success Overlay creation
      const successOverlay = document.createElement('div');
      successOverlay.style.position = 'absolute';
      successOverlay.style.inset = '0';
      successOverlay.style.backgroundColor = 'var(--color-void)';
      successOverlay.style.border = '1px solid var(--color-lime)';
      successOverlay.style.padding = 'var(--spacing-xl)';
      successOverlay.style.display = 'flex';
      successOverlay.style.flexDirection = 'column';
      successOverlay.style.justifyContent = 'center';
      successOverlay.style.alignItems = 'center';
      successOverlay.style.textAlign = 'center';
      successOverlay.style.zIndex = '10';
      
      successOverlay.innerHTML = `
        <span class="label-caps" style="margin-bottom: var(--spacing-md)">TRANSMISSION SUCCESS</span>
        <h3 class="text-h3" style="margin-bottom: var(--spacing-md)">INQUIRY FILED SECURELY</h3>
        <p class="text-mono-md text-muted" style="max-width: 450px; margin-bottom: var(--spacing-lg)">
          Our Dhaka digital team has received your supply chain credentials. A senior accounts manager will respond within 4 hours.
        </p>
        <button class="btn btn-secondary" onclick="this.parentElement.remove();">NEW INQUIRY</button>
      `;
      
      formEl.style.position = 'relative';
      formEl.appendChild(successOverlay);
      
      // Reset form
      formEl.reset();
      inputs.forEach(input => input.style.borderBottomColor = '');
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;
      submitBtn.style.backgroundColor = '';
      submitBtn.style.color = '';
    }, 1500);
  }
}

/* --- System Initialization Preloader --- */
function initPreloader() {
  const preloader = document.querySelector('.preloader');
  if (!preloader) return;
  
  if (sessionStorage.getItem('preloader_shown') === 'true') {
    preloader.style.display = 'none';
    return;
  }
  
  const bar = preloader.querySelector('.preloader-progress-bar');
  const counter = preloader.querySelector('.preloader-counter');
  
  let count = 0;
  const interval = setInterval(() => {
    count += Math.floor(Math.random() * 15) + 5;
    if (count >= 100) {
      count = 100;
      clearInterval(interval);
      setTimeout(() => {
        preloader.classList.add('preloader-hidden');
        sessionStorage.setItem('preloader_shown', 'true');
      }, 300);
    }
    if (bar) bar.style.width = `${count}%`;
    if (counter) counter.textContent = String(count).padStart(3, '0');
  }, 80);
}

/* --- Mobile Menu Drawer Controller --- */
function initMobileMenu() {
  const burger = document.querySelector('.burger-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  if (!burger || !navLinks) return;
  
  burger.addEventListener('click', (e) => {
    e.stopPropagation();
    burger.classList.toggle('active');
    navLinks.classList.toggle('mobile-active');
  });
  
  // Close menu when a link is clicked
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      burger.classList.remove('active');
      navLinks.classList.remove('mobile-active');
    });
  });
  
  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !burger.contains(e.target)) {
      burger.classList.remove('active');
      navLinks.classList.remove('mobile-active');
    }
  });
}

/* --- Scroll Spy for Single Page active state --- */
function initScrollSpy() {
  const navLinks = document.querySelectorAll('.nav-links .nav-link');
  const sections = document.querySelectorAll('main > section');
  if (navLinks.length === 0 || sections.length === 0) return;

  // Check if we are on single-page layout (Main.html)
  const isSinglePage = Array.from(navLinks).some(link => link.getAttribute('href').startsWith('#'));
  if (!isSinglePage) return;

  window.addEventListener('scroll', () => {
    let currentSectionId = '';
    const scrollPosition = window.scrollY + 120; // Offset for navbar height

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPosition >= top && scrollPosition < top + height) {
        currentSectionId = section.getAttribute('id');
      }
    });

    if (currentSectionId) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
}



/* --- Smooth Video Fade-In Controller --- */
function initVideoFadeIn() {
  const videos = document.querySelectorAll('.hero-video-bg');
  videos.forEach(video => {
    // If already playing or cached, trigger immediately
    if (video.readyState >= 3) {
      video.classList.add('video-loaded');
    }
    
    // Fade in once the playback begins
    video.addEventListener('playing', () => {
      video.classList.add('video-loaded');
    });
  });
}
