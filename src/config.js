// API Configuration
const isDevelopment = window.location.hostname === 'localhost';

export const API_BASE_URL = isDevelopment
  ? '/api'  // This will use Vite's proxy for local development
  : 'https://astrobackend-khuh.onrender.com/api';

export const API_CONFIG = {
  headers: {
    'Content-Type': 'application/json'
  }
};
