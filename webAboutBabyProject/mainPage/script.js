// const button = document.querySelector('.product-card-details__add button');

// // Добавляем обработчик события клика
// button.addEventListener('click', function() {
//     // Добавляем класс 'clicked' для изменения стиля
//     button.classList.add('clicked');
//     button.textContent = 'ADDED'; // Замените на необходимый вам текст

//     // Чтобы вернуть изначальный текст через некоторое время
//     setTimeout(() => {
//         button.textContent = '$240.00'; // Замените на изначальный текст кнопки
//         button.classList.remove('clicked');
//     }, 600); // Пример задержки в миллисекундах (0.6 секунды)

//     console.log('all right'); // Вывод в консоль для проверки работы скрипта
// });

const button = document.querySelector('.product-card-details__add button');

// Добавляем обработчик события клика
button.addEventListener('click', function() {
    // Добавляем класс 'clicked' для изменения стиля
    button.classList.add('clicked');

    // Чтобы вернуть изначальные стили через некоторое время
    setTimeout(() => {
        button.classList.remove('clicked');
    }, 600); // Пример задержки в миллисекундах (0.6 секунды)

    console.log('all right'); // Вывод в консоль для проверки работы скрипта
});