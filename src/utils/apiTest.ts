export const testApiConnection = async () => {
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "https://localhost:7061";
  
  try {
    console.log('Testing API connection to:', API_BASE_URL);
    
    const response = await fetch(`${API_BASE_URL}/health`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    console.log('API health check response:', response.status, response.statusText);
    return response.ok;
  } catch (error) {
    console.error('API connection test failed:', error);
    return false;
  }
}; 