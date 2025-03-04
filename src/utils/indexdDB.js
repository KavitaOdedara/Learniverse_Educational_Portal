// src/utils/indexedDB.js

export const openDB = () => {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open('userProgressDB', 1);
  
      request.onerror = (e) => reject('Database failed to open');
      request.onsuccess = (e) => resolve(e.target.result);
  
      request.onupgradeneeded = (e) => {
        const db = e.target.result;
        // Create an object store if it doesn't exist
        if (!db.objectStoreNames.contains('progress')) {
          db.createObjectStore('progress', { keyPath: 'userId' });
        }
      };
    });
  };
  
  export const getProgress = (db, userId) => {
    return new Promise((resolve, reject) => {
      const transaction = db.transaction('progress', 'readonly');
      const store = transaction.objectStore('progress');
      const request = store.get(userId);
  
      request.onerror = (e) => reject('Error fetching progress');
      request.onsuccess = (e) => resolve(e.target.result);
    });
  };
  
  export const saveProgress = (db, userId, progress) => {
    return new Promise((resolve, reject) => {
      const transaction = db.transaction('progress', 'readwrite');
      const store = transaction.objectStore('progress');
      const request = store.put({ userId, progress });
  
      request.onerror = (e) => reject('Error saving progress');
      request.onsuccess = (e) => resolve();
    });
  };
  



