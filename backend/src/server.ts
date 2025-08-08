import express from 'express';
import type { Request, Response } from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import os from 'os';
import router from './routes/routes.js'

dotenv.config();

const app = express();
const port: number= Number(process.env.PORT || 4000);
app.use(express.json());

app.use(cors({
  origin: ["http://localhost:4173", "http://frontend_project:4173"], // pode ajustar se precisar
  methods: ["GET", "POST", "PUT", "DELETE"],
}));

app.use(bodyParser.json());
app.use('/api', router);

const getLocalIPAddress = (): string => {
  const interfaces = os.networkInterfaces();
  for (const name of Object.keys(interfaces)) {
    const netInterface = interfaces[name];
    if (netInterface) {
      for (const iface of netInterface) {
        if (iface.family === 'IPv4' && !iface.internal) {
          return iface.address;
        }
      }
    }
  }
  return '127.0.0.1'; // Retorna localhost como fallback
};

// Rota para obter o IP local
app.get('/api/ip', (req: Request, res: Response) => {
  const ipAddress = getLocalIPAddress();
  res.json({ ip: ipAddress });
});

// Iniciar servidor
const server = app.listen(port, '0.0.0.0', () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});


// Tratamento de erro ao iniciar o servidor
server.on('error', (err: NodeJS.ErrnoException) => {
  console.error('Erro ao iniciar o servidor:', err.message);

  if (err.code === 'EADDRINUSE') {
    console.error(`Porta ${port} já está em uso`);
  } else if (err.code === 'EACCES') {
    console.error(`Permissão negada para usar a porta ${port}`);
  }

  process.exit(1);
});