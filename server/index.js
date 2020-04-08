const express = require('express')
const app = express()
const port = 1337

app.use('/', express.static('desktop-client'))
app.use('/domain', express.static('domain'))

app.listen(port, () => console.log(`lixaingqi listening on port ${port}!`))
