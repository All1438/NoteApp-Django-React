import React from 'react'
import {Link} from 'react-router-dom'

const ListItem = ({note}) => {
  return (
    <Link to={`/note/${note.id}`} > {/* si on click sur le contenue de Link, il nous dirigera sur l'url dans to={``} */}
        <h3>{note.body}</h3>
    </Link>
  )
}

export default ListItem