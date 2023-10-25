const express = require('express')
const app = express()
const port = 3000

const { getGames } = require('./games');

app.get('/', (req, res) => {
  res.send('Games API');
});

app.get('/games', async (req, res) => {
  const games = await getGames();
  res.send(games);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})