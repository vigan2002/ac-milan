import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import HomePage from './Pages/HomePage';
import TeamPage from './Pages/TeamPage';
import AcademyPage from './Pages/AcademyPage';
import GloryPage from './Pages/GloryPage';
import MyPlayerPage from './Pages/MyPlayerPage';
import ScrollToTopButton from './Components/Btn/ScrollToTopButton'
import SinglePlayer from './Components/MyPlayer/SinglePlayer/SinglePlayer';
import CreatePage from './Pages/CreatePage';
import EditPage from './Pages/EditPage';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/glory' element={<GloryPage />} />
        <Route path='/team' element={<TeamPage />} />
        <Route path='/academy' element={<AcademyPage />} />
        <Route path='/my-player' element={<MyPlayerPage />} />
        <Route path='/player/:id' element={<SinglePlayer />} />
        <Route path='/create' element={<CreatePage />} />
        <Route path='/edit-player/:id' element={<EditPage />} />
      </Routes>
      <ScrollToTopButton />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
