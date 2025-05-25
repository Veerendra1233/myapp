const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors()); // This line enables CORS for all origins

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from backend' });
});

app.listen(port, () => {
  console.log(`Backend listening on port ${port}`);
});
