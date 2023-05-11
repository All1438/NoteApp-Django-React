import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

const NotePage = () => {
  const {id} = useParams()
  // match.params = est utilisé pour extraire l'identifiant de la note a partir de l'url si(/123), alors il return 123
  // id = correspond a l'Id dans App(url)
  let [note, setNote] = useState("")

  useEffect(() => {
    getNote();
  }, [id]) // le second paramètre [] = permet a useEffect se déclanche a chaque fois que la variable noteId change
  // a chaque fois que l'identifiant changent on appel a useEffect()

  let getNote = async () => {
    let response = await fetch(`/api/notes/${id}`) // fetch('le même chemain que dans Django')
    let data = await response.json()
    setNote(data)
  }

  return (
    <div>
      <p>{note.body}</p> 
      {/* ? = est un moyen d'eviter une erreur de reference nulle, on indique a Js de ne pas essayer d'accéder a la propriété si note est 'null' ou 'undefind' */}
    </div>
  )
}

export default NotePage