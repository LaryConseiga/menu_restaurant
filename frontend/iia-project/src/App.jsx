import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar       from './component/Navbar.jsx';
import Tp           from './tp.jsx';
import Formulaire   from './component/formulaire.jsx';
import Contact      from './component/Contact.jsx';
import Parametres   from './component/Parametres.jsx';

function App() {
    return (
        <>
            {/* Navbar presente sur toutes les pages */}
            <Navbar />

            {/* Zone de contenu — change selon l'URL */}
            <main>
                <Routes>
                    <Route path="/"            element={<Tp />} />
                    <Route path="/ajouter"     element={<Formulaire />} />
                    <Route path="/contact"     element={<Contact />} />
                    <Route path="/parametres"  element={<Parametres />} />

                    {/* Toute URL inconnue redirige vers l'accueil */}
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </main>
        </>
    );
}

export default App;