# Используем официальный образ Node.js
FROM node:18

# Устанавливаем pnpm глобально
RUN npm install -g pnpm

# Устанавливаем рабочую директорию в контейнере
WORKDIR /app

# Копируем package.json и pnpm-lock.yaml в рабочую директорию
COPY package.json pnpm-lock.yaml ./

# Устанавливаем зависимости
RUN pnpm install

# Копируем остальные файлы проекта в контейнер
COPY . .


# Указываем команду для запуска приложения
CMD ["pnpm", "dev"]

# Открываем порт (замените 3000 на необходимый порт)
EXPOSE 10000

