const express = require('express')
const cors = require('cors')
const app = express()
const port = 8080

const { getGames } = require('./games');

app.use(cors())

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