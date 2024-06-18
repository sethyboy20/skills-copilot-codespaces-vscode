// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Parse incoming requests with JSON payloads
app.use(express.json());

// Create a new comment
app.post('/comments', (req, res) => {
  const comment = req.body;
  console.log(comment);
  res.send('Comment is added to the database');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});