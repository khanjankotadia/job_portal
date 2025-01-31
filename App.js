import './App.css';
import Header from './View/Header';
import Home from './View/Home';
import Aboutus from './View/Aboutus';
import Footer from './View/Footer';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Jobs from './View/Jobs';
import Blog from './View/Blog';
import Team from './View/Team';
import Testimonials from './View/Testimonials';
import Terms from './View/Terms';
import Contactus from './View/Contactus';
import { useEffect, useState } from 'react';
import Preloader from './View/Preloader';
import Signup from './View/Signup';
import Signin from './View/Signin';
import Application from './View/Application';
import Profile from './View/Profile';

function App() {
  const [auth,setAuth]= useState(sessionStorage.getItem("token"))
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      {auth ? (
        <>
       
        
        <Routes>
            
              <Route path="/home" element={<Home />} Component={Home} />
              <Route path="/jobs" element={<Jobs />}/>
              <Route path="/aboutus" element={<Aboutus />} Component={Aboutus} />
              {/* <Route path="/jobs" element={<Jobs />} Component={Jobs} /> */}
              <Route path="/blog" element={<Blog />} Component={Blog}/>
              <Route path="/team" element={<Team />} Component={Team}/>
              <Route path="/testimonials" element={<Testimonials />} Component={Testimonials} />
              <Route path="/terms" element={<Terms />} Component={Terms}/>
              <Route path="/contactus" element={<Contactus />} Component={Contactus}/>
              {/* <Route path="/signin" element={<Signin />} Component={Signin}/> */}
              <Route path="/" element={<Profile />} Component={Profile}/>
              {/* <Route path="/signup" element={<Signup />} Component={Signup}/> */}
              <Route path="/application" element={<Application />} Component={Application}/>
              <Route path="/signup" element={<Signup />} Component={Signup}/>
        </Routes>
        
        <Footer />
        </>):(
          <Routes>
            <Route path="/" element={<Home />} Component={Home} />
            <Route path="/jobs" element={<Jobs />}/>
              <Route path="/aboutus" element={<Aboutus />} Component={Aboutus} />
              <Route path="/blog" element={<Blog />} Component={Blog}/>
              <Route path="/team" element={<Team />} Component={Team}/>
              <Route path="/testimonials" element={<Testimonials />} Component={Testimonials} />
              <Route path="/terms" element={<Terms />} Component={Terms}/>
              <Route path="/contactus" element={<Contactus />} Component={Contactus}/>
              <Route path="/signin" element={<Signin />}/>
              <Route path="/signup" element={<Signup />} Component={Signup}/>
              
          </Routes>
        )}
        
      </BrowserRouter>
    </div>
  );
}

export default App;
