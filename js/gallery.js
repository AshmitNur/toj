/**
 * TØJ SOURCING — DYNAMIC SHOWCASE GALLERY LOGIC
 * Manages grid rendering, pagination, dynamic filtering, and premium lightbox mechanics.
 */

document.addEventListener('DOMContentLoaded', () => {
  initShowcaseGallery();
});

function initShowcaseGallery() {
  const gridWrapper = document.querySelector('.portfolio-grid');
  const filterControls = document.querySelector('.filter-controls');
  if (!gridWrapper || !window.SHOWCASE_DATA) return;

  let filteredItems = [...window.SHOWCASE_DATA];
  let activeFilter = 'all';
  let currentPage = 1;
  const itemsPerPage = 12;

  // Set up portfolio grid styles to prevent inline layouts
  gridWrapper.innerHTML = '';

  // Ensure "Load More" container exists
  let loadMoreContainer = document.getElementById('load-more-container');
  if (!loadMoreContainer) {
    loadMoreContainer = document.createElement('div');
    loadMoreContainer.id = 'load-more-container';
    loadMoreContainer.style.textAlign = 'center';
    loadMoreContainer.style.marginTop = 'var(--spacing-xl)';
    gridWrapper.parentNode.insertBefore(loadMoreContainer, gridWrapper.nextSibling);
  }

  // Create the Lightbox structure dynamically
  createLightbox();

  // Render first batch
  renderGallery();

  // Attach dynamic filter click listeners
  if (filterControls) {
    // Clear old static event handlers
    const filterButtons = filterControls.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
      // Replace with clean event listener
      const newBtn = btn.cloneNode(true);
      btn.parentNode.replaceChild(newBtn, btn);

      newBtn.addEventListener('click', () => {
        filterControls.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        newBtn.classList.add('active');

        activeFilter = newBtn.getAttribute('data-filter');
        currentPage = 1;

        if (activeFilter === 'all') {
          filteredItems = [...window.SHOWCASE_DATA];
        } else {
          filteredItems = window.SHOWCASE_DATA.filter(item => item.category === activeFilter);
        }

        renderGallery(true); // Reset grid and animate
      });
    });
  }

  // Gallery render function
  function renderGallery(reset = false) {
    if (reset) {
      gridWrapper.innerHTML = '';
    }

    const start = (currentPage - 1) * itemsPerPage;
    const end = Math.min(start + itemsPerPage, filteredItems.length);
    const visibleBatch = filteredItems.slice(start, end);

    visibleBatch.forEach((item, idx) => {
      const itemEl = document.createElement('div');
      itemEl.className = 'portfolio-item fade-up-trigger';
      itemEl.setAttribute('data-id', item.id);
      itemEl.style.display = 'block';
      itemEl.style.opacity = '0';
      itemEl.style.transform = 'translateY(20px) scale(0.98)';
      itemEl.style.transition = 'opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1), transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';

      itemEl.innerHTML = `
        <div class="skeleton-loader" style="position: absolute; inset: 0; background: linear-gradient(90deg, var(--color-navy) 25%, var(--color-slate) 50%, var(--color-navy) 75%); background-size: 200% 100%; animation: shimmer 1.5s infinite linear; z-index: 1;"></div>
        <img src="${item.src}" alt="${item.title}" class="portfolio-img" style="opacity: 0; transition: opacity 0.4s ease; z-index: 2; position: relative;">
      `;

      gridWrapper.appendChild(itemEl);

      // Handle image load to fade skeleton
      const img = itemEl.querySelector('.portfolio-img');
      const skeleton = itemEl.querySelector('.skeleton-loader');
      
      img.onload = () => {
        img.style.opacity = '1';
        if (skeleton) skeleton.style.opacity = '0';
      };

      // Handle cached images
      if (img.complete) {
        img.onload();
      }

      // Animate card entrance with slight stagger delay
      setTimeout(() => {
        itemEl.style.opacity = '1';
        itemEl.style.transform = 'translateY(0) scale(1)';
      }, idx * 40);

      // Click event to trigger dynamic Lightbox disabled
      // itemEl.addEventListener('click', () => {
      //   openLightbox(item.id);
      // });
    });

    updateLoadMoreButton();
  }

  // Pagination management button
  function updateLoadMoreButton() {
    loadMoreContainer.innerHTML = '';
    const totalItems = filteredItems.length;
    const currentlyShown = Math.min(currentPage * itemsPerPage, totalItems);

    if (currentlyShown < totalItems) {
      const loadBtn = document.createElement('button');
      loadBtn.className = 'btn btn-secondary';
      loadBtn.style.padding = '18px 40px';
      loadBtn.innerHTML = `LOAD MORE DIVISIONS (${currentlyShown} / ${totalItems})`;
      loadBtn.addEventListener('click', () => {
        currentPage++;
        renderGallery(false);
      });
      loadMoreContainer.appendChild(loadBtn);
    } else {
      const fullyLoadedText = document.createElement('div');
      fullyLoadedText.style.fontFamily = 'var(--font-mono)';
      fullyLoadedText.style.fontSize = '0.75rem';
      fullyLoadedText.style.textTransform = 'uppercase';
      fullyLoadedText.style.letterSpacing = '0.2em';
      fullyLoadedText.style.color = 'var(--color-lime)';
      fullyLoadedText.style.display = 'inline-flex';
      fullyLoadedText.style.alignItems = 'center';
      fullyLoadedText.style.gap = '8px';
      fullyLoadedText.style.padding = '20px 0';
      fullyLoadedText.innerHTML = `
        <span class="active-pulse" style="display: inline-block; width: 8px; height: 8px; background-color: var(--color-lime); border-radius: 50%; box-shadow: 0 0 8px var(--color-lime); animation: pulse-dot 1.5s infinite ease-in-out;"></span>
        ALL SHELLS FULLY LOADED // ${totalItems} OF ${totalItems} ITEMS
      `;
      loadMoreContainer.appendChild(fullyLoadedText);
    }
  }

  // --- Dynamic Lightbox Components ---
  let activeLightboxIndex = 0;

  function createLightbox() {
    if (document.getElementById('gallery-lightbox')) return;

    const lightbox = document.createElement('div');
    lightbox.id = 'gallery-lightbox';
    lightbox.className = 'lightbox-overlay';
    lightbox.style.display = 'none';

    lightbox.innerHTML = `
      <button class="lightbox-close" aria-label="Close Lightbox" style="position: absolute; top: 40px; right: 40px; background: none; border: 0; color: var(--color-linen); font-size: 3rem; cursor: pointer; transition: color 0.3s; z-index: 1010;">&times;</button>
      <button class="lightbox-nav lightbox-prev" aria-label="Previous Image" style="position: absolute; left: 40px; top: 50%; transform: translateY(-50%); background: none; border: 0; color: var(--color-linen); font-size: 2.5rem; cursor: pointer; transition: color 0.3s; z-index: 1010;">&larr;</button>
      <button class="lightbox-nav lightbox-next" aria-label="Next Image" style="position: absolute; right: 40px; top: 50%; transform: translateY(-50%); background: none; border: 0; color: var(--color-linen); font-size: 2.5rem; cursor: pointer; transition: color 0.3s; z-index: 1010;">&rarr;</button>
      <div class="lightbox-container" style="display: flex; flex-direction: row; width: 90%; max-width: 1200px; height: 80vh; background-color: rgba(7, 13, 20, 0.95); border: 1px solid var(--color-slate); z-index: 1005; overflow: hidden; position: relative;">
        <div class="lightbox-image-wrapper" style="flex: 1; display: flex; align-items: center; justify-content: center; overflow: hidden; position: relative; padding: var(--spacing-lg); background-color: var(--color-void);">
          <img src="" alt="" class="lightbox-img" style="max-width: 100%; max-height: 100%; object-fit: contain; transition: opacity 0.3s ease;">
        </div>
        <div class="lightbox-sidebar" style="width: 320px; border-left: 1px solid var(--color-slate); padding: var(--spacing-xl); display: flex; flex-direction: column; justify-content: center; background-color: var(--color-navy); position: relative;">
          <span class="lightbox-division label-caps" style="color: var(--color-lime); margin-bottom: var(--spacing-sm);">DIV.01 // KNITWEAR</span>
          <h3 class="lightbox-title text-h2" style="color: var(--color-linen); margin-bottom: var(--spacing-md); line-height: 1.2;">Garment Title</h3>
          <div style="border-top: 1px dashed var(--color-slate); padding-top: var(--spacing-lg); margin-top: var(--spacing-md);">
            <p class="lightbox-comp text-mono-md" style="color: var(--color-linen); margin-bottom: var(--spacing-sm);">COMPOSITION DETAIL</p>
            <p class="lightbox-weight text-mono-md text-muted" style="margin-bottom: var(--spacing-xs);">WEIGHT SPEC</p>
            <p class="lightbox-lead text-mono-md text-muted">LEAD TIME SPEC</p>
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(lightbox);

    // Event Handlers for close and nav
    lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
    lightbox.querySelector('.lightbox-prev').addEventListener('click', prevLightbox);
    lightbox.querySelector('.lightbox-next').addEventListener('click', nextLightbox);

    // Close on clicking outside lightbox container
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });

    // Keyboard events
    document.addEventListener('keydown', (e) => {
      if (lightbox.style.display === 'flex') {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') prevLightbox();
        if (e.key === 'ArrowRight') nextLightbox();
      }
    });
  }

  function openLightbox(itemId) {
    const lightbox = document.getElementById('gallery-lightbox');
    if (!lightbox) return;

    activeLightboxIndex = filteredItems.findIndex(item => item.id === itemId);
    if (activeLightboxIndex === -1) return;

    updateLightboxContent();

    lightbox.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Lock background scrolling
  }

  function updateLightboxContent() {
    const lightbox = document.getElementById('gallery-lightbox');
    if (!lightbox) return;

    const item = filteredItems[activeLightboxIndex];
    if (!item) return;

    const img = lightbox.querySelector('.lightbox-img');
    const division = lightbox.querySelector('.lightbox-division');
    const title = lightbox.querySelector('.lightbox-title');
    const comp = lightbox.querySelector('.lightbox-comp');
    const weight = lightbox.querySelector('.lightbox-weight');
    const lead = lightbox.querySelector('.lightbox-lead');

    // Fade effect during update
    img.style.opacity = '0';
    setTimeout(() => {
      img.src = item.src;
      img.alt = item.title;
      division.textContent = item.division;
      title.textContent = item.title;
      comp.textContent = `COMP: ${item.comp.toUpperCase()}`;
      weight.textContent = `WT: ${item.weight}`;
      lead.textContent = `LEAD TIME: ${item.leadTime}`;
      img.style.opacity = '1';
    }, 150);
  }

  function closeLightbox() {
    const lightbox = document.getElementById('gallery-lightbox');
    if (lightbox) {
      lightbox.style.display = 'none';
      document.body.style.overflow = '';
    }
  }

  function prevLightbox() {
    if (filteredItems.length === 0) return;
    activeLightboxIndex = (activeLightboxIndex - 1 + filteredItems.length) % filteredItems.length;
    updateLightboxContent();
  }

  function nextLightbox() {
    if (filteredItems.length === 0) return;
    activeLightboxIndex = (activeLightboxIndex + 1) % filteredItems.length;
    updateLightboxContent();
  }
}
