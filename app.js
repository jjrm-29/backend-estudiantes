// Importar las dependencia necesarias
import express from 'express';
import cors from 'cors';

// Importar las rutas
import rutasCategorias from './src/routes/categorias.routes.js';
import rutasCLientes from './src/routes/clientes.js';

// Crear la aplicacion de express
const app = express();

// Habilitar CORS para cualquier Origen
app.use(cors({
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  allowedHearders: ['content-Type'],
}));

// Middleware pára parsear el cuerpo de las solicitude 
app.use(express.json({ limit: '10mb'}));
app.use(express.urlencoded({ limit: '10mb', extended: true}));

// Rutas
app.use('/api', rutasCategorias);
app.use('/api', rutasCLientes);

// Manejo de rutas no encontradas
app.use((req, res, next) => {
  res.status(404).json({
    massage: 'la ruta que ha especificado no se encuentra registrada.'
  });
});

// Exportar la aplicacion
export default app;