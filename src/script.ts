const themeToggleBtn = document.getElementById('theme-toggle')!;
const themeToggleIconLight = document.getElementById(
  'theme-toggle-light-icon'
)!;
const themeToggleIconDark = document.getElementById('theme-toggle-dark-icon')!;
const nav = document.getElementById('nav')!;
const htmlEl = document.documentElement;

// INITIAL THEME
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  themeToggleIconDark.classList.remove('hidden');
} else {
  themeToggleIconLight.classList.remove('hidden');
}

// Theme functions
const toggleTheme = () => {
  htmlEl.classList.toggle('dark');
  themeToggleIconDark.classList.toggle('hidden');
  themeToggleIconLight.classList.toggle('hidden');
};

const setTheme = (theme: 'dark' | 'light') => {
  if (theme == 'dark') {
    htmlEl.classList.add('dark');
    themeToggleIconDark.classList.remove('hidden');
    themeToggleIconLight.classList.add('hidden');
    return;
  }

  htmlEl.classList.remove('dark');
  themeToggleIconLight.classList.remove('hidden');
  themeToggleIconDark.classList.add('hidden');
};

const navbarHider = () => {
  let prevScrollPos = window.scrollY;

  window.onscroll = () => {
    let currentScrollPos = window.scrollY;

    if (currentScrollPos > prevScrollPos) {
      nav.style.top = '-80px';
    } else {
      nav.style.top = '0';
    }

    prevScrollPos = currentScrollPos;
  };
};

// Event Handlers
themeToggleBtn.addEventListener('click', toggleTheme);
window
  .matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', (e) => {
    // @ts-ignore
    if (e.target?.matches) setTheme('dark');
    else setTheme('light');
  });

navbarHider();
