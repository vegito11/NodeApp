FROM node:alpine
RUN mkdir ./sample-app
WORKDIR /sample-app
COPY ./package.json ./
RUN npm install
COPY ./ ./
EXPOSE 3000
CMD ["nodemon", "app.js"]
