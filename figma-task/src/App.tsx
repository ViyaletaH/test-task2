import './myStyles.scss';
import { Routes, Route } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import StartPage from './components/StartPage';

function App() {
  return (
    <Routes>
      <Route path="startpage" element={<StartPage />} />
      <Route index element={<About />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
  )
}

export default App
