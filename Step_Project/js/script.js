// ЭТО ОТВЕЧАЕТ ЗА ТО ЧТО БЫ ВИДЕО ТИТРЫ ИСЧЕЗЛИ ПРИ ЗАПУСКЕ ВИДЕО
        document.addEventListener("DOMContentLoaded", function () {
            document.getElementById('myVideo').addEventListener('play', function () {
                document.getElementById('video-title').style.opacity = 0;
            });
        });


// ЭТО ОТВЕЧАЕТ ЗА ТО ЧТО БЫ ВИДЕО ЗАПУСКАЛОСЬ, ДАЖЕ ПРИ НАЖАТИИ НА ТИТРЫ
        document.addEventListener("DOMContentLoaded", function() {
            var video = document.getElementById("myVideo");
            var videoTitle = document.getElementById("video-title");
        
            videoTitle.addEventListener("click", function() {
                if (video.paused) {
                    video.play();
                } else {
                    video.pause();
                }
            });
        });


// ЭТО ТО ЧТО ОТВЕЧАЕТ ЗА ВЕРТИКАЛЬНЫЙ НАВИГАЦИОННЫЙ СКРОЛЛ
        function scrollToElement(selector) {
            var element = document.querySelector(selector);
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }


// ЭТО ТО ЧТО ОТВЕЧАЕТ ЗА КНОПКУ 'Learn More' В БЛОКЕ 'About Us'
        function toggleText(button) {
            var cardContent = document.querySelector('.card-about-us-content');
            cardContent.classList.toggle('show');
            if (cardContent.classList.contains('show')) {
                button.textContent = 'Hide';
            } else {
                button.textContent = 'Learn More';
            }
        }

        
// ЭТО ТО ЧТО ОТВЕЧАЕТ ПЕРЕЛИСТЫВАНИЕ СЛАЙДОВ В БЛОКЕ 'Interior'
        let currentSlide = 0;
        const slides = document.querySelectorAll('.img-slide');
        const totalSlides = slides.length;
    
        document.getElementById('nextBtn').addEventListener('click', function() {
            changeSlide(1);
        });
    
        document.getElementById('prevBtn').addEventListener('click', function() {
            changeSlide(-1);
        });
       
        slides[currentSlide].classList.add('active');
        slides[(currentSlide + 1) % totalSlides].classList.add('active');
        
        function changeSlide(direction) {
            for (let i = 0; i < slides.length; i++) {
                slides[i].classList.remove('active');
            }
            currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
            slides[currentSlide].classList.add('active');
            slides[(currentSlide + 1) % totalSlides].classList.add('active');
        }

