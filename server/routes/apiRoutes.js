const db = require("../db/db.json")

module.exports = (app)=>{
  app.get("/api/notes", (req, res)=>{
    //should read the db.json file, return all saved notes as json.
    res.send("db.json notes")
  })
  app.post("/api/notes", (req, res)=>{
    //should receive a note from req.body, save into db.json file, return the new note to client.
    db.savedNotes.push(req.body)
    res.send("db.json notes")
  })
  app.delete("/api/notes", (req, res)=>{
    //should receive the ID of a note, delete from db.json
    res.send("Deleted the note.")
  })
  
}