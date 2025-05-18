
import express from 'express';
import usuarioRoutes from './routes/usuario.routes';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/usuarios', usuarioRoutes);

export default app;
