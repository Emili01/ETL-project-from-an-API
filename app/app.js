import http from 'http';
import { config } from 'dotenv'; 
import { MongoClient } from 'mongodb';
import { fetchAndSaveAllData } from './weatherETL.js'; 

config();  

const uri = process.env.DB_URI ;
const client = new MongoClient(uri);

let database;

async function connectToMongo() {
  try {
    await client.connect();
    database = client.db("clima_municipios"); 
    console.log("Conectado a MongoDB");
  } catch (error) {
    console.error("Error conectando a MongoDB:", error);
    process.exit(1); 
  }
}


const server = http.createServer(async (req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    try {
      const collection = database.collection("datos_meteorologicos");  
      const data = await collection.find().toArray();

      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(data));
     
    } catch (error) {
      console.error("Error obteniendo datos de MongoDB:", error);
      res.statusCode = 500;
      res.end("Error interno del servidor");
    }
  } else {
    res.statusCode = 404;
    res.end("Ruta no encontrada");
  }
});

server.listen(3000, async () => {
  console.log('Servidor ejecutándose en el puerto 3000');
  await connectToMongo();  
  console.log('Iniciando proceso de extracción de datos meteorológicos...');
  await fetchAndSaveAllData(database);  
  console.log('Proceso ETL completado.');
});
