// API Configuration
const getApiUrl = () => {
  // Manual toggle - change this to switch between local and deployed
  const USE_LOCAL = true; // Set to true to use local JSON Server
  
  if (USE_LOCAL) {
    return 'http://localhost:3001'; // Local JSON Server
  }
  
  return 'https://movielisting-fackapi-jsonserver.onrender.com'; // Deployed backend
};

export const API_BASE_URL = getApiUrl(); 

// https://movielisting-fackapi-jsonserver.onrender.com