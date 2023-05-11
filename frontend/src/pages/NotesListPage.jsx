import React, { useEffect, useState } from 'react'
import ListItem from '../components/ListItem'

const NotesListPage = () => {

    let [notes, setNotes] = useState([]) 

    useEffect(() => {
        getNotes()
    },[])

    let getNotes = async () => {
        let response = await fetch('api/notes') // "http://127.0.0.1:8000" est ajouter au proxy dans package.json, il faut telecharger npm install react-router-dom pour qu'il fonctionne
        let data = await response.json()
        setNotes(data)
    }

  return (
    <div>
        <div className="notes-list">
           {notes.map((note, index) => (
                <ListItem key={index} note={note} /> // {note.body} = maintenant on peut utilisé la paramètre de model en React
                // key={index} == pk=id
           ))}
        </div>
    </div>
  )
}

export default NotesListPage