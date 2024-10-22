// const fetch = require('node-fetch');

// // Función para hacer la solicitud y procesar los datos
// async function getWeatherData(lat, lon, startDate, endDate) {
//   const url = `https://archive-api.open-meteo.com/v1/archive?latitude=${lat}&longitude=${lon}&start_date=${startDate}&end_date=${endDate}&daily=temperature_2m_max,precipitation_sum`;

//   try {
//     const response = await fetch(url);
//     const weatherData = await response.json();

//     // Transformación: calcular la precipitación total
//     const totalPrecipitation = weatherData.daily.precipitation_sum.reduce((sum, day) => sum + day, 0);
//     console.log(`Total precipitation: ${totalPrecipitation} mm`);
    
//     return weatherData.daily;
//   } catch (error) {
//     console.error('Error fetching weather data:', error);
//   }
// }

// module.exports = { getWeatherData };




   const municipios = [
      { name: "Abasolo", lat: 20.4554, lon: -101.5324 },
      { name: "Acámbaro", lat: 20.0300, lon: -100.7226 },
      { name: "Apaseo el Alto", lat: 20.4589, lon: -100.6051 },
      { name: "Apaseo el Grande", lat: 20.5483, lon: -100.6223 },
      { name: "Atarjea", lat: 21.3185, lon: -99.8171 },
      { name: "Celaya", lat: 20.5235, lon: -100.8157 },
      { name: "Comonfort", lat: 20.7197, lon: -100.7635 },
      { name: "Coroneo", lat: 20.2408, lon: -100.4136 },
      { name: "Cortazar", lat: 20.4812, lon: -100.9605 },
      { name: "Cuerámaro", lat: 20.6328, lon: -101.6466 },
      { name: "Doctor Mora", lat: 21.1404, lon: -100.3293 },
      { name: "Dolores Hidalgo Cuna de la Independencia Nacional", lat: 21.1561, lon: -100.9314 },
      { name: "Guanajuato (Capital)", lat: 21.0190, lon: -101.2574 },
      { name: "Huanímaro", lat: 20.3746, lon: -101.5064 },
      { name: "Irapuato", lat: 20.6767, lon: -101.3563 },
      { name: "Jaral del Progreso", lat: 20.3728, lon: -101.0625 },
      { name: "Jerécuaro", lat: 20.1373, lon: -100.5142 },
      { name: "León", lat: 21.1221, lon: -101.6827 },
      { name: "Manuel Doblado", lat: 20.7256, lon: -101.9441 },
      { name: "Moroleón", lat: 20.1250, lon: -101.1895 },
      { name: "Ocampo", lat: 21.6275, lon: -101.4841 },
      { name: "Pénjamo", lat: 20.4283, lon: -101.7227 },
      { name: "Pueblo Nuevo", lat: 20.5446, lon: -101.3276 },
      { name: "Purísima del Rincón", lat: 21.0338, lon: -101.8777 },
      { name: "Romita", lat: 20.8705, lon: -101.5189 },
      { name: "Salamanca", lat: 20.5717, lon: -101.1918 },
      { name: "Salvatierra", lat: 20.2131, lon: -100.8812 },
      { name: "San Diego de la Unión", lat: 21.4752, lon: -100.8808 },
      { name: "San Felipe", lat: 21.4792, lon: -101.2122 },
      { name: "San Francisco del Rincón", lat: 21.0158, lon: -101.8603 },
      { name: "San José Iturbide", lat: 21.0044, lon: -100.3895 },
      { name: "San Luis de la Paz", lat: 21.2966, lon: -100.5174 },
      { name: "Santa Catarina", lat: 21.1969, lon: -100.0536 },
      { name: "Santa Cruz de Juventino Rosas", lat: 20.6419, lon: -101.0143 },
      { name: "Santiago Maravatío", lat: 20.1972, lon: -101.0972 },
      { name: "Silao", lat: 20.9320, lon: -101.4282 },
      { name: "Tarandacuao", lat: 20.0206, lon: -100.5198 },
      { name: "Tarimoro", lat: 20.2884, lon: -100.7456 },
      { name: "Tierra Blanca", lat: 21.0131, lon: -100.3396 },
      { name: "Uriangato", lat: 20.1485, lon: -101.1792 },
      { name: "Valle de Santiago", lat: 20.3903, lon: -101.1877 },
      { name: "Victoria", lat: 21.1981, lon: -100.2254 },
      { name: "Villagrán", lat: 20.5294, lon: -100.9979 },
      { name: "Xichú", lat: 21.2978, lon: -100.0565 },
      { name: "San Miguel de Allende", lat: 20.9153, lon: -100.7436 },
      { name: "Yuriria", lat: 20.2025, lon: -101.1342 },
 ];
//Banearon mi IP >:(

  // const municipios = [
  //   { name: "Abasolo", lat: 20.4554, lon: -101.5324 },
  //   { name: "Acámbaro", lat: 20.0300, lon: -100.7226 },
  //     { name: "Apaseo el Alto", lat: 20.4589, lon: -100.6051 },
  //     { name: "Apaseo el Grande", lat: 20.5483, lon: -100.6223 },
  //     { name: "Atarjea", lat: 21.3185, lon: -99.8171 },
  //     { name: "Celaya", lat: 20.5235, lon: -100.8157 },
  //     { name: "Comonfort", lat: 20.7197, lon: -100.7635 },
  //   // demás municipios...
  // ];
  
  // import fetch from 'node-fetch'; // Importar node-fetch
  // import { MongoClient } from 'mongodb'; // Importar MongoClient
  
  // const uri = "mongodb://mongodb:27017";
  // const client = new MongoClient(uri);
  
  // const startDate = '2019-01-01';
  // const endDate = '2024-10-01';
  
  // // Función para crear un retraso (throttling)
  // function delay(ms) {
  //   return new Promise(resolve => setTimeout(resolve, ms));
  // }
  
  // // Función para manejar la conexión a MongoDB
  // async function connectToMongo() {
  //   try {
  //     if (!client.isConnected) {
  //       await client.connect();
  //       console.log("Conectado a MongoDB");
  //     }
  //     return client.db('clima_municipios');
  //   } catch (error) {
  //     console.error("Error al conectar con MongoDB:", error);
  //   }
  // }
  
  // async function fetchWeatherData(lat, lon, startDate, endDate) {
  //   const url = `https://archive-api.open-meteo.com/v1/archive?latitude=${lat}&longitude=${lon}&start_date=${startDate}&end_date=${endDate}&hourly=temperature_2m,apparent_temperature,surface_pressure&daily=temperature_2m_max,temperature_2m_min,precipitation_sum&timezone=America/Mexico_City`;
  
  //   try {
  //     const response = await fetch(url);
  //     if (!response.ok) throw new Error(`Error en la solicitud: ${response.status}`);
  //     const data = await response.json();
  //     return data;
  //   } catch (error) {
  //     console.error(error);
  //     return null;
  //   }
  // }
  
  // // Función para guardar los datos en MongoDB
  // async function saveToMongo(municipio, data) {
  //   try {
  //     const database = await connectToMongo();
  //     const collection = database.collection('datos_meteorologicos');
  
  //     for (let i = 0; i < data.daily.time.length; i++) {
  //       const documento = {
  //         municipio: municipio.name,
  //         latitud: municipio.lat,
  //         longitud: municipio.lon,
  //         fecha: data.daily.time[i],
  //         datos_meteorologicos: {
  //           temperatura_max: data.daily.temperature_2m_max[i],
  //           temperatura_min: data.daily.temperature_2m_min[i],
  //           precipitacion: data.daily.precipitation_sum[i],
  //         },
  //         datos_horarios: []
  //       };
  
  //       // Agregar datos horarios para ese día
  //       const hora_inicio = i * 24; // cada día tiene 24 horas
  //       for (let j = 0; j < 24; j++) {
  //         const indice_hora = hora_inicio + j;
  //         documento.datos_horarios.push({
  //           hora: `${j}:00`,
  //           temperatura: data.hourly.temperature_2m[indice_hora],
  //           sensacion_termica: data.hourly.apparent_temperature[indice_hora],
  //           presion_superficial: data.hourly.surface_pressure[indice_hora]
  //         });
  //       }
  
  //       // Insertar el documento en MongoDB
  //       await collection.insertOne(documento);
  //     }
  //     console.log(`Datos de ${municipio.name} guardados en MongoDB.`);
  //   } catch (err) {
  //     console.error(`Error al guardar los datos de ${municipio.name}:`, err);
  //   }
  // }
  
  // // Función para extraer y guardar los datos de todos los municipios
  // export async function fetchAndSaveAllData() {
  //   for (const municipio of municipios) {
  //     console.log(`Extrayendo datos para ${municipio.name}...`);
  //     const data = await fetchWeatherData(municipio.lat, municipio.lon, startDate, endDate);
  //     if (data) {
  //       await saveToMongo(municipio, data);
  //     }
  
  //     // Añadir un retraso de 2 segundos entre cada solicitud
  //     await delay(2000); 
  //   }
  //   await client.close(); // Cerrar la conexión una vez que todo el proceso ha terminado
  // }
  
  // // Llamar a la función para iniciar el proceso ETL
  // fetchAndSaveAllData();
  

  import fetch from 'node-fetch'; // Importar node-fetch
  import { MongoClient } from 'mongodb'; // Importar MongoClient
  
  const uri = "mongodb://mongodb:27017";
  const client = new MongoClient(uri);
  
  const startDate = '2019-01-01';
  const endDate = '2024-10-01';
  
  // Función para crear un retraso (throttling)
  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  // Función para manejar la conexión a MongoDB
  async function connectToMongo() {
    try {
      if (!client.isConnected) {
        await client.connect();
        console.log("Conectado a MongoDB");
      }
      return client.db('clima_municipios');
    } catch (error) {
      console.error("Error al conectar con MongoDB:", error);
    }
  }
  
  // Función para obtener datos del clima con manejo de errores 429
  async function fetchWeatherData(lat, lon, startDate, endDate, retries = 3) {
    const url = `https://archive-api.open-meteo.com/v1/archive?latitude=${lat}&longitude=${lon}&start_date=${startDate}&end_date=${endDate}&hourly=temperature_2m,apparent_temperature,surface_pressure&daily=temperature_2m_max,temperature_2m_min,precipitation_sum&timezone=America/Mexico_City`;
  
    try {
      const response = await fetch(url);
      if (!response.ok) {
        if (response.status === 429 && retries > 0) {
          console.log('Límite de solicitudes excedido. Esperando 1 minuto antes de reintentar...');
          await delay(60000); // Espera 1 minuto antes de reintentar
          return fetchWeatherData(lat, lon, startDate, endDate, retries - 1); // Reintenta la solicitud
        } else {
          throw new Error(`Error en la solicitud: ${response.status}`);
        }
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`Error al obtener datos del clima para latitud ${lat}, longitud ${lon}:`, error);
      return null;
    }
  }
  
  // Función para guardar los datos en MongoDB
  async function saveToMongo(municipio, data) {
    try {
      const database = await connectToMongo();
      const collection = database.collection('datos_meteorologicos');
  
      for (let i = 0; i < data.daily.time.length; i++) {
        const documento = {
          municipio: municipio.name,
          latitud: municipio.lat,
          longitud: municipio.lon,
          fecha: data.daily.time[i],
          datos_meteorologicos: {
            temperatura_max: data.daily.temperature_2m_max[i],
            temperatura_min: data.daily.temperature_2m_min[i],
            precipitacion: data.daily.precipitation_sum[i],
          },
          datos_horarios: []
        };
  
        // Agregar datos horarios para ese día
        const hora_inicio = i * 24; // cada día tiene 24 horas
        for (let j = 0; j < 24; j++) {
          const indice_hora = hora_inicio + j;
          documento.datos_horarios.push({
            hora: `${j}:00`,
            temperatura: data.hourly.temperature_2m[indice_hora],
            sensacion_termica: data.hourly.apparent_temperature[indice_hora],
            presion_superficial: data.hourly.surface_pressure[indice_hora]
          });
        }
  
        // Insertar el documento en MongoDB
        await collection.insertOne(documento);
      }
      console.log(`Datos de ${municipio.name} guardados en MongoDB.`);
    } catch (err) {
      console.error(`Error al guardar los datos de ${municipio.name}:`, err);
    }
  }
  
  // Función para verificar si ya existen datos para un municipio
  async function dataExistsForMunicipio(municipio) {
    const database = await connectToMongo();
    const collection = database.collection('datos_meteorologicos');
  
    const count = await collection.countDocuments({ municipio: municipio.name });
    return count > 0;
  }
  
  // Función para extraer y guardar los datos de todos los municipios
  export async function fetchAndSaveAllData() {
    for (const municipio of municipios) {
      // Verificar si ya existen datos para el municipio
      const datosExisten = await dataExistsForMunicipio(municipio);
      
      if (datosExisten) {
        console.log(`Los datos para ${municipio.name} ya existen. Saltando extracción...`);
        continue; // Saltar a la siguiente iteración si ya hay datos
      }
  
      console.log(`Extrayendo datos para ${municipio.name}...`);
      const data = await fetchWeatherData(municipio.lat, municipio.lon, startDate, endDate);
      if (data) {
        await saveToMongo(municipio, data);
      }
  
      // Añadir un retraso de 2 segundos entre cada solicitud
      await delay(1000); 
    }
    await client.close(); // Cerrar la conexión una vez que todo el proceso ha terminado
  }
  

////5:37pm
// // Version correcta 
// import fetch from 'node-fetch'; // Importar node-fetch
// import { MongoClient } from 'mongodb'; // Importar MongoClient

// const uri = "mongodb://mongodb:27017";
// const client = new MongoClient(uri);

// const startDate = '2019-01-01';
// const endDate = '2024-10-01';

// // Función para crear un retraso (throttling)
// function delay(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

// // Función para manejar la conexión a MongoDB
// async function connectToMongo() {
//   try {
//     if (!client.isConnected) {
//       await client.connect();
//       console.log("Conectado a MongoDB");
//     }
//     return client.db('clima_municipios');
//   } catch (error) {
//     console.error("Error al conectar con MongoDB:", error);
//   }
// }

// // Función para obtener datos del clima con manejo de errores 429
// async function fetchWeatherData(lat, lon, startDate, endDate, retries = 3) {
//   const url = `https://archive-api.open-meteo.com/v1/archive?latitude=${lat}&longitude=${lon}&start_date=${startDate}&end_date=${endDate}&hourly=temperature_2m,apparent_temperature,surface_pressure&daily=temperature_2m_max,temperature_2m_min,precipitation_sum&timezone=America/Mexico_City`;

//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       if (response.status === 429 && retries > 0) {
//         console.log('Límite de solicitudes excedido. Esperando 1 minuto antes de reintentar...');
//         await delay(60000); // Espera 1 minuto antes de reintentar
//         return fetchWeatherData(lat, lon, startDate, endDate, retries - 1); // Reintenta la solicitud
//       } else {
//         throw new Error(`Error en la solicitud: ${response.status}`);
//       }
//     }
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error(`Error al obtener datos del clima para latitud ${lat}, longitud ${lon}:`, error);
//     return null;
//   }
// }

// // Función para guardar los datos en MongoDB
// async function saveToMongo(municipio, data) {
//   try {
//     const database = await connectToMongo();
//     const collection = database.collection('datos_meteorologicos');

//     for (let i = 0; i < data.daily.time.length; i++) {
//       const documento = {
//         municipio: municipio.name,
//         latitud: municipio.lat,
//         longitud: municipio.lon,
//         fecha: data.daily.time[i],
//         datos_meteorologicos: {
//           temperatura_max: data.daily.temperature_2m_max[i],
//           temperatura_min: data.daily.temperature_2m_min[i],
//           precipitacion: data.daily.precipitation_sum[i],
//         },
//         datos_horarios: []
//       };

//       // Agregar datos horarios para ese día
//       const hora_inicio = i * 24; // cada día tiene 24 horas
//       for (let j = 0; j < 24; j++) {
//         const indice_hora = hora_inicio + j;
//         documento.datos_horarios.push({
//           hora: `${j}:00`,
//           temperatura: data.hourly.temperature_2m[indice_hora],
//           sensacion_termica: data.hourly.apparent_temperature[indice_hora],
//           presion_superficial: data.hourly.surface_pressure[indice_hora]
//         });
//       }

//       // Insertar el documento en MongoDB
//       await collection.insertOne(documento);
//     }
//     console.log(`Datos de ${municipio.name} guardados en MongoDB.`);
//   } catch (err) {
//     console.error(`Error al guardar los datos de ${municipio.name}:`, err);
//   }
// }

// // Función para extraer y guardar los datos de todos los municipios
// export async function fetchAndSaveAllData() {
//   for (const municipio of municipios) {
//     console.log(`Extrayendo datos para ${municipio.name}...`);
//     const data = await fetchWeatherData(municipio.lat, municipio.lon, startDate, endDate);
//     if (data) {
//       await saveToMongo(municipio, data);
//     }

//     // Añadir un retraso de 2 segundos entre cada solicitud
//     await delay(1000); 
//   }
//   await client.close(); // Cerrar la conexión una vez que todo el proceso ha terminado
// }


////////////////////////////////////////////////////////////////////////////
// Llamar a la función para iniciar el proceso ETL
//fetchAndSaveAllData();


  /* Version de prueba 11:38pm
  import fetch from 'node-fetch'; // Importar node-fetch
  import { MongoClient } from 'mongodb'; // Importar MongoClient
  
  const uri = "mongodb://mongodb:27017";
  const client = new MongoClient(uri);
  
  const startDate = '2019-01-01';
  const endDate = '2024-10-01';
  
  // Función para crear un retraso (throttling)
  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  // Función para manejar la conexión a MongoDB
  async function connectToMongo() {
    try {
      if (!client.topology?.isConnected()) {
        await client.connect();
        console.log("Conectado a MongoDB");
      }
      return client.db('clima_municipios');
    } catch (error) {
      console.error("Error al conectar con MongoDB:", error);
    }
  }
  
  // Función para obtener datos del clima con manejo de errores 429
  async function fetchWeatherData(lat, lon, startDate, endDate, retries = 3) {
    const url = `https://archive-api.open-meteo.com/v1/archive?latitude=${lat}&longitude=${lon}&start_date=${startDate}&end_date=${endDate}&hourly=temperature_2m,relative_humidity_2m,apparent_temperature,surface_pressure&daily=temperature_2m_max,temperature_2m_min&timezone=America/Mexico_City`;
  
    try {
      const response = await fetch(url);
      if (!response.ok) {
        if (response.status === 429 && retries > 0) {
          console.log('Límite de solicitudes excedido. Esperando 1 minuto antes de reintentar...');
          await delay(60000); // Espera 1 minuto antes de reintentar
          return fetchWeatherData(lat, lon, startDate, endDate, retries - 1); // Reintenta la solicitud
        } else {
          throw new Error(`Error en la solicitud: ${response.status}`);
        }
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`Error al obtener datos del clima para latitud ${lat}, longitud ${lon}:`, error);
      return null;
    }
  }
  
  // Función para guardar los datos en MongoDB
  async function saveToMongo(municipio, data) {
    try {
      const database = await connectToMongo();
      const collection = database.collection('datos_meteorologicos');
  
      for (let i = 0; i < data.daily.time.length; i++) {
        const documento = {
          municipio: municipio.name,
          latitud: municipio.lat,
          longitud: municipio.lon,
          fecha: data.daily.time[i],
          datos_meteorologicos: {
            temperatura_max: data.daily.temperature_2m_max[i],
            temperatura_min: data.daily.temperature_2m_min[i],
          },
          datos_horarios: []
        };
  
        // Agregar datos horarios para ese día
        const hora_inicio = i * 24; // cada día tiene 24 horas
        for (let j = 0; j < 24; j++) {
          const indice_hora = hora_inicio + j;
          documento.datos_horarios.push({
            hora: `${j}:00`,
            temperatura: data.hourly.temperature_2m[indice_hora],
            sensacion_termica: data.hourly.apparent_temperature[indice_hora],
            presion_superficial: data.hourly.surface_pressure[indice_hora]
          });
        }
  
        // Insertar el documento en MongoDB
        await collection.insertOne(documento);
      }
      console.log(`Datos de ${municipio.name} guardados en MongoDB.`);
    } catch (err) {
      console.error(`Error al guardar los datos de ${municipio.name}:`, err);
    }
  }
  
  // Función para extraer y guardar los datos de todos los municipios
  export async function fetchAndSaveAllData() {
    for (const municipio of municipios) {
      console.log(`Extrayendo datos para ${municipio.name}...`);
      const data = await fetchWeatherData(municipio.lat, municipio.lon, startDate, endDate);
      if (data) {
        await saveToMongo(municipio, data);
      }
  
      // Añadir un retraso de 2 segundos entre cada solicitud
      await delay(500);
    }
    await client.close(); // Cerrar la conexión una vez que todo el proceso ha terminado
  }
  
  fetchAndSaveAllData();
  */

  // import fetch from 'node-fetch'; // Importar node-fetch
  // import { MongoClient } from 'mongodb'; // Importar MongoClient
  
  // const uri = "mongodb://mongodb:27017";
  // const client = new MongoClient(uri);
  
  // const startDate = '2019-01-01';
  // const endDate = '2024-10-01';
  
  // // Función para crear un retraso (throttling)
  // function delay(ms) {
  //   return new Promise(resolve => setTimeout(resolve, ms));
  // }
  
  // // Función para manejar la conexión a MongoDB
  // async function connectToMongo() {
  //   try {
  //     if (!client.isConnected) {
  //       await client.connect();
  //       console.log("Conectado a MongoDB");
  //     }
  //     return client.db('clima_municipios');
  //   } catch (error) {
  //     console.error("Error al conectar con MongoDB:", error);
  //   }
  // }
  
  // // Función para obtener datos del clima con manejo de errores 429
  // async function fetchWeatherData(lat, lon, startDate, endDate, retries = 3) {
  //   const url = `https://archive-api.open-meteo.com/v1/archive?latitude=${lat}&longitude=${lon}&start_date=${startDate}&end_date=${endDate}&hourly=temperature_2m,relative_humidity_2m,apparent_temperature,surface_pressure&daily=temperature_2m_max,temperature_2m_min&timezone=America/Mexico_City`;
                 
  //   try {
  //     const response = await fetch(url);
  //     if (!response.ok) {
  //       if (response.status === 429 && retries > 0) {
  //         console.log('Límite de solicitudes excedido. Esperando 1 minuto antes de reintentar...');
  //         await delay(60000); // Espera 1 minuto antes de reintentar
  //         return fetchWeatherData(lat, lon, startDate, endDate, retries - 1); // Reintenta la solicitud
  //       } else {
  //         throw new Error('Error en la solicitud: ${response.status}');
  //       }
  //     }
  //     const data = await response.json();
  //     return data;
  //   } catch (error) {
  //     console.error('Error al obtener datos del clima para latitud ${lat}, longitud ${lon}:', error);
  //     return null;
  //   }
  // }
  
  // // Función para guardar los datos en MongoDB
  // async function saveToMongo(municipio, data) {
  //   try {
  //     const database = await connectToMongo();
  //     const collection = database.collection('datos_meteorologicos');
  
  //     for (let i = 0; i < data.daily.time.length; i++) {
  //       const documento = {
  //         municipio: municipio.name,
  //         latitud: municipio.lat,
  //         longitud: municipio.lon,
  //         fecha: data.daily.time[i],
  //         datos_meteorologicos: {
  //           temperatura_max: data.daily.temperature_2m_max[i],
  //           temperatura_min: data.daily.temperature_2m_min[i],
  //           precipitacion: data.daily.precipitation_sum[i],
  //         },
  //         datos_horarios: []
  //       };
  
  //       // Agregar datos horarios para ese día
  //       const hora_inicio = i * 24; // cada día tiene 24 horas
  //       for (let j = 0; j < 24; j++) {
  //         const indice_hora = hora_inicio + j;
  //         documento.datos_horarios.push({
  //           hora: '${j}:00',
  //           temperatura: data.hourly.temperature_2m[indice_hora],
  //           sensacion_termica: data.hourly.apparent_temperature[indice_hora],
  //           presion_superficial: data.hourly.surface_pressure[indice_hora]
  //         });
  //       }
  
  //       // Insertar el documento en MongoDB
  //       await collection.insertOne(documento);
  //     }
  //     console.log('Datos de ${municipio.name} guardados en MongoDB.');
  //   } catch (err) {
  //     console.error('Error al guardar los datos de ${municipio.name}:', err);
  //   }
  // }
  
  // // Función para extraer y guardar los datos de todos los municipios
  // export async function fetchAndSaveAllData() {
  //   for (const municipio of municipios) {
  //     console.log('Extrayendo datos para ${municipio.name}...');
  //     const data = await fetchWeatherData(municipio.lat, municipio.lon, startDate, endDate);
  //     if (data) {
  //       await saveToMongo(municipio, data);
  //     }
  
  //     // Añadir un retraso de 2 segundos entre cada solicitud
  //     await delay(500); 
  //   }
  //   await client.close(); // Cerrar la conexión una vez que todo el proceso ha terminado
  // }
  // fetchAndSaveAllData();


 //////////////////////////////////////////////////////////////// 
  // import fetch from 'node-fetch'; // Importar node-fetch
  // import { MongoClient } from 'mongodb'; // Importar MongoClient
  
  // const uri = "mongodb://mongodb:27017";
  // const client = new MongoClient(uri);
  
  // const startDate = '2019-01-01';
  // const endDate = '2024-10-01';
  
  // // Función para crear un retraso (throttling)
  // function delay(ms) {
  //   return new Promise(resolve => setTimeout(resolve, ms));
  // }
  
  // // Función para manejar la conexión a MongoDB
  // async function connectToMongo() {
  //   try {
  //     if (!client.topology || !client.topology.isConnected()) {
  //       await client.connect();
  //       console.log("Conectado a MongoDB");
  //     }
  //     return client.db('clima_municipios');
  //   } catch (error) {
  //     console.error("Error al conectar con MongoDB:", error);
  //   }
  // }
  
  // // Función para obtener datos del clima con manejo de errores 429
  // async function fetchWeatherData(lat, lon, startDate, endDate, retries = 3) {
  //   const url = `https://archive-api.open-meteo.com/v1/archive?latitude=${lat}&longitude=${lon}&start_date=${startDate}&end_date=${endDate}&hourly=temperature_2m,apparent_temperature,surface_pressure&daily=temperature_2m_max,temperature_2m_min,precipitation_sum&timezone=America/Mexico_City`;
  
  //   try {
  //     const response = await fetch(url);
  //     if (!response.ok) {
  //       if (response.status === 429 && retries > 0) {
  //         console.log('Límite de solicitudes excedido. Esperando 1 minuto antes de reintentar...');
  //         await delay(60000); // Espera 1 minuto antes de reintentar
  //         return fetchWeatherData(lat, lon, startDate, endDate, retries - 1); // Reintenta la solicitud
  //       } else {
  //         throw new Error(`Error en la solicitud: ${response.status}`);
  //       }
  //     }
  //     const data = await response.json();
  //     return data;
  //   } catch (error) {
  //     console.error(`Error al obtener datos del clima para latitud ${lat}, longitud ${lon}:`, error);
  //     return null;
  //   }
  // }
  
  // // Función para guardar los datos en MongoDB
  // async function saveToMongo(municipio, data) {
  //   try {
  //     const database = await connectToMongo();
  //     const collection = database.collection('datos_meteorologicos');
  
  //     for (let i = 0; i < data.daily.time.length; i++) {
  //       const documento = {
  //         municipio: municipio.name,
  //         latitud: municipio.lat,
  //         longitud: municipio.lon,
  //         fecha: data.daily.time[i],
  //         datos_meteorologicos: {
  //           temperatura_max: data.daily.temperature_2m_max[i],
  //           temperatura_min: data.daily.temperature_2m_min[i],
  //           precipitacion: data.daily.precipitation_sum[i],
  //         },
  //         datos_horarios: []
  //       };
  
  //       // Agregar datos horarios para ese día
  //       const hora_inicio = i * 24; // cada día tiene 24 horas
  //       for (let j = 0; j < 24; j++) {
  //         const indice_hora = hora_inicio + j;
  //         documento.datos_horarios.push({
  //           hora: `${j}:00`,
  //           temperatura: data.hourly.temperature_2m[indice_hora],
  //           sensacion_termica: data.hourly.apparent_temperature[indice_hora],
  //           presion_superficial: data.hourly.surface_pressure[indice_hora]
  //         });
  //       }
  
  //       // Insertar el documento en MongoDB
  //       await collection.insertOne(documento);////Posible falla
  //     }
  //     console.log(`Datos de ${municipio.name} guardados en MongoDB.`);
  //   } catch (err) {
  //     console.error(`Error al guardar los datos de ${municipio.name}:`, err);
  //   }
  // }
  
  // // Función para extraer y guardar los datos de todos los municipios
  // export async function fetchAndSaveAllData() {
    
  //   for (const municipio of municipios) {
  //     console.log(`Extrayendo datos para ${municipio.name}...`);
  //     const data = await fetchWeatherData(municipio.lat, municipio.lon, startDate, endDate);
  //     if (data) {
  //       await saveToMongo(municipio, data);
  //     }
  
  //     // Añadir un retraso de 2 segundos entre cada solicitud
  //     await delay(2000); 
  //   }
  //   await client.close(); // Cerrar la conexión una vez que todo el proceso ha terminado
  // }
  
  // Llamar a la función para iniciar el proceso ETL
  //fetchAndSaveAllData();
  
  /////////////////////////////////////////////////////////////////////
  
//   import fetch from 'node-fetch'; // Importar node-fetch
// import { MongoClient } from 'mongodb'; // Importar MongoClient

// const uri = "mongodb://mongodb:27017"; 
// const client = new MongoClient(uri);
  
//   const startDate = '2019-01-01';
//   const endDate = '2024-10-01';
  
//   async function fetchWeatherData(lat, lon, startDate, endDate) {
//     const url = `https://archive-api.open-meteo.com/v1/archive?latitude=${lat}&longitude=${lon}&start_date=${startDate}&end_date=${endDate}&hourly=temperature_2m,apparent_temperature,surface_pressure&daily=temperature_2m_max,temperature_2m_min,precipitation_sum&timezone=America/Mexico_City`;
  
//     try {
//       const response = await fetch(url);
//       if (!response.ok) throw new Error(`Error en la solicitud: ${response.status}`);
//       const data = await response.json();
//       return data;
//     } catch (error) {
//       console.error(error);
//       return null;
//     }
//   }
  
//   // Función para guardar los datos en MongoDB
//   async function saveToMongo(municipio, data) {
//     try {
//       await client.connect();
//       const database = client.db('clima_municipios');
//       const collection = database.collection('datos_meteorologicos');
  
//       for (let i = 0; i < data.daily.time.length; i++) {
//         const documento = {
//           municipio: municipio.name,
//           latitud: municipio.lat,
//           longitud: municipio.lon,
//           fecha: data.daily.time[i],
//           datos_meteorologicos: {
//             temperatura_max: data.daily.temperature_2m_max[i],
//             temperatura_min: data.daily.temperature_2m_min[i],
//             precipitacion: data.daily.precipitation_sum[i],
//           },
//           datos_horarios: []
//         };
  
//         // Agregar datos horarios para ese día
//         const hora_inicio = i * 24; // cada día tiene 24 horas
//         for (let j = 0; j < 24; j++) {
//           const indice_hora = hora_inicio + j;
//           documento.datos_horarios.push({
//             hora: `${j}:00`,
//             temperatura: data.hourly.temperature_2m[indice_hora],
//             sensacion_termica: data.hourly.apparent_temperature[indice_hora],
//             presion_superficial: data.hourly.surface_pressure[indice_hora]
//           });
//         }
  
//         // Insertar el documento en MongoDB
//         await collection.insertOne(documento);
//       }
//       console.log(`Datos de ${municipio.name} guardados en MongoDB.`);
//     } catch (err) {
//       console.error(`Error al guardar los datos de ${municipio.name}:`, err);
//     } finally {
//       await client.close();
//     }
//   }
  
//   export async function fetchAndSaveAllData() {
//     for (const municipio of municipios) {
//       console.log(`Extrayendo datos para ${municipio.name}...`);
//       const data = await fetchWeatherData(municipio.lat, municipio.lon, startDate, endDate);
//       if (data) {
//         await saveToMongo(municipio, data);
//       }
//     }
//   }
  
  