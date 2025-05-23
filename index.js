const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/trends', (req, res) => {
  const { keyword } = req.body;
  res.json({
    keyword,
    trends: [
      `${keyword} trend 1`,
      `${keyword} trend 2`,
      `${keyword} trend 3`
    ]
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
