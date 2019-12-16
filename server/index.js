const express = require('express')
const app = express()
const port = 3000

app.use('/', express.static('desktop-client'))

app.listen(port, () => console.log(`lixaingqi listening on port ${port}!`))
