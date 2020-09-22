console.log("loaded document")
axios.get('/api/notes', (e, notes)=>{
  if (e) {console.log(e)}
  console.log(notes)
})

