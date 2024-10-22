# Usa una imagen base de Node.js 
FROM node:22.6.0

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia el archivo package.json y package-lock.json 
COPY package*.json ./

# Instala las dependencias de la aplicación
RUN npm install

# Copia el resto de la aplicación al contenedor
COPY . .

# Expone el puerto en el que la aplicación correrá
EXPOSE 3000

# Comando para correr la aplicación
CMD ["node", "app.js"]
