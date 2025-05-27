document.addEventListener('DOMContentLoaded', () => {
    const heart = document.querySelector('.layered-heart');
  
    const poemLines = [
      "Лишь тебя одну я искал повсюду,",
      "Плыли в вышине звездные пути,",
      "Я тебя искал, жил и верил в чудо.",
      "Страшно, что тебя мог я не найти,",
      "Ты в судьбе моей как весенний ветер,",
      "Ты в любви моей вечное тепло.",
      "Хорошо, что мы встретились на свете,",
      "Но не знаю я, за что мне повезло.",
      "",
  
      "Я люблю тебя,",
      "Смотри восходит в небе солнце молодое.",
      "Я люблю тебя,",
      "И даже небо стало вдруг еще просторней.",
      "Я люблю тебя,",
      "Тебе протягиваю сердце на ладони.",
      "Я люблю тебя,",
      "Я так люблю одну тебя.",
      "",
  
      "Что для нас теперь грома громыханье,",
      "Что для нас теперь долгие года,",
      "Ты моя мечта, ты мое дыханье,",
      "Ты вся жизнь моя, песня навсегда.",
      "Над землей любовь распахнула крылья,",
      "Радостный рассвет трубы протрубили,",
      "Это мы с тобой, мы любовь открыли,",
      "И никто до нас на свете не любил.",
      "",
  
      "Я тебя люблю, Яночка моя❤️"
    ];
  
    function smoothScrollTo(targetY, duration = 2000) {
        const startY = window.scrollY || window.pageYOffset;
        const distance = targetY - startY;
        let startTime = null;
      
        function animation(currentTime) {
          if (!startTime) startTime = currentTime;
          const timeElapsed = currentTime - startTime;
          const progress = Math.min(timeElapsed / duration, 1);
          // Плавное замедление
          const ease = progress < 0.5
            ? 2 * progress * progress
            : -1 + (4 - 2 * progress) * progress;
      
          window.scrollTo(0, startY + distance * ease);
      
          if (timeElapsed < duration) {
            requestAnimationFrame(animation);
          }
        }
      
        requestAnimationFrame(animation);
      }
      
    heart.addEventListener('click', () => {
        

        heart.classList.add('move-up');
        document.querySelectorAll('.heart').forEach(h => h.classList.add('heartbeat'));
        
        // Воспроизведение аудио
        const audio = document.getElementById('background-audio');
        audio.volume = 0.3;  // Значение от 0.0 (тихо) до 1.0 (максимум), например 0.3 — это 30% громкости
        audio.play().catch(e => console.warn('Автовоспроизведение заблокировано:', e));

        setTimeout(() => {
          const poemContainer = document.getElementById('poem');
      
          poemLines.forEach((line, index) => {
            setTimeout(() => {
              const p = document.createElement('div');
              p.className = 'line';
              p.textContent = line;
              poemContainer.appendChild(p);
      
              // Обновляем max-height для плавного расширения
              const fullHeight = poemContainer.scrollHeight;
              poemContainer.style.maxHeight = fullHeight + 'px';
      
              setTimeout(() => {
                p.classList.add('visible');
      
                const scrollOffset = 1000;
                const scrollTarget = p.getBoundingClientRect().top + window.scrollY - scrollOffset;
                
                // Запускаем плавный скролл с длительностью 1500 мс (можно менять)
                smoothScrollTo(scrollTarget, 2000);
      
              }, 100);
      
            }, index * 2500);
          });
        }, 10000);
      });
      
  });
  