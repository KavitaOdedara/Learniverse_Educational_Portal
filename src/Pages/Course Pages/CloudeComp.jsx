
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook


import CloudFundaImg from '../../assets/Images/CloudFunda.png';
import AWSImg from '../../assets/Images/AWS.png';
import DokerImg from '../../assets/Images/Doker&Kubernetes.png'
import CloudSecImg from '../../assets/Images/CloudSec.png';

const CloudeComp = () => {
  const navigate = useNavigate(); // Hook to navigate programmatically
  const [selectedCourse, setSelectedCourse] = useState("");

  const cloudecomputing = [
    { name: "Cloud Fundamentals", image: CloudFundaImg },
    { name: "Amazon Web Services", image: AWSImg },
    { name: "Docker and Kubernetes", image: DokerImg },
    { name: "Cloud Security", image: CloudSecImg }
  ];

  const handleStartLearning = (courseName) => {
    setSelectedCourse(courseName); // Set the selected course
    navigate(`/course/${courseName}`); // Navigate to the new page with the course name
  };

  return (
    <div>
      {/* AppDev component content */}
      <section>
         <div>
           <div className="flex justify-center mt-5">
             <h1 className="title-font sm:text-4xl text-2xl mb-4 font-medium text-gray-900"><span className="text-cyan-600">Cloud</span> Computing</h1>
           </div>
           <div className="text-center capitalize text-gray-700 font-semibold dark:text-white mt-5">
             <h5>Discover the fundamentals of cloud technology with our beginner focused Cloud Computing courses.</h5>
           </div>
         </div>

         {/* App Development */}
         <div className="mx-auto p-6">
          <div className="w-fit gap-6 mx-auto grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 p-10">
             {cloudecomputing.map(course => (
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
                  Acquire the skills in {course.name} to confidently navigate the world of Cloud Computing.
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

export default CloudeComp;