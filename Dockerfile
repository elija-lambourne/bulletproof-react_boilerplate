FROM node:latest as build
LABEL authors="Elija Lambourne"

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:latest as production

COPY --from=build /app/dist /usr/share/nginx/html

RUN apt-get update && \
    apt-get install dos2unix && \
    apt-get clean

COPY nginx.conf /etc/nginx/conf.d/default.conf
RUN dos2unix /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]