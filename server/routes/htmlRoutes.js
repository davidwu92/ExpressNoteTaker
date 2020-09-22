const db = require("../db/db.json")

module.exports = (app)=>{
  app.get('/notes', (req, res)=>{
    console.log(req)
    res.json("You're getting notes.")
  })
  app.get('*', (req, res)=>{
    console.log(req)
    res.json("Here's the index.html file.")
  })
}