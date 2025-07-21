export async function fetcher<T>(
    url: string,
    extraConfig?: RequestInit,
    raw = false
  ): Promise<T | undefined> {
    const config: RequestInit = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept-Language': 'en',
      },
      ...extraConfig,
    };
  
    try {
      // Add timeout to prevent hanging requests
      const controller = new AbortController();
      const timeoutId = setTimeout(() => {
        controller.abort();
      }, 5000); // 5 second timeout
      
      const res = await fetch(url, {
        ...config,
        signal: controller.signal,
      });
      
      clearTimeout(timeoutId);
      
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status} ${res.statusText}`);
      }
      const data = await res.json();
      return raw ? data : data.data;
    } catch (error) {
      // Handle different types of errors more robustly
      let errorMessage = 'Unknown error occurred';
      let errorType = 'unknown';
      let isNetworkError = false;
      
      if (error instanceof Error) {
        errorMessage = error.message;
        errorType = error.constructor.name;
        isNetworkError = error instanceof TypeError || 
                        error.message.includes('fetch') || 
                        error.message.includes('network') ||
                        error.message.includes('Failed to fetch') ||
                        error.message.includes('aborted');
      } else if (error && typeof error === 'object') {
        // Handle object errors
        const errorObj = error as any;
        errorMessage = errorObj.message || errorObj.error || JSON.stringify(error);
        errorType = 'Object';
        isNetworkError = errorMessage.includes('fetch') || 
                        errorMessage.includes('network') ||
                        errorMessage.includes('Failed to fetch');
      } else {
        // Handle primitive errors
        errorMessage = String(error);
        errorType = typeof error;
      }
      
      const errorDetails = {
        url,
        message: errorMessage,
        type: errorType,
        isNetworkError,
        timestamp: new Date().toISOString(),
        rawError: error,
        errorKeys: error && typeof error === 'object' ? Object.keys(error) : [],
      };
      
      
      // Don't throw error in development if it's a network error
      if (process.env.NODE_ENV === 'development' && isNetworkError) {
        console.warn('Network error detected - this is likely because the backend server is not running');
        return undefined;
      }
      
      throw new Error(`Failed to fetch data from ${url}: ${errorMessage}`);
    }
  }