const express = require('express');
const googleTrends = require('google-trends-api');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/trends', async (req, res) => {
  const { keyword } = req.body;
  try {
    const result = await googleTrends.relatedQueries({ keyword });
    const data = JSON.parse(result);
    const queries = data.default.rankedList[0].rankedKeyword.map(k => k.query);
    res.json({ keyword, trends: queries });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});