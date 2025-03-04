
import React, { createContext, useState } from 'react';
import MyLearning from './components/MyLearning';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css'
import Home from './Pages/Home'
import Navbar from "./components/Navbar";
import Login from './components/Login';
import SignUp from './components/SignUp';
import ProtectedRoute from './components/ProtectedRoute';
import Resources from './Pages/Resources';
import Footer from './components/Footer';
import About from './Pages/About';
import Contact from './Pages/Contact';
import WebDev from './Pages/Course Pages/WebDev'
import CourseContentPage from './components/CourseContentPage';
import AppDev from './Pages/Course Pages/AppDev';
import CloudeComp from './Pages/Course Pages/CloudeComp';
import ProgressProvider from './context/ProgressContext';
import Quiz from './Pages/Quiz';

export const CourseContext = createContext();

const App = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [userProgress, setUserProgress] = useState({});

  return (
    <ProgressProvider>
      <CourseContext.Provider value={{ selectedCourse, setSelectedCourse, userProgress, setUserProgress }}>
        <Router>
          <div className='flex flex-col min-h-screen'>
            <Navbar></Navbar>
            <main className='flex-grow'>
              <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/login' element={<Login></Login>}></Route>
                <Route path='/signup' element={<SignUp></SignUp>}></Route>
                <Route path='/about' element={<About></About>}></Route>
                <Route path='/contact' element={<Contact></Contact>}></Route>
                <Route path='/quiz' element={<Quiz></Quiz>}></Route>
                {/* <Route path='/resources' element={<Resources></Resources>}></Route> */}


               
                <Route path="/my-learning" element={<MyLearning />} />
                <Route path="/course/:courseName" element={<CourseContentPage />} />

                <Route element={<ProtectedRoute />}>
                  <Route path='/webDev' element={<WebDev></WebDev>}></Route>
                  <Route path='/appDev' element={<AppDev></AppDev>}></Route>
                  <Route path='/cloudcomp' element={<CloudeComp></CloudeComp>}></Route>
                  <Route path='/resources' element={<Resources></Resources>}></Route>
                </Route>

              </Routes>
            </main>
            <Footer></Footer>
          </div>
        </Router>
      </CourseContext.Provider>
    </ProgressProvider>
  );
};

export default App;


