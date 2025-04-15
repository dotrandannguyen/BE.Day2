import express from 'express'
import routes from './routes.js'

const app = express()
app.use(express.json())

app.use('/api', routes)

app.use((err, req, res, next) => {
    res.status(500).json({ error: err.message })
})

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000')
})
////
