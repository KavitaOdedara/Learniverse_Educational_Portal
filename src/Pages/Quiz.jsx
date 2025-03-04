import React, { useState } from "react";
import coursesData from "../data/coursesPdfMaterials.json";

// Import course images
import HTMLImg from "../assets/Images/HTML.png";
import CSSImg from "../assets/Images/CSS.png";
import JSImg from "../assets/Images/Javascript.png";
import ReactImg from "../assets/Images/React.png";
import NodeImg from "../assets/Images/Node.png";
import PythonImg from "../assets/Images/Python.png";
import MySQLImg from "../assets/Images/MySQL.png";
import MongoDBImg from "../assets/Images/MongoDB.png";
import KotlinImg from "../assets/Images/Kotlin.png";
import SwiftImg from "../assets/Images/Swift.png";
import ReactNativeImg from "../assets/Images/ReactNative.png";
import FlutterImg from "../assets/Images/Flutter.png";
import CloudFundaImg from "../assets/Images/CloudFunda.png";
import AWSImg from "../assets/Images/AWS.png";
import DokerImg from "../assets/Images/Doker&Kubernetes.png";
import CloudSecImg from "../assets/Images/CloudSec.png";

// Import icons for navigation
import { FaChevronLeft, FaChevronRight, FaCheckCircle } from 'react-icons/fa';

const imageMap = {
    "HTML.png": HTMLImg,
    "CSS.png": CSSImg,
    "Javascript.png": JSImg,
    "React.png": ReactImg,
    'Node.png': NodeImg,
    'Python.png': PythonImg,
    'MySQL.png': MySQLImg,
    'MongoDB.png': MongoDBImg,
    'Kotlin.png': KotlinImg,
    'Swift.png': SwiftImg,
    'ReactNative.png': ReactNativeImg,
    'Flutter.png': FlutterImg,
    'CloudFunda.png': CloudFundaImg,
    'AWS.png': AWSImg,
    'Doker&Kubernetes.png': DokerImg,
    'CloudSec.png': CloudSecImg
};

const Google_Sheet_QuizData = import.meta.env.VITE_GOOGLE_SHEET_QuizData;


const Quiz = () => {
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [questions, setQuestions] = useState([]);
    const [userAnswers, setUserAnswers] = useState({});
    const [score, setScore] = useState(null);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    const fetchQuizQuestions = async (courseName) => {
        const sheetURL = `${Google_Sheet_QuizData}?course=${courseName}`;
        try {
            const response = await fetch(sheetURL);
            const data = await response.json();
            setQuestions(data.questions.slice(0, 15));
            setSelectedCourse(courseName);
            setUserAnswers({});
            setScore(null);
            setCurrentQuestionIndex(0);
        } catch (error) {
            console.error("Error fetching quiz data:", error);
        }
    };

    const handleAnswerSelect = (questionIndex, option) => {
        setUserAnswers({ ...userAnswers, [questionIndex]: option });
    };

    const handleNextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    };

    const handlePreviousQuestion = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    const submitQuiz = async () => {
        let correctAnswers = 0;
        questions.forEach((q, index) => {
            if (userAnswers[index] === q.correct_option) {
                correctAnswers++;
            }
        });

        setScore(correctAnswers);
        const userId = localStorage.getItem("userId");

        const scoreData = {
            userId,
            course: selectedCourse,
            score: correctAnswers,
        };
        await fetch(Google_Sheet_QuizData, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(scoreData),
        });
    };

    return (
        <div className="p-10">
            <h2 className="text-center text-gray-700 font-semibold mt-5">
                Test Your Skills with Our Quizzes
            </h2>

            {!selectedCourse ? (
                <div className="flex justify-center flex-col mx-0 sm:mx-24">
                    {coursesData.courses.map((category) => (
                        <div key={category.courseHead}>
                            <div className="text-center text-lg sm:text:3xl capitalize py-6 font-medium tracking-wider">
                                <span className="border-b-2 border-cyan-600"> {category.courseHead}</span>
                            </div>
                            {category.coursesDeatails.map((course) => {
                                const courseImg = imageMap[course.courseImg];
                                return (
                                    <div key={course.coursesName}
                                        className="flex items-center w-full max-w-xlg p-4 mb-4 border-b-4 border-l-4 border-cyan-600 shadow-2xl text-gray-500 bg-cyan-50 rounded-lg"
                                    >
                                        <img src={courseImg} alt={course.coursesName} className="w-10 h-10 mr-3" />
                                        <span className="font-semibold">{course.coursesName}</span>
                                        <button
                                            className="ml-auto px-4 py-2 bg-cyan-600 text-white rounded hover:bg-cyan-500"
                                            onClick={() => fetchQuizQuestions(course.coursesName)}
                                        >
                                            Start
                                        </button>
                                    </div>
                                );
                            })}
                        </div>
                    ))}
                </div>
            ) : (
                <div className="p-5">
                    <h3 className="text-lg font-bold text-gray-800">{selectedCourse} Quiz</h3>

                    {/* Progress Bar */}
                    <div className="my-4 h-2 bg-gray-200 rounded-full">
                        <div
                            className="h-full bg-cyan-600 rounded-full"
                            style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
                        ></div>
                    </div>

                    {/* Display Current Question */}
                    {questions.length > 0 && (
                        <div className="mb-4 p-4 border border-gray-300 rounded-lg shadow">
                            <h2 className="text-xl font-semibold">{questions[currentQuestionIndex].question}</h2>
                            {["option_1", "option_2", "option_3", "option_4"].map((opt, index) => (
                                <div key={opt} className="flex items-center mb-2">
                                    <input
                                        type="radio"
                                        id={`question-${currentQuestionIndex}-option-${index}`}
                                        name={`question-${currentQuestionIndex}`}
                                        value={questions[currentQuestionIndex][opt]}
                                        checked={userAnswers[currentQuestionIndex] === questions[currentQuestionIndex][opt]}
                                        onChange={() => handleAnswerSelect(currentQuestionIndex, questions[currentQuestionIndex][opt])}
                                        className="mr-2"
                                    />
                                    <label
                                        htmlFor={`question-${currentQuestionIndex}-option-${index}`}
                                        className="cursor-pointer"
                                    >
                                        {questions[currentQuestionIndex][opt]}
                                    </label>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Navigation and Submit Buttons */}
                    <div className="flex justify-center mt-4 space-x-5">
                        <button
                            onClick={handlePreviousQuestion}
                            disabled={currentQuestionIndex === 0}
                            className="flex items-center justify-center w-12 h-12 text-lg font-medium rounded-full bg-cyan-600 text-white cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed hover:bg-cyan-500 active:bg-cyan-700 transition-all"
                        >
                            <FaChevronLeft className="h-6 w-6" />
                        </button>

                        <button
                            onClick={submitQuiz}
                            className="flex items-center justify-center w-12 h-12 text-lg font-medium rounded-full bg-cyan-600 text-white cursor-pointer hover:bg-cyan-500 active:bg-cyan-700 transition-all"
                        >
                            <FaCheckCircle className="h-6 w-6" />
                        </button>

                        <button
                            onClick={handleNextQuestion}
                            disabled={currentQuestionIndex === questions.length - 1}
                            className="flex items-center justify-center w-12 h-12 text-lg font-medium rounded-full bg-cyan-600 text-white cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed hover:bg-cyan-500 active:bg-cyan-700 transition-all"
                        >
                            <FaChevronRight className="h-6 w-6" />
                        </button>
                    </div>

                    {/* Score Display with Attractive Styling */}
                    {score !== null && (
                        <div className="mt-5 text-center">
                            <div
                                className={`text-4xl font-bold ${score / questions.length >= 0.8
                                        ? 'text-green-600'
                                        : score / questions.length >= 0.5
                                            ? 'text-yellow-600'
                                            : 'text-red-600'
                                    } transition-all ease-in-out transform hover:scale-105`}
                            >
                                Your Score:
                            </div>
                            <div
                                className={`text-6xl font-extrabold ${score / questions.length >= 0.8
                                        ? 'text-green-600'
                                        : score / questions.length >= 0.5
                                            ? 'text-yellow-600'
                                            : 'text-red-600'
                                    } animate__animated animate__bounceIn`}
                            >
                                {score} / {questions.length}
                            </div>

                            <div className="text-lg font-medium mt-2">
                                {score / questions.length >= 0.8
                                    ? "Excellent work! You're a pro!"
                                    : score / questions.length >= 0.5
                                        ? "Good job! Keep going!"
                                        : "Don’t worry, you can improve!"}
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Quiz;
