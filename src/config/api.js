// API Configuration
const getApiUrl = () => {
  const BackendApi = false; // Set to true to use  JSON Server- Fack API

  if (BackendApi) {
    return 'https://movielisting-fackapi-jsonserver.onrender.com'; // Deployed backend - JSON Server - FakeAPI
  }
  
  return 'https://backendapi-renderdeployment.onrender.com'; // Deployed backend - Spring Boot API
};

export const API_BASE_URL = getApiUrl(); 

