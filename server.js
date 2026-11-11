import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { getCategories } from './src/models/categories.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuración de Motor de Plantillas EJS y archivos estáticos
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// Rutas con sintaxis de flecha y async/await
app.get('/', async (req, res) => {
  res.render('index', { title: 'Home' });
});

app.get('/organizations', async (req, res) => {
  res.render('organizations', { title: 'Organizations' });
});

app.get('/projects', async (req, res) => {
  res.render('projects', { title: 'Service Projects' });
});

app.get('/categories', async (req, res) => {
  try {
    const categories = await getCategories();
    res.render('categories', { title: 'Service Project Categories', categories });
  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Inicio del servidor
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
