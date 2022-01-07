
import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import NoteList from './components/NoteList';
import SearchNote from './components/SearchNote';
import Header from './components/Header';


function App() {
  const [notes,setNote] = useState([
    {
      id: nanoid(),
      text: '<--------- WRITE YOUR NOTES',
      date: '7/1/2022'
    }
    
  ])
  const [searchNote, setSearchNote] = useState('')
  const [mode, setMode] = useState(false)

  useEffect(() =>{
      const saveNotes = JSON.parse(localStorage.getItem('NOTE_DATA'))
      if(saveNotes){
        setNote(saveNotes)
      }
  },[])

  useEffect(()=>{
      localStorage.setItem('NOTE_DATA', JSON.stringify(notes))
  },[notes])


  const addNote = (text) =>{
      const date  = new Date()
      const newNote = {
        id: nanoid(),
        text: text,
        date: date.toLocaleTimeString() && date.toLocaleString()
      }
      const newNotes = [...notes, newNote]
      setNote(newNotes)
  }
  const deleteNote = (id) => {
      const newNotes =notes.filter(note => note.id !== id)
      setNote(newNotes)
  }

  return (
    <div className={`container ${mode && 'dark-mode'}`}>
      <div className="App">        
          <Header handleChangeMode={setMode}/>
          <SearchNote handleSearch={setSearchNote}/>
          <NoteList notes={notes.filter(note => note.text.toLowerCase().includes(searchNote))} 
          handleAddNote={addNote}
          handleDelete={deleteNote}/>
      </div>
    </div>
  );
}

export default App;


// phút 50........................
