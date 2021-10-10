import express from 'express'
import routes from './routes/index'
import path from 'path'
import dotenv from 'dotenv'

const app = express()

dotenv.config()
const PORT = process.env.PORT || 3000

// view engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug') // you can use other engine too, ejs, handlebar, etd..
app.use('/api', routes)

app.listen(PORT, () => {
  console.log(`Express server is running on  port-> ${PORT}`)
})
export default app
