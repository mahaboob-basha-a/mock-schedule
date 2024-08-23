const express = require('express')
const app = express()
const cors = require('cors')
const router = require('./routes/route')
require('dotenv').config()
const Port = process.env.PORT || 5000

app.use(express.json())
app.use(cors({origin:'*'}))

app.use('/api',router);

app.listen(Port,()=> console.log(`server running at ${Port}`))