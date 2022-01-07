import { MdDeleteForever} from 'react-icons/md'

function Note({id, text, date, handleDelete}){
    const handleClick = () => {
        handleDelete(id)
    }

    return(
        <div className="note note-output">
            <span className="note-text">{text}</span>
            <div className="note-footer">
                <small>{date}</small>
                <MdDeleteForever onClick={handleClick} className="note-delete"/>
            </div>

        </div>
    )
}
export default Note
