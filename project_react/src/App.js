import './components/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Intro from './components/pages/intro'
import Feedback from './components/pages/feedback'
import NotFound from './components/pages/notfound'
import Home from './components/pages/home';
import Upcoming from './components/upcome';
import MoviesInfoCompo from './components/moviesinfocompo'
import Footer from './components/footer';
import Contact from './components/pages/contact';
import Login from './components/profile/login';
import SignUp from './components/profile/signup';
import UpcomingMovieInfo from './components/upcomingMovieInfo';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Intro />} />
          <Route path='/home' element={<Home />} />
          <Route path='/feedback' element={<Feedback />} />
          <Route path='/upcoming' element={<Upcoming />} />
          <Route path='/upcomingMovieInfo/:id' element={<UpcomingMovieInfo />} />
          <Route path='/footer' element={<Footer />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/profile/login' element={<Login />} />
          <Route path='/profile/signup' element={<SignUp />} />
          <Route path='/movieInfoCompo/:id' element={<MoviesInfoCompo />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
