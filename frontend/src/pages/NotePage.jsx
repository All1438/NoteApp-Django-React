import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {ReactComponent as ArrowLeft} from '../assets/arrow-left.svg' // {ReactComponent as NomBalise}  = permet d'importer seulement les types .svg

const NotePage = ()=> {
  const navigate = useNavigate() // useNavigate() = contient des methode permetant de gérer la navigation dans l'application tel que : 'push', 'replace' et 'goBack'
  const {id} = useParams() // useParams() = permet de d'accéder au paramètre de l'url
  // match.params = est utilisé pour extraire l'identifiant de la note a partir de l'url si(/123), alors il return 123
  // id = correspond a l'Id dans App(url)
  let [note, setNote] = useState("")

  useEffect(() => {
    getNote();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]) 
  // le second paramètre [] = permet a useEffect se déclanche a chaque fois que la variable noteId change
  // a chaque fois que l'identifiant changent on appel a useEffect()

  let getNote = async () => {
    let response = await fetch(`/api/notes/${id}`) // fetch('le même chemain que dans Django')
    let data = await response.json()
    setNote(data)
  }

  
  let updateNote = async () => {
    fetch(`/api/notes/${id}/update`, {
      method: "PUT", // method: "POST" = effectue qu'on veut effectuer une operation de mis a jour sur le note
      headers: { // headers = permet de spécialisé les en tête de la requête 
        "Content-type": 'application/json' // indique que le corps de la format de la requête est au format JSON
      },
      body: JSON.stringify(note) // JSON.stringify() = converti un objet JS en une chaîne JSON
    })
  }

  
  let handleSubmit = () => {
    updateNote()
    navigate('/') // useNavigate('/') = permet de naviguer dans une autre page, fournit par 'react-router-dom'
  }

  let handleChange = (value) => {
    setNote(note => ({...note, 'body': value})) // fonction de mis a jour en utilisant la syntaxe de l'etat précédent
  }
  
  return (
    <div className='note'>
      <div className="note-header">
        <h3>
            <ArrowLeft onClick={handleSubmit} />
        </h3>
      </div>
      <textarea onChange={(e) => {handleChange(e.target.value)}} value={note.body}></textarea> 
      {/* ? = est un moyen d'eviter une erreur de reference nulle, on indique a Js de ne pas essayer d'accéder a la propriété si note est 'null' ou 'undefind' */}
    </div>
  )
}

export default NotePage