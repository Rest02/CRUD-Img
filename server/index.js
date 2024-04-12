import express from 'express'
import cors from 'cors'
import indexRoutes from './routes/crud.routes.js'


const app = express()
app.use(express.json())
app.use(cors())

app.use(indexRoutes)

app.listen(3000)
console.log("Your server is running on port 3000")