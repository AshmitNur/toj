/**
 * TØJ SOURCING — DYNAMIC SHOWCASE GALLERY LOGIC
 * Manages grid rendering, pagination, dynamic filtering, and premium lightbox mechanics
 * for the Knit, Woven, and Denim divisions separately.
 */

document.addEventListener('DOMContentLoaded', () => {
  initShowcaseGallery();
});

function initShowcaseGallery() {
  if (!window.SHOWCASE_DATA) return;

  // Separate data by division
  const knitItems = window.SHOWCASE_DATA.filter(item => item.category === 'knit');
  const wovenItems = window.SHOWCASE_DATA.filter(item => item.category === 'woven');
  const denimItems = window.SHOWCASE_DATA.filter(item => item.category === 'denim');
  const fabricsItems = window.SHOWCASE_DATA.filter(item => item.category === 'fabrics');

  // Define division grid managers
  const divisions = [
    {
      category: 'knit',
      grid: document.querySelector('.knit-grid'),
      loadMoreContainer: document.getElementById('knit-load-more-container'),
      items: knitItems,
      currentPage: 1,
      itemsPerPage: 12
    },
    {
      category: 'woven',
      grid: document.querySelector('.woven-grid'),
      loadMoreContainer: document.getElementById('woven-load-more-container'),
      items: wovenItems,
      currentPage: 1,
      itemsPerPage: 12
    },
    {
      category: 'denim',
      grid: document.querySelector('.denim-grid'),
      loadMoreContainer: document.getElementById('denim-load-more-container'),
      items: denimItems,
      currentPage: 1,
      itemsPerPage: 6
    },
    {
      category: 'fabrics',
      grid: document.querySelector('.fabrics-grid'),
      loadMoreContainer: document.getElementById('fabrics-load-more-container'),
      items: fabricsItems,
      currentPage: 1,
      itemsPerPage: 12
    }
  ];

  // Create the Lightbox structure dynamically
  createLightbox();

  // Render each division
  divisions.forEach(div => {
    if (!div.grid) return;
    renderDivision(div);
  });

  // Handle tab switching for divisions
  const filterControls = document.querySelector('.filter-controls');
  if (filterControls) {
    const filterButtons = filterControls.querySelectorAll('.filter-btn');
    const sections = {
      knit: document.querySelector('.knit-division-section'),
      woven: document.querySelector('.woven-division-section'),
      denim: document.querySelector('.denim-division-section'),
      fabrics: document.querySelector('.fabrics-division-section')
    };

    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');

        // Show/hide sections
        const targetDiv = btn.getAttribute('data-division');
        Object.keys(sections).forEach(key => {
          if (sections[key]) {
            if (key === targetDiv) {
              sections[key].style.display = 'block';
              
              // Trigger stagger entrance animation for visible items in this division
              const items = sections[key].querySelectorAll('.portfolio-item');
              items.forEach((item, idx) => {
                item.style.opacity = '0';
                item.style.transform = 'translateY(20px) scale(0.98)';
                setTimeout(() => {
                  item.style.opacity = '1';
                  item.style.transform = 'translateY(0) scale(1)';
                }, idx * 40);
              });
            } else {
              sections[key].style.display = 'none';
            }
          }
        });
      });
    });
  }

  // Render logic per division
  function renderDivision(div, append = false) {
    if (!append) {
      div.grid.innerHTML = '';
    }

    const start = append ? (div.currentPage - 1) * div.itemsPerPage : 0;
    const end = Math.min(div.currentPage * div.itemsPerPage, div.items.length);
    const visibleBatch = div.items.slice(start, end);

    visibleBatch.forEach((item, idx) => {
      const itemEl = document.createElement('div');
      itemEl.className = 'portfolio-item fade-up-trigger';
      itemEl.setAttribute('data-id', item.id);
      itemEl.style.display = 'block';
      itemEl.style.opacity = '0';
      itemEl.style.transform = 'translateY(20px) scale(0.98)';
      itemEl.style.transition = 'opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1), transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
      itemEl.style.cursor = 'pointer';

      itemEl.innerHTML = `
        <div class="skeleton-loader" style="position: absolute; inset: 0; background: linear-gradient(90deg, var(--color-navy) 25%, var(--color-slate) 50%, var(--color-navy) 75%); background-size: 200% 100%; animation: shimmer 1.5s infinite linear; z-index: 1;"></div>
        <img src="${item.src}" alt="${item.title}" class="portfolio-img" style="opacity: 0; transition: opacity 0.4s ease; z-index: 2; position: relative;">
      `;

      div.grid.appendChild(itemEl);

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

      // Click event to trigger dynamic Lightbox
      itemEl.addEventListener('click', () => {
        openLightbox(item.id);
      });
    });

    updateLoadMoreButton(div);
  }

  // Pagination management button per division
  function updateLoadMoreButton(div) {
    if (!div.loadMoreContainer) return;
    div.loadMoreContainer.innerHTML = '';
    
    const totalItems = div.items.length;
    const currentlyShown = Math.min(div.currentPage * div.itemsPerPage, totalItems);

    if (currentlyShown < totalItems) {
      const loadBtn = document.createElement('button');
      loadBtn.className = 'btn btn-secondary';
      loadBtn.style.padding = '14px 30px';
      loadBtn.innerHTML = `LOAD MORE (${currentlyShown} / ${totalItems})`;
      loadBtn.addEventListener('click', () => {
        div.currentPage++;
        renderDivision(div, true);
      });
      div.loadMoreContainer.appendChild(loadBtn);
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
      fullyLoadedText.style.padding = '15px 0';
      fullyLoadedText.innerHTML = `
        <span class="active-pulse" style="display: inline-block; width: 8px; height: 8px; background-color: var(--color-lime); border-radius: 50%; box-shadow: 0 0 8px var(--color-lime); animation: pulse-dot 1.5s infinite ease-in-out;"></span>
        FULLY LOADED // ${totalItems} ITEMS
      `;
      div.loadMoreContainer.appendChild(fullyLoadedText);
    }
  }

  // --- Dynamic Lightbox Components ---
  let activeLightboxIndex = 0;
  let filteredItems = [];

  function createLightbox() {
    if (document.getElementById('gallery-lightbox')) return;

    const lightbox = document.createElement('div');
    lightbox.id = 'gallery-lightbox';
    lightbox.className = 'lightbox-overlay';
    lightbox.style.display = 'none';

    lightbox.innerHTML = `
     <button class="lightbox-close" aria-label="Close Lightbox" style="position: absolute; top: 40px; right: 40px; background: none; border: 0; color: #00ff88; font-size: 3rem; cursor: pointer; transition: color 0.3s; z-index: 1010;">&times;</button> 
<button class="lightbox-nav lightbox-prev" aria-label="Previous Image" style="position: absolute; left: 40px; top: 50%; transform: translateY(-50%); background: none; border: 0; color: #00ff88; font-size: 2.5rem; cursor: pointer; transition: color 0.3s; z-index: 1010;">&larr;</button> 
<button class="lightbox-nav lightbox-next" aria-label="Next Image" style="position: absolute; right: 40px; top: 50%; transform: translateY(-50%); background: none; border: 0; color: #00ff88; font-size: 2.5rem; cursor: pointer; transition: color 0.3s; z-index: 1010;">&rarr;</button> 

<div class="lightbox-container" style="display: flex; flex-direction: row; width: 90%; max-width: 900px; height: 80vh; background-color: rgba(7, 13, 20, 0.95); border: 1px solid var(--color-slate); z-index: 1005; overflow: hidden; position: relative;"> 
  <div class="lightbox-image-wrapper" style="flex: 1; display: flex; align-items: center; justify-content: center; overflow: hidden; position: relative; padding: var(--spacing-lg); background-color: var(--color-void);"> 
    <img src="" alt="" class="lightbox-img" style="max-width: 100%; max-height: 100%; object-fit: contain; transition: opacity 0.3s ease;"> 
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

    // Find the item globally
    const item = window.SHOWCASE_DATA.find(i => i.id === itemId);
    if (!item) return;

    // Group items by category for division-based slideshow navigation
    filteredItems = window.SHOWCASE_DATA.filter(i => i.category === item.category);

    activeLightboxIndex = filteredItems.findIndex(i => i.id === itemId);
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

    // Fade effect during update
    img.style.opacity = '0';
    setTimeout(() => {
      img.src = item.src;
      img.alt = item.title;
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

  // Next Lightbox
  function nextLightbox() {
    if (filteredItems.length === 0) return;
    activeLightboxIndex = (activeLightboxIndex + 1) % filteredItems.length;
    updateLightboxContent();
  }
}
