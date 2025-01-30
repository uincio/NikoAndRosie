// Функция для проверки видимости элемента
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Получение всех элементов с классом "hidden"
const hiddenElements = document.querySelectorAll('.hidden');

// Обработчик события прокрутки
document.addEventListener('scroll', function() {
    hiddenElements.forEach(function(el) {
        if (isElementInViewport(el)) {
            // Если элемент виден, добавляем ему класс "visible"
            el.classList.remove('hidden');
            el.classList.add('visible');
        } else {
            // Иначе оставляем его скрытым
            el.classList.add('hidden');
            el.classList.remove('visible');
        }
    });
});