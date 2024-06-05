// server.js
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors'; 

const app = express();
const PORT = 3001;

app.use(express.json());

// Habilitando o CORS para todas as rotas
app.use(cors());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get('/api/user', (req, res) => {
    res.sendFile(path.join(__dirname, 'API/user.json'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
