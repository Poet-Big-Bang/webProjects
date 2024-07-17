function updateContent() {
    const width = window.innerWidth;
    const desktopContent = document.getElementById('desktop-content');
    const mobileContent = document.getElementById('mobile-content');

    if (width < 768) {
        // Показываем мобильный контент
        desktopContent.classList.remove('show');
        mobileContent.classList.add('show');
    } else {
        // Показываем десктопный контент
        mobileContent.classList.remove('show');
        desktopContent.classList.add('show');
    }
}

// Функция для загрузки специфичного JavaScript файла
function loadScript(src) {
    const script = document.createElement('script');
    script.src = src;
    document.head.appendChild(script);
}

// Обновите содержимое при начальной загрузке и изменении размера окна
document.addEventListener('DOMContentLoaded', () => {
    updateContent();

    // Загрузите соответствующий JavaScript файл в зависимости от ширины экрана
    const width = window.innerWidth;
    if (width >= 768) {
        loadScript('desktop.js');
    } else {
        loadScript('mobile.js');
    }

    // Обновите содержимое и загружайте соответствующий JavaScript файл при изменении размера окна
    window.addEventListener('resize', () => {
        updateContent();
        const newWidth = window.innerWidth;
        if (newWidth >= 768 && !document.querySelector('script[src="desktop.js"]')) {
            loadScript('desktop.js');
        } else if (newWidth < 768 && !document.querySelector('script[src="mobile.js"]')) {
            loadScript('mobile.js');
        }
    });
});