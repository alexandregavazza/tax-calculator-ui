# Stage 1: Build Angular app
FROM node:18-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build -- --output-path=dist --configuration production

# Stage 2: Serve with Nginx
FROM nginx:stable-alpine

RUN rm -rf /usr/share/nginx/html/*

# Adjust this line based on your actual dist folder name
COPY --from=build /app/dist/taxcalculator-ui /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]