import http from 'http';
import { MongoClient } from 'mongodb';
import { fetchAndSaveAllData } from './weatherETL.js'; 

const uri = "mongodb://mongodb:27017";
const client = new MongoClient(uri);

const server = http.createServer(async (req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    try {
      await client.connect();
      const database = client.db("weatherDB");
      const collection = database.collection("weatherData");
      const data = await collection.find().toArray();


      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(data));

    } catch (error) {
      console.error(error);
      res.statusCode = 500;
      res.end("Error connecting to MongoDB");
    } finally {
      await client.close();
    }
  } else {

    res.statusCode = 404;
    res.end("Not Found");
  }
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});

(async () => {
  console.log('Iniciando el proceso de extracción de datos meteorológicos...');
  await fetchAndSaveAllData();
  console.log('Proceso completado.');
})();

