import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"; // permet d'importer les composante nécessaires pour utiliser le système de routage en React
// permet de créer des applications a pages multiples avec une navigation fluide avec les différents vues

import React from 'react'
import Header from './components/Header'
import NotesListPage from './pages/NotesListPage'
import NotePage from "./pages/NotePage";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes> {/* la balise <Route> doit toujours être dans <Routes> */}
            <Route path="/" exact element ={<NotesListPage />} />
           {/* il indique que lorsque l'URL correspond au chemain '/' l'element {<NotesListPage />} doit être rendue */}
            {/* exact = indique que la correspondance doit être exacte */}   
            <Route path="/note/:id" element ={<NotePage />} />
        </Routes>
      </div>
    </Router> 
  )
}

export default App