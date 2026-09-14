const menuButton = document.querySelector('.menu-button');
const menuIcon = document.querySelector('.menu-icon');
const navigation = document.querySelector('.navigation');
const overlay = document.querySelector('.overlay');

const ICON_OPEN = './images/icon-menu.svg';
const ICON_CLOSE = './images/icon-close-menu.svg';

function openMenu() {
    navigation.classList.add('is-open');
    overlay.classList.add('is-open');
    document.body.classList.add('no-scroll');
    menuButton.setAttribute('aria-expanded', 'true');
    menuIcon.src = ICON_CLOSE;
    menuIcon.alt = 'Close menu';
}

function closeMenu() {
    navigation.classList.remove('is-open');
    overlay.classList.remove('is-open');
    document.body.classList.remove('no-scroll');
    menuButton.setAttribute('aria-expanded', 'false');
    menuIcon.src = ICON_OPEN;
    menuIcon.alt = 'Open menu';
}

function toggleMenu() {
    navigation.classList.contains('is-open') ? closeMenu() : openMenu();
}

/* کلیک روی دکمه همبرگری */
menuButton.addEventListener('click', toggleMenu);

/* کلیک روی لایه تاریک */
overlay.addEventListener('click', closeMenu);

/* بستن با کلید Escape */
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navigation.classList.contains('is-open')) {
        closeMenu();
        menuButton.focus();   // برگرداندن فوکوس به دکمه
    }
});

/* اگه کاربر به سایز دسکتاپ رسید، منو بسته بشه */
const desktopMQ = window.matchMedia('(min-width: 768px)');
desktopMQ.addEventListener('change', (e) => {
    if (e.matches) closeMenu();
});

/* ===== دراپداونهای Features و Company ===== */

const dropdownButtons = document.querySelectorAll('.nav-section > button');

dropdownButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
        const section = btn.parentElement;                    // .nav-section
        const willOpen = !section.classList.contains('is-open');

        // ۱. همهی دراپداونهای دیگه رو ببند
        document.querySelectorAll('.nav-section.is-open').forEach((openSection) => {
            openSection.classList.remove('is-open');
            openSection.querySelector('button').setAttribute('aria-expanded', 'false');
        });

        // ۲. اگه لازمه، این دراپداون رو باز کن
        if (willOpen) {
            section.classList.add('is-open');
            btn.setAttribute('aria-expanded', 'true');
        }
    });
});

function closeMenu() {
    navigation.classList.remove('is-open');
    overlay.classList.remove('is-open');
    document.body.classList.remove('no-scroll');
    menuButton.setAttribute('aria-expanded', 'false');
    menuIcon.src = ICON_OPEN;
    menuIcon.alt = 'Open menu';

    // ↓ اضافه کن: بستن همهی دراپداونها
    document.querySelectorAll('.nav-section.is-open').forEach((section) => {
        section.classList.remove('is-open');
        section.querySelector('button').setAttribute('aria-expanded', 'false');
    });
}