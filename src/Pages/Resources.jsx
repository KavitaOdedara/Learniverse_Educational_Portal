import React from 'react';
import { FaEye } from 'react-icons/fa';  // You can use an eye icon for "Preview"
import coursesData from '../data/coursesPdfMaterials.json';

// Import images directly and map them using an object
import HTMLImg from '../assets/Images/HTML.png';
import CSSImg from '../assets/Images/CSS.png';
import JSImg from '../assets/Images/Javascript.png';
import ReactImg from '../assets/Images/React.png';

import NodeImg from '../assets/Images/Node.png';
import PythonImg from '../assets/Images/Python.png';
import MySQLImg from '../assets/Images/MySQL.png';
import MongoDBImg from '../assets/Images/MongoDB.png';

import KotlinImg from '../assets/Images/Kotlin.png';
import SwiftImg from '../assets/Images/Swift.png';
import ReactNativeImg from '../assets/Images/ReactNative.png';
import FlutterImg from '../assets/Images/Flutter.png';

import CloudFundaImg from '../assets/Images/CloudFunda.png';
import AWSImg from '../assets/Images/AWS.png';
import DokerImg from '../assets/Images/Doker&Kubernetes.png';
import CloudSecImg from '../assets/Images/CloudSec.png';

// Create a map for course images to avoid repetition
const imageMap = {
  'HTML.png': HTMLImg,
  'CSS.png': CSSImg,
  'Javascript.png': JSImg,
  'React.png': ReactImg,
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

const Resources = () => {
  // Function to handle PDF preview (Google Drive link)
  const handlePreview = (pdfPath) => {
    window.open(pdfPath, '_blank');
  };

  return (
    <div className="flex justify-center flex-col mx-7 sm:mx-24">
      {coursesData.courses.map((coursesCategory) => (
        <div key={coursesCategory.courseHead}>
          <div className="text-center text-xl sm:text:3xl capitalize py-6 font-medium tracking-wider">
            <span className="border-b-2 border-cyan-600">{coursesCategory.courseHead}</span>
          </div>

          {coursesCategory.coursesDeatails.map((course) => {
            const courseImg = imageMap[course.courseImg];

            return (
              <div
                key={course.coursesName}
                className="flex items-center w-full max-w-xlg p-4 mb-4 border-b-4 border-l-4 border-cyan-600 shadow-2xl text-gray-500 bg-cyan-50 rounded-lg"
                role="alert"
              >
                <div className="inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-green-500 rounded-lg">
                  <img src={courseImg} alt={course.coursesName} className="w-10 h-10" />
                </div>
                <div className="ml-3 text-sm font-normal">{course.coursesName}</div>

                {/* Preview button */}
                {course.pdfPath && (
                  <button
                    onClick={() => handlePreview(course.pdfPath)}  // Open Google Drive Preview
                    className="ml-auto -mx-1.5 -my-1.5 bg-cyan-50 text-gray-400 p-0"
                  >
                    <FaEye className="w-8 h-8 text-white bg-cyan-600 p-1.5 rounded-full hover:bg-cyan-500"></FaEye>
                  </button>
                )}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Resources;
