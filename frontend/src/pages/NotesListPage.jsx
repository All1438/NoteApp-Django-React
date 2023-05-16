import React, { useEffect, useState } from 'react'
import ListItem from '../components/ListItem'
import AddButton from '../components/AddButton'

const NotesListPage = () => {

    let [notes, setNotes] = useState([]) 

    useEffect(() => {
        getNotes()
    },[])

    let getNotes = async () => {
        let response = await fetch('api/notes') 
        // "http://127.0.0.1:8000" est ajouter au proxy dans package.json, il faut telecharger npm install react-router-dom pour qu'il fonctionne
        let data = await response.json()
        setNotes(data)
    }

  return (
    <div className="notes">
        <div className="notes-header">
          <h2 className='notes-title'>&#9782; Notes</h2>
          <p className='notes-count'>{notes.length}</p>
        </div>
        <div className="notes-list">
           {notes.map((note, index) => (
                <ListItem key={index} note={note} /> // {note.body} = maintenant on peut utilisé la paramètre de model en React
                // key={index} == pk=id
           ))}
        </div>
        <AddButton />
    </div>
  )
}

export default NotesListPage