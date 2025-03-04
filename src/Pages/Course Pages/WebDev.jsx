

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

import HTMLImg from '../../assets/Images/HTML.png';
import CSSImg from '../../assets/Images/CSS.png';
import JSImg from '../../assets/Images/Javascript.png';
import ReactImg from '../../assets/Images/React.png';

import NodeImg from '../../assets/Images/Node.png';
import PythonImg from '../../assets/Images/Python.png';
import MySQLImg from '../../assets/Images/MySQL.png';
import MongoDBImg from '../../assets/Images/MongoDB.png';

const WebDev = () => {
  const navigate = useNavigate(); // Hook to navigate programmatically
  const [selectedCourse, setSelectedCourse] = useState("");

  const frontendCourses = [
    { name: "HTML Basics", image: HTMLImg },
    { name: "CSS Basics", image: CSSImg },
    { name: "JavaScript Basics", image: JSImg },
    { name: "React Basics", image: ReactImg }
  ];

  const backendCourses = [
    { name: "Node.js with Express.js", image: NodeImg },
    { name: "Python with Flask", image: PythonImg },
    { name: "SQL with MySQL", image: MySQLImg },
    { name: "MongoDB (NoSQL Database)", image: MongoDBImg }
  ];

  const handleStartLearning = (courseName) => {
    setSelectedCourse(courseName); // Set the selected course
    navigate(`/course/${courseName}`); // Navigate to the new page with the course name
  };

  return (
    <div>
      {/* WebDev component content */}
      <section>
         <div>
           <div className="flex justify-center mt-5">
             <h1 className="title-font sm:text-4xl text-2xl mb-4 font-medium text-gray-900"><span className="text-cyan-600">Web</span> Development</h1>
           </div>
           <div className="text-center capitalize text-gray-700 font-semibold dark:text-white mt-5">
             <h5>Start your journey in creating websites with our beginner friendly web Development courses.</h5>
           </div>
         </div>

         {/* Frontend Development */}
         <div className="mx-auto p-6">
           <div className="text-center text-2xl capitalize py-6 font-medium tracking-wider dark:text-white">
             <span className='border-b-2 border-cyan-600'>Frontend Development</span>
           </div>
          <div className="w-fit gap-6 mx-auto grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 p-10">
             {frontendCourses.map(course => (
              <div key={course.name} className="rounded overflow-hidden shadow-lg">
                <div className="relative bg-yellow-100">
                  <img className="w-full h-64 p-10" src={course.image} alt="CourseImg" />
                  <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                  <div className="text-sm absolute top-0 right-0 bg-cyan-600 px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-cyan-600 transition duration-500 ease-in-out">
                    <span className="font-bold">Free</span>
                  </div>
                </div>
                <div className="px-6 py-4 font-semibold text-lg inline-block hover:text-cyan-600 transition duration-500 ease-in-out">
                  {course.name}
                  <p className="text-gray-500 text-sm">
                  Learn {course.name} and build the foundation for modern web applications.
                  </p>
                </div>
                <div className="px-6 py-4 flex flex-row items-center">
                  <button
                    onClick={() => handleStartLearning(course.name)}
                    className="text-white text-lg font-bold text-center rounded-lg bg-cyan-600 p-2 w-full"
                  >
                    Start Learning
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Backend Development */}
        <div className="mx-auto p-6">
          <div className="text-center text-2xl capitalize py-6 font-medium tracking-wider dark:text-white">
            <span className='border-b-2 border-cyan-600'>Backend Development</span>
          </div>
          <div className="w-fit gap-6 mx-auto grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 p-10">
            {backendCourses.map(course => (
              <div key={course.name} className="rounded overflow-hidden shadow-lg">
                <div className="relative bg-yellow-100">
                  <img className="w-full h-64 p-10" src={course.image} alt="CourseImg" />
                  <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                  <div className="text-sm absolute top-0 right-0 bg-cyan-600 px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-cyan-600 transition duration-500 ease-in-out">
                    <span className="font-bold">Free</span>
                  </div>
                </div>
                <div className="px-6 py-4 font-semibold text-lg inline-block hover:text-cyan-600 transition duration-500 ease-in-out">
                  {course.name}
                  <p className="text-gray-500 text-sm">
                    Learn how to build backend systems with {course.name.split(' ')[0]}.
                  </p>
                </div>
                <div className="px-6 py-4 flex flex-row items-center">
                  <button
                    onClick={() => handleStartLearning(course.name)}
                    className="text-white text-lg font-bold text-center rounded-lg bg-cyan-600 p-2 w-full"
                  >
                    Start Learning
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default WebDev;

