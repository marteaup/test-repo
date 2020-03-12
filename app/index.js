const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.json({version:'V1 API'})
})

app.get('/user', (req,res) => {
  console.log(req.params)
  res.json({
    username: '',
    email: ''
  })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
