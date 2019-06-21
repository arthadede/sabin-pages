require('dotenv').config()

const { join } = require('path')
const compression = require('compression')  
const next = require('next')
const cors = require('cors')

const app = require('express')()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const routes = require('./routes')

const port = parseInt(process.env.PORT, 10) || 8000
const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev })
const handle = routes.getRequestHandler(nextApp)


let annotationProcess = []

io.on('connection', socket => {
  socket.on('joinRoom', uuid => {
    annotationProcess.push(uuid)
    socket.broadcast.emit('joinRoom', uuid)
  })
  socket.on('exitRoom', uuid => {
    annotationProcess = annotationProcess.filter(n => n !== uuid)
    socket.broadcast.emit('exitRoom', uuid)
  })
})


nextApp.prepare().then(() => {
  app.use(compression())
  app.use(cors())
  
  app.get('/rooms', (req, res) => {
    res.json(annotationProcess)
  })
  app.get('/rooms/clear', (req, res) => {
    annotationProcess = []
    res.status(200).send({message: "ROOMS HAS BEEN EMPTY."})
  })

  app.get('/service-worker.js', (req, res) => {
    const filePath = join(__dirname, 'src', '.next', '/service-worker.js');
    nextApp.serveStatic(req, res, filePath);
  })
  
  app.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
