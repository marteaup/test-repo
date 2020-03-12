const express = require('express')
const app = express()
const port = 3000


const users = [
  {
    id: 1,
    username: 'user1',
    email: 'email1@email.com'
  },
  {
    id: 2,
    username: 'user2',
    email: 'email2@email.com'
  }
]
app.get('/', (req, res) => {
  res.json({version:'V1 API'})
})

app.get('/user', (req,res) => {
  res.json(users)
})

app.get('/user/:id', (req,res) => {
  const id = req.params.id
  const user = users.filter(user => user.id === Number.parseInt(id))[0]
  res.json(user || {})
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
