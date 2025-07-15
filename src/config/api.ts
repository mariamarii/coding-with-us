if (process.env.NODE_ENV === "development") {
    console.warn("Disabling TLS certificate verification in development mode.");
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
  }
  
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "https://localhost:7061";
  
  export const api = {
    courses: () => `${API_BASE_URL}/Api/V1/courses`,
    categories: () => `${API_BASE_URL}/Api/V1/categories`,
  };