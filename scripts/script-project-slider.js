let projects = document.querySelectorAll('.article_projects')[0];
let counter = 0;

// Функция для обновления отображения
function updateDisplay() {
    // Скрываем все элементы
    for (let i = 0; i < projects.children.length; i++) {
        projects.children[i].style.display = "none";
    }

    // Определяем индексы элементов для отображения
    let firstIndex, secondIndex;

    // Если ширина окна менее 960px, отображаем только один элемент
    if (window.innerWidth < 960) {
        // Определяем индекс элемента для отображения при разрешении менее 960px
        firstIndex = counter % projects.children.length;
        projects.children[firstIndex].style.display = "block";
    } else {
        // Иначе, если ширина окна от 960px до 1360px, отображаем два элемента
        firstIndex = counter % projects.children.length;
        secondIndex = (counter + 1) % projects.children.length;

        projects.children[firstIndex].style.display = "block";
        projects.children[secondIndex].style.display = "block";
    }
}

// Функция для проверки ширины окна
function checkWindowWidth() {
    // Если ширина окна менее 1360px, то выполняем скрипт
    if (window.innerWidth < 1360) {
        // Если ширина окна менее 960px, отображаем только один элемент
        if (window.innerWidth < 960) {
            // Устанавливаем счетчик на четное значение
            counter = Math.floor(counter / 2) * 2;
            // Обновляем отображение
            updateDisplay();
        } else {
            // Иначе переключаемся между двумя элементами как раньше
            updateDisplay();
        }
    }
}

// Проверяем ширину окна при загрузке страницы
checkWindowWidth();

// Обработчик нажатия на кнопку "next"
document.querySelectorAll(".slider-next")[0].addEventListener('click', () => {
    // Если ширина окна менее 1360px, переключаем элементы
    if (window.innerWidth < 1360) {
        // Если ширина окна менее 960px, переключаем элементы на один вперед
        if (window.innerWidth < 960) {
            counter += 1;
        } else {
            // Иначе переключаемся между двумя элементами как раньше
            counter += 2;
        }
        // Обновляем отображение
        updateDisplay();
    }
});
document.querySelectorAll(".slider-next")[1].addEventListener('click', () => {
    // Если ширина окна менее 1360px, переключаем элементы
    if (window.innerWidth < 1360) {
        // Если ширина окна менее 960px, переключаем элементы на один вперед
        if (window.innerWidth < 960) {
            counter += 1;
        } else {
            // Иначе переключаемся между двумя элементами как раньше
            counter += 2;
        }
        // Обновляем отображение
        updateDisplay();
    }
});

// Обработчик нажатия на кнопку "prev"
document.querySelectorAll(".slider-prev")[0].addEventListener('click', () => {
    // Если ширина окна менее 1360px, переключаем элементы
    if (window.innerWidth < 1360) {
        // Если ширина окна менее 960px, переключаем элементы на один назад
        if (window.innerWidth < 960) {
            counter -= 1;
        } else {
            // Иначе переключаемся между двумя элементами как раньше
            counter -= 2;
        }
        // Обновляем отображение
        updateDisplay();
    }
});
document.querySelectorAll(".slider-prev")[1].addEventListener('click', () => {
    // Если ширина окна менее 1360px, переключаем элементы
    if (window.innerWidth < 1360) {
        // Если ширина окна менее 960px, переключаем элементы на один назад
        if (window.innerWidth < 960) {
            counter -= 1;
        } else {
            // Иначе переключаемся между двумя элементами как раньше
            counter -= 2;
        }
        // Обновляем отображение
        updateDisplay();
    }
});

// Обработчик изменения размера окна
window.addEventListener('resize', () => {
    // Проверяем ширину окна при изменении размера
    checkWindowWidth();
});
