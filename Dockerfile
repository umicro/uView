FROM node:16.16.0 as builder

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.21.1-alpine
COPY --from=builder /app/dist/build/h5 /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
