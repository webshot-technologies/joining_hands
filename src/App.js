// import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route, Link, Routes } from 'react-router-dom';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Grid from './components/causes/Grid';
import List from './components/causes/List';
import Single from './components/causes/Single';
import Project from './components/pages/Project';
import ProjectSingle from './components/pages/ProjectSingle';
import Volunteer from './components/pages/Volunteer';
import VolunteerSingle from './components/pages/VolunteerSingle';
import Faq from './components/pages/Faq';
import Error404 from './components/pages/Error404';
import EventGrid from './components/events/EventGrid';
import EventList from './components/events/EventList';
import EventSingle from './components/events/EventSingle';
import BlogSingle from './components/blogs/BlogSingle';
import Blog from './components/blogs/Blog';

import $ from 'jquery';


function App() {
  return (
    <Router>
        <div className='App'>

          
    {/* <!-- Preloader area start --> */}
    <div id="loading">
        <div id="loading-center">
            <div id="loading-center-absolute">
                <div class="loading-icon text-center d-flex flex-column align-items-center justify-content-center">
                    <img class="loading-logo" src="images/preloader.svg" alt="icon"/>
                </div>
            </div>
        </div>
    </div>
          <Header/>
          <Routes>
              <Route exact path='/' element={<Home/>} />
              <Route exact path='/contact' element={<Contact/>} />
              <Route exact path='/about' element={<About/>} />
              <Route exact path='/grid' element={<Grid/>} />
              <Route exact path='/single' element={<Single/>} />
              <Route exact path='/list' element={<List/>} />
              <Route exact path='/project' element={<Project/>} />
              <Route exact path='/projectSingle' element={<ProjectSingle/>} />
              <Route exact path='/volunteer' element={<Volunteer/>} />
              <Route exact path='/volunteerSingle' element={<VolunteerSingle/>} />
              <Route exact path='/error' element={<Error404/>} />
              <Route exact path='/faq' element={<Faq/>} />
              <Route exact path='/eventlist' element={<EventList/>} />
              <Route exact path='/eventgrid' element={<EventGrid/>} />
              <Route exact path='/eventsingle' element={<EventSingle/>} />
              <Route exact path='/blogsingle' element={<BlogSingle/>} />
              <Route exact path='/blog' element={<Blog/>} />
            </Routes>
         
          <Footer/>
        </div>
     </Router>   
          
  );
}

export default App;