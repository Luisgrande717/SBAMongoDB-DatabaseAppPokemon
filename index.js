const app = express()
app.use(express.json())
import express from 'express'
import mongoose from 'mongoose'
import 'dotenv/config'
import pokemonRoutes from './routes/pokemonRoutes.js'

const port = 3000
await mongoose.connect(process.env.MONGO_URL)
app.use('/pokemon', pokemonRoutes)
console.log('MongoDB Connected')

app.get('/', (req, res) => {
    res.send('Hello Express')
})

app.listen(port , ()=> {
    console.log('Server running on port:', port)
})