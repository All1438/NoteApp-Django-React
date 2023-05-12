import React from 'react'
import {Link} from 'react-router-dom'

const ListItem = ({note}) => {
  return (
    <Link to={`/note/${note.id}`} > {/* si on click sur le contenue de Link, il nous dirigera sur l'url dans to={``} */}
      <div className="notes-list-item">
        <h3>{note.body}</h3>
      </div>
    </Link>
  )
}

export default ListItem