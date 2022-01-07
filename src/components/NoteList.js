import Note from './Note'
import AddNote from './AddNote';

function NoteList({notes, handleAddNote, handleDelete}){
    return(
        <div className="notes-list">
            <AddNote handleAddNote={handleAddNote}/>
            {notes.map((note) =>(
                <Note id={note.id} text={note.text} date={note.date} handleDelete={handleDelete}/>
            ))}
        </div>
    )
}

export default NoteList