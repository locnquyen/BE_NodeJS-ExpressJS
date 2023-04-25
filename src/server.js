const express = require('express')
const configViewEngine = require('./config/viewEngine')

const webRoutes = require('./routes/web.js')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 8888;

//config template engine
configViewEngine(app);

app.use('/', webRoutes)




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})