const
express = require('express');
const path = require('path');
const app = express();

// This is crucial
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

const PORT = 3000;
app.listen(PORT, '0.0.0.0',  () => {
  console.log(`Server live at http://44.204.222.78:3000`);
});
