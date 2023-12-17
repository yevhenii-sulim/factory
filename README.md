- HTML файли з розділами повинні бути в папці partials

- В index.html імпортовані розділи як "<include src="./partials/example.html"></include>". 

- В папці sass є папки component та utils. Компоненти в components створені як "_name.scss"


utils

- В файлі _common.scss встановлені глобально стилі

- В файлі const.scss встановлені константи

- Встановлені шрифти які мають константи :
            $montserrat: 'Montserrat', sans-serif;
            $seymour: 'Seymour One', sans-serif;
            $dm: 'DM Sans', sans-serif;

- Створені константи кольорів для тексту

- Є стандартний reset стилів

-----------------------------

- В головному index.html підключений нормалізатор стилів

- 