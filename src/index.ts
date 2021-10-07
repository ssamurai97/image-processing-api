import express from 'express'
import routes from './routes/index'

const app = express()

const PORT = process.env.PORT || 3000

app.use('/api', routes)

app.listen(PORT, () => {
  console.log(`Express server is running on -> ${PORT}`)
})
