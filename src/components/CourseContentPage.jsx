
import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ProgressContext } from '../context/ProgressContext';
import frontendCoursesData from '../data/frontendCoursesData.json';
import backendCoursesData from '../data/backendCoursesData.json';
import appDevelopmentCoursesData from '../data/appDevCoursesData.json';
import cloudComputingCoursesData from '../data/cloudCompCoursesData.json';

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { FaCheck, FaRegCheckCircle } from 'react-icons/fa';
import { FaCheckCircle } from 'react-icons/fa'; // Import the check icon for completion message

const CourseContentPage = () => {
  const { courseName } = useParams();
  const { userProgress, updateProgress } = useContext(ProgressContext);
  const [courseContent, setCourseContent] = useState(null);
  const [currentChapterIndex, setCurrentChapterIndex] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false); // State to track course completion

  useEffect(() => {
    const allCourses = [
      ...frontendCoursesData.courses,
      ...backendCoursesData.courses,
      ...appDevelopmentCoursesData.courses,
      ...cloudComputingCoursesData.courses,
    ];
    const course = allCourses.find((course) => course.name === courseName);
    if (course) {
      setCourseContent(course);
    }
  }, [courseName]);

  useEffect(() => {
    if (courseContent) {
      const completedChapters = userProgress[courseName] || [];
      const totalChapters = courseContent.chapters.length;
      if (completedChapters.length === totalChapters) {
        // Set course as completed when all chapters are finished
        setIsCompleted(true);
      } else {
        setIsCompleted(false);
      }
    }
  }, [userProgress, courseContent, courseName]);

  const handleMarkAsCompleted = (chapterId) => {
    updateProgress(courseName, chapterId);
    setCurrentChapterIndex((prevIndex) => prevIndex + 1);
  };

  const handleNextChapter = () => {
    if (currentChapterIndex < (courseContent?.chapters?.length || 0) - 1) {
      setCurrentChapterIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePreviousChapter = () => {
    if (currentChapterIndex > 0) {
      setCurrentChapterIndex((prevIndex) => prevIndex - 1);
    }
  };

  if (!courseContent) return <div>Loading...</div>;

  const currentChapter = courseContent.chapters[currentChapterIndex];
  const completedChapters = userProgress[courseName] || [];
  const totalChapters = courseContent.chapters.length;
  const progressPercentage = (completedChapters.length / totalChapters) * 100;

  const isChapterCompleted = completedChapters.includes(currentChapter?.id);

  return (
    <div className="p-10">
      {/* Course Progress */}
      <div className="mb-6">
        <div className="text-lg font-semibold text-gray-700 mb-2">Course Progress</div>
        <div className="w-full bg-gray-300 h-2 rounded-full">
          <div
            className="h-2 bg-cyan-600 rounded-full transition-all duration-300"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>

      <h1 className="text-3xl font-bold">{courseContent.name}</h1>
      <p className="text-gray-600 mb-8">{courseContent.description}</p>

      <div
        className={`transition-opacity duration-500 ease-in-out ${
          currentChapter ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {currentChapter ? (
          <div className="mt-5">
            <h2 className="text-xl font-semibold">{currentChapter.title}</h2>
            <div className="text-gray-700 space-y-4">
              {currentChapter.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <h2 className="text-xl font-semibold">Example</h2>
            <pre className="bg-gray-100 p-4 rounded-md overflow-auto">
              <code className="text-gray-800 whitespace-pre-wrap">
                {currentChapter.example?.code || 'No example available'}
              </code>
            </pre>

            <div className="mt-6 flex items-center space-x-6">
              <button
                onClick={handlePreviousChapter}
                disabled={currentChapterIndex === 0}
                className="flex items-center justify-center w-14 h-14 text-lg font-medium rounded-full bg-gray-500 text-white cursor-pointer disabled:opacity-50"
              >
                <FaChevronLeft className="h-6 w-6" />
              </button>

              <button
                onClick={() => handleMarkAsCompleted(currentChapter.id)}
                disabled={isChapterCompleted}
                className="flex items-center justify-center w-14 h-14 text-lg font-medium rounded-full bg-cyan-600 text-white cursor-pointer"
              >
                {isChapterCompleted ? (
                  <FaCheck className="h-6 w-6 " />
                ) : (
                  <FaRegCheckCircle className="h-6 w-6 " />
                )}
              </button>

              <button
                onClick={handleNextChapter}
                disabled={!isChapterCompleted || currentChapterIndex === totalChapters - 1}
                className="flex items-center justify-center w-14 h-14 text-lg font-medium rounded-full bg-cyan-600 text-white cursor-pointer disabled:opacity-50"
              >
                <FaChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        ) : (
          <div className="mt-5 text-xl text-gray-500">
            <p>Congratulations, You have finished the course!</p>
          </div>
        )}
      </div>

      {/* Display completion message if course is finished */}
      {isCompleted && currentChapterIndex >= totalChapters && (
        <div className="mt-10 bg-cyan-50 p-6 rounded-lg text-center">
          <FaCheckCircle className="mx-auto text-cyan-600 text-4xl" />
          <h3 className="text-xl font-semibold text-cyan-600 mt-4">Congratulations!</h3>
          <p className="text-gray-700 mt-2">You've completed the entire course!</p>
        </div>
      )}
    </div>
  );
};

export default CourseContentPage;






