import express from 'express'
import path from 'path'

const server = express()
const staticMiddleware = express.static('dist')
server.use(staticMiddleware)
server.listen('8080',()=>{
    console.log('server is listen')
})