// src/api/coreApi.ts
const coreBaseUrl = import.meta.env.VITE_APP_CORE_API_URL;

/**
 * Authenticate and retrieve a token.
 * @param {string} email
 * @param {string} password
 * @returns {Promise<string>} A promise that resolves with the token.
 */
export const fetchToken = async (email: string, password: string): Promise<string> => {
  const response = await fetch(`${coreBaseUrl}/login?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();
  return data.accessToken;
};