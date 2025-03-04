
import React, { useContext } from 'react';
import { ProgressContext } from '../context/ProgressContext';
import frontendCoursesData from '../data/frontendCoursesData.json';
import backendCoursesData from '../data/backendCoursesData.json';
import appDevelopmentCoursesData from '../data/appDevCoursesData.json';
import cloudComputingCoursesData from '../data/cloudCompCoursesData.json';
import { Link } from 'react-router-dom'; 
import { FaCheckCircle } from 'react-icons/fa'; 

const MyLearning = () => {
  const { userProgress } = useContext(ProgressContext);

  // Combine all courses into one array
  const allCourses = [
    ...frontendCoursesData.courses,
    ...backendCoursesData.courses,
    ...appDevelopmentCoursesData.courses,
    ...cloudComputingCoursesData.courses,
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">My Learning Progress</h1>

        {Object.keys(userProgress).length === 0 ? (
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <p className="text-xl text-gray-700">
              You haven’t started any courses yet. Start learning today!
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {Object.keys(userProgress).map((courseName) => {
              const course = allCourses.find((c) => c.name === courseName);
              if (!course) return null;

              const completedChapters = userProgress[courseName];
              const totalChapters = course.chapters.length;

              const isCompleted = completedChapters.length === totalChapters;

              return (
                <div
                  key={courseName}
                  className="bg-white shadow-md rounded-lg p-6 border-l-4 border-cyan-600"
                >
                  <h2 className="text-2xl font-semibold text-gray-800">{course.name}</h2>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-gray-700">
                      <span className="font-semibold">Progress:</span>{' '}
                      {completedChapters.length}/{totalChapters} chapters completed
                    </p>
                    <div className="w-1/2 bg-gray-300 h-4 rounded-lg overflow-hidden">
                      <div
                        className="h-4 bg-cyan-600"
                        style={{
                          width: `${(completedChapters.length / totalChapters) * 100}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-gray-800">Completed Chapters:</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      {completedChapters.map((chapterId) => {
                        const chapter = course.chapters.find((c) => c.id === chapterId);
                        return <li key={chapterId}>{chapter?.title || 'Chapter not found'}</li>;
                      })}
                    </ul>
                  </div>

                  {/* If course is not completed, show the "Continue Learning" button */}
                  {!isCompleted ? (
                    <div className="mt-4">
                      <Link to={`/course/${courseName}`} className="bg-cyan-600 text-white px-4 py-2 rounded-lg">
                        Continue Learning
                      </Link>
                    </div>
                  ) : (
                    <div className="mt-4 bg-cyan-50 p-4 rounded-lg text-center">
                      <FaCheckCircle className="mx-auto text-cyan-600 text-3xl mb-2" />
                      <h3 className="text-xl font-semibold text-cyan-600">Well done!</h3>
                      <p className="text-gray-700 text-sm">You've completed the course!</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyLearning;


