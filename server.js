require('dotenv').config()

const { join } = require('path')
const compression = require('compression')  
const next = require('next')
const cors = require('cors')
const busboy = require('connect-busboy');

const app = require('express')()
const routes = require('./routes')
const {parsingSheet} = require('./utils/parsing')

const port = parseInt(process.env.PORT, 10) || 8000
const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev })
const handle = routes.getRequestHandler(nextApp)


nextApp.prepare().then(() => {
  app.use(compression())
  app.use(cors())
  app.use(busboy())

  app.use(function(req, res, next){
    res.header('Service-Worker-Allowed', '/');
    next();
  });

  app.post('/source', parsingSheet)

  app.get('/service-worker.js', (req, res) => {
    const filePath = join(__dirname, '.next', '/service-worker.js');
    nextApp.serveStatic(req, res, filePath);
  })
  
  app.get('*', (req, res) => {
    return handle(req, res)
  })

  app.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
