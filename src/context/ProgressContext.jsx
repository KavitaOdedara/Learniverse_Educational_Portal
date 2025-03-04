
import React, { createContext, useState, useEffect } from 'react';

export const ProgressContext = createContext();

const ProgressProvider = ({ children }) => {
  // Get the current userId from localStorage
  const [userId, setUserId] = useState(localStorage.getItem('userId')); // Initial userId from localStorage
  const [userProgress, setUserProgress] = useState({});

  useEffect(() => {
    if (userId) {
      const storedProgress = JSON.parse(localStorage.getItem('userProgress')) || {};
      const progressForUser = storedProgress[userId] || {}; // Get progress specific to the logged-in user
      setUserProgress(progressForUser);
    } else {
      setUserProgress({}); // No user logged in, reset progress
    }
  }, [userId]);

  const updateProgress = (courseName, chapterId) => {
    setUserProgress((prevProgress) => {
      const updatedProgress = {
        ...prevProgress,
        [courseName]: [...(prevProgress[courseName] || []), chapterId],
      };

      const updatedUserProgress = {
        ...JSON.parse(localStorage.getItem('userProgress')) || {},
        [userId]: updatedProgress, // Store progress under the userId
      };

      localStorage.setItem('userProgress', JSON.stringify(updatedUserProgress));
      return updatedProgress;
    });
  };

  const logout = () => {
    setUserId(null); // Reset the userId state when logging out
    setUserProgress({}); // Clear user-specific progress from the state
    localStorage.removeItem('userId'); // Remove the userId from localStorage, but keep progress
  };

  const login = (newUserId) => {
    setUserId(newUserId);
    localStorage.setItem('userId', newUserId);
  };

  return (
    <ProgressContext.Provider value={{ userProgress, updateProgress, logout, login }}>
      {children}
    </ProgressContext.Provider>
  );
};

export default ProgressProvider;




// storing userprogress in google sheet









