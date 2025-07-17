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
      const res = await fetch(url, config);
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status} ${res.statusText}`);
      }
      const data = await res.json();
      return raw ? data : data.data;
    } catch (error) {
      console.error('Fetcher error:', {
        url,
        message: error instanceof Error ? error.message : String(error),
      });
      throw new Error(`Failed to fetch data from ${url}: ${error instanceof Error ? error.message : String(error)}`);
    }
  }