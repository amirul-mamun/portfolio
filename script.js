const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');
const form = document.querySelector('.contact-form');
const formStatus = document.querySelector('.form-status');
const heroVideo = document.querySelector('#hero-intro');
const videoToggle = document.querySelector('.video-toggle');

menuToggle?.addEventListener('click', () => {
  const isOpen = siteNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.querySelector('.menu-icon').textContent = isOpen ? '×' : '+';
});

siteNav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    siteNav.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
    const icon = menuToggle?.querySelector('.menu-icon');
    if (icon) icon.textContent = '+';
  });
});

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = form.elements.name.value.trim();
  const message = form.elements.message.value.trim();
  const text = `Hello Mujahid,\n\nName: ${name}\nMessage: ${message}`;
  window.location.href = `https://api.whatsapp.com/send?phone=8801321992076&text=${encodeURIComponent(text)}`;
});

document.querySelector('#year').textContent = new Date().getFullYear();

videoToggle?.addEventListener('click', () => {
  if (!heroVideo) return;

  if (heroVideo.paused) {
    heroVideo.muted = false;
    heroVideo.play().catch(() => {
      heroVideo.muted = true;
      heroVideo.play().catch(() => {});
    });
    videoToggle.setAttribute('aria-label', 'Pause introduction video');
    videoToggle.setAttribute('aria-pressed', 'true');
    videoToggle.innerHTML = '<span class="pause-icon">Ⅱ</span>';
    return;
  }

  heroVideo.pause();
  videoToggle.setAttribute('aria-label', 'Play introduction video');
  videoToggle.setAttribute('aria-pressed', 'false');
  videoToggle.innerHTML = '<span class="play-icon">▶</span>';
});

setTimeout(() => {
  if (!heroVideo) return;
  heroVideo.muted = false;
  heroVideo.play().catch(() => {
    heroVideo.muted = true;
    heroVideo.play().catch(() => {});
  });
}, 2000);
