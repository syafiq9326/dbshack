FROM node:20-slim

WORKDIR /app

COPY package*.json ./
RUN npm ci 
COPY . .
ARG FRONTEND_URL
ENV FRONTEND_URL=$FRONTEND_URL
EXPOSE 5000
CMD ["node", "server.js"]