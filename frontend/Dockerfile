# frontend/Dockerfile

FROM node:22

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Build do Vite
RUN npm run build

# Serve a build estática usando um servidor leve (serve)
RUN npm install -g serve

EXPOSE 5173

CMD ["serve", "-s", "dist", "-l", "5173"]
