const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  }));
}

document.getElementById('year').textContent = new Date().getFullYear();

const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const lightboxCaption = document.getElementById('lightbox-caption');
document.querySelectorAll('.gallery-item').forEach(item => {
  item.addEventListener('click', () => {
    lightboxImage.src = item.dataset.image;
    lightboxImage.alt = item.dataset.caption || 'Gallery image';
    lightboxCaption.textContent = item.dataset.caption || '';
    lightbox.hidden = false;
    document.body.style.overflow = 'hidden';
  });
});
function closeLightbox() {
  lightbox.hidden = true;
  lightboxImage.src = '';
  document.body.style.overflow = '';
}
document.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
lightbox.addEventListener('click', event => { if (event.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape' && !lightbox.hidden) closeLightbox(); });
