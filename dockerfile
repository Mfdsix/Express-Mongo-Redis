FROM node:latest
WORKDIR /app
COPY . /app
CMD ["node", "app.js"]
