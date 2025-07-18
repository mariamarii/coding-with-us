if (process.env.NODE_ENV === "development") {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
}


const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "https://localhost:7061";

export const api = {
  register: () => `${API_BASE_URL}/Api/V1/users/register`,
  login: () => `${API_BASE_URL}/Api/V1/users/login`,
  me: () => `${API_BASE_URL}/Api/V1/users/me`,
  resetPassword: () => `${API_BASE_URL}/Api/V1/users/reset-password`,
  resetPasswordConfirm: () => `${API_BASE_URL}/Api/V1/users/reset-password-confirm`,
  changePassword: () => `${API_BASE_URL}/Api/V1/users/change-password`,
  changeEmail: () => `${API_BASE_URL}/Api/V1/users/change-email`,
  forgotPassword: () => `${API_BASE_URL}/Api/V1/users/forgot-password`,
  confirmEmail: () => `${API_BASE_URL}/Api/V1/users/confirm-email`, 
  courses: () => `${API_BASE_URL}/Api/V1/courses`,
  categories: () => `${API_BASE_URL}/Api/V1/categories`,
};

// More explicit control over mock data usage
// If NEXT_PUBLIC_USE_MOCK_DATA is explicitly set, use that value
// Otherwise, default to false (use real API)
const USE_MOCK_DATA = process.env.NEXT_PUBLIC_USE_MOCK_DATA === "true";

// Export the flag to check if we should use mock data
export { USE_MOCK_DATA };
