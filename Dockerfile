FROM node:20-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
ENV WDS_SOCKET_PORT=0 \
    REACT_APP_FIREBASE_API_KEY=AIzaSyA2zggT-V6eWeAZmRjMGklxJ7CKGzUOfvY \
    REACT_APP_FIREBASE_AUTH_DOMAIN=rezume-a5269.firebaseapp.com \
    REACT_APP_FIREBASE_PROJECT_ID=rezume-a5269 \
    REACT_APP_FIREBASE_STORAGE_BUCKET=gs://rezume-a5269.appspot.com \
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID=60826985488 \
    REACT_APP_FIREBASE_APP_ID=1:60826985488:web:2637058eb25c03f5d39695 \
    REACT_APP_FIREBASE_MEASUREMENT_ID=G-RVFTFZWE97 \
    REACT_APP_FIREBASE_DATABASE_URL=https://rezume-a5269-default-rtdb.asia-southeast1.firebasedatabase.app/
RUN npm run build

FROM nginx:stable-alpine
COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf 
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
