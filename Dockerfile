FROM node:24

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 4040

CMD ["npm", "start"]