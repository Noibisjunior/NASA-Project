//The idea behind this code is to seperate the
//server code from the express middlewares
const http = require('http');

const app = require('./app');

const { loadPlanetsData } = require('./models/planets.model')

const PORT = process.env.PORT || 8009;

const server = http.createServer(app);

async function startServer(){
  await loadPlanetsData();

server.listen(PORT, () => {
  console.log(`listening on port ${PORT}...`);
});
}

startServer();

