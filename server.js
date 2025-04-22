
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

const ads = [
  { id: 1, type: 'sell', crop: 'Wheat', quantity: '100 quintal', price: 2100, seller: 'Ravi - 9001234567' },
  { id: 2, type: 'buy', crop: 'Rice', quantity: '200 quintal', price: 2200, seller: 'Suresh - 9898989898' },
  { id: 3, type: 'sell', crop: 'Bajra', quantity: '50 quintal', price: 1900, seller: 'Manoj - 9876543210' }
];

app.get('/ads', (req, res) => {
  const type = req.query.type;
  const filtered = ads.filter(ad => ad.type === type);
  res.json(filtered);
});

app.listen(port, () => {
  console.log(`Crop P2P backend running at http://localhost:${port}`);
});
