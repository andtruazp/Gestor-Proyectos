import express from "express"
import cors from 'cors'
import proectoRoutes from './routes/proyecto.routes.js'
import actRoutes from './routes/actividad.routes.js'

const app= express()

app.use(express.json())
app.use(cors())

app.use(proectoRoutes)
app.use(actRoutes)

app.listen(3002)
console.log('Server is running on port 3002')