import {useState, useRef} from 'react'

function AddNote({handleAddNote}){
    const [noteText, setNoteText] = useState('')
    const characterLimit = 200
    
    const handleChange = (e)=>{
        if(characterLimit - noteText.length > 0){
            setNoteText(e.target.value)

        }
        
    }
    const handleClick = ()=>{
        if(noteText.trim().length > 0 ){
            handleAddNote(noteText)
            setNoteText('')
            textareaRef.current.focus()

        }
    }

    const textareaRef = useRef()

    return(
        <div className="note note-new">
            <textarea
            className="note-area"
            rows="8"
            cols="10"
            placeholder="Type to add a note..."
            ref={textareaRef}
            value={noteText}
            onChange={handleChange}
            
            >                
            </textarea>
            <div className="note-footer">
                <small>{characterLimit - noteText.length} Remaining</small>
                <button className="btn" onClick={handleClick}>Save</button>
            </div>
        </div>
    )
}

export default AddNote