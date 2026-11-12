import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;
const HOST = '0.0.0.0';

// Block access to server/config files
app.use((req, res, next) => {
  const blocked = ['/server.js', '/package.json', '/package-lock.json', '/metadata.json'];
  if (blocked.includes(req.path) || req.path.startsWith('/.')) {
    return res.status(404).sendFile(path.join(__dirname, '404.html'));
  }
  next();
});

// Serve static HTML, CSS, JS, and asset files from root
app.use(express.static(__dirname, {
  extensions: ['html'],
  index: 'index.html'
}));

// Fallback to custom 404 page
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, '404.html'));
});

app.listen(PORT, HOST, () => {
  console.log(`Winners Academy static server running at http://${HOST}:${PORT}`);
});
