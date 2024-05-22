// Задаємо дату, з якої починаємо відлік
const startDate = new Date('2024-01-04T21:11:30'); 

// Додаємо 2 години до початкового часу
const startDateWithOffset = startDate.getTime() + 0 * 60 * 60 * 1000;

// Функція для оновлення часу
function updateTime() {
  // Отримуємо поточний час
  const startTime = new Date().getTime();

  // Різниця між поточним та оновленим початковим часом
  const difference = startTime - startDateWithOffset;

  // Переводимо різницю в дні, години, хвилини та секунди
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  // Формуємо текст для відображення
  const text = `${days} днів ${hours} годин ${minutes} хвилин ${seconds} секунд`;

  // Отримуємо блок для виведення та встановлюємо в нього текст
  const timeDiv = document.getElementById('відлікЧасу');
  timeDiv.textContent = text;
} 

// Викликаємо функцію оновлення кожну секунду
setInterval(updateTime, 1000);

const box = document.querySelector('.box');
const timeBlock = document.getElementById('відлікЧасу');

// Функція, яка буде викликатися після закінчення анімації
function onAnimationEnd() {
  timeBlock.style.display = 'block'; // Робимо блок видимим
}

// Додаємо обробник події, який відслідковує завершення анімації
box.addEventListener('animationend', onAnimationEnd);
