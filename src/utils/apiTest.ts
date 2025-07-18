// Simple API test utility to debug endpoint issues
export async function testCategoriesEndpoint() {
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "https://localhost:7061";
  const categoriesUrl = `${API_BASE_URL}/Api/V1/categories`;
  
  console.log('🔍 Testing Categories Endpoint...');
  console.log('URL:', categoriesUrl);
  
  try {
    // Test 1: Simple fetch
    console.log('\n📡 Test 1: Simple fetch');
    const response = await fetch(categoriesUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    });
    
    console.log('Status:', response.status);
    console.log('Status Text:', response.statusText);
    console.log('Headers:', Object.fromEntries(response.headers.entries()));
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    
    const text = await response.text();
    console.log('Response Text:', text);
    
    try {
      const json = JSON.parse(text);
      console.log('Parsed JSON:', json);
    } catch (parseError) {
      console.log('Failed to parse JSON:', parseError);
    }
    
  } catch (error) {
    console.error('❌ Test failed:', error);
  }
  
  try {
    // Test 2: With our fetcher
    console.log('\n📡 Test 2: With our fetcher');
    const { fetcher } = await import('../lib/fetcher-client');
    const result = await fetcher(categoriesUrl, {}, true);
    console.log('Fetcher result:', result);
  } catch (error) {
    console.error('❌ Fetcher test failed:', error);
  }
}

// Test courses endpoint for comparison
export async function testCoursesEndpoint() {
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "https://localhost:7061";
  const coursesUrl = `${API_BASE_URL}/Api/V1/courses`;
  
  console.log('🔍 Testing Courses Endpoint...');
  console.log('URL:', coursesUrl);
  
  try {
    const response = await fetch(coursesUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    });
    
    console.log('Status:', response.status);
    console.log('Status Text:', response.statusText);
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    
    const text = await response.text();
    console.log('Response Text:', text);
    
    try {
      const json = JSON.parse(text);
      console.log('Parsed JSON:', json);
    } catch (parseError) {
      console.log('Failed to parse JSON:', parseError);
    }
    
  } catch (error) {
    console.error('❌ Courses test failed:', error);
  }
} 