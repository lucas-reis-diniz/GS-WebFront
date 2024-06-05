import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors'; 

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

// Habilitando o CORS para todas as rotas
app.use(cors());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware para servir arquivos estáticos da pasta 'build'
app.use(express.static(path.join(__dirname, 'build')));

// API endpoint para fornecer dados do usuário
app.get('/api/user', (req, res) => {
    res.sendFile(path.join(__dirname, 'API/user.json'));
});

// Rota para todas as outras solicitações (SPA fallback)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
